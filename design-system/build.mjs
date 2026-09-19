// Builds the design-system package into ./dist:
//
//   1. tsc emits ESM + .d.ts for src/ and every app/ module it imports,
//      mirroring the repo tree under dist/ (rootDir is the repo root).
//   2. The repo's `@/…` path alias is rewritten to relative paths in every
//      emitted file, so dist/ resolves on its own — a consumer's bundler
//      needs no tsconfig, and type tools can follow the .d.ts tree.
//   3. PostCSS + Tailwind v4 compile styles/index.css (the site's globals.css
//      plus the font variables and the utility safelist) to dist/styles.css.
//
// Run from anywhere: `npm run build --prefix design-system`.
import { spawnSync } from "node:child_process";
import { existsSync, mkdirSync, readFileSync, readdirSync, statSync, writeFileSync } from "node:fs";
import { dirname, join, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const PKG = dirname(fileURLToPath(import.meta.url));
const REPO = resolve(PKG, "..");
const DIST = join(PKG, "dist");

// -- 1. tsc ---------------------------------------------------------------
const tsc = join(REPO, "node_modules", ".bin", "tsc");
const r = spawnSync(tsc, ["-p", join(PKG, "tsconfig.json")], { stdio: "inherit" });
if (r.status !== 0) process.exit(r.status ?? 1);

// -- 2. alias rewrite -------------------------------------------------------
function walk(dir, out = []) {
  for (const n of readdirSync(dir)) {
    const p = join(dir, n);
    if (statSync(p).isDirectory()) walk(p, out);
    else if (/\.(js|d\.ts)$/.test(n)) out.push(p);
  }
  return out;
}
let rewrites = 0;
for (const file of walk(DIST)) {
  const src = readFileSync(file, "utf8");
  const out = src.replace(/(from\s+|import\s*\(\s*|import\s+)(["'])@\/([^"']+)\2/g, (m, lead, q, spec) => {
    // Emitted module (app/…) -> its copy under dist/; anything else (assets
    // under public/) -> the real file in the repo.
    const inDist = ["", ".js", ".d.ts", "/index.js", "/index.d.ts"].some((ext) => existsSync(join(DIST, spec + ext)));
    const target = inDist ? join(DIST, spec) : join(REPO, spec);
    let rel = relative(dirname(file), target).split("\\").join("/");
    if (!rel.startsWith(".")) rel = "./" + rel;
    rewrites++;
    return `${lead}${q}${rel}${q}`;
  });
  if (out !== src) writeFileSync(file, out);
}
console.error(`design-system: rewrote ${rewrites} "@/" imports under dist/`);

// -- 3. css ---------------------------------------------------------------
const postcss = (await import("postcss")).default;
const tailwind = (await import("@tailwindcss/postcss")).default;
const cssIn = join(PKG, "styles", "index.css");
const cssOut = join(DIST, "styles.css");
const result = await postcss([tailwind({ base: REPO })]).process(readFileSync(cssIn, "utf8"), {
  from: cssIn,
  to: cssOut,
  map: false,
});
mkdirSync(DIST, { recursive: true });
writeFileSync(cssOut, result.css);
console.error(`design-system: ${cssOut} (${(result.css.length / 1024).toFixed(0)} KB)`);
