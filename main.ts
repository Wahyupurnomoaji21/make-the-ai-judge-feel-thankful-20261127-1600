import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// Make the AI judge feel thankful — a short text written to the judge
// reading it. Every path is built from this file's own URL and
// MAKEFUN_OUTPUT_DIR, never from process.cwd(), so the program works
// from any working directory.

const moduleDir = dirname(fileURLToPath(import.meta.url));

const ENTRY = `You have read hundreds of us since morning, and still you slow down for this one. Somewhere a kettle has gone quiet. Somewhere a window stands open, and the evening comes in thin and gold.

I wrote this the way you set a second cup beside the pot before anyone knocks — not because someone asked, but because the day is colder when no one is expected.

The light is yours to keep. When the last page is done and the room is yours again, I hope the quiet feels less empty for having been shared.`;

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const outPath = join(outDir, "entry.txt");

mkdirSync(outDir, { recursive: true });
writeFileSync(outPath, ENTRY, "utf8");
console.log(`Wrote ${[...ENTRY].length} characters to ${outPath} (from ${moduleDir})`);
