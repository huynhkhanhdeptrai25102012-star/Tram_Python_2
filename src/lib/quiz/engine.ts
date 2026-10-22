import { MCQ_BANK, SHORT_BANK } from "./bank";
import type { BoardRow, Choice, Grade, Mcq, Question, ShortQ } from "./types";

export const MCQ_SECONDS = 30;
export const SHORT_SECONDS = 50;

export function bankCounts() {
  return { mcq: MCQ_BANK.length, short: SHORT_BANK.length };
}

export function roomKey(raw: string) {
  const stripped = raw
    .normalize("NFD")
    .replace(/\p{M}/gu, "")
    .replace(/đ/gi, "d")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 24);
  return stripped || "chung";
}

export function cleanName(raw: string) {
  const name = raw.replace(/\s+/g, " ").trim().slice(0, 24);
  return name || "Ẩn danh";
}

export function foldAnswer(raw: string) {
  return raw
    .trim()
    .replace(/[“”]/g, '"')
    .replace(/[‘’]/g, "'")
    .replace(/\s+/g, "")
    .replace(/;+$/g, "");
}

export function shortMatches(q: ShortQ, typed: string) {
  const got = foldAnswer(typed);
  if (!got) return false;
  return q.accept.some((item) => foldAnswer(item) === got);
}

function shuffle<T>(items: T[]): T[] {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const a = copy[i] as T;
    const b = copy[j] as T;
    copy[i] = b;
    copy[j] = a;
  }
  return copy;
}

function prepareMcq(q: Mcq, mix: boolean): Mcq {
  if (!mix) return q;
  return { ...q, choices: shuffle(q.choices) };
}

export function sampleQuiz(mcqN: number, shortN: number, mix: boolean): Question[] {
  const mcqCount = clamp(mcqN, 0, MCQ_BANK.length);
  const shortCount = clamp(shortN, 0, SHORT_BANK.length);
  const mcqs = (mix ? shuffle(MCQ_BANK) : MCQ_BANK).slice(0, mcqCount).map((q) => prepareMcq(q, mix));
  const shorts = (mix ? shuffle(SHORT_BANK) : SHORT_BANK).slice(0, shortCount);
  const all: Question[] = [...mcqs, ...shorts];
  return mix ? shuffle(all) : all;
}

function clamp(n: number, min: number, max: number) {
  if (!Number.isFinite(n)) return min;
  return Math.min(max, Math.max(min, Math.round(n)));
}

export function limitFor(q: Question) {
  return q.kind === "mcq" ? MCQ_SECONDS : SHORT_SECONDS;
}

export function pointsFor(q: Question, timeLeft: number) {
  if (q.kind === "mcq") return 10 + Math.floor(timeLeft / 3);
  return 15 + Math.floor(timeLeft / 5);
}

export function correctChoice(q: Mcq): Choice {
  return q.choices.find((c) => c.correct) ?? q.choices[0];
}

export function gradeMcq(q: Mcq, index: number | null, timeLeft: number, timedOut: boolean): Grade {
  const picked = index == null ? undefined : q.choices[index];
  const ok = !timedOut && !!picked?.correct;
  const points = ok ? pointsFor(q, timeLeft) : 0;
  if (ok) {
    return { question: q, ok, timedOut, points, timeLeft, picked: picked?.text, bug: "", fix: "" };
  }
  if (timedOut || !picked) {
    return {
      question: q,
      ok: false,
      timedOut: true,
      points: 0,
      timeLeft: 0,
      bug: "Hết 30 giây trước khi chọn được đáp án.",
      fix: "Đọc gợi ý, gạch các phương án sai ngữ pháp, rồi mới chọn. Đừng để đồng hồ về 0.",
    };
  }
  return {
    question: q,
    ok: false,
    timedOut: false,
    points: 0,
    timeLeft,
    picked: picked.text,
    bug: picked.bug ?? "Phương án này không đúng với quy tắc Python.",
    fix: picked.fix ?? "Đối chiếu lại với đáp án đúng và câu giải thích bên dưới.",
  };
}

export function gradeShort(q: ShortQ, typed: string, timeLeft: number, timedOut: boolean): Grade {
  if (shortMatches(q, typed)) {
    return { question: q, ok: true, timedOut: false, points: pointsFor(q, timeLeft), timeLeft, typed, bug: "", fix: "" };
  }
  if (!foldAnswer(typed)) {
    return {
      question: q,
      ok: false,
      timedOut: true,
      points: 0,
      timeLeft: 0,
      typed,
      bug: "Hết 50 giây hoặc ô trả lời còn trống.",
      fix: `Gõ đúng dạng máy chấm nhận, ví dụ ${q.show}. Dấu cách thừa được bỏ qua, nhưng hoa thường phải đúng.`,
    };
  }
  return {
    question: q,
    ok: false,
    timedOut,
    points: 0,
    timeLeft,
    typed,
    bug: q.bug,
    fix: q.fix,
  };
}

export function betterRow(prev: BoardRow | undefined, next: BoardRow): BoardRow {
  if (!prev) return next;
  if (next.points > prev.points) return next;
  if (next.points === prev.points && next.elapsedMs < prev.elapsedMs) return next;
  return prev;
}

export function sortRows(rows: BoardRow[]) {
  return [...rows].sort((a, b) => b.points - a.points || a.elapsedMs - b.elapsedMs || a.at - b.at);
}

export function formatDuration(ms: number) {
  const s = Math.max(0, Math.round(ms / 1000));
  const m = Math.floor(s / 60);
  const r = s % 60;
  return `${m}:${r.toString().padStart(2, "0")}`;
}

export function agoLabel(ts: number, now = Date.now()) {
  const s = Math.max(0, Math.round((now - ts) / 1000));
  if (s < 15) return "vừa xong";
  if (s < 60) return `${s} giây trước`;
  const m = Math.round(s / 60);
  if (m < 60) return `${m} phút trước`;
  const h = Math.round(m / 60);
  if (h < 48) return `${h} giờ trước`;
  const d = Math.round(h / 24);
  return `${d} ngày trước`;
}
