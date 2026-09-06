import { en } from "@/app/data/en";
import { dict } from "@/app/data/copy";
import type { Dictionary, Lang, PageLang, ProjectId } from "@/app/data/types";
import {
  SITE_URL,
  ORG,
  FOUNDER,
  EMAIL,
  PHONE_INTL,
  CONTENT_UPDATED,
  localeUrl,
  localeByCode,
} from "@/app/data/shared";
import { PROJECTS_BY_ID, STORE_PROJECTS } from "@/app/data/projects";
import { SERVICES } from "@/app/data/services";

const ORG_ID = `${SITE_URL}/#organization`;
const FOUNDER_ID = `${SITE_URL}/#founder`;
const WEBSITE_ID = `${SITE_URL}/#website`;

const ORG_DESCRIPTION =
  "Desert Launch is a software development company in Cairo, Egypt. It builds custom mobile apps (Flutter, iOS and Android), web platforms, MVPs and internal business systems for clients in Egypt, the Gulf, Europe and the US — with a fixed quote before commitment, milestone payments, full code ownership and a year of free support on every project.";

const SLOGAN = "Mobile apps and web platforms, engineered in Cairo.";

/** App-store category values, from schema.org's documented enumeration. The
 *  previous value, "MobileApplication", is a *type* name rather than a category
 *  and validated as an unrecognised category. */
const APP_CATEGORY: Partial<Record<ProjectId, string>> = {
  "al-muslim": "LifestyleApplication",
  "q-fight-gym": "HealthApplication",
};

/** The language-neutral entity graph: Organization, the founder, the WebSite,
 *  the service catalogue and the published apps. Rendered once per document in
 *  `LocaleShell`; every page-level node references these by `@id` instead of
 *  repeating them.
 *
 *  NOTE: no `aggregateRating` on our own Organization — Google treats
 *  self-serving review markup as a violation. */
export function entityGraph() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        // ProfessionalService already inherits LocalBusiness and Organization;
        // listing it alongside Organization keeps tools that key on the broader
        // type matching, without the redundant third entry.
        "@type": ["Organization", "ProfessionalService"],
        "@id": ORG_ID,
        name: ORG.name,
        alternateName: ORG.alternateName,
        url: `${SITE_URL}/`,
        logo: ORG.logo,
        image: ORG.image,
        slogan: SLOGAN,
        description: ORG_DESCRIPTION,
        email: EMAIL,
        telephone: PHONE_INTL,
        currenciesAccepted: ORG.currenciesAccepted,
        address: {
          "@type": "PostalAddress",
          addressLocality: ORG.addressLocality,
          addressRegion: ORG.addressRegion,
          addressCountry: ORG.addressCountry,
        },
        areaServed: ORG.areaServed,
        knowsLanguage: ORG.knowsLanguage,
        knowsAbout: ORG.knowsAbout,
        founder: { "@id": FOUNDER_ID },
        employee: { "@id": FOUNDER_ID },
        contactPoint: [
          {
            "@type": "ContactPoint",
            contactType: "sales",
            telephone: PHONE_INTL,
            email: EMAIL,
            availableLanguage: ["English", "Arabic"],
            areaServed: ORG.areaServed,
          },
          {
            "@type": "ContactPoint",
            contactType: "customer support",
            email: EMAIL,
            availableLanguage: ["English", "Arabic"],
          },
        ],
        ...(ORG.sameAs.length ? { sameAs: ORG.sameAs } : {}),
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Software development services",
          itemListElement: SERVICES.map((service) => {
            const copy = en.services.items[service.id];
            return {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: copy.title,
                serviceType: copy.title,
                description: copy.body,
                provider: { "@id": ORG_ID },
                areaServed: ORG.areaServed,
                ...(service.slug
                  ? { url: `${SITE_URL}/services/${service.slug}/` }
                  : {}),
              },
            };
          }),
        },
      },
      {
        "@type": "Person",
        "@id": FOUNDER_ID,
        name: FOUNDER.name,
        alternateName: FOUNDER.nameAr,
        jobTitle: FOUNDER.jobTitle,
        description:
          "Senior software engineer and founder of Desert Launch. Builds production web and mobile products for clients across Egypt, the Gulf, Europe and the US.",
        image: FOUNDER.image,
        url: `${SITE_URL}/about/`,
        mainEntityOfPage: `${SITE_URL}/about/`,
        worksFor: { "@id": ORG_ID },
        knowsAbout: ORG.knowsAbout,
        knowsLanguage: ORG.knowsLanguage,
        homeLocation: {
          "@type": "Place",
          name: "Cairo, Egypt",
          address: {
            "@type": "PostalAddress",
            addressLocality: ORG.addressLocality,
            addressCountry: ORG.addressCountry,
          },
        },
        sameAs: FOUNDER.sameAs,
      },
      {
        "@type": "WebSite",
        "@id": WEBSITE_ID,
        url: `${SITE_URL}/`,
        name: ORG.name,
        alternateName: ORG.alternateName,
        publisher: { "@id": ORG_ID },
        inLanguage: ["en", "ar", "fr", "es", "de"],
      },
      ...STORE_PROJECTS.map((app) => {
        const stores = [app.store?.appStore, app.store?.googlePlay].filter(Boolean) as string[];
        return {
          "@type": "MobileApplication",
          name: app.name,
          operatingSystem: "iOS, Android",
          applicationCategory: APP_CATEGORY[app.id] ?? "BusinessApplication",
          offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
          creator: { "@id": ORG_ID },
          ...(stores.length
            ? { downloadUrl: stores.length === 1 ? stores[0] : stores }
            : {}),
        };
      }),
    ],
  };
}

/** Shared shape for a page node. */
function webPage(
  lang: Lang,
  path: string,
  name: string,
  description: string,
  extra: Record<string, unknown> = {}
) {
  const url = localeUrl(lang, path);
  return {
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name,
    description,
    inLanguage: localeByCode(lang).hreflang,
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": ORG_ID },
    publisher: { "@id": ORG_ID },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: ORG.ogImage,
      width: 1200,
      height: 630,
    },
    dateModified: CONTENT_UPDATED,
    ...extra,
  };
}

/** Every `item` has to be a URL that actually resolves, so callers pass the
 *  resolved URL rather than a path this helper might guess wrong. */
function breadcrumbs(trail: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function homePageSchema(lang: Lang) {
  const t = dict(lang);
  return {
    "@context": "https://schema.org",
    ...webPage(lang, "", t.meta.title, t.meta.description, {
      mainEntity: { "@id": ORG_ID },
    }),
  };
}

/** Per-locale FAQPage built from the page's own FAQ so the localized Q&A and
 *  the structured data can never drift apart. The answer text is `item.a`
 *  verbatim — Google requires the markup to carry the complete question and
 *  answer as shown on the page. */
export function faqSchema(t: Dictionary, lang: Lang, path = "") {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${localeUrl(lang, path)}#faq`,
    isPartOf: { "@id": `${localeUrl(lang, path)}#webpage` },
    inLanguage: localeByCode(lang).hreflang,
    mainEntity: t.faq.items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

export function servicePageSchema({
  lang,
  slug,
  title,
  description,
  serviceName,
  serviceDescription,
  faq,
  crumbLabels,
}: {
  lang: PageLang;
  slug: string;
  title: string;
  description: string;
  serviceName: string;
  serviceDescription: string;
  faq: { q: string; a: string }[];
  crumbLabels: { home: string; services: string; current: string };
}) {
  const path = `services/${slug}`;
  const url = localeUrl(lang, path);
  const meta = SERVICES.find((s) => s.slug === slug);

  return [
    { "@context": "https://schema.org", ...webPage(lang, path, title, description) },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${url}#service`,
      name: serviceName,
      serviceType: serviceName,
      description: serviceDescription,
      url,
      provider: { "@id": ORG_ID },
      areaServed: ORG.areaServed,
      availableLanguage: ["English", "Arabic"],
      ...(meta?.related.length
        ? {
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: serviceName,
              itemListElement: meta.related.map((id) => ({
                "@type": "Offer",
                itemOffered: {
                  "@type": "CreativeWork",
                  name: PROJECTS_BY_ID[id].name,
                },
              })),
            },
          }
        : {}),
    },
    ...(faq.length
      ? [
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "@id": `${url}#faq`,
            isPartOf: { "@id": `${url}#webpage` },
            mainEntity: faq.map((item) => ({
              "@type": "Question",
              name: item.q,
              acceptedAnswer: { "@type": "Answer", text: item.a },
            })),
          },
        ]
      : []),
    breadcrumbs([
      { name: crumbLabels.home, url: localeUrl(lang, "") },
      { name: crumbLabels.services, url: localeUrl(lang, "services") },
      { name: crumbLabels.current, url },
    ]),
  ];
}

/** The /services/ hub. Its existence is what makes the service breadcrumbs
 *  point at a URL that resolves. */
export function servicesIndexSchema({
  lang,
  title,
  description,
  crumbLabels,
}: {
  lang: PageLang;
  title: string;
  description: string;
  crumbLabels: { home: string; current: string };
}) {
  const url = localeUrl(lang, "services");
  return [
    {
      "@context": "https://schema.org",
      ...webPage(lang, "services", title, description, {
        "@type": "CollectionPage",
        mainEntity: {
          "@type": "ItemList",
          itemListElement: SERVICES.filter((s) => s.slug).map((s, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: en.services.items[s.id].title,
            url: localeUrl(lang, `services/${s.slug}`),
          })),
        },
      }),
    },
    breadcrumbs([
      { name: crumbLabels.home, url: localeUrl(lang, "") },
      { name: crumbLabels.current, url },
    ]),
  ];
}

export function caseStudySchema({
  lang,
  projectId,
  title,
  description,
  published,
  crumbLabels,
}: {
  lang: PageLang;
  projectId: ProjectId;
  title: string;
  description: string;
  published: string;
  crumbLabels: { home: string; work: string; current: string };
}) {
  const path = `work/${projectId}`;
  const url = localeUrl(lang, path);
  const project = PROJECTS_BY_ID[projectId];

  return [
    {
      "@context": "https://schema.org",
      ...webPage(lang, path, title, description, {
        datePublished: published,
      }),
    },
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "@id": `${url}#article`,
      headline: title,
      description,
      mainEntityOfPage: { "@id": `${url}#webpage` },
      author: { "@id": FOUNDER_ID },
      publisher: { "@id": ORG_ID },
      datePublished: published,
      dateModified: CONTENT_UPDATED,
      inLanguage: localeByCode(lang).hreflang,
      image: [`${SITE_URL}${project.logo}`],
      about: {
        "@type": "SoftwareApplication",
        name: project.name,
        applicationCategory: APP_CATEGORY[project.id] ?? "BusinessApplication",
        operatingSystem: project.store ? "iOS, Android" : undefined,
        creator: { "@id": ORG_ID },
      },
    },
    breadcrumbs([
      { name: crumbLabels.home, url: localeUrl(lang, "") },
      // There is no /work/ index page; the portfolio lives in a section of the
      // home page, and that anchor is the URL a visitor actually lands on.
      { name: crumbLabels.work, url: `${localeUrl(lang, "")}#work` },
      { name: crumbLabels.current, url },
    ]),
  ];
}

export function simplePageSchema({
  lang,
  slug,
  title,
  description,
  crumbLabels,
  isAbout = false,
}: {
  lang: PageLang;
  slug: string;
  title: string;
  description: string;
  crumbLabels: { home: string; current: string };
  isAbout?: boolean;
}) {
  return [
    {
      "@context": "https://schema.org",
      ...webPage(lang, slug, title, description, {
        ...(isAbout ? { "@type": "AboutPage", mainEntity: { "@id": ORG_ID } } : {}),
      }),
    },
    breadcrumbs([
      { name: crumbLabels.home, url: localeUrl(lang, "") },
      { name: crumbLabels.current, url: localeUrl(lang, slug) },
    ]),
  ];
}
