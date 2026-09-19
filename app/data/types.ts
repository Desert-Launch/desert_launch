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
  | "booking"
  | "dispatch"
  | "records"
  | "facebook"
  | "instagram"
  | "tooth"
  | "stethoscope"
  | "dumbbell"
  | "coffee"
  | "utensils"
  | "building"
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

/** Stable ids for the live demos. Also the subdomain each one lives on
 *  (`<id>.demos.desertlaunch.dev`) and the utm_campaign its bar sends back. */
export type DemoId = "dental" | "medical" | "gym" | "cafe" | "restaurant" | "realestate";

/** Stable ids for the service offering. */
export type ServiceId =
  | "mobile"
  | "web"
  | "mvp"
  | "design"
  | "modernize"
  | "consulting"
  // Use-case offerings. These are pages rather than home-page cards: a buyer
  // searching for "gym booking app" is describing their own problem, not
  // browsing a service menu, and the menu stays six clear items.
  | "gymBooking"
  | "fieldService"
  | "clinicLab";

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

export interface FaqItem {
  q: string;
  a: string;
}

// --- Header ---------------------------------------------------------------

export interface HeaderCopy {
  tagline: string;
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
  primary: Cta;
  secondary: Cta;
  responseNote: string;
  /** The animated "journey loop" beside the headline: six stages from idea
   *  to support, cycling through the states a project passes through. All
   *  of its micro-copy — even the mock UI's labels — is here so the Arabic
   *  page animates in Arabic. */
  journey: JourneyCopy;
  /** Four proof figures in the band under the hero. */
  proof: ProofStat[];
}

export interface JourneyCopy {
  /** Accessible name for the whole animation. */
  label: string;
  statusLabel: string;
  /** The four status lines, in stage order. */
  statuses: [string, string, string, string];
  stageLabel: string;
  /** Idea, Scope, Design, Build, Launch, Support. */
  stages: [string, string, string, string, string, string];
  /** The mock browser's address. */
  url: string;
  /** The scattered pre-project artefacts: a spreadsheet, a chat thread… */
  fragments: [string, string, string, string];
  scope: { title: string; lines: [string, string, string] };
  /** The mock dashboard. Customer names are numbered on purpose — a mock
   *  must never read as a real person. */
  ui: {
    app: string;
    nav: [string, string, string, string];
    headline: string;
    live: string;
    rows: [{ label: string; state: string }, { label: string; state: string }];
  };
  phone: { title: string; slot: string; slotNote: string; day: string; cta: string };
  captions: {
    idle: string;
    milestones: string;
    terms: string;
    live: string;
    liveNote: string;
    since: string;
    sinceValue: string;
  };
  /** Alt text for the two real screenshots the loop ends on. */
  alts: [string, string];
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
  /** The three-line case row on the home page: only the projects flagged
   *  `homeCase` in `projects.ts` carry one. Every line must be something the
   *  case study already says. */
  case?: { problem: string; built: string; outcome: string };
}

export interface WorkCopy {
  kicker: string;
  title: string;
  intro: string;
  /** Honest attribution for the portfolio — who built what, and under which
   *  relationship. Rendered directly under the section intro. */
  attribution: string;
  /** Row labels on a case: Problem / We built / Outcome. */
  caseLabels: { problem: string; built: string; outcome: string };
  /** Heading over the small cards for the projects without a case row. */
  moreHeading: string;
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
  /** Heading for the use-case pages on the /services/ hub — the ones written
   *  for a kind of business rather than a category of work. */
  useCases: { title: string; intro: string };
  /** Link label on services that have a dedicated page. */
  learnMore: string;
  timelineLabel: string;
  stackLabel: string;
  stack: string[];
  primary: Cta;
  secondary: Cta;
}

// --- Live demos -----------------------------------------------------------

export interface DemoCopy {
  /** Kind of business and city — the line under the (untranslated) name. */
  tag: string;
  summary: string;
  /** The things a visitor can actually do in it. Every entry must be a flow
   *  that exists in the demo; the READMEs in each demo repo are the source. */
  flows: string[];
}

export interface DemosCopy {
  kicker: string;
  title: string;
  intro: string;
  /** Plain statement that the businesses are invented and the data resets. */
  disclaimer: string;
  items: Record<DemoId, DemoCopy>;
  /** Link labels on every card. */
  siteCta: string;
  adminCta: string;
  /** Accessible name for the flow-chip list, and the language line. */
  flowsLabel: string;
  langs: Record<"en" | "ar", string>;
  /** Short link labels for the row layout on the home page. */
  siteShort: string;
  adminShort: string;
  /** Link to the long-form /demos/ page, shown where that page exists. */
  pageLink: string;
}

// --- Investment brackets --------------------------------------------------

export interface PricingCopy {
  kicker: string;
  title: string;
  intro: string;
  labels: { typical: string; youGet: string; fits: string };
  /** Four brackets, low to high. `range` matches the brief form's budget
   *  options; the rest says what that money typically buys. */
  brackets: { range: string; summary: string; typical: string; youGet: string; fits: string }[];
  /** The three commercial constants under the brackets. */
  checks: string[];
  /** Link label to /pricing/, shown where that page exists. */
  link: string;
}

// --- Why us ---------------------------------------------------------------

/** One commitment: numbered, with the usual practice it replaces. */
export interface WhyFeature {
  title: string;
  body: string;
  /** The industry default, shown struck through. */
  before: string;
  /** What we do instead. */
  after: string;
}

export interface WhyCopy {
  kicker: string;
  title: string;
  /** The four commercial differentiators, not adjectives. */
  features: WhyFeature[];
  founder: {
    kicker: string;
    /** The one-sentence promise above the bio. */
    title: string;
    name: string;
    role: string;
    body: string;
    photo: string;
    photoAlt: string;
    facts: string[];
    /** Link to the About page. Only rendered for locales that have one. */
    moreLabel: string;
    linkedinLabel: string;
  };
}

// --- Process --------------------------------------------------------------

export interface ProcessStep {
  n: string;
  title: string;
  /** Small chip beside the title: "Free · no obligation", "Fixed price in USD". */
  chip: string;
  /** What is paid at this step, in the gold label on the right. */
  payment: string;
  /** What the client brings. */
  youShare: string;
  /** What we do. */
  body: string;
  /** What the client receives at the end of this step. */
  deliverable: string;
}

export interface ProcessCopy {
  kicker: string;
  title: string;
  intro: string;
  /** Column labels: "You share", "We do", "You get". */
  youShareLabel: string;
  weDoLabel: string;
  deliverableLabel: string;
  /** The payment terms band above the timeline: one sentence and the four
   *  chips (free call → 30% → per milestone → 12 months). */
  terms: { note: string; steps: string[] };
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
  /** What happens after the message, in four numbered lines. */
  steps: { title: string; note: string }[];
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
    /** The non-client lane. Developers, partnerships and collaboration offers
     *  are welcome, but they do not belong in the WhatsApp line that client
     *  projects arrive on. Selecting this option appends it to the project-type
     *  list, routes the draft to email and relabels it, so both kinds of
     *  enquiry stay possible without competing for the same channel. */
    otherEnquiry: {
      option: string;
      note: string;
      draftIntro: string;
      emailSubject: string;
    };
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
      /** Shown when the field is empty. */
      reply: string;
      /** Shown when the field has a value that is neither an email address nor
       *  a usable phone number — without it, a typo produced a lead we could
       *  never reply to. */
      replyInvalid: string;
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
  navLinks: { label: string; href: string }[];
  langHeading: string;
  contactHeading: string;
  contactLinks: Cta[];
  /** Which enquiry goes down which channel. Keeps WhatsApp the client line
   *  without turning anyone away. */
  enquiryNote: string;
  /** Honest legal / identity block. */
  identity: {
    heading: string;
    /** What the business actually is, in one sentence. */
    body: string;
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
  techStack: string;
  projectStack: string;
  founderPanel: string;
  founderFacts: string;
  briefBenefits: string;
  companySummary: string;
  quickNav: string;
  directContact: string;
  /** Accessible name for the footer's social-profile row. */
  social: string;
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
  /** Link label for the /pricing/ page. */
  pricingLabel: string;
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
  demos: DemosCopy;
  pricing: PricingCopy;
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
