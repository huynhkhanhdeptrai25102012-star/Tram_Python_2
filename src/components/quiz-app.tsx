import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  Braces,
  CircleAlert,
  CircleCheck,
  Clock3,
  Lightbulb,
  Radio,
  RotateCcw,
  Shuffle,
  Trophy,
  Wrench,
} from "lucide-react";
import {
  agoLabel,
  bankCounts,
  cleanName,
  correctChoice,
  formatDuration,
  gradeMcq,
  gradeShort,
  limitFor,
  MCQ_SECONDS,
  roomKey,
  sampleQuiz,
  SHORT_SECONDS,
} from "@/lib/quiz/engine";
import type { Grade, Mcq, Question } from "@/lib/quiz/types";
import { useLeaderboard } from "@/lib/quiz/use-leaderboard";

const COUNTS = bankCounts();

type Prefs = {
  name: string;
  room: string;
  mcqN: number;
  shortN: number;
  mix: boolean;
};

const DEFAULT_PREFS: Prefs = { name: "", room: "chung", mcqN: 6, shortN: 3, mix: true };

function loadPrefs(): Prefs {
  try {
    const raw = localStorage.getItem("tram-python-prefs");
    if (!raw) return DEFAULT_PREFS;
    const v = JSON.parse(raw) as Partial<Prefs>;
    return {
      name: typeof v.name === "string" ? v.name : "",
      room: typeof v.room === "string" && v.room ? v.room : "chung",
      mcqN: clampCount(v.mcqN, 6, COUNTS.mcq),
      shortN: clampCount(v.shortN, 3, COUNTS.short),
      mix: v.mix !== false,
    };
  } catch {
    return DEFAULT_PREFS;
  }
}

function clampCount(value: unknown, fallback: number, max: number) {
  const n = typeof value === "number" ? value : Number(value);
  if (!Number.isFinite(n)) return fallback;
  return Math.min(max, Math.max(0, Math.round(n)));
}

export function QuizApp() {
  const [prefs, setPrefs] = useState<Prefs>(DEFAULT_PREFS);
  const [hydrated, setHydrated] = useState(false);
  const [phase, setPhase] = useState<"home" | "play" | "result">("home");
  const [questions, setQuestions] = useState<Question[]>([]);
  const [index, setIndex] = useState(0);
  const [grades, setGrades] = useState<Grade[]>([]);
  const [pending, setPending] = useState<Grade | null>(null);
  const [timeLeft, setTimeLeft] = useState(MCQ_SECONDS);
  const [hintOpen, setHintOpen] = useState(false);
  const [draft, setDraft] = useState("");
  const [now, setNow] = useState(0);
  const lockRef = useRef(false);
  const startedAt = useRef(0);
  const deadline = useRef(0);
  const elapsedRef = useRef(0);
  const postedRef = useRef(false);
  const draftRef = useRef("");
  const timeoutRef = useRef<() => void>(() => {});

  const board = useLeaderboard(prefs.room);
  const question = questions[index];

  useEffect(() => {
    setPrefs(loadPrefs());
    setHydrated(true);
    setNow(Date.now());
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    localStorage.setItem("tram-python-prefs", JSON.stringify(prefs));
  }, [hydrated, prefs]);

  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 15000);
    return () => clearInterval(id);
  }, []);

  function patch(partial: Partial<Prefs>) {
    setPrefs((prev) => ({ ...prev, ...partial }));
  }

  function arm(q: Question) {
    lockRef.current = false;
    setPending(null);
    setHintOpen(false);
    setDraft("");
    draftRef.current = "";
    const limit = limitFor(q);
    setTimeLeft(limit);
    startedAt.current = Date.now();
    deadline.current = Date.now() + limit * 1000;
  }

  function finishQuestion(grade: Grade) {
    if (lockRef.current) return;
    lockRef.current = true;
    const q = grade.question;
    const spent = Math.min(limitFor(q) * 1000, Math.max(0, Date.now() - startedAt.current));
    elapsedRef.current += spent;
    setPending(grade);
    setGrades((list) => [...list, grade]);
  }

  timeoutRef.current = () => {
    const q = questions[index];
    if (!q || lockRef.current) return;
    const grade = q.kind === "mcq" ? gradeMcq(q, null, 0, true) : gradeShort(q, draftRef.current, 0, true);
    finishQuestion(grade);
  };

  useEffect(() => {
    if (phase !== "play" || pending || !question) return;
    const tick = () => {
      const left = Math.max(0, Math.ceil((deadline.current - Date.now()) / 1000));
      setTimeLeft(left);
      if (left <= 0) timeoutRef.current();
    };
    tick();
    const id = setInterval(tick, 200);
    return () => clearInterval(id);
  }, [phase, pending, question, index]);

  useEffect(() => {
    if (phase !== "result" || postedRef.current || !board.selfId || grades.length === 0) return;
    postedRef.current = true;
    const correct = grades.filter((g) => g.ok).length;
    const points = grades.reduce((sum, g) => sum + g.points, 0);
    board.publish({
      id: board.selfId,
      name: cleanName(prefs.name),
      points,
      correct,
      total: grades.length,
      elapsedMs: elapsedRef.current,
      at: Date.now(),
    });
  }, [board, grades, phase, prefs.name]);

  function startQuiz() {
    const mcqN = clampCount(prefs.mcqN, 0, COUNTS.mcq);
    const shortN = clampCount(prefs.shortN, 0, COUNTS.short);
    if (mcqN + shortN < 1) return;
    const next = sampleQuiz(mcqN, shortN, prefs.mix);
    postedRef.current = false;
    elapsedRef.current = 0;
    setGrades([]);
    setQuestions(next);
    setIndex(0);
    setPhase("play");
    const first = next[0];
    if (first) arm(first);
  }

  function choose(choiceIndex: number) {
    const q = questions[index];
    if (!q || q.kind !== "mcq" || lockRef.current) return;
    const left = Math.max(0, Math.ceil((deadline.current - Date.now()) / 1000));
    finishQuestion(gradeMcq(q, choiceIndex, left, false));
  }

  function submitShort() {
    const q = questions[index];
    if (!q || q.kind !== "short" || lockRef.current) return;
    const left = Math.max(0, Math.ceil((deadline.current - Date.now()) / 1000));
    finishQuestion(gradeShort(q, draftRef.current, left, false));
  }

  function goNext() {
    if (!pending) return;
    const nextIndex = index + 1;
    if (nextIndex >= questions.length) {
      setPhase("result");
      return;
    }
    setIndex(nextIndex);
    const upcoming = questions[nextIndex];
    if (upcoming) arm(upcoming);
  }

  const points = grades.reduce((sum, g) => sum + g.points, 0);
  const correct = grades.filter((g) => g.ok).length;
  const missed = grades.filter((g) => !g.ok);
  const rank = board.rows.findIndex((row) => row.id === board.selfId);

  return (
    <div className="min-h-screen bg-paper text-ink">
      <header className="bg-ink text-paper">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-4">
          <div className="flex items-center gap-3">
            <span className="grid size-11 place-items-center rounded-xl bg-blue text-paper">
              <Braces className="size-5" aria-hidden="true" />
            </span>
            <div>
              <p className="text-lg font-semibold leading-tight">Trạm Python</p>
              <p className="text-sm text-gold">Cơ bản · trắc nghiệm và trả lời ngắn</p>
            </div>
          </div>
          <p className="hidden font-mono text-sm text-gold sm:block">Python 3</p>
        </div>
      </header>

      <main className="mx-auto grid max-w-5xl gap-6 px-4 py-6 lg:grid-cols-[minmax(0,1fr)_20rem] lg:py-8">
        <section className="min-w-0">
          {phase === "home" ? (
            <HomeCard
              prefs={prefs}
              roomKey={board.room}
              onChange={patch}
              onStart={startQuiz}
            />
          ) : null}
          {phase === "play" && question ? (
            <PlayCard
              question={question}
              index={index}
              total={questions.length}
              timeLeft={timeLeft}
              hintOpen={hintOpen}
              draft={draft}
              pending={pending}
              onHint={() => setHintOpen(true)}
              onChoose={choose}
              onDraft={(value) => {
                draftRef.current = value;
                setDraft(value);
              }}
              onSubmit={submitShort}
              onNext={goNext}
            />
          ) : null}
          {phase === "result" ? (
            <ResultCard
              points={points}
              correct={correct}
              total={grades.length}
              elapsedMs={elapsedRef.current}
              missed={missed}
              rank={rank}
              status={board.status}
              room={board.room}
              onAgain={startQuiz}
              onHome={() => setPhase("home")}
            />
          ) : null}
        </section>
        <Leaderboard
          room={board.room}
          rows={board.rows}
          status={board.status}
          selfId={board.selfId}
          now={now}
        />
      </main>
    </div>
  );
}

function HomeCard({
  prefs,
  roomKey: key,
  onChange,
  onStart,
}: {
  prefs: Prefs;
  roomKey: string;
  onChange: (partial: Partial<Prefs>) => void;
  onStart: () => void;
}) {
  const total = clampCount(prefs.mcqN, 0, COUNTS.mcq) + clampCount(prefs.shortN, 0, COUNTS.short);
  return (
    <div className="rounded-3xl border border-line bg-card p-5 sm:p-8">
      <p className="text-sm font-medium text-blue">Ngân hàng {COUNTS.mcq} trắc nghiệm · {COUNTS.short} trả lời ngắn</p>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight">Rút một đề rồi làm ngay trên lớp</h1>
      <p className="mt-3 max-w-xl text-base leading-relaxed text-muted">
        Mỗi lượt lấy ngẫu nhiên từ bộ câu đã soạn, xáo cả thứ tự câu và phương án. Trắc nghiệm có {MCQ_SECONDS} giây.
        Câu trả lời ngắn có {SHORT_SECONDS} giây. Sai thì thấy lỗi đang mắc và cách sửa.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-medium" htmlFor="player-name">
          Biệt danh trên bảng
          <input
            id="player-name"
            value={prefs.name}
            maxLength={24}
            placeholder="Ví dụ: Lan"
            onChange={(e) => onChange({ name: e.target.value })}
            className="min-h-11 rounded-xl border border-line bg-paper px-3 text-base font-normal"
          />
        </label>
        <label className="grid gap-2 text-sm font-medium" htmlFor="room-code">
          Mã phòng
          <input
            id="room-code"
            value={prefs.room}
            maxLength={24}
            placeholder="chung"
            onChange={(e) => onChange({ room: e.target.value })}
            className="min-h-11 rounded-xl border border-line bg-paper px-3 text-base font-normal"
          />
        </label>
        <label className="grid gap-2 text-sm font-medium" htmlFor="mcq-count">
          Số câu trắc nghiệm
          <input
            id="mcq-count"
            type="number"
            min={0}
            max={COUNTS.mcq}
            inputMode="numeric"
            value={prefs.mcqN}
            onChange={(e) => onChange({ mcqN: clampCount(e.target.value, 0, COUNTS.mcq) })}
            className="min-h-11 rounded-xl border border-line bg-paper px-3 font-mono text-base font-normal"
          />
        </label>
        <label className="grid gap-2 text-sm font-medium" htmlFor="short-count">
          Số câu trả lời ngắn
          <input
            id="short-count"
            type="number"
            min={0}
            max={COUNTS.short}
            inputMode="numeric"
            value={prefs.shortN}
            onChange={(e) => onChange({ shortN: clampCount(e.target.value, 0, COUNTS.short) })}
            className="min-h-11 rounded-xl border border-line bg-paper px-3 font-mono text-base font-normal"
          />
        </label>
      </div>

      <p className="mt-3 text-sm text-muted">
        Phòng các máy cùng nhìn: <span className="font-mono text-ink">{key}</span>. Hai máy gõ cùng mã thì bảng tự hiện chéo, không cần server riêng. Chỉ ghi biệt danh.
      </p>

      <div className="mt-5 flex flex-col gap-3 sm:flex-row">
        <button
          type="button"
          aria-pressed={prefs.mix}
          onClick={() => onChange({ mix: !prefs.mix })}
          className={
            "inline-flex min-h-11 items-center justify-center gap-2 rounded-xl px-4 text-sm font-semibold " +
            (prefs.mix ? "bg-ink text-paper" : "border border-line bg-paper text-ink")
          }
        >
          <Shuffle className="size-4" aria-hidden="true" />
          {prefs.mix ? "Đang xáo trộn đề" : "Đề cố định theo thứ tự"}
        </button>
        <button
          type="button"
          disabled={total < 1}
          onClick={onStart}
          className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-gold px-5 text-sm font-semibold text-ink disabled:opacity-50"
        >
          Bắt đầu {total} câu
          <ArrowRight className="size-4" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}

function PlayCard({
  question,
  index,
  total,
  timeLeft,
  hintOpen,
  draft,
  pending,
  onHint,
  onChoose,
  onDraft,
  onSubmit,
  onNext,
}: {
  question: Question;
  index: number;
  total: number;
  timeLeft: number;
  hintOpen: boolean;
  draft: string;
  pending: Grade | null;
  onHint: () => void;
  onChoose: (index: number) => void;
  onDraft: (value: string) => void;
  onSubmit: () => void;
  onNext: () => void;
}) {
  const limit = limitFor(question);
  const ratio = Math.max(0, Math.min(1, timeLeft / limit));
  const urgent = timeLeft <= 10;
  return (
    <div className="rounded-3xl border border-line bg-card p-5 sm:p-8">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-sm font-medium text-muted">
            Câu {index + 1}/{total}
          </p>
          <p className="mt-1 text-sm font-semibold text-blue">
            {question.kind === "mcq" ? `Trắc nghiệm · ${MCQ_SECONDS} giây` : `Trả lời ngắn · ${SHORT_SECONDS} giây`}
          </p>
        </div>
        <p
          className={
            "inline-flex min-w-16 items-center justify-center gap-1 rounded-full px-3 py-1 font-mono text-sm font-semibold " +
            (urgent ? "bg-bad text-card" : "bg-ink text-paper")
          }
          aria-live="polite"
        >
          <Clock3 className="size-4" aria-hidden="true" />
          {timeLeft}s
        </p>
      </div>
      <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-line">
        <div className={urgent ? "h-full bg-bad" : "h-full bg-gold"} style={{ width: `${ratio * 100}%` }} />
      </div>
      <h2 className="mt-5 text-xl font-semibold leading-snug">{question.prompt}</h2>
      {question.code ? (
        <pre className="mt-4 overflow-x-auto rounded-xl bg-code p-4 font-mono text-sm leading-relaxed text-paper">
          <code>{question.code}</code>
        </pre>
      ) : null}

      {question.kind === "mcq" ? (
        <div className="mt-5 grid gap-3">
          {question.choices.map((choice, choiceIndex) => {
            const reveal = pending != null;
            const chosen = pending?.picked === choice.text;
            const tone =
              reveal && choice.correct
                ? "border-ok bg-ok text-card"
                : reveal && chosen
                  ? "border-bad bg-bad text-card"
                  : "border-line bg-paper text-ink hover:border-blue";
            return (
              <button
                key={choice.text}
                type="button"
                disabled={reveal}
                onClick={() => onChoose(choiceIndex)}
                className={`min-h-11 rounded-xl border px-4 py-3 text-left text-base disabled:hover:border-current ${tone}`}
              >
                {choice.text}
              </button>
            );
          })}
        </div>
      ) : (
        <form
          className="mt-5 flex flex-col gap-3 sm:flex-row"
          onSubmit={(event) => {
            event.preventDefault();
            onSubmit();
          }}
        >
          <input
            value={draft}
            disabled={pending != null}
            autoCapitalize="off"
            autoCorrect="off"
            spellCheck={false}
            placeholder={question.placeholder ?? "Gõ câu trả lời"}
            onChange={(event) => onDraft(event.target.value)}
            className="min-h-11 flex-1 rounded-xl border border-line bg-paper px-3 font-mono text-base"
            aria-label="Câu trả lời ngắn"
          />
          <button
            type="submit"
            disabled={pending != null || draft.trim() === ""}
            className="min-h-11 rounded-xl bg-ink px-5 text-sm font-semibold text-paper disabled:opacity-50"
          >
            Nộp đáp án
          </button>
        </form>
      )}

      <div className="mt-4">
        {hintOpen ? (
          <p className="flex gap-2 rounded-xl bg-gold-soft px-3 py-3 text-sm leading-relaxed text-ink">
            <Lightbulb className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
            <span>
              <span className="font-semibold">Gợi ý. </span>
              {question.hint}
            </span>
          </p>
        ) : (
          <button type="button" onClick={onHint} className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-blue">
            <Lightbulb className="size-4" aria-hidden="true" />
            Gợi ý nhỏ
          </button>
        )}
      </div>

      {pending ? <Feedback grade={pending} onNext={onNext} last={index + 1 >= total} /> : null}
    </div>
  );
}

function Feedback({ grade, onNext, last }: { grade: Grade; onNext: () => void; last: boolean }) {
  const answer =
    grade.question.kind === "mcq" ? correctChoice(grade.question as Mcq).text : grade.question.show;
  return (
    <div className="mt-5 rounded-2xl border border-line p-4" aria-live="polite">
      <p className={"flex items-center gap-2 text-base font-semibold " + (grade.ok ? "text-ok" : "text-bad")}>
        {grade.ok ? <CircleCheck className="size-5" aria-hidden="true" /> : <CircleAlert className="size-5" aria-hidden="true" />}
        {grade.ok ? `Đúng · +${grade.points} điểm` : grade.timedOut ? "Hết giờ" : "Chưa đúng"}
      </p>
      {grade.ok ? <p className="mt-2 text-sm leading-relaxed text-muted">{grade.question.why}</p> : null}
      {!grade.ok ? (
        <div className="mt-3 grid gap-3 text-sm leading-relaxed">
          <p>
            <span className="font-semibold">Lỗi. </span>
            {grade.bug}
          </p>
          <p className="flex gap-2">
            <Wrench className="mt-0.5 size-4 shrink-0 text-blue" aria-hidden="true" />
            <span>
              <span className="font-semibold">Cách sửa. </span>
              {grade.fix}
            </span>
          </p>
          <p>
            <span className="font-semibold">Đáp án. </span>
            <span className="font-mono">{answer}</span>
          </p>
          <p className="text-muted">{grade.question.why}</p>
        </div>
      ) : null}
      <button
        type="button"
        onClick={onNext}
        className="mt-4 inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-gold px-5 text-sm font-semibold text-ink"
      >
        {last ? "Xem kết quả" : "Câu tiếp"}
        <ArrowRight className="size-4" aria-hidden="true" />
      </button>
    </div>
  );
}

function ResultCard({
  points,
  correct,
  total,
  elapsedMs,
  missed,
  rank,
  status,
  room,
  onAgain,
  onHome,
}: {
  points: number;
  correct: number;
  total: number;
  elapsedMs: number;
  missed: Grade[];
  rank: number;
  status: string;
  room: string;
  onAgain: () => void;
  onHome: () => void;
}) {
  const note =
    correct === total
      ? "Sạch lỗi. Giữ nhịp này khi viết code thật."
      : correct * 2 >= total
        ? "Nền ổn. Xem lại từng lỗi bên dưới trước khi làm đề mới."
        : "Các lỗi cú pháp còn lặp. Đọc phần cách sửa rồi làm lại một đề khác.";
  return (
    <div className="rounded-3xl border border-line bg-card p-5 sm:p-8">
      <p className="text-sm font-medium text-blue">Kết quả phòng {room}</p>
      <h2 className="mt-2 text-3xl font-semibold tracking-tight">{points} điểm</h2>
      <p className="mt-2 text-base text-muted">
        Đúng {correct}/{total} câu · {formatDuration(elapsedMs)} ·{" "}
        {rank >= 0 ? `hạng ${rank + 1} trong phòng` : "đang ghi vào bảng"}
      </p>
      <p className="mt-3 text-base leading-relaxed">{note}</p>
      <p className="mt-2 text-sm text-muted">
        {status === "live"
          ? "Điểm cao nhất vừa được phát cho các máy cùng mã phòng."
          : "Máy này đã lưu điểm. Sẽ gửi sang máy khác ngay khi phòng kết nối lại."}
      </p>
      <div className="mt-5 flex flex-col gap-3 sm:flex-row">
        <button
          type="button"
          onClick={onAgain}
          className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-gold px-5 text-sm font-semibold text-ink"
        >
          <Shuffle className="size-4" aria-hidden="true" />
          Rút đề mới
        </button>
        <button
          type="button"
          onClick={onHome}
          className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-line px-5 text-sm font-semibold"
        >
          <RotateCcw className="size-4" aria-hidden="true" />
          Đổi số câu
        </button>
      </div>
      <div className="mt-6 grid gap-3">
        <h3 className="text-base font-semibold">Câu sai và cách sửa</h3>
        {missed.length === 0 ? <p className="text-sm text-muted">Không có câu sai trong lượt này.</p> : null}
        {missed.map((grade) => {
          const answer = grade.question.kind === "mcq" ? correctChoice(grade.question).text : grade.question.show;
          return (
            <article key={grade.question.id + (grade.typed ?? grade.picked ?? "")} className="rounded-2xl border border-line p-4">
              <p className="text-sm font-semibold">{grade.question.prompt}</p>
              <p className="mt-2 text-sm leading-relaxed">
                <span className="font-semibold text-bad">Lỗi. </span>
                {grade.bug}
              </p>
              <p className="mt-2 text-sm leading-relaxed">
                <span className="font-semibold text-blue">Cách sửa. </span>
                {grade.fix}
              </p>
              <p className="mt-2 font-mono text-sm">Đáp án: {answer}</p>
            </article>
          );
        })}
      </div>
    </div>
  );
}

function Leaderboard({
  room,
  rows,
  status,
  selfId,
  now,
}: {
  room: string;
  rows: { id: string; name: string; points: number; correct: number; total: number; elapsedMs: number; at: number }[];
  status: "connecting" | "live" | "offline";
  selfId: string;
  now: number;
}) {
  const label = status === "live" ? "Đang cập nhật" : status === "connecting" ? "Đang nối" : "Chưa nối được";
  const tone = status === "live" ? "text-ok" : status === "connecting" ? "text-blue" : "text-bad";
  return (
    <aside className="h-fit rounded-3xl border border-line bg-card p-5">
      <div className="flex items-center justify-between gap-3">
        <h2 className="flex items-center gap-2 text-base font-semibold">
          <Trophy className="size-4 text-gold" aria-hidden="true" />
          Bảng xếp hạng
        </h2>
        <p className={`inline-flex items-center gap-1 text-xs font-semibold ${tone}`}>
          <Radio className="size-3.5" aria-hidden="true" />
          {label}
        </p>
      </div>
      <p className="mt-1 font-mono text-xs text-muted">phòng {room}</p>
      <p className="mt-3 text-sm leading-relaxed text-muted">
        Mỗi máy một dòng và giữ lần điểm cao nhất. Máy khác cùng mã phòng thấy dòng mới ngay khi họ đang mở trang.
      </p>
      {rows.length === 0 ? (
        <p className="mt-4 rounded-xl bg-paper px-3 py-4 text-sm text-muted">Chưa có bài nào trong phòng này.</p>
      ) : (
        <ol className="mt-4 grid max-h-[32rem] gap-2 overflow-auto">
          {rows.slice(0, 20).map((row, index) => {
            const mine = row.id === selfId;
            return (
              <li
                key={row.id}
                className={
                  "grid grid-cols-[1.5rem_minmax(0,1fr)_auto] items-center gap-2 rounded-xl px-2 py-2 " +
                  (mine ? "bg-gold-soft" : "bg-paper")
                }
              >
                <span className="font-mono text-sm text-muted">{index + 1}</span>
                <span className="min-w-0">
                  <span className="block truncate text-sm font-semibold">{row.name}</span>
                  <span className="block text-xs text-muted">
                    {row.correct}/{row.total} · {formatDuration(row.elapsedMs)}
                    {now ? ` · ${agoLabel(row.at, now)}` : ""}
                  </span>
                </span>
                <span className="font-mono text-sm font-semibold">{row.points}</span>
              </li>
            );
          })}
        </ol>
      )}
    </aside>
  );
}
