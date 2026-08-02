import { en } from "@/app/data/en";
import type { Dictionary } from "@/app/data/types";
import { SITE_URL, ORG, FOUNDER, EMAIL, PHONE_INTL, STORE_APPS } from "@/app/data/shared";

const ORG_ID = `${SITE_URL}/#organization`;
const FOUNDER_ID = `${SITE_URL}/#founder`;
const WEBSITE_ID = `${SITE_URL}/#website`;

const ORG_DESCRIPTION =
  "Desert Launch is a software development company in Cairo, Egypt. It builds custom web platforms, mobile apps (Flutter, iOS and Android), MVPs, and internal business systems for clients in Egypt, the Gulf, Europe, and the US — with fixed quotes, milestone payments, and a year of free support on every project.";
const SLOGAN = "Replace manual work with a system that runs your business.";

/** The language-neutral entity @graph (Organization/LocalBusiness, founder
 *  Person, WebSite, service OfferCatalog, and published SoftwareApplications).
 *  Service catalog is derived from the EN dictionary so page and schema align.
 *  NOTE: no aggregateRating on our own Organization (Google self-serving rule). */
export function entityGraph() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        // ProfessionalService ⊂ LocalBusiness ⊂ Organization — all three are
        // declared so tools that key on the literal broader types still match.
        "@type": ["Organization", "LocalBusiness", "ProfessionalService"],
        "@id": ORG_ID,
        name: ORG.name,
        url: `${SITE_URL}/`,
        logo: ORG.logo,
        image: ORG.image,
        slogan: SLOGAN,
        description: ORG_DESCRIPTION,
        email: EMAIL,
        telephone: PHONE_INTL,
        address: {
          "@type": "PostalAddress",
          addressLocality: ORG.addressLocality,
          addressCountry: ORG.addressCountry,
        },
        areaServed: ORG.areaServed,
        knowsLanguage: ORG.knowsLanguage,
        founder: { "@id": FOUNDER_ID },
        contactPoint: [
          {
            "@type": "ContactPoint",
            contactType: "sales",
            telephone: PHONE_INTL,
            email: EMAIL,
            availableLanguage: ["English", "Arabic"],
          },
        ],
        ...(ORG.sameAs.length ? { sameAs: ORG.sameAs } : {}),
        knowsAbout: ORG.knowsAbout,
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Software development services",
          itemListElement: en.services.items.map((s) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: s.title,
              provider: { "@id": ORG_ID },
              description: s.body,
            },
          })),
        },
      },
      {
        "@type": "Person",
        "@id": FOUNDER_ID,
        name: FOUNDER.name,
        jobTitle: FOUNDER.jobTitle,
        worksFor: { "@id": ORG_ID },
        sameAs: FOUNDER.sameAs,
      },
      {
        "@type": "WebSite",
        "@id": WEBSITE_ID,
        url: `${SITE_URL}/`,
        name: ORG.name,
        publisher: { "@id": ORG_ID },
        inLanguage: ["en", "ar", "fr", "es", "de"],
      },
      ...STORE_APPS.map((app) => ({
        "@type": "SoftwareApplication",
        name: app.name,
        operatingSystem: app.os,
        applicationCategory: "MobileApplication",
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
        publisher: { "@id": ORG_ID },
        ...(app.appStore ? { downloadUrl: app.appStore } : {}),
      })),
    ],
  };
}

/** Per-locale FAQPage schema built from the page's own FAQ so the localized Q&A
 *  and the structured data never drift apart. The answer text is `item.a`
 *  verbatim — Google requires the structured data to carry the complete
 *  question and answer as shown on the page, so no shortened variant is used. */
export function faqSchema(t: Dictionary) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: t.faq.items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}
