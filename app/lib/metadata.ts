import type { Metadata, Viewport } from "next";
import { dict } from "@/app/data/copy";
import type { Lang } from "@/app/data/types";
import { SITE_URL, hreflangAlternates, localeUrl, ORG } from "@/app/data/shared";

export const viewport: Viewport = {
  themeColor: "#0B0F19",
};

const OG_IMAGE = {
  url: ORG.ogImage,
  width: 1200,
  height: 630,
  alt: "Desert Launch — software built to move your business forward",
};

/** Per-locale <head> metadata: title, description, canonical, hreflang cluster,
 *  OpenGraph/Twitter, robots, icons. Next renders the hreflang <link> tags from
 *  `alternates.languages` (including x-default). */
export function buildMetadata(lang: Lang): Metadata {
  const t = dict(lang);
  const url = localeUrl(lang);

  return {
    metadataBase: new URL(SITE_URL),
    title: t.meta.title,
    description: t.meta.description,
    applicationName: "Desert Launch",
    alternates: {
      canonical: url,
      languages: hreflangAlternates(),
    },
    openGraph: {
      type: "website",
      url,
      siteName: "Desert Launch",
      title: t.meta.title,
      description: t.meta.description,
      locale: t.meta.ogLocale,
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: t.meta.title,
      description: t.meta.description,
      images: [ORG.ogImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, "max-image-preview": "large" },
    },
    icons: {
      icon: [
        { url: "/favicon.ico", sizes: "any" },
        { url: "/assets/logo-96.png", type: "image/png" },
      ],
      apple: "/assets/apple-touch-icon.png",
    },
  };
}
