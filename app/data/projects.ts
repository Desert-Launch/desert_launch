import type { ProjectId } from "./types";

/** The language-neutral half of the portfolio: which products exist, their
 *  screenshots, store URLs, stack and status. The translatable half (tag,
 *  summary, bullet points, image alt text) lives in each locale dictionary
 *  under the same `ProjectId`, so a locale can never fall out of parity.
 *
 *  `status` is deliberately factual:
 *    live      — published on the App Store and Google Play, linked below.
 *    delivered — built and handed to the client as a private system.
 *    inHouse   — our own product, not published.
 */
export type ProjectStatus = "live" | "delivered" | "inHouse";

export type ProjectMedia =
  | { kind: "contain" | "cover"; shots: string[] }
  | { kind: "stack"; stack: string[] };

export interface ProjectMeta {
  id: ProjectId;
  /** Brand name — shown untranslated in every locale. */
  name: string;
  logo: string;
  media: ProjectMedia;
  store?: { appStore?: string; googlePlay?: string };
  /** Technology chips, shown on the case-study page. */
  stack: string[];
  status: ProjectStatus;
  /** Featured projects fill the main grid; the rest sit behind a disclosure. */
  featured: boolean;
  /** Projects with a dedicated case-study page at /work/<id>/. */
  caseStudy: boolean;
  /** Year the work was delivered, when it is known. Omitted rather than
   *  guessed — an invented date is worse than no date. */
  year?: string;
}

export const PROJECTS: ProjectMeta[] = [
  {
    id: "q-fight-gym",
    name: "Q-Fight Gym",
    logo: "/assets/logo-qfightgym.webp",
    media: {
      kind: "cover",
      shots: [
        "/assets/qfightgym1.webp",
        "/assets/qfightgym2.webp",
        "/assets/qfightgym3.webp",
      ],
    },
    store: {
      appStore: "https://apps.apple.com/us/app/q-fight-gym/id6759147399",
      googlePlay: "https://play.google.com/store/apps/details?id=com.qfightgym.app",
    },
    stack: ["Flutter", "Firebase", "Payment gateway", "iOS", "Android"],
    status: "live",
    featured: true,
    caseStudy: true,
  },
  {
    id: "al-muslim",
    name: "Al-Muslim",
    logo: "/assets/logo-almuslim.webp",
    media: {
      kind: "cover",
      shots: [
        "/assets/almuslim2.webp",
        "/assets/almuslim3.webp",
        "/assets/almuslim4.webp",
      ],
    },
    store: {
      appStore:
        "https://apps.apple.com/us/app/al-muslim-%D8%A7%D9%84%D9%85%D8%B3%D9%84%D9%85/id6757352101",
      googlePlay: "https://play.google.com/store/apps/details?id=com.elmuslim.app",
    },
    stack: ["Flutter", "Push notifications", "Geolocation", "iOS", "Android"],
    status: "live",
    featured: true,
    caseStudy: true,
  },
  {
    id: "ezhal",
    name: "Ezhal",
    logo: "/assets/logo-ezhal.webp",
    media: { kind: "contain", shots: ["/assets/ezhal1.webp"] },
    stack: [
      "Flutter",
      "Riverpod",
      "Firebase",
      "MyFatoorah",
      "Stripe",
      "Apple Wallet",
    ],
    status: "delivered",
    featured: true,
    caseStudy: true,
  },
  {
    id: "xera-lab",
    name: "Xera Lab",
    logo: "/assets/logo-xeralab.webp",
    media: {
      kind: "stack",
      stack: ["Flutter Web", "Node.js", "PostgreSQL", "Docker", "AWS"],
    },
    stack: [
      "Flutter Web",
      "Node.js",
      "PostgreSQL",
      "JWT",
      "AWS S3",
      "Docker Compose",
      "Nginx",
    ],
    status: "delivered",
    featured: true,
    caseStudy: true,
  },
  {
    id: "fastap",
    name: "FasTap",
    logo: "/assets/logo-fastap.webp",
    media: {
      kind: "contain",
      shots: ["/assets/fastab1.webp", "/assets/fastab2.webp", "/assets/fastab3.webp"],
    },
    stack: ["Flutter", "Flutter Web", "NFC", "Firebase", "Nginx"],
    status: "delivered",
    featured: false,
    caseStudy: false,
  },
  {
    id: "jaweb",
    name: "Jaweb",
    logo: "/assets/logo-jaweb.webp",
    media: {
      kind: "contain",
      shots: ["/assets/jaweb1.png"],
    },
    stack: ["Flutter", "Clean architecture", "MyFatoorah"],
    status: "delivered",
    featured: false,
    caseStudy: false,
  },
  {
    id: "iccd-hub",
    name: "ICCD Hub",
    logo: "/assets/logo-iccd.webp",
    media: {
      kind: "contain",
      shots: ["/assets/iccd1.webp", "/assets/iccd2.webp", "/assets/iccd3.webp"],
    },
    stack: [
      "Flutter",
      "Firebase",
      "Google & Apple sign-in",
      "Deep linking",
      "EN/AR RTL",
    ],
    status: "delivered",
    featured: false,
    caseStudy: false,
  },
  {
    id: "voicers",
    name: "Voicers",
    logo: "/assets/logo-voicers.webp",
    media: {
      kind: "contain",
      shots: ["/assets/voicers1.webp", "/assets/voicers2.webp", "/assets/voicers3.webp"],
    },
    stack: ["Flutter", "Clean architecture", "Live audio", "EN/AR"],
    status: "inHouse",
    featured: false,
    caseStudy: false,
  },
];

export const PROJECTS_BY_ID: Record<ProjectId, ProjectMeta> = Object.fromEntries(
  PROJECTS.map((p) => [p.id, p])
) as Record<ProjectId, ProjectMeta>;

export const FEATURED_PROJECTS = PROJECTS.filter((p) => p.featured);
export const MORE_PROJECTS = PROJECTS.filter((p) => !p.featured);
export const CASE_STUDIES = PROJECTS.filter((p) => p.caseStudy);

/** Products published on a public app store — the only portfolio claim a
 *  visitor can verify in one tap, and the source for the SoftwareApplication
 *  JSON-LD nodes. */
export const STORE_PROJECTS = PROJECTS.filter((p) => p.store);

/** Screenshots used by the hero device composition, most-verifiable first. */
export const HERO_SHOWCASE: { projectId: ProjectId; src: string }[] = [
  { projectId: "al-muslim", src: "/assets/almuslim2.webp" },
  { projectId: "q-fight-gym", src: "/assets/qfightgym1.webp" },
  { projectId: "voicers", src: "/assets/voicers2.webp" },
];
