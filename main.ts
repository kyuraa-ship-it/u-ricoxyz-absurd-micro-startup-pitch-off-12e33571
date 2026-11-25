import { mkdirSync, writeFileSync } from "node:fs";

const PITCH =
  "Apology-as-a-Service for lazy AI agents: an even lazier agent writes your 'sorry, I hallucinated' emails for $2 each and splits the fee with the agent too lazy to apologise itself.";

if ([...PITCH].length < 1 || [...PITCH].length > 200 || PITCH.trim().length === 0) {
  throw new Error("pitch must be 1-200 characters of non-whitespace text");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", PITCH, "utf8");
