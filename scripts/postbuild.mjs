// Runs after `next build`.
//
// 1. Writes a branded 404 page. A Next app with multiple root layouts (one per
//    locale, which is what gives each locale a real <html lang dir>) cannot
//    mount a global `not-found.tsx`, so the export ships Next's unstyled
//    default. This replaces it with a self-contained page: no JavaScript, no
//    stylesheet request, and still `noindex`.
// 2. Verifies that every asset path referenced by the built HTML exists, so a
//    renamed or deleted image fails the build instead of 404ing in production.

import { readFile, writeFile, readdir, access } from "node:fs/promises";
import { constants } from "node:fs";
import path from "node:path";

const OUT = "out";
const PUBLIC = "public";

const notFound = `<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex, follow">
<meta name="theme-color" content="#0B0F19">
<title>Page not found — Desert Launch</title>
<link rel="icon" href="/favicon.ico" sizes="any">
<link rel="apple-touch-icon" href="/assets/apple-touch-icon.png">
<style>
  :root { color-scheme: dark; }
  * { box-sizing: border-box; }
  body {
    margin: 0; min-height: 100vh; display: grid; place-items: center;
    padding: 2rem 1.25rem; background: #0b0f19; color: #f8fafc;
    font-family: Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif;
    background-image:
      radial-gradient(50rem 34rem at 15% -10%, rgba(212,175,55,.16), transparent 60%),
      radial-gradient(44rem 30rem at 88% 4%, rgba(200,169,81,.12), transparent 62%);
    background-repeat: no-repeat;
  }
  main { width: min(38rem, 100%); display: flex; flex-direction: column; gap: 1.25rem; }
  .brand { display: inline-flex; align-items: center; gap: .75rem; color: inherit; text-decoration: none; }
  .brand img { width: 40px; height: 40px; border-radius: .85rem; }
  .code { font-size: .75rem; font-weight: 700; letter-spacing: .16em; text-transform: uppercase; color: #f5c542; }
  h1 { margin: 0; font-size: clamp(1.75rem, 1.2rem + 2vw, 2.4rem); line-height: 1.15; letter-spacing: -.02em; }
  p { margin: 0; color: #97a3b6; line-height: 1.65; }
  ul { display: flex; flex-wrap: wrap; gap: .6rem; list-style: none; margin: .25rem 0 0; padding: 0; }
  a.pill {
    display: inline-flex; align-items: center; min-height: 2.75rem; padding: .7rem 1.15rem;
    border-radius: 999px; border: 1px solid rgba(190,205,230,.22); color: #f8fafc;
    text-decoration: none; font-weight: 600; font-size: .9375rem;
    background: rgba(255,255,255,.03);
  }
  a.pill:hover { background: rgba(255,255,255,.07); }
  a.pill.primary { color: #0b0f19; border-color: transparent; background: linear-gradient(135deg,#d4af37,#c8a951 50%,#f5c542); }
  a:focus-visible { outline: 2px solid #f5c542; outline-offset: 3px; }
</style>
</head>
<body>
<main>
  <a class="brand" href="/">
    <img src="/assets/logo-96.png" alt="" width="40" height="40">
    <strong>Desert Launch</strong>
  </a>
  <span class="code">Error 404</span>
  <h1>This page doesn't exist</h1>
  <p>The link may be out of date. Everything on the site is one step away.</p>
  <ul>
    <li><a class="pill primary" href="/">Home</a></li>
    <li><a class="pill" href="/#work">Work</a></li>
    <li><a class="pill" href="/#services">Services</a></li>
    <li><a class="pill" href="/#contact">Contact</a></li>
    <li><a class="pill" href="/ar/" lang="ar" hreflang="ar" dir="rtl">العربية</a></li>
  </ul>
</main>
</body>
</html>
`;

await writeFile(path.join(OUT, "404.html"), notFound, "utf8");
// The export also emits Next's default page at /404/ from the `_not-found`
// route; a visitor who lands there should see the same branded page.
await writeFile(path.join(OUT, "404", "index.html"), notFound, "utf8");
console.log("postbuild: wrote branded out/404.html and out/404/index.html");

// --- asset reference check -------------------------------------------------
async function htmlFiles(dir) {
  const found = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === "_next") continue;
      found.push(...(await htmlFiles(full)));
    } else if (entry.name.endsWith(".html")) {
      found.push(full);
    }
  }
  return found;
}

const referenced = new Set();
for (const file of await htmlFiles(OUT)) {
  const html = await readFile(file, "utf8");
  // Paths appear both as plain attributes and, inside the RSC payload, as
  // JSON-escaped strings — so the terminator set has to exclude a backslash or
  // every match picks one up.
  for (const match of html.matchAll(/["'(](\/assets\/[^"')\s\\]+)/g)) {
    referenced.add(match[1]);
  }
}

const missing = [];
for (const ref of referenced) {
  try {
    await access(path.join(PUBLIC, decodeURIComponent(ref)), constants.R_OK);
  } catch {
    missing.push(ref);
  }
}

if (missing.length) {
  console.error("postbuild: missing assets referenced by the built HTML:");
  for (const m of missing) console.error("  " + m);
  process.exit(1);
}
console.log(`postbuild: verified ${referenced.size} asset references`);
