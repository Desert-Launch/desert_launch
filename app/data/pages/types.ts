import type { FaqItem, IndustryId } from "../types";

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

/** The /demos/ page. The per-demo copy (tag, summary, flows) comes from the
 *  locale dictionary so the page and the home section cannot disagree. */
export interface DemosPageCopy {
  meta: PageMeta;
  breadcrumb: string;
  h1: string;
  lead: string;
  /** How to use a demo, in three steps. */
  stepsTitle: string;
  steps: { title: string; body: string }[];
  gridTitle: string;
  sections: PageSection[];
  faq: FaqItem[];
  cta: PageCta;
}

/** One industry page (`/industries/<id>/`). Written for the owner of that kind
 *  of business, in the words they search with; the live demo is the proof. */
export interface IndustryPageCopy {
  meta: PageMeta;
  breadcrumb: string;
  /** Short name for cards and chips, e.g. "Clinics & dental practices". */
  name: string;
  /** Descriptive anchor text other pages use to link here, e.g. "Clinic
   *  websites". Never "click here", never the brand. */
  linkLabel: string;
  /** One sentence for the hub card and llms.txt. */
  summary: string;
  kicker: string;
  h1: string;
  lead: string;
  /** The demo block right under the header: why to open it, what to try. */
  demo: { title: string; body: string };
  sections: PageSection[];
  faq: FaqItem[];
  cta: PageCta;
  /** Structured-data fields for the `Service` node. */
  schema: {
    serviceName: string;
    description: string;
    /** Who the service is for — `audience.audienceType`. */
    audience: string;
  };
}

/** The /industries/ hub. */
export interface IndustriesHubCopy {
  meta: PageMeta;
  breadcrumb: string;
  h1: string;
  lead: string;
  /** Label on each card's demo count line, e.g. "Live demo". */
  demoLabel: string;
  /** For the kind of business that has no page yet. */
  other: { title: string; body: string };
  cta: PageCta;
}

export interface SimplePageCopy {
  meta: PageMeta;
  breadcrumb: string;
  h1: string;
  lead: string;
  sections: PageSection[];
  /** Optional Q&A, rendered under the sections and emitted as `FAQPage`.
   *  The pricing page carries one; the legal pages do not. */
  faq?: FaqItem[];
  cta?: PageCta;
}

export type ServiceSlug =
  // The six offerings.
  | "mobile-app-development"
  | "web-development"
  | "mvp-development"
  | "ui-ux-design"
  | "rebuilds-and-modernization"
  | "technical-consulting"
  // Use-case pages, written in the words a buyer searches with rather than the
  // category name we would use ourselves.
  | "gym-booking-app"
  | "field-service-management-app"
  | "lab-and-clinic-management-system";

export type IndustrySlug = IndustryId;

export type CaseSlug = "q-fight-gym" | "al-muslim" | "ezhal" | "xera-lab";

export interface PagesCopy {
  /** Labels shared by the page templates. */
  labels: {
    whoFor: string;
    onThisPage: string;
    atAGlance: string;
    attribution: string;
    /** Heading over the demo links on a service page. */
    tryDemo: string;
    /** Breadcrumb and nav label for the /industries/ hub. */
    industries: string;
    /** Heading over the industry links on the home demos section, the demos
     *  page, the services hub and the service pages. */
    byIndustry: string;
    /** Heading over the industry cards and links on the services hub and the
     *  service pages, and the footer's link to the hub. */
    industriesHeading: string;
    /** Heading over the service links on an industry page. */
    servicesForIndustry: string;
  };
  services: Record<ServiceSlug, ServicePageCopy>;
  cases: Record<CaseSlug, CaseStudyCopy>;
  about: SimplePageCopy;
  demos: DemosPageCopy;
  industries: {
    hub: IndustriesHubCopy;
    items: Record<IndustrySlug, IndustryPageCopy>;
  };
  pricing: SimplePageCopy;
  privacy: SimplePageCopy;
  terms: SimplePageCopy;
}
