// One-off asset pass: resize every image to the size it is actually rendered at
// and re-encode as WebP. Sources were 4–10x larger than their display size,
// which Lighthouse costs at ~640 KB of avoidable bytes on desktop.
import sharp from "sharp";
import { readFile, writeFile, stat } from "node:fs/promises";
import path from "node:path";

const A = "public/assets";
const jobs = [
  // Hero device composition — rendered at ~216 CSS px, so 440 covers 2x DPR.
  { in: "qfightgym1.webp", out: "hero-qfightgym.webp", width: 440, q: 82 },
  { in: "almuslim2.webp", out: "hero-almuslim.webp", width: 440, q: 82 },

  // Portfolio phone strips — rendered at ~186 CSS px in a 3-up grid.
  ...["almuslim2", "almuslim3", "almuslim4", "qfightgym1", "qfightgym2", "qfightgym3",
      "voicers1", "voicers2", "voicers3"].map((n) => ({
    in: `${n}.webp`, out: `${n}.webp`, width: 420, q: 78,
  })),

  // Single landscape frame — rendered at ~540 CSS px.
  { in: "ezhal1.webp", out: "ezhal1.webp", width: 1080, q: 78 },

  // App icons — rendered at 44 px in cards and 32 px in the strip.
  ...["logo-voicers", "logo-ezhal", "logo-xeralab", "logo-iccd", "logo-fastap",
      "logo-jaweb", "logo-almuslim", "logo-qfightgym"].map((n) => ({
    in: `${n}.webp`, out: `${n}.webp`, width: 128, q: 82,
  })),

  // Founder portrait — rendered at 96 px.
  { in: "founder.webp", out: "founder.webp", width: 256, q: 82 },
  // Testimonial avatars — rendered at 44 px.
  ...["testimonial-ahmed-farid", "testimonial-mohamad-zakaria", "testimonial-mohamed-sayed"]
    .map((n) => ({ in: `${n}.webp`, out: `${n}.webp`, width: 128, q: 80 })),
];

let saved = 0;
for (const job of jobs) {
  const src = path.join(A, job.in);
  const dst = path.join(A, job.out);
  const before = (await stat(src)).size;
  const buf = await readFile(src);
  const meta = await sharp(buf).metadata();
  const width = Math.min(job.width, meta.width ?? job.width);
  const out = await sharp(buf).resize({ width, withoutEnlargement: true })
    .webp({ quality: job.q, effort: 6 }).toBuffer();
  // Never write a bigger file than the one already there.
  if (job.in !== job.out || out.length < before) {
    await writeFile(dst, out);
    const after = out.length;
    if (job.in === job.out) saved += before - after;
    console.log(`${job.out.padEnd(32)} ${meta.width}px ${(before/1024).toFixed(0)}KB -> ${width}px ${(after/1024).toFixed(0)}KB`);
  } else {
    console.log(`${job.out.padEnd(32)} kept (already smaller)`);
  }
}

// The 1024px PNG logo is only ever fetched by crawlers reading the JSON-LD.
const logoSrc = path.join(A, "logo.png");
const beforeLogo = (await stat(logoSrc)).size;
const logo = await sharp(await readFile(logoSrc))
  .resize({ width: 512 }).png({ compressionLevel: 9, palette: true, quality: 90 }).toBuffer();
await writeFile(logoSrc, logo);
saved += beforeLogo - logo.length;
console.log(`logo.png                         1024px ${(beforeLogo/1024).toFixed(0)}KB -> 512px ${(logo.length/1024).toFixed(0)}KB`);

console.log(`\nTotal saved: ${(saved/1024).toFixed(0)} KB`);
