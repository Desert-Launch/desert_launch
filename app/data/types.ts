// The single content contract for the whole site. Every locale dictionary
// (en/ar/fr/es/de) implements `Dictionary`; every section component reads from
// it. Adding a field means updating this interface AND all five dictionaries —
// TypeScript enforces that they stay in sync.
//
// Language-neutral structure (which projects exist, their screenshots, store
// URLs, which services have a dedicated page) lives in `projects.ts` and
// `services.ts`. The dictionaries carry only translatable strings, keyed by the
// same ids, so a locale can never drift out of structural parity.

export type Lang = "en" | "ar" | "fr" | "es" | "de";

/** Locales that also have the long-form sub-pages (services, case studies,
 *  about, legal). The home page exists in all five. */
export type PageLang = Extract<Lang, "en" | "ar">;

export type Dir = "ltr" | "rtl";

/** Icon keys resolved to SVGs in `data/icons.tsx` (language-neutral). */
export type IconKey =
  | "mobile"
  | "web"
  | "mvp"
  | "design"
  | "modernize"
  | "consulting"
  | "quote"
  | "ownership"
  | "support"
  | "direct";

/** Stable ids for the shipped products. Also the case-study slugs. */
export type ProjectId =
  | "q-fight-gym"
  | "al-muslim"
  | "ezhal"
  | "xera-lab"
  | "fastap"
  | "jaweb"
  | "iccd-hub"
  | "voicers";

/** Stable ids for the service offering. */
export type ServiceId =
  | "mobile"
  | "web"
  | "mvp"
  | "design"
  | "modernize"
  | "consulting";

export interface NavItem {
  label: string;
  href: string;
}

export interface Cta {
  label: string;
  /** Full href. For WhatsApp links, build with `wa()` from shared.ts. */
  href: string;
  external?: boolean;
}

export interface Meta {
  title: string;
  description: string;
  /** OpenGraph locale, e.g. "en_US", "ar_EG". */
  ogLocale: string;
  /** Localized alt text for the shared OG image. */
  ogImageAlt: string;
}

export interface ProofStat {
  label: string;
  value: string;
  note: string;
}

export interface IconCard {
  icon: IconKey;
  title: string;
  body: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

// --- Header ---------------------------------------------------------------

export interface HeaderCopy {
  tagline: string;
  emailUs: string;
  /** Short primary action used in the sticky header. */
  startProject: Cta;
  /** Short code shown in the language toggle, e.g. "EN". */
  langCode: string;
  langAria: string;
  menuOpen: string;
  menuClose: string;
  mobileLangLabel: string;
}

// --- Hero -----------------------------------------------------------------

export interface HeroCopy {
  eyebrow: string;
  title: string;
  lead: string;
  tags: string[];
  primary: Cta;
  secondary: Cta;
  responseNote: string;
  /** The device composition built from real product screenshots. */
  showcase: {
    /** Badge above the frames, e.g. "Live on the App Store and Google Play". */
    badge: string;
    caption: string;
    /** Accessible name for the whole composition. */
    label: string;
  };
  proof: ProofStat[];
}

// --- Work -----------------------------------------------------------------

/** The translatable half of a project. The screenshots, logo, store URLs and
 *  ordering live in `projects.ts` under the same `ProjectId`. */
export interface ProjectCopy {
  /** Short category label shown as the card tag. */
  tag: string;
  logoAlt: string;
  summary: string;
  points: string[];
  /** One alt per screenshot in `projects.ts`, in the same order. */
  shotAlts: string[];
  /** Pre-filled WhatsApp message used by this project's CTA. */
  waMessage: string;
}

export interface WorkCopy {
  kicker: string;
  title: string;
  intro: string;
  /** Honest attribution for the portfolio — who built what, and under which
   *  relationship. Rendered directly under the section intro. */
  attribution: string;
  /** Accessible name for the auto-scrolling product strip. */
  logosLabel: string;
  logosPause: string;
  logosPlay: string;
  /** Disclosure label for the projects that are not featured. */
  moreLabel: string;
  /** Link label on cards that have a dedicated case study. */
  caseStudyCta: string;
  /** Link label on cards that do not. */
  similarCta: string;
  storeLabels: { appStore: string; googlePlay: string };
  /** Status chips, keyed by the `status` field in `projects.ts`. */
  statusLabels: { live: string; delivered: string; inHouse: string };
  projects: Record<ProjectId, ProjectCopy>;
}

// --- Services -------------------------------------------------------------

export interface ServiceCopy {
  title: string;
  body: string;
  /** One-line concrete deliverable, shown under the body. */
  deliverable: string;
  /** Typical duration, e.g. "2–4 weeks". */
  timeline: string;
}

export interface ServicesCopy {
  kicker: string;
  title: string;
  intro: string;
  items: Record<ServiceId, ServiceCopy>;
  /** Link label on services that have a dedicated page. */
  learnMore: string;
  timelineLabel: string;
  stackLabel: string;
  stack: string[];
  primary: Cta;
  secondary: Cta;
}

// --- Why us ---------------------------------------------------------------

export interface WhyCopy {
  kicker: string;
  title: string;
  intro: string;
  /** The four commercial differentiators, not adjectives. */
  features: IconCard[];
  founder: {
    kicker: string;
    name: string;
    role: string;
    body: string;
    photo: string;
    photoAlt: string;
    facts: string[];
    /** Link to the About page. Only rendered for locales that have one. */
    moreLabel: string;
  };
  band: {
    kicker: string;
    body: string;
    points: string[];
    cta: Cta;
  };
}

// --- Process --------------------------------------------------------------

export interface ProcessStep {
  n: string;
  title: string;
  body: string;
  /** What the client receives at the end of this step. */
  deliverable: string;
}

export interface ProcessCopy {
  kicker: string;
  title: string;
  intro: string;
  deliverableLabel: string;
  steps: ProcessStep[];
}

// --- Testimonials ---------------------------------------------------------

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  photo: string;
}

export interface TestimonialsCopy {
  kicker: string;
  title: string;
  intro: string;
  /** Source label rendered on every card, e.g. "LinkedIn recommendation". */
  sourceLabel: string;
  items: Testimonial[];
}

// --- FAQ ------------------------------------------------------------------

export interface FaqCopy {
  kicker: string;
  title: string;
  intro: string;
  updated: string;
  items: FaqItem[];
}

// --- Contact --------------------------------------------------------------

export interface ContactCopy {
  kicker: string;
  title: string;
  intro: string;
  highlights: string[];
  primary: Cta;
  secondary: Cta;
  /** Shown only on non-Arabic pages: "we speak Arabic". */
  arabicNote: string;
  direct: {
    heading: string;
    body: string;
    whatsapp: { label: string; value: string };
    email: { label: string; value: string };
    phone: { label: string; value: string };
    location: { label: string; value: string };
    hours: { label: string; value: string };
  };
  form: {
    heading: string;
    body: string;
    name: string;
    namePlaceholder: string;
    reply: string;
    replyPlaceholder: string;
    replyHelp: string;
    projectType: string;
    projectTypePlaceholder: string;
    projectTypeOptions: string[];
    budget: string;
    budgetPlaceholder: string;
    budgetOptions: string[];
    budgetHelp: string;
    timeline: string;
    timelinePlaceholder: string;
    timelineOptions: string[];
    summary: string;
    summaryPlaceholder: string;
    requiredMark: string;
    optionalMark: string;
    submitWhatsapp: string;
    submitEmail: string;
    /** Transient states announced in the live region. */
    sending: string;
    opened: string;
    blocked: string;
    blockedLink: string;
    errors: {
      heading: string;
      name: string;
      reply: string;
      summary: string;
    };
    note: string;
    /** Localized lead-in used when composing the drafted brief message. */
    draftIntro: string;
    draftLabels: {
      name: string;
      reply: string;
      projectType: string;
      budget: string;
      timeline: string;
      summary: string;
    };
    emailSubject: string;
  };
}

// --- Footer ---------------------------------------------------------------

export interface FooterCopy {
  tagline: string;
  blurb: string;
  copyright: string;
  navHeading: string;
  navLinks: { label: string; sub: string; href: string }[];
  langHeading: string;
  contactHeading: string;
  contactLinks: Cta[];
  contactSub: string[];
  /** Honest legal / identity block. */
  identity: {
    heading: string;
    /** What the business actually is, in one sentence. */
    body: string;
    addressLabel: string;
    address: string;
    /** Links to /privacy/ and /terms/ where those pages exist. */
    links: { label: string; slug: string }[];
  };
  note: string;
}

// --- Accessibility labels -------------------------------------------------

/** Every accessible name that is not already visible text. These used to be
 *  hard-coded English in the components, which meant Arabic screen-reader users
 *  heard English landmark names. */
export interface A11yCopy {
  home: string;
  primaryNav: string;
  mobileNav: string;
  footerNav: string;
  breadcrumb: string;
  proofPoints: string;
  heroTags: string;
  techStack: string;
  projectStack: string;
  founderPanel: string;
  founderFacts: string;
  engagementPoints: string;
  briefBenefits: string;
  companySummary: string;
  quickNav: string;
  directContact: string;
  /** Appended to links that open a new tab, for screen readers only. */
  newTab: string;
}

// --- Strings shared by the sub-pages --------------------------------------

export interface CommonCopy {
  home: string;
  servicesLabel: string;
  workLabel: string;
  readCaseStudy: string;
  allWork: string;
  allServices: string;
  relatedWork: string;
  relatedServices: string;
  faqHeading: string;
  onThisPage: string;
  published: string;
  lastUpdated: string;
  backHome: string;
  notFound: {
    title: string;
    body: string;
  };
}

// --- The dictionary -------------------------------------------------------

export interface Dictionary {
  lang: Lang;
  dir: Dir;
  meta: Meta;
  nav: NavItem[];
  header: HeaderCopy;
  hero: HeroCopy;
  work: WorkCopy;
  services: ServicesCopy;
  why: WhyCopy;
  process: ProcessCopy;
  testimonials: TestimonialsCopy;
  faq: FaqCopy;
  contact: ContactCopy;
  footer: FooterCopy;
  a11y: A11yCopy;
  common: CommonCopy;
  floatingWhatsApp: string;
  skipToContent: string;
}
