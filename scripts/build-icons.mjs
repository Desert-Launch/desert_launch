// Rebuilds favicon.ico and apple-touch-icon.png from the master logo.
//
// The previous favicon.ico was 39 KB — larger than the compressed HTML document
// and fetched on every page view. An ICO is just a directory of images, and
// modern browsers read PNG entries, so three small PNGs (16/32/48) cover every
// real use at a fraction of the size.
import sharp from "sharp";
import { readFile, writeFile, stat } from "node:fs/promises";

const SRC = "public/assets/logo.png";
const master = await readFile(SRC);

const sizes = [16, 32, 48];
const pngs = await Promise.all(
  sizes.map((size) =>
    sharp(master).resize(size, size, { fit: "cover" }).png({ compressionLevel: 9 }).toBuffer()
  )
);

const header = Buffer.alloc(6);
header.writeUInt16LE(0, 0); // reserved
header.writeUInt16LE(1, 2); // type: icon
header.writeUInt16LE(sizes.length, 4);

const entries = [];
let offset = 6 + 16 * sizes.length;
sizes.forEach((size, i) => {
  const entry = Buffer.alloc(16);
  entry.writeUInt8(size === 256 ? 0 : size, 0);
  entry.writeUInt8(size === 256 ? 0 : size, 1);
  entry.writeUInt8(0, 2); // palette
  entry.writeUInt8(0, 3); // reserved
  entry.writeUInt16LE(1, 4); // colour planes
  entry.writeUInt16LE(32, 6); // bits per pixel
  entry.writeUInt32LE(pngs[i].length, 8);
  entry.writeUInt32LE(offset, 12);
  offset += pngs[i].length;
  entries.push(entry);
});

const before = (await stat("public/favicon.ico")).size;
const ico = Buffer.concat([header, ...entries, ...pngs]);
await writeFile("public/favicon.ico", ico);
console.log(`favicon.ico  ${(before / 1024).toFixed(0)} KB -> ${(ico.length / 1024).toFixed(1)} KB`);

const beforeApple = (await stat("public/assets/apple-touch-icon.png")).size;
const apple = await sharp(master)
  .resize(180, 180, { fit: "cover" })
  .png({ compressionLevel: 9, palette: true })
  .toBuffer();
await writeFile("public/assets/apple-touch-icon.png", apple);
console.log(
  `apple-touch-icon.png  ${(beforeApple / 1024).toFixed(0)} KB -> ${(apple.length / 1024).toFixed(1)} KB`
);

const before96 = (await stat("public/assets/logo-96.png")).size;
const logo96 = await sharp(master)
  .resize(96, 96, { fit: "cover" })
  .png({ compressionLevel: 9, palette: true })
  .toBuffer();
await writeFile("public/assets/logo-96.png", logo96);
console.log(
  `logo-96.png  ${(before96 / 1024).toFixed(0)} KB -> ${(logo96.length / 1024).toFixed(1)} KB`
);
