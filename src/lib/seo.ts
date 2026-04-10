import { assetPath, SITE } from "./constants";

export const defaultMetadata = {
  metadataBase: new URL(SITE.url),
  title: SITE.title,
  description: SITE.description,
  openGraph: {
    title: SITE.title,
    description: SITE.description,
    url: SITE.url,
    siteName: SITE.name,
    images: [
      {
        url: assetPath("/images/cover.png"),
        width: 1200,
        height: 630,
        alt: "DesertLaunch cover",
      },
    ],
    locale: SITE.locale,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.title,
    description: SITE.description,
    images: [assetPath("/images/cover.png")],
  },
  alternates: {
    canonical: SITE.url,
  },
};
