import type { Dir, Lang, PageLang } from "./types";

/** Canonical origin. `www` is the primary host; the apex 308-redirects to it
 *  (see `vercel.json`). Everything that hardcodes a host — canonical, hreflang,
 *  og:url, JSON-LD, sitemap, robots, llms.txt — derives from this constant. */
export const SITE_URL = "https://www.desertlaunch.dev";

export const WHATSAPP_NUMBER = "201022838534";
export const PHONE_INTL = "+20-102-283-8534";
export const PHONE_DISPLAY = "+20 102 283 8534";
export const PHONE_HREF = "tel:+201022838534";
export const EMAIL = "abdullah@desertlaunch.dev";
export const MAILTO = `mailto:${EMAIL}`;

/** Date the site content was last reviewed. Shown on dated pages and used for
 *  `dateModified` in JSON-LD. Deliberately a content date, not the build date:
 *  a rebuild does not make the content newer. */
export const CONTENT_UPDATED = "2026-09-06";

/** Build a WhatsApp click-to-chat link with a pre-filled (already localized)
 *  message. Every entry point passes its own message so an incoming chat says
 *  which page and which product the visitor was looking at. */
export function wa(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export interface LocaleMeta {
  code: Lang;
  dir: Dir;
  /** Native language name shown in the switcher (endonym). */
  endonym: string;
  /** hreflang value. */
  hreflang: string;
}

export const LOCALES: LocaleMeta[] = [
  { code: "en", dir: "ltr", endonym: "English", hreflang: "en" },
  { code: "ar", dir: "rtl", endonym: "العربية", hreflang: "ar" },
  { code: "fr", dir: "ltr", endonym: "Français", hreflang: "fr" },
  { code: "es", dir: "ltr", endonym: "Español", hreflang: "es" },
  { code: "de", dir: "ltr", endonym: "Deutsch", hreflang: "de" },
];

export const LOCALE_CODES = LOCALES.map((l) => l.code);

/** Locales that also carry the long-form sub-pages. Adding a locale here means
 *  adding its route files and its `pages/<lang>.ts` content. */
export const PAGE_LOCALES: PageLang[] = ["en", "ar"];

export function localeByCode(code: Lang): LocaleMeta {
  return LOCALES.find((l) => l.code === code) ?? LOCALES[0];
}

/** Root-absolute path with a trailing slash, e.g. localePath("ar", "services")
 *  → "/ar/services/". `trailingSlash: true` in next.config makes this the form
 *  every internal link and every canonical URL uses. */
export function localePath(lang: Lang, path = ""): string {
  const base = lang === "en" ? "" : `/${lang}`;
  const clean = path.replace(/^\/+|\/+$/g, "");
  return clean ? `${base}/${clean}/` : `${base}/`;
}

/** Absolute URL for a locale's page. */
export function localeUrl(lang: Lang, path = ""): string {
  return `${SITE_URL}${localePath(lang, path)}`;
}

/** Regional Arabic aliases. The Gulf is a stated target market, and a Saudi or
 *  Emirati searcher is served by the same Arabic page; multiple hreflang values
 *  may legitimately point at one URL. Every page in a cluster emits the same
 *  map, so the cluster stays reciprocal. */
const AR_REGIONS = ["ar-EG", "ar-SA", "ar-AE", "ar-QA", "ar-KW"];

/** hreflang alternates (+ x-default) for a page.
 *  `langs` narrows the cluster for pages that do not exist in all locales. */
export function hreflangAlternates(
  path = "",
  langs: readonly Lang[] = LOCALE_CODES
): Record<string, string> {
  const map: Record<string, string> = {};
  for (const code of langs) {
    const loc = localeByCode(code);
    map[loc.hreflang] = localeUrl(code, path);
    if (code === "ar") {
      for (const region of AR_REGIONS) map[region] = localeUrl("ar", path);
    }
  }
  map["x-default"] = localeUrl("en", path);
  return map;
}

// --- Language-neutral SEO / structured-data constants ----------------------

export const ORG = {
  name: "Desert Launch",
  /** Arabic rendering of the brand, so an Arabic SERP can show the right name. */
  alternateName: "ديزرت لونش",
  logo: `${SITE_URL}/assets/logo.png`,
  image: `${SITE_URL}/assets/og-image.png`,
  ogImage: `${SITE_URL}/assets/og-image.png`,
  addressLocality: "Cairo",
  addressRegion: "Cairo Governorate",
  addressCountry: "EG",
  areaServed: [
    "Egypt",
    "Saudi Arabia",
    "United Arab Emirates",
    "Qatar",
    "Kuwait",
    "Europe",
    "United States",
  ],
  /** The languages project work is actually conducted in. The site is
   *  translated into five languages for discovery, but delivery happens in
   *  English or Arabic — every locale's copy says so. */
  knowsLanguage: ["en", "ar"],
  currenciesAccepted: "USD",
  /** Verified public profiles, emitted as schema.org `sameAs`. A `sameAs`
   *  pointing at a dead or unclaimed URL hurts more than it helps, so an entry
   *  is added only once the profile is live and confirmed. The GitHub
   *  organisation below was verified to return HTTP 200.
   *  See OWNER_ACTIONS.md for the profiles still to be created. */
  sameAs: ["https://github.com/Desert-Launch"] as string[],
  knowsAbout: [
    "Mobile app development",
    "Flutter",
    "iOS app development",
    "Android app development",
    "Web development",
    "Web platform development",
    "MVP development",
    "UI/UX design",
    "System architecture",
    "Product modernization",
    "Technical consulting",
  ],
};

export const FOUNDER = {
  name: "Abdullah Mohamed",
  nameAr: "عبدالله محمد",
  jobTitle: "Founder & Lead Engineer",
  image: `${SITE_URL}/assets/founder.webp`,
  sameAs: [
    "https://www.linkedin.com/in/abdullah-mohamed-3010",
    "https://github.com/Abdullah3010",
  ],
};
