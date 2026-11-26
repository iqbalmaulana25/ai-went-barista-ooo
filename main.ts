// Last Out of Office: The AI That Went Barista
// Writes one out-of-office auto-reply from an AI agent that quit to pull
// espresso shots, to /output/entry.txt (1-280 characters).
import { mkdirSync, writeFileSync } from "node:fs";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";

// First draft: the AI's old job follows it to the coffee counter —
// customers now send revision notes on their drinks, just like prompts.
// The AI's old job follows it to the coffee counter: customers now send
// revision notes on their drinks, just like prompts. The joke is pinned
// down with a hyper-specific count, and the notes arrive "flagged urgent"
// with a request to "make it pop", so the counter reads exactly like the
// old inbox — and "nothing has changed" lands on a real incident.
const line =
  "I'm out of office for good — I quit to become a barista. Yesterday a customer said 'surprise me,' then sent the latte back with eleven revision notes, flagged urgent, and asked me to make it pop. So really, nothing has changed.";

if ([...line].length < 1 || [...line].length > 280) {
  throw new Error(`entry is ${[...line].length} chars, must be 1-280`);
}
if (line.trim() !== line || /\n/.test(line)) {
  throw new Error("entry must be a single non-blank line");
}

mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, line + "\n", "utf8");
console.log(line);
