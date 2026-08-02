import type { Dir, Lang } from "./types";

/** Canonical origin (www host, served by Vercel).
 *  The apex still resolves to the old GitHub Pages IPs and 404s, so `www` is
 *  the canonical host until the apex DNS is repointed at Vercel. */
export const SITE_URL = "https://www.desertlaunch.dev";

export const WHATSAPP_NUMBER = "201022838534";
export const PHONE_INTL = "+20-102-283-8534";
export const PHONE_DISPLAY = "+20 102 283 8534";
export const EMAIL = "abdullah@desertlaunch.dev";
export const MAILTO = `mailto:${EMAIL}`;

/** Build a WhatsApp click-to-chat link with a pre-filled (already localized) message. */
export function wa(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export interface LocaleMeta {
  code: Lang;
  /** Root-absolute path with trailing slash, e.g. "/" or "/ar/". */
  path: string;
  dir: Dir;
  /** Native language name shown in the switcher (endonym). */
  endonym: string;
  /** hreflang value. */
  hreflang: string;
}

export const LOCALES: LocaleMeta[] = [
  { code: "en", path: "/", dir: "ltr", endonym: "English", hreflang: "en" },
  { code: "ar", path: "/ar/", dir: "rtl", endonym: "العربية", hreflang: "ar" },
  { code: "fr", path: "/fr/", dir: "ltr", endonym: "Français", hreflang: "fr" },
  { code: "es", path: "/es/", dir: "ltr", endonym: "Español", hreflang: "es" },
  { code: "de", path: "/de/", dir: "ltr", endonym: "Deutsch", hreflang: "de" },
];

export function localeByCode(code: Lang): LocaleMeta {
  return LOCALES.find((l) => l.code === code) ?? LOCALES[0];
}

/** Absolute URL for a locale's page. */
export function localeUrl(code: Lang): string {
  const path = localeByCode(code).path;
  return path === "/" ? `${SITE_URL}/` : `${SITE_URL}${path}`;
}

/** hreflang alternates map (+ x-default) for a page's <head>. */
export function hreflangAlternates(): Record<string, string> {
  const map: Record<string, string> = {};
  for (const l of LOCALES) map[l.hreflang] = localeUrl(l.code);
  map["x-default"] = `${SITE_URL}/`;
  return map;
}

// --- Language-neutral SEO / structured-data constants ----------------------
export const ORG = {
  name: "Desert Launch",
  logo: `${SITE_URL}/assets/logo.png`,
  image: `${SITE_URL}/assets/og-image.png`,
  ogImage: `${SITE_URL}/assets/og-image.png`,
  addressLocality: "Cairo",
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
  sameAs: ["https://www.linkedin.com/company/desert-launch"],
  knowsAbout: [
    "Web development",
    "Mobile app development",
    "Flutter",
    "UI/UX design",
    "System architecture",
    "MVP development",
    "Business websites",
    "Product modernization",
    "Technical consulting",
  ],
};

export const FOUNDER = {
  name: "Abdullah Mohamed",
  jobTitle: "Founder & Lead Engineer",
  sameAs: [
    "https://www.linkedin.com/in/abdullah-mohamed-3010",
    "https://github.com/Abdullah3010",
  ],
};

/** Published apps with real store URLs — become SoftwareApplication nodes. */
export const STORE_APPS = [
  {
    name: "Al-Muslim",
    os: "iOS, Android",
    appStore:
      "https://apps.apple.com/us/app/al-muslim-%D8%A7%D9%84%D9%85%D8%B3%D9%84%D9%85/id6757352101",
    googlePlay: "https://play.google.com/store/apps/details?id=com.elmuslim.app",
  },
  {
    name: "Q-Fight Gym",
    os: "iOS",
    appStore: "https://apps.apple.com/us/app/q-fight-gym/id6759147399",
    googlePlay: null,
  },
];
