import type { DemoId, IconKey, ProjectId, ServiceId } from "./types";

/** The language-neutral half of the service offering: which services exist, in
 *  what order, which icon each carries, which have a dedicated page, and which
 *  projects illustrate them. Titles and descriptions live in the dictionaries.
 *
 *  Six services, deliberately non-overlapping. The previous eight split
 *  "Custom Web Development" from "Business Website Development" and "System
 *  Architecture" from "Technical Consulting", which read as padding. */
export interface ServiceMeta {
  id: ServiceId;
  icon: IconKey;
  /** URL slug for the dedicated page. Undefined = section card only. */
  slug?: string;
  /** Projects shown as proof on the service page. */
  related: ProjectId[];
  /** Live demos a visitor can open from the service page. Only where a demo
   *  genuinely shows that service — a mobile-app page gets none. */
  demos?: DemoId[];
  /** Shown in the home page's service grid.
   *
   *  The use-case entries below are pages without a card. They exist because a
   *  business owner does not search for "mobile app development" — he searches
   *  for the problem he has, in his own words ("gym booking app", "software for
   *  a dental lab"). Those queries are unambiguous in a way the category terms
   *  are not: nobody looking for a job types them. Putting them on the home
   *  grid as well would turn six clear offerings into a wall of nine. */
  home: boolean;
}

export const SERVICES: ServiceMeta[] = [
  {
    id: "mobile",
    icon: "mobile",
    slug: "mobile-app-development",
    related: ["q-fight-gym", "al-muslim", "ezhal"],
    home: true,
  },
  {
    id: "web",
    icon: "web",
    slug: "web-development",
    related: ["xera-lab", "fastap"],
    demos: ["dental", "restaurant", "realestate"],
    home: true,
  },
  {
    id: "mvp",
    icon: "mvp",
    slug: "mvp-development",
    related: ["ezhal", "voicers"],
    demos: ["cafe"],
    home: true,
  },
  {
    id: "design",
    icon: "design",
    slug: "ui-ux-design",
    related: ["al-muslim", "fastap"],
    demos: ["restaurant", "cafe"],
    home: true,
  },
  {
    id: "modernize",
    icon: "modernize",
    slug: "rebuilds-and-modernization",
    related: ["xera-lab", "ezhal"],
    home: true,
  },
  {
    id: "consulting",
    icon: "consulting",
    slug: "technical-consulting",
    related: ["ezhal", "xera-lab"],
    home: true,
  },

  // --- Use-case pages: found by the problem, not the category --------------
  {
    id: "gymBooking",
    icon: "booking",
    slug: "gym-booking-app",
    related: ["q-fight-gym"],
    demos: ["gym"],
    home: false,
  },
  {
    id: "fieldService",
    icon: "dispatch",
    slug: "field-service-management-app",
    related: ["ezhal"],
    home: false,
  },
  {
    id: "clinicLab",
    icon: "records",
    slug: "lab-and-clinic-management-system",
    related: ["xera-lab"],
    demos: ["medical", "dental"],
    home: false,
  },
];

/** The six offerings shown on the home page. */
export const HOME_SERVICES = SERVICES.filter((s) => s.home);

/** The use-case pages, listed separately on the /services/ hub so a visitor
 *  browsing the menu can still find the page written for their situation. */
export const USE_CASE_SERVICES = SERVICES.filter((s) => !s.home);

export const SERVICE_PAGES = SERVICES.filter(
  (s): s is ServiceMeta & { slug: string } => Boolean(s.slug)
);

export const SERVICES_BY_ID: Record<ServiceId, ServiceMeta> = Object.fromEntries(
  SERVICES.map((s) => [s.id, s])
) as Record<ServiceId, ServiceMeta>;
