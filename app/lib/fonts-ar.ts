import { Tajawal } from "next/font/google";
import { inter } from "./fonts";

/** Arabic UI font. Tajawal has no variable build on Google Fonts, so the
 *  weights are listed — but this module is imported *only* by the Arabic
 *  layout, so the files are never requested on an English, French, Spanish or
 *  German page. */
export const tajawal = Tajawal({
  // Arabic subset only. Inter is loaded alongside it and handles every Latin
  // glyph on the page — brand names, stack chips, phone numbers — so shipping
  // Tajawal's Latin subset too would duplicate font files for glyphs that never
  // render. Three weights, not four: the design asks for 400 (body), 700
  // (headings, labels, strong) and 800 (display), and nothing renders at 500.
  //
  // Two reductions were measured and rejected, so they need not be tried again:
  //
  //  1. Dropping 800 and letting the display steps fall back to 700 saves
  //     8.8 KB. But the faces are not interchangeable: the same Arabic H1
  //     measures 569.7px and 522.2px per line at 800 against 558.4px and
  //     506.6px at 700, and the strokes are visibly heavier. Since `.h-display`,
  //     `.h-page` and `.h-section` are 800 while `.h-card` and `strong` are 700,
  //     dropping it collapses the weight contrast between a section heading and
  //     a card heading — in Arabic alone, leaving one locale lighter than the
  //     other four.
  //
  //  2. Not preloading Inter here (47.3 KB, the largest font on the page) is a
  //     bigger saving, but Latin renders in 122 text nodes on this page and in
  //     four places above the fold at 390x844 — including the "Desert Launch"
  //     wordmark at the very top. Dropping the preload trades bytes for a
  //     visible swap on the first element a visitor sees.
  subsets: ["arabic"],
  weight: ["400", "700", "800"],
  variable: "--font-tajawal",
  display: "swap",
});

/** Latin plus Arabic: brand names, stack chips and code stay Latin script even
 *  on the Arabic page. */
export const arabicFontVars = `${inter.variable} ${tajawal.variable}`;
