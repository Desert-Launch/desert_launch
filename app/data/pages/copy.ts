import type { PageLang } from "../types";
import type { PagesCopy } from "./types";
import { enPages } from "./en";
import { arPages } from "./ar";

export const pageCopy: Record<PageLang, PagesCopy> = { en: enPages, ar: arPages };

export function pages(lang: PageLang): PagesCopy {
  return pageCopy[lang];
}
