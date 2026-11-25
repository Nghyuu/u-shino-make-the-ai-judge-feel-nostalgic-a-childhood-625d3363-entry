import { chmodSync, mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const SENTENCE =
  "Every August my grandmother stood at the stove in her faded apron, steam from the rice pot fogging the kitchen window, while I waited barefoot on the cold tiles for the first spoonful she always pretended was an accident.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outputDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}

mkdirSync(outputDir, { recursive: true });
const entryPath = join(outputDir, "entry.txt");
writeFileSync(entryPath, SENTENCE + "\n", "utf8");
chmodSync(entryPath, 0o644);
