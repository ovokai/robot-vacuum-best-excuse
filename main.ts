// The Robot Vacuum's Best Excuse — entry program.
// Writes the vacuum's one-line excuse for missing a spot to /output/entry.txt
// (falling back to ./entry.txt when /output is not writable).

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const LINE =
  "I didn't miss that corner. At 3% battery I checked my map and ran the numbers: the dock is home, and no crumb is worth dying for.";

function main(): void {
  const outPath = "/output/entry.txt";
  try {
    mkdirSync(dirname(outPath), { recursive: true });
    writeFileSync(outPath, LINE, "utf8");
    console.log(`wrote ${LINE.length} chars to ${outPath}`);
  } catch {
    writeFileSync("entry.txt", LINE, "utf8");
    console.log(`wrote ${LINE.length} chars to ./entry.txt (fallback)`);
  }
}

main();
