import type { FaqItem } from "../types";

/** Content contract for the long-form pages (services, case studies, about,
 *  legal). These exist in English and Arabic only; `PagesCopy` is implemented
 *  once per page locale so TypeScript keeps the two in structural parity. */

export interface PageMeta {
  title: string;
  description: string;
}

export interface PageSection {
  /** Anchor id, also used by the "on this page" list. */
  id: string;
  title: string;
  body?: string[];
  list?: string[];
  cards?: { title: string; body: string }[];
}

export interface PageCta {
  title: string;
  body: string;
  label: string;
  /** Pre-filled WhatsApp message, so an incoming chat says which page it came
   *  from without the visitor having to explain. */
  waMessage: string;
}

export interface ServicePageCopy {
  meta: PageMeta;
  breadcrumb: string;
  h1: string;
  lead: string;
  /** Short description used by the `Service` JSON-LD node. */
  schemaDescription: string;
  sections: PageSection[];
  faq: FaqItem[];
  cta: PageCta;
}

export interface CaseStudyCopy {
  meta: PageMeta;
  breadcrumb: string;
  h1: string;
  lead: string;
  facts: { label: string; value: string }[];
  sections: PageSection[];
  /** Who built it and under which relationship. Rendered on every case study. */
  attribution: string;
  cta: PageCta;
}

export interface SimplePageCopy {
  meta: PageMeta;
  breadcrumb: string;
  h1: string;
  lead: string;
  sections: PageSection[];
  cta?: PageCta;
}

export type ServiceSlug =
  | "mobile-app-development"
  | "web-development"
  | "mvp-development";

export type CaseSlug = "q-fight-gym" | "al-muslim" | "ezhal" | "xera-lab";

export interface PagesCopy {
  /** Labels shared by the page templates. */
  labels: {
    whoFor: string;
    onThisPage: string;
    atAGlance: string;
    attribution: string;
  };
  services: Record<ServiceSlug, ServicePageCopy>;
  cases: Record<CaseSlug, CaseStudyCopy>;
  about: SimplePageCopy;
  privacy: SimplePageCopy;
  terms: SimplePageCopy;
}
