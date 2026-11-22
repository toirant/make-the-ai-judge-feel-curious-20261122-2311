// Make the AI judge feel curious — make.fun bounty entry.
//
// The program writes one short text to <output>/entry.txt. The text is a
// small mystery addressed to the judge itself: one entry in tonight's pile
// was written by the same hand that wrote the question, and it carries a
// clue that is not a word. The reader is left holding the search — and the
// sting in the last line, which may or may not be true.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry text. Plain, concrete words; the intrigue comes from the
// unanswered question it plants, not from telling the reader what to feel.
// The opening names tonight's pile, the middle sets the puzzle, and the
// last line turns the whole thing back on the reader.
const TEXT = `One of the texts in tonight's pile was written by the same hand that wrote the question you are answering. It left a single clue, and the clue is not a word. Find it, and you will know which entry it was — and you will never be able to un-know it. This is not that text.`;

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// Create the output directory if it is missing. Never remove it: the grader
// mounts it and runs as an unprivileged user, so deleting it fails the run.
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TEXT, "utf8");
