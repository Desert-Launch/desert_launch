# Desert Launch — marketing site

The website for [Desert Launch](https://www.desertlaunch.dev), a software studio in Cairo, Egypt.

Next.js App Router, exported as fully static HTML, in five languages with a true
right-to-left Arabic build. No server, no database, no cookies.

```bash
npm install
npm run dev        # http://localhost:3000
npm run verify     # typecheck + lint + build
npm run preview    # build, then serve it with the production headers applied
```

## How it is put together

| Concern | Where |
| --- | --- |
| Copy, all five locales | `app/data/{en,ar,fr,es,de}.ts`, typed by `app/data/types.ts` |
| Long-form pages (EN + AR) | `app/data/pages/` |
| Language-neutral structure | `app/data/projects.ts`, `app/data/services.ts`, `app/data/shared.ts` |
| Sections and templates | `app/components/` |
| Metadata, JSON-LD, links, analytics | `app/lib/` |
| Design tokens and component classes | `app/globals.css` |
| Security headers, caching, apex redirect | `vercel.json` |

**Content is data, never markup.** No user-facing string is written inside a
component. Adding a field means updating `types.ts` and all five dictionaries,
and TypeScript will not let them drift apart. Anything language-neutral — which
projects exist, their screenshots, their store URLs, which services have a page
— lives in `projects.ts` and `services.ts`, keyed by id, so a locale cannot fall
out of structural parity either.

**One root layout per locale.** Route groups (`app/(en)/`, `app/(ar)/ar/`, …)
give every language its own `<html lang dir>`, which is what makes the Arabic
build genuinely right-to-left rather than a mirrored English page. There is
deliberately no top-level `app/layout.tsx`; adding one would break this.

**Sub-pages exist in English and Arabic only.** Service pages, case studies,
about and the legal pages are listed in `PAGE_LOCALES`; the hreflang cluster,
the sitemap and the language switcher all read from it, so a French visitor is
never linked to a URL that would 404.

**Progressive enhancement.** The page is fully readable with JavaScript
disabled. Scroll reveal is scoped behind a `.js` class set before first paint,
the FAQ and the "more work" disclosure are native `<details>` elements, and the
contact form degrades to the WhatsApp and email links beside it.

## Design system

Tailwind v4 with a CSS-first config in `app/globals.css`. Brand values live in
the `@theme` block and are used through the generated utilities (`bg-bg`,
`text-gold`, `border-line`, `rounded-md`) — never as literals in a component.
Recurring surfaces are component classes: `.panel`, `.card`, `.btn`, `.chip`,
`.pf-*`, `.form-*`, `.prose`.

## Measurement

Every outbound lead path is an external link, so a conversion is invisible
unless an event fires before the handoff. `app/lib/analytics.ts` is the single
place that happens; sections mark links with `data-evt` attributes and one
document-level listener (`AnalyticsProvider`) dispatches them, which keeps the
sections as server components. Campaign parameters are kept in session storage
so a WhatsApp conversion can still be attributed to the campaign that produced
it.

## Deploy

Vercel builds and serves the site. Push to `main` to publish; `vercel.json`
carries the security headers, asset caching and the apex → `www` redirect, so
those are reviewed as code rather than configured in a dashboard.

`npm run build` also runs `scripts/postbuild.mjs`, which writes the branded 404
page and fails the build if the HTML references an asset that is not on disk.

## Licence

The source is public for reference. The Desert Launch name, logo, copy and
product screenshots are not licensed for reuse.
