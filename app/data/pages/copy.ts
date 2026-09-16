import type { Lang, PageLang } from "../types";
import type { PagesCopy, SimplePageCopy } from "./types";
import { enPages } from "./en";
import { arPages } from "./ar";
import { aboutExtra } from "./about";

export const pageCopy: Record<PageLang, PagesCopy> = { en: enPages, ar: arPages };

export function pages(lang: PageLang): PagesCopy {
  return pageCopy[lang];
}

/** About is the one long-form page that exists in every locale. English and
 *  Arabic keep theirs beside the rest of their pages; the other three live in
 *  `about.ts`. See the note there for why. */
export function aboutPage(lang: Lang): SimplePageCopy {
  return lang === "en" || lang === "ar" ? pageCopy[lang].about : aboutExtra[lang];
}
