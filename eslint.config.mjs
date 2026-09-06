import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat({
  baseDirectory: dirname(fileURLToPath(import.meta.url)),
});

/** `next/core-web-vitals` brings the React, hooks and jsx-a11y rules; the
 *  TypeScript preset adds type-aware linting on top. */
const config = [
  {
    ignores: [
      ".next/**",
      "out/**",
      "node_modules/**",
      // Local tooling and working notes, not part of the shipped site.
      ".claude/**",
      "audit/**",
      "docs/**",
      "next-env.d.ts",
    ],
  },
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      // The site is a static export with `images.unoptimized`, so `next/image`
      // brings no benefit and a plain <img> is the documented approach. Every
      // image on the site carries explicit width/height instead.
      "@next/next/no-img-element": "off",
    },
  },
];

export default config;
