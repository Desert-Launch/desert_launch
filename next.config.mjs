/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static HTML export — GitHub Pages only serves static files. Produces `out/`.
  output: "export",
  // Directory-style URLs (/ar/index.html) resolve on a static host and keep the
  // canonical trailing-slash form used across the hreflang cluster.
  trailingSlash: true,
  // The site is served from the apex domain desertlaunch.dev, so there is no
  // basePath. (Assets are referenced with root-absolute /assets/… paths.)
  images: { unoptimized: true },
  // This app is its own project root (a sibling lockfile exists one level up).
  outputFileTracingRoot: import.meta.dirname,
};

export default nextConfig;
