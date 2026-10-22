export type Choice = {
  text: string;
  correct?: boolean;
  bug?: string;
  fix?: string;
};

export type Mcq = {
  id: string;
  kind: "mcq";
  prompt: string;
  code?: string;
  choices: Choice[];
  hint: string;
  why: string;
};

export type ShortQ = {
  id: string;
  kind: "short";
  prompt: string;
  code?: string;
  accept: string[];
  show: string;
  hint: string;
  why: string;
  bug: string;
  fix: string;
  placeholder?: string;
};

export type Question = Mcq | ShortQ;

export type Grade = {
  question: Question;
  ok: boolean;
  timedOut: boolean;
  points: number;
  timeLeft: number;
  picked?: string;
  typed?: string;
  bug: string;
  fix: string;
};

export type BoardRow = {
  id: string;
  name: string;
  points: number;
  correct: number;
  total: number;
  elapsedMs: number;
  at: number;
};
