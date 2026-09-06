import { Inter } from "next/font/google";

/** Latin UI font, loaded as a variable font: one woff2 file covers every weight
 *  from 400 to 800. The previous setup requested five static weights, so five
 *  separate files were preloaded on every page.
 *
 *  Tajawal lives in `fonts-ar.ts` on purpose. `next/font` registers a face when
 *  its module is evaluated, so a single module exporting both families made
 *  every English, French, Spanish and German page preload the four Arabic
 *  weights it never renders — nine font files instead of one. */
export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

/** Font class for a left-to-right locale: Latin only. */
export const latinFontVars = inter.variable;
