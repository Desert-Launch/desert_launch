/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static HTML export — there is no server in production. Produces `out/`,
  // which Vercel serves directly.
  output: "export",
  // Directory-style URLs (/ar/index.html) resolve on a static host and keep the
  // canonical trailing-slash form used across the hreflang cluster.
  trailingSlash: true,
  // The site is served from the root of www.desertlaunch.dev, so there is no
  // basePath. (Assets are referenced with root-absolute /assets/… paths.)
  images: { unoptimized: true },
  // This app is its own project root (a sibling lockfile exists one level up).
  outputFileTracingRoot: import.meta.dirname,
  experimental: {
    // Inline the stylesheet into each document. The site is a static export
    // whose pages are mostly single-visit entry points, so removing the
    // render-blocking CSS request is worth more than caching one 12 KB file
    // across navigations — and on the Arabic page it removes two of them,
    // since next/font emits the Tajawal @font-face block as its own chunk.
    inlineCss: true,
  },
};

export default nextConfig;
