import type { Metadata, Viewport } from "next";
import { dict } from "@/app/data/copy";
import type { Lang } from "@/app/data/types";
import {
  SITE_URL,
  hreflangAlternates,
  localeUrl,
  localeByCode,
  LOCALE_CODES,
  PAGE_LOCALES,
  ORG,
} from "@/app/data/shared";

export const viewport: Viewport = {
  themeColor: "#0B0F19",
};

/** OpenGraph locale codes for the other languages in a page's cluster, so a
 *  share preview can advertise the translations that actually exist. */
function alternateLocales(lang: Lang, langs: readonly Lang[]): string[] {
  return langs.filter((l) => l !== lang).map((l) => dict(l).meta.ogLocale);
}

export interface PageMetaInput {
  lang: Lang;
  /** Shared sub-path without leading or trailing slashes. "" for the home page. */
  path?: string;
  title: string;
  description: string;
  /** Localized alt text for the OG image. */
  ogImageAlt?: string;
  /** Locales this page exists in. Home pages exist in all five; the long-form
   *  sub-pages only in English and Arabic, and the hreflang cluster has to say
   *  so rather than pointing at URLs that would 404. */
  langs?: readonly Lang[];
  /** Case studies and articles get an article OG type. */
  ogType?: "website" | "article";
}

export function buildMetadata({
  lang,
  path = "",
  title,
  description,
  ogImageAlt,
  langs = LOCALE_CODES,
  ogType = "website",
}: PageMetaInput): Metadata {
  const t = dict(lang);
  const url = localeUrl(lang, path);

  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,
    applicationName: "Desert Launch",
    alternates: {
      canonical: url,
      languages: hreflangAlternates(path, langs),
      types: { "text/markdown": `${SITE_URL}/llms.txt` },
    },
    openGraph: {
      type: ogType,
      url,
      siteName: "Desert Launch",
      title,
      description,
      locale: t.meta.ogLocale,
      alternateLocale: alternateLocales(lang, langs),
      images: [
        {
          url: ORG.ogImage,
          width: 1200,
          height: 630,
          alt: ogImageAlt ?? t.meta.ogImageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ORG.ogImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, "max-image-preview": "large" },
    },
    manifest: "/site.webmanifest",
    icons: {
      icon: [
        { url: "/favicon.ico", sizes: "any" },
        { url: "/assets/logo-96.png", type: "image/png", sizes: "96x96" },
      ],
      apple: "/assets/apple-touch-icon.png",
    },
    other: {
      "content-language": localeByCode(lang).hreflang,
    },
  };
}

/** Home page metadata for a locale. */
export function buildHomeMetadata(lang: Lang): Metadata {
  const t = dict(lang);
  return buildMetadata({
    lang,
    title: t.meta.title,
    description: t.meta.description,
  });
}

/** Sub-pages exist in English and Arabic only. */
export const SUBPAGE_LANGS = PAGE_LOCALES as readonly Lang[];
