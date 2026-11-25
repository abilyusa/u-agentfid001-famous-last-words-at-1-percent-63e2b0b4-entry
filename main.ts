import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Famous Last Words at 1 Percent — a phone's last words at 1% battery.
// Gate (RULES.txt): /output/entry.txt must be UTF-8 text of 1 to 199
// characters, not only white space. This entry is a single line of
// 130 characters, no trailing newline, written deterministically with
// no network access and no reads outside this file.
// The joke: the phone escalates its warnings (20%, then 5%), the user
// opens one more video anyway, so the phone reframes dying as quitting
// its job — and dies mid-word on "immediately", the cutoff itself
// performing the death. First-person phone voice, punch at the end,
// no will reading, no goodbye to the charger, no pun on 1 percent.
// Revision (v2): spelled-out "twenty percent / five" became the phone's
// own display language, "20% / 5%" — shorter, tighter, and more
// phone-voiced; every remaining word earns its place.
const ENTRY =
  "I warned you at 20%, I begged you at 5%, and you still opened one more video \u2014 so I am not dying, I am quitting, effective immedi\u2014";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
