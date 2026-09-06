import type { MetadataRoute } from "next";
import {
  LOCALE_CODES,
  PAGE_LOCALES,
  CONTENT_UPDATED,
  localeUrl,
  hreflangAlternates,
} from "@/app/data/shared";
import { SERVICE_PAGES } from "@/app/data/services";
import { CASE_STUDIES } from "@/app/data/projects";
import type { Lang } from "@/app/data/types";

export const dynamic = "force-static";

/** Build-time sitemap.
 *
 *  It replaces a hand-maintained `public/sitemap.xml` whose `lastmod` had been
 *  stale for weeks — once Google sees an inaccurate lastmod it stops trusting
 *  the signal. Every URL and its hreflang cluster is derived from the same
 *  constants the pages themselves use, so a new locale or a new service page
 *  cannot be forgotten here.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date(CONTENT_UPDATED);
  const entries: MetadataRoute.Sitemap = [];

  const add = (
    path: string,
    langs: readonly Lang[],
    priority: number,
    changeFrequency: "weekly" | "monthly"
  ) => {
    for (const lang of langs) {
      entries.push({
        url: localeUrl(lang, path),
        lastModified,
        changeFrequency,
        priority: lang === "en" ? priority : priority - 0.1,
        alternates: { languages: hreflangAlternates(path, langs) },
      });
    }
  };

  // Home — every locale.
  add("", LOCALE_CODES, 1.0, "weekly");

  // Long-form pages — English and Arabic.
  const pageLangs = PAGE_LOCALES as readonly Lang[];
  add("services", pageLangs, 0.9, "monthly");
  for (const service of SERVICE_PAGES) {
    add(`services/${service.slug}`, pageLangs, 0.9, "monthly");
  }
  for (const project of CASE_STUDIES) {
    add(`work/${project.id}`, pageLangs, 0.8, "monthly");
  }
  add("about", pageLangs, 0.7, "monthly");
  add("terms", pageLangs, 0.4, "monthly");
  add("privacy", pageLangs, 0.3, "monthly");

  return entries;
}
