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
  subsets: ["arabic"],
  weight: ["400", "700", "800"],
  variable: "--font-tajawal",
  display: "swap",
});

/** Latin plus Arabic: brand names, stack chips and code stay Latin script even
 *  on the Arabic page. */
export const arabicFontVars = `${inter.variable} ${tajawal.variable}`;
