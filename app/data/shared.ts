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
export const CONTENT_UPDATED = "2026-09-18";

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

/** The About page is the exception to `PAGE_LOCALES`: it exists in all five.
 *  The founder panel on every home page links to it, and a visitor deciding
 *  whether to write should not be sent to English for the one page that says
 *  who they would be writing to. Its copy for the extra three is in
 *  `pages/about.ts`, which also says plainly that project work itself runs in
 *  English or Arabic. */
export const ABOUT_LOCALES: readonly Lang[] = LOCALE_CODES;

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
  sameAs: [
    "https://github.com/Desert-Launch",
    "https://www.facebook.com/profile.php?id=61593467717104",
    "https://www.instagram.com/desertlaunch.dev/",
  ] as string[],
  /** What the *business* is about, in the words a buyer would use.
   *
   *  Framework names used to sit here, and they were the loudest machine-
   *  readable fact about the company: an Organization whose declared expertise
   *  is a list of frameworks reads to search and answer engines as an
   *  engineering profile, so it kept being surfaced to developers looking for
   *  work rather than to businesses looking for a supplier. The frameworks
   *  moved to `FOUNDER.knowsAbout`, where they are true of a person and do no
   *  harm. Every entry below is backed by shipped work on this site. */
  knowsAbout: [
    "Custom software development",
    "Mobile app development",
    "Web development",
    "Web platform development",
    "MVP development",
    "Booking and reservation systems",
    "Field service management systems",
    "Customer portals and admin dashboards",
    "Internal business systems",
    "UI/UX design",
    "Product modernization",
    "Technical consulting",
  ],
};

/** Public social profiles, shown in the footer. Both verified to return
 *  HTTP 200 on 2026-09-17 before being added here and to `ORG.sameAs`. The
 *  network names are proper nouns and stay untranslated. */
export const SOCIAL: { id: "facebook" | "instagram"; name: string; url: string }[] = [
  {
    id: "facebook",
    name: "Facebook",
    url: "https://www.facebook.com/profile.php?id=61593467717104",
  },
  {
    id: "instagram",
    name: "Instagram",
    url: "https://www.instagram.com/desertlaunch.dev/",
  },
];

export const FOUNDER = {
  name: "Abdullah Mohamed",
  nameAr: "عبدالله محمد",
  jobTitle: "Founder & Lead Engineer",
  image: `${SITE_URL}/assets/founder.webp`,
  /** The technical expertise, attached to the person it is true of rather than
   *  to the company. See the note on `ORG.knowsAbout`. */
  knowsAbout: [
    "Flutter",
    "Dart",
    "iOS app development",
    "Android app development",
    "Node.js",
    "PostgreSQL",
    "Firebase",
    "REST APIs",
    "GraphQL",
    "System architecture",
  ],
  sameAs: [
    "https://www.linkedin.com/in/abdullah-mohamed-3010",
    "https://github.com/Abdullah3010",
  ],
  /** The profile the recommendations on the home page come from. */
  linkedin: "https://www.linkedin.com/in/abdullah-mohamed-3010",
};
