import type { Dictionary, Lang } from "./types";
import { en } from "./en";
import { ar } from "./ar";
import { fr } from "./fr";
import { es } from "./es";
import { de } from "./de";

export const copy: Record<Lang, Dictionary> = { en, ar, fr, es, de };

export function dict(lang: Lang): Dictionary {
  return copy[lang];
}
