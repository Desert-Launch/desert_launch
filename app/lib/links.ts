import { localePath, LOCALE_CODES, PAGE_LOCALES } from "@/app/data/shared";
import type { Dictionary, Lang, PageLang, ProjectId } from "@/app/data/types";

/** Locales that have the long-form sub-pages. Everything that links to a
 *  service page, case study or legal page must check this first, so a French
 *  visitor is never sent to a URL that does not exist. */
export function hasPages(lang: Lang): lang is PageLang {
  return (PAGE_LOCALES as Lang[]).includes(lang);
}

/** In-page anchor. On the home page a bare hash avoids a navigation; from a
 *  sub-page it has to travel back to the home document first. */
export function sectionHref(lang: Lang, hash: string, isHome: boolean): string {
  return isHome ? hash : `${localePath(lang)}${hash.replace(/^#/, "#")}`;
}

export function homePath(lang: Lang): string {
  return localePath(lang);
}

export function servicePath(lang: PageLang, slug: string): string {
  return localePath(lang, `services/${slug}`);
}

/** The /services/ hub. The visible breadcrumb and the BreadcrumbList JSON-LD
 *  both use this, so they cannot claim different parents. */
export function servicesIndexPath(lang: PageLang): string {
  return localePath(lang, "services");
}

export function casePath(lang: PageLang, id: ProjectId): string {
  return localePath(lang, `work/${id}`);
}

export function simplePath(lang: PageLang, slug: string): string {
  return localePath(lang, slug);
}

/** Language-switcher targets for a page.
 *
 *  `path` is the shared sub-path (e.g. "services/mobile-app-development"), or
 *  `null` for the home page. Locales that carry this page get the equivalent
 *  URL and a real `hreflang`; the rest fall back to their home page and are
 *  listed without one, so the switcher never claims a translation that does not
 *  exist. */
export function localeLinks(path: string | null): {
  langHrefs: Partial<Record<Lang, string>>;
  translated: Lang[];
} {
  if (path === null) {
    const langHrefs = Object.fromEntries(
      LOCALE_CODES.map((l) => [l, localePath(l)])
    ) as Partial<Record<Lang, string>>;
    return { langHrefs, translated: [...LOCALE_CODES] };
  }

  const langHrefs: Partial<Record<Lang, string>> = {};
  for (const l of LOCALE_CODES) {
    langHrefs[l] = hasPages(l) ? localePath(l, path) : localePath(l);
  }
  return { langHrefs, translated: [...PAGE_LOCALES] };
}

/** Header and footer navigation, resolved for the current document. */
export function navItems(
  t: Dictionary,
  lang: Lang,
  isHome: boolean
): { label: string; href: string }[] {
  return t.nav.map((item) => ({
    label: item.label,
    href: sectionHref(lang, item.href, isHome),
  }));
}
