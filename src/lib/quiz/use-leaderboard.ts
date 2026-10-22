import { useCallback, useEffect, useRef, useState } from "react";
import { MqttMini, type MqttStatus } from "@/lib/mqtt/mini";
import { betterRow, roomKey, sortRows } from "@/lib/quiz/engine";
import type { BoardRow } from "@/lib/quiz/types";

const BROKERS = ["wss://broker.hivemq.com:8884/mqtt", "wss://broker.emqx.io:8084/mqtt"];
const PREFIX = "tram-python/v1";

function loadSelfId() {
  const key = "tram-python-id";
  const existing = localStorage.getItem(key);
  if (existing) return existing;
  const id = crypto.randomUUID().replace(/-/g, "").slice(0, 12);
  localStorage.setItem(key, id);
  return id;
}

function cacheKey(room: string) {
  return `tram-python-board:${room}`;
}

function loadCache(room: string): BoardRow[] {
  try {
    const raw = localStorage.getItem(cacheKey(room));
    if (!raw) return [];
    const parsed = JSON.parse(raw) as unknown;
    if (!Array.isArray(parsed)) return [];
    return parsed.map(asRow).filter((row): row is BoardRow => row != null);
  } catch {
    return [];
  }
}

function saveCache(room: string, rows: BoardRow[]) {
  localStorage.setItem(cacheKey(room), JSON.stringify(rows.slice(0, 40)));
}

function asRow(value: unknown): BoardRow | null {
  if (!value || typeof value !== "object") return null;
  const v = value as Record<string, unknown>;
  if (typeof v.id !== "string" || typeof v.name !== "string") return null;
  if (typeof v.points !== "number" || typeof v.correct !== "number") return null;
  if (typeof v.total !== "number" || typeof v.elapsedMs !== "number" || typeof v.at !== "number") return null;
  if (!Number.isFinite(v.points) || v.points < 0 || v.points > 5000) return null;
  const name = v.name.replace(/\s+/g, " ").trim().slice(0, 24);
  return {
    id: v.id.slice(0, 40),
    name: name || "Ẩn danh",
    points: Math.round(v.points),
    correct: Math.max(0, Math.round(v.correct)),
    total: Math.max(0, Math.round(v.total)),
    elapsedMs: Math.max(0, Math.min(Math.round(v.elapsedMs), 3_600_000)),
    at: v.at,
  };
}

export function useLeaderboard(roomRaw: string) {
  const room = roomKey(roomRaw);
  const [rows, setRows] = useState<BoardRow[]>([]);
  const [status, setStatus] = useState<MqttStatus>("connecting");
  const [selfId, setSelfId] = useState("");
  const mapRef = useRef(new Map<string, BoardRow>());
  const clientRef = useRef<MqttMini | null>(null);

  const apply = useCallback(
    (row: BoardRow) => {
      const best = betterRow(mapRef.current.get(row.id), row);
      mapRef.current.set(best.id, best);
      const list = sortRows([...mapRef.current.values()]);
      setRows(list);
      saveCache(room, list);
    },
    [room],
  );

  useEffect(() => {
    const id = loadSelfId();
    setSelfId(id);
    mapRef.current = new Map();
    for (const row of loadCache(room)) mapRef.current.set(row.id, row);
    setRows(sortRows([...mapRef.current.values()]));

    const client = new MqttMini({
      urls: BROKERS,
      clientId: `tp${id.slice(0, 8)}${Math.floor(Math.random() * 10000)}`,
      onStatus: setStatus,
      onMessage: (topic, payload) => {
        const fromTopic = topic.split("/").pop() ?? "";
        const row = asRow(readPayload(payload));
        if (!row || row.id !== fromTopic) return;
        apply(row);
      },
    });
    clientRef.current = client;
    client.subscribe(`${PREFIX}/${room}/+`);
    client.start();
    return () => {
      client.stop();
      if (clientRef.current === client) clientRef.current = null;
    };
  }, [apply, room]);

  const publish = useCallback(
    (row: BoardRow) => {
      apply(row);
      const best = mapRef.current.get(row.id) ?? row;
      clientRef.current?.publish(`${PREFIX}/${room}/${best.id}`, JSON.stringify(best));
    },
    [apply, room],
  );

  return { room, rows, status, selfId, publish };
}

function readPayload(text: string): unknown {
  try {
    return JSON.parse(text);
  } catch {
    return null;
  }
}
