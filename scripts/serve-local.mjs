// Local approximation of the production edge, for verification.
//
// `npx serve out` returns the files but none of the platform behaviour, so it
// cannot be used to check the security headers or to run Lighthouse against
// something resembling production. This server reads the real `vercel.json`,
// applies the same headers and redirects, resolves `trailingSlash: true` URLs
// the way Vercel does, and stubs the two Vercel platform routes that only exist
// on the deployed origin.
//
// It is a rehearsal, not a substitute: the deployed headers still have to be
// checked with curl after a deploy.

import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { brotliCompress, gzip } from "node:zlib";
import { promisify } from "node:util";
import path from "node:path";

const br = promisify(brotliCompress);
const gz = promisify(gzip);

/** Vercel compresses every text response. Serving them raw locally makes a
 *  Lighthouse run measure a document five to eight times its real transfer
 *  size, which shows up as a false FCP and LCP regression. */
const COMPRESSIBLE = /^(text\/|application\/(javascript|json|xml|manifest))/;

/** encoding + path → compressed body. */
const compressed = new Map();

const OUT = path.resolve("out");
const PORT = Number(process.env.PORT ?? 4310);

const config = JSON.parse(await readFile("vercel.json", "utf8"));

const globalHeaders = [];
const pathHeaders = [];
for (const rule of config.headers ?? []) {
  const entry = { test: toRegExp(rule.source), headers: rule.headers };
  if (rule.source === "/(.*)") globalHeaders.push(entry);
  else pathHeaders.push(entry);
}

function toRegExp(source) {
  // Enough of Vercel's path syntax for the rules this project uses.
  const pattern = source
    .replace(/\/:path\*/g, "(?:/.*)?")
    .replace(/\(\.\*\)/g, ".*");
  return new RegExp(`^${pattern}$`);
}

const TYPES = {
  ".html": "text/html; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".webmanifest": "application/manifest+json; charset=utf-8",
  ".xml": "application/xml; charset=utf-8",
  ".txt": "text/plain; charset=utf-8",
  ".webp": "image/webp",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".ico": "image/x-icon",
  ".woff2": "font/woff2",
  ".svg": "image/svg+xml",
};

async function resolveFile(pathname) {
  const decoded = decodeURIComponent(pathname);
  const candidates = decoded.endsWith("/")
    ? [path.join(OUT, decoded, "index.html")]
    : [path.join(OUT, decoded), path.join(OUT, `${decoded}.html`)];
  for (const candidate of candidates) {
    if (!candidate.startsWith(OUT)) continue; // traversal guard
    try {
      const info = await stat(candidate);
      if (info.isFile()) return candidate;
    } catch {
      /* try the next candidate */
    }
  }
  return null;
}

const server = createServer(async (req, res) => {
  const url = new URL(req.url ?? "/", `http://localhost:${PORT}`);
  let pathname = url.pathname;

  // Vercel platform routes that only exist on the deployed origin. Stubbed so a
  // local Lighthouse run is not measuring a 404 that production never serves.
  if (pathname.startsWith("/_vercel/")) {
    res.writeHead(200, { "content-type": "application/javascript; charset=utf-8" });
    res.end("/* local stub for a Vercel platform script */\n");
    return;
  }

  // trailingSlash: true — redirect the extension-less, slash-less form.
  if (!pathname.endsWith("/") && !path.extname(pathname)) {
    res.writeHead(308, { location: `${pathname}/${url.search}` });
    res.end();
    return;
  }

  const file = await resolveFile(pathname);
  const target = file ?? path.join(OUT, "404.html");
  const status = file ? 200 : 404;

  let body;
  try {
    body = await readFile(target);
  } catch {
    res.writeHead(404, { "content-type": "text/plain" });
    res.end("Not found");
    return;
  }

  const contentType = TYPES[path.extname(target)] ?? "application/octet-stream";
  const accept = String(req.headers["accept-encoding"] ?? "");
  let encoding = null;
  if (COMPRESSIBLE.test(contentType)) {
    if (accept.includes("br")) encoding = "br";
    else if (accept.includes("gzip")) encoding = "gzip";
  }
  if (encoding) {
    // Cached, because a CDN serves a pre-compressed object. Compressing a
    // 240 KB document on every request added ~1.4 s of server time and showed
    // up in Lighthouse as a document-latency problem the real site does not
    // have (production TTFB measured at ~60 ms).
    const key = `${encoding}:${target}`;
    let cached = compressed.get(key);
    if (!cached) {
      cached = encoding === "br" ? await br(body) : await gz(body);
      compressed.set(key, cached);
    }
    body = cached;
  }

  const headers = {
    "content-type": contentType,
    "content-length": String(body.length),
    vary: "Accept-Encoding",
    ...(encoding ? { "content-encoding": encoding } : {}),
  };
  for (const rule of [...globalHeaders, ...pathHeaders]) {
    if (rule.test.test(pathname)) {
      for (const h of rule.headers) headers[h.key.toLowerCase()] = h.value;
    }
  }
  // Immutable build output, as Vercel serves it.
  if (pathname.startsWith("/_next/static/")) {
    headers["cache-control"] = "public,max-age=31536000,immutable";
  }

  res.writeHead(status, headers);
  res.end(req.method === "HEAD" ? undefined : body);
});

server.listen(PORT, () => {
  console.log(`Local production rehearsal on http://localhost:${PORT}`);
});
