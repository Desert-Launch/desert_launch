// The single content contract for the whole site. Every locale dictionary
// (en/ar/fr/es/de) implements `Dictionary`; every section component reads from
// it. Adding a field means updating this interface AND all five dictionaries —
// TypeScript enforces that they stay in sync.

export type Lang = "en" | "ar" | "fr" | "es" | "de";
export type Dir = "ltr" | "rtl";

/** Icon keys resolved to SVGs in `data/icons.tsx` (language-neutral). */
export type IconKey =
  | "web"
  | "mobile"
  | "uiux"
  | "architecture"
  | "mvp"
  | "website"
  | "modernize"
  | "consulting"
  | "reliability"
  | "business"
  | "tailored"
  | "communication"
  | "dashboard"
  | "productized"
  | "flows"
  | "scalable";

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

export interface Shot {
  src: string;
  alt: string;
}

export interface Meta {
  title: string;
  description: string;
  /** OpenGraph locale, e.g. "en_US", "ar_AR". */
  ogLocale: string;
}

export interface ProofStat {
  label: string;
  value: string;
  note: string;
}

export interface HeroCopy {
  eyebrow: string;
  title: string;
  lead: string;
  tags: string[];
  primary: Cta;
  secondary: Cta;
  responseNote: string;
  image: Shot;
  imageCaption: string;
  sidePanel: {
    kicker: string;
    heading: string;
    body: string;
    points: string[];
  };
  proof: ProofStat[];
}

export interface IconCard {
  icon: IconKey;
  title: string;
  body: string;
}

/** A portfolio project. `media` decides how the top of the card renders. */
export interface Project {
  title: string;
  tag: string;
  logo: string;
  logoAlt: string;
  media:
    | { kind: "contain" | "cover"; shots: Shot[] }
    | { kind: "stack"; stack: string[] };
  summary: string;
  points: string[];
  links: Cta[];
}

/** A website redesign concept: one landscape shot, no app logo or store links. */
export interface RedesignCard {
  /** Sector + city label shown as the card tag, e.g. "Real Estate — Ajman". */
  label: string;
  title: string;
  summary: string;
  points: string[];
  image: Shot;
}

export interface WorkCopy {
  kicker: string;
  title: string;
  intro: string;
  capabilities: {
    kicker: string;
    title: string;
    body: string;
    points: string[];
  };
  capabilityCards: IconCard[];
  projects: Project[];
  redesigns: {
    title: string;
    intro: string;
    cards: RedesignCard[];
  };
}

export interface ServicesCopy {
  kicker: string;
  title: string;
  intro: string;
  items: IconCard[];
  stackLabel: string;
  stack: string[];
  primary: Cta;
  ghost: Cta;
}

export interface WhyCopy {
  kicker: string;
  title: string;
  intro: string;
  features: IconCard[];
  founder: {
    kicker: string;
    name: string;
    role: string;
    body: string;
    photo: string;
    photoAlt: string;
    facts: string[];
  };
  band: {
    kicker: string;
    body: string;
    points: string[];
    cta: Cta;
  };
}

export interface ProcessStep {
  n: string;
  title: string;
  body: string;
}

export interface ProcessCopy {
  kicker: string;
  title: string;
  intro: string;
  steps: ProcessStep[];
}

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
  items: Testimonial[];
}

export interface Plan {
  name: string;
  note?: string;
  body: string;
  points: string[];
  price: { main: string; sub: string };
  cta: Cta;
}

export interface PlansCopy {
  kicker: string;
  title: string;
  intro: string;
  items: Plan[];
}

export interface FaqItem {
  q: string;
  a: string;
  /** Shorter answer used only for the FAQPage JSON-LD (falls back to `a`). */
  schema?: string;
}

export interface FaqCopy {
  kicker: string;
  title: string;
  intro: string;
  items: FaqItem[];
}

export interface ContactCopy {
  kicker: string;
  title: string;
  intro: string;
  highlights: string[];
  primary: Cta;
  secondary: Cta;
  arabicNote: string;
  image: Shot;
  imageCaption: string;
  direct: {
    heading: string;
    body: string;
    whatsapp: { label: string; value: string };
    email: { label: string; value: string };
  };
  form: {
    name: string;
    namePlaceholder: string;
    company: string;
    companyPlaceholder: string;
    projectType: string;
    projectTypePlaceholder: string;
    projectTypeOptions: string[];
    timeline: string;
    timelinePlaceholder: string;
    timelineOptions: string[];
    summary: string;
    summaryPlaceholder: string;
    submitWhatsapp: string;
    submitEmail: string;
    note: string;
    /** Localized lead-in used when composing the drafted brief message. */
    draftIntro: string;
    draftLabels: {
      name: string;
      company: string;
      projectType: string;
      timeline: string;
      summary: string;
    };
    emailSubject: string;
  };
}

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
  note: string;
}

export interface HeaderCopy {
  tagline: string;
  emailUs: string;
  startProject: Cta;
  /** Short code shown in the language toggle, e.g. "EN". */
  langCode: string;
  langAria: string;
  menuOpen: string;
  menuClose: string;
  mobileLangLabel: string;
}

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
  plans: PlansCopy;
  faq: FaqCopy;
  contact: ContactCopy;
  footer: FooterCopy;
  floatingWhatsApp: string;
  skipToContent: string;
  backToTop: string;
}
