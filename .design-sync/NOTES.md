# design-sync notes — Desert Launch

Repo-specific facts a re-sync needs. The config is `.design-sync/config.json`;
the package the converter consumes is `design-system/` (built, not committed).

## What the "package" is

- This repo is a Next.js 15 site, not a component library. `design-system/`
  is a thin package created for the sync: `src/primitives.tsx` (wrappers over
  the site's CSS classes), `src/parts.ts` (re-exports of `app/components`),
  `src/sections.tsx` (the home sections with a `lang` prop). Build with
  `npm run build --prefix design-system` (= `cfg.buildCmd`): tsc emits ESM +
  .d.ts for src/ and every `app/` module it pulls in, mirrored under
  `design-system/dist/` with the repo's `@/` alias rewritten to relative
  paths; then PostCSS + Tailwind v4 compile `styles/index.css` to
  `dist/styles.css` (`cfg.cssEntry`).
- Converter entry: `--entry ./design-system/dist/design-system/src/index.js`,
  `--node-modules ./node_modules` (repo root; the package has none of its own).
- Sections that depend on `/assets/…` images are deliberately NOT exported:
  Hero (JourneyLoop's two product screenshots), Work, Founder (portrait +
  recommender avatars). WhyUs is image-free since the 2026-09-19 redesign and
  could be added. Header/Footer got a `logoSrc` prop so their mark ships
  inlined (esbuild `dataurl`) from `@/public/assets/logo-96.png`.
- Grouping: `design-system/docs/<Name>.md` are frontmatter-only category
  stubs (`cfg.docsDir`). They must stay body-less — a body would replace the
  synthesized prompt (props + examples). `cfg.guidelinesGlob: []` keeps them
  out of `guidelines/`. Parts (SectionHead, FaqList, …) are unpinned in
  `componentSrcMap` on purpose: a pinned path under `../app/` would name the
  group after the app folder and beat the category stub.
- `cfg.dtsPropsFor` hand-writes bodies for props typed by `app/data/types`
  (IconKey, FaqItem, PageCta, PageSection, Crumb): the ts-morph pass only parses
  the four entry .d.ts files, so those unions/interfaces otherwise collapse to
  `unknown` / bare names. Update the IconKey union there when an icon is added.

## Fonts

- `design-system/fonts/fonts.css` + `fonts/media/*.woff2` are the exact files
  the site's own `next/font` build emits (harvested from `out/_next/static/`).
  `styles/index.css` sets `--font-inter` / `--font-tajawal` at `:root` —
  next/font sets them on `<html>`, and an undefined var drops the page to serif.
- To refresh after a font change: `npm run build`, then re-run the harvest
  (the script that produced fonts.css lives in this session only; re-derive
  from `out/_next/static/css/*.css` @font-face rules + `media/` files).

## Previews

- Card harness paints `body` white; the DS is dark. Every preview wraps in
  `.design-sync/previews/_stage.tsx` (`bg-bg text-ink p-6`) — not a component,
  underscore-prefixed. Site sections render without the Stage inside a
  `bg-bg text-ink` div.
- `Site*` sections and `SectionBand` need `cardMode: column` +
  `viewport: 1360x900` (cfg.overrides): at the default 900px capture the header
  is in phone layout and RTL cells start off-screen. Every other card is
  `column` too — row compositions clip in grid cells.
- The section wrapper (`Locale` in sections.tsx) adds `className="js"` and
  mounts the site's `ScrollReveal`; without it `.js-only` (the brief form) is
  `display:none` and `.reveal` stays visible-but-static.

## Known render warns (triaged, expected)

- `[FONT_MISSING] "Inter Fallback", "Tajawal Fallback", "Cairo"` — fallback
  family names from the font stacks; the real Inter and Tajawal files ship.
  Not substitutes.

## Re-sync risks

- `design-system/dist/` is gitignored: run `cfg.buildCmd` before the converter
  on a fresh clone (the driver does not build the package itself).
- `.design-sync/previews/Site*.tsx` render the site's real copy from
  `app/data/*.ts`; copy edits change the render hash and re-grade those cards.
- Tailwind emits only classes it sees: a new utility used in a preview or in
  `conventions.md` must be reachable from `design-system/styles/index.css`'s
  `@source inline()` safelist or from scanned sources, or it silently misses.
- The `.d.ts` tree is parsed from `dist/design-system/src` only — any new prop
  typed by an `app/` type needs a `dtsPropsFor` entry or renders as `unknown`.
- Playwright: `.ds-sync/` pins `playwright@1.63.0` to match the cached
  `chromium_headless_shell-1243`; a different cache needs a different pin.

## The site's own checks see the package

- The root `tsconfig.json` includes `**/*.ts(x)`, so `npm run verify` also
  type-checks `design-system/src/` — under Next's typings a `.png` import is
  `StaticImageData`, under the package's own build it is a string;
  `sections.tsx` normalises both. `design-system/dist/` d.ts files are
  included too and must keep type-checking (they do; leave `rootDir: ".."`).
- `eslint.config.mjs` ignores `.ds-sync/`, `ds-bundle/`, `design-system/dist/`
  and `.design-sync/` — without that, Next's lint runs over the bundled React
  in `ds-bundle/_vendor/` and fails.
