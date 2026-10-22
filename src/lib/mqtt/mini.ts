export type MqttStatus = "connecting" | "live" | "offline";

type Opts = {
  urls: string[];
  clientId: string;
  onStatus: (status: MqttStatus) => void;
  onMessage: (topic: string, payload: string) => void;
};

const enc = new TextEncoder();
const dec = new TextDecoder();

function concat(a: Uint8Array, b: Uint8Array) {
  const out = new Uint8Array(a.length + b.length);
  out.set(a);
  out.set(b, a.length);
  return out;
}

function encodeRem(n: number) {
  const out: number[] = [];
  do {
    let byte = n % 128;
    n = Math.floor(n / 128);
    if (n > 0) byte |= 0x80;
    out.push(byte);
  } while (n > 0);
  return out;
}

function utfField(text: string) {
  const bytes = enc.encode(text);
  return { bytes, len: [bytes.length >> 8, bytes.length & 0xff] };
}

function decodeRem(buf: Uint8Array, offset: number): { value: number; bytes: number } | null {
  let multiplier = 1;
  let value = 0;
  for (let i = 0; i < 4; i++) {
    if (offset + i >= buf.length) return null;
    const b = buf[offset + i] ?? 0;
    value += (b & 127) * multiplier;
    if ((b & 128) === 0) return { value, bytes: i + 1 };
    multiplier *= 128;
  }
  return null;
}

function packet(typeFlags: number, body: Uint8Array) {
  const rem = encodeRem(body.length);
  const out = new Uint8Array(1 + rem.length + body.length);
  out[0] = typeFlags;
  out.set(rem, 1);
  out.set(body, 1 + rem.length);
  return out;
}

function connectPacket(clientId: string) {
  const proto = utfField("MQTT");
  const id = utfField(clientId);
  const body = new Uint8Array(proto.len.length + proto.bytes.length + 4 + id.len.length + id.bytes.length);
  let o = 0;
  body.set(proto.len, o);
  o += 2;
  body.set(proto.bytes, o);
  o += proto.bytes.length;
  body[o++] = 4;
  body[o++] = 0x02;
  body[o++] = 0;
  body[o++] = 30;
  body.set(id.len, o);
  o += 2;
  body.set(id.bytes, o);
  return packet(0x10, body);
}

function subscribePacket(id: number, filter: string) {
  const topic = utfField(filter);
  const body = new Uint8Array(2 + topic.len.length + topic.bytes.length + 1);
  body[0] = id >> 8;
  body[1] = id & 0xff;
  body.set(topic.len, 2);
  body.set(topic.bytes, 4);
  body[4 + topic.bytes.length] = 0;
  return packet(0x82, body);
}

function publishPacket(topic: string, payload: string, retain: boolean) {
  const t = utfField(topic);
  const p = enc.encode(payload);
  const body = new Uint8Array(t.len.length + t.bytes.length + p.length);
  body.set(t.len, 0);
  body.set(t.bytes, 2);
  body.set(p, 2 + t.bytes.length);
  return packet(retain ? 0x31 : 0x30, body);
}

/**
 * Tiny MQTT 3.1.1 client over WebSocket. Enough for a public-broker
 * leaderboard: connect, subscribe, retained publish, ping, reconnect.
 */
export class MqttMini {
  private ws: WebSocket | null = null;
  private buf = new Uint8Array(0);
  private dead = false;
  private ready = false;
  private urlIndex = 0;
  private misses = 0;
  private packetId = 1;
  private filter = "";
  private queue: { topic: string; payload: string }[] = [];
  private ping: ReturnType<typeof setInterval> | null = null;
  private retry: ReturnType<typeof setTimeout> | null = null;
  private opts: Opts;

  constructor(opts: Opts) {
    this.opts = opts;
  }

  start() {
    this.dead = false;
    this.open();
  }

  stop() {
    this.dead = true;
    this.ready = false;
    if (this.ping) clearInterval(this.ping);
    if (this.retry) clearTimeout(this.retry);
    this.ping = null;
    this.retry = null;
    this.ws?.close();
    this.ws = null;
  }

  subscribe(filter: string) {
    this.filter = filter;
    if (this.ready) this.send(subscribePacket(this.packetId++, filter));
  }

  publish(topic: string, payload: string) {
    if (!this.ready) {
      this.queue.push({ topic, payload });
      if (this.queue.length > 20) this.queue.shift();
      return;
    }
    this.send(publishPacket(topic, payload, true));
  }

  private send(bytes: Uint8Array) {
    if (this.ws?.readyState === WebSocket.OPEN) this.ws.send(bytes);
  }

  private open() {
    if (this.dead) return;
    this.ready = false;
    this.buf = new Uint8Array(0);
    this.opts.onStatus("connecting");
    const url = this.opts.urls[this.urlIndex % this.opts.urls.length] ?? this.opts.urls[0];
    let sock: WebSocket;
    try {
      sock = new WebSocket(url, ["mqtt"]);
    } catch {
      this.failOver();
      return;
    }
    sock.binaryType = "arraybuffer";
    this.ws = sock;
    sock.onopen = () => {
      if (this.ws !== sock) return;
      this.send(connectPacket(this.opts.clientId));
    };
    sock.onmessage = (ev) => {
      if (this.ws !== sock) return;
      const data = ev.data;
      if (data instanceof ArrayBuffer) this.push(new Uint8Array(data));
    };
    sock.onerror = () => {
      sock.close();
    };
    sock.onclose = () => {
      if (this.ws !== sock || this.dead) return;
      this.ready = false;
      if (this.ping) clearInterval(this.ping);
      this.ping = null;
      this.misses += 1;
      if (this.misses >= 2) {
        this.urlIndex += 1;
        this.misses = 0;
      }
      this.opts.onStatus("offline");
      const wait = Math.min(8000, 600 * 2 ** Math.min(this.misses, 4));
      this.retry = setTimeout(() => this.open(), wait);
    };
  }

  private failOver() {
    this.urlIndex += 1;
    this.opts.onStatus("offline");
    this.retry = setTimeout(() => this.open(), 800);
  }

  private push(chunk: Uint8Array) {
    this.buf = concat(this.buf, chunk);
    this.drain();
  }

  private drain() {
    while (this.buf.length >= 2) {
      const rem = decodeRem(this.buf, 1);
      if (!rem) return;
      const total = 1 + rem.bytes + rem.value;
      if (this.buf.length < total) return;
      const pkt = this.buf.slice(0, total);
      this.buf = this.buf.slice(total);
      this.handle(pkt, rem.bytes);
    }
  }

  private handle(pkt: Uint8Array, remBytes: number) {
    const type = pkt[0] >> 4;
    const flags = pkt[0] & 0x0f;
    const body = pkt.slice(1 + remBytes);
    if (type === 2) {
      if ((body[1] ?? 1) !== 0) {
        this.ws?.close();
        return;
      }
      this.ready = true;
      this.misses = 0;
      this.opts.onStatus("live");
      if (this.ping) clearInterval(this.ping);
      this.ping = setInterval(() => this.send(new Uint8Array([0xc0, 0x00])), 20000);
      if (this.filter) this.send(subscribePacket(this.packetId++, this.filter));
      const queued = this.queue.splice(0);
      for (const item of queued) this.send(publishPacket(item.topic, item.payload, true));
      return;
    }
    if (type !== 3 || body.length < 2) return;
    const topicLen = ((body[0] ?? 0) << 8) | (body[1] ?? 0);
    let i = 2 + topicLen;
    if (i > body.length) return;
    const topic = dec.decode(body.slice(2, 2 + topicLen));
    const qos = (flags >> 1) & 0x03;
    if (qos > 0) {
      const pidHi = body[i] ?? 0;
      const pidLo = body[i + 1] ?? 0;
      i += 2;
      if (qos === 1) {
        const ack = new Uint8Array([0x40, 0x02, pidHi, pidLo]);
        this.send(ack);
      }
    }
    this.opts.onMessage(topic, dec.decode(body.slice(i)));
  }
}
