import type { IconKey, ProjectId, ServiceId } from "./types";

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
}

export const SERVICES: ServiceMeta[] = [
  {
    id: "mobile",
    icon: "mobile",
    slug: "mobile-app-development",
    related: ["q-fight-gym", "al-muslim", "ezhal"],
  },
  {
    id: "web",
    icon: "web",
    slug: "web-development",
    related: ["xera-lab", "fastap"],
  },
  {
    id: "mvp",
    icon: "mvp",
    slug: "mvp-development",
    related: ["ezhal", "voicers"],
  },
  { id: "design", icon: "design", related: [] },
  { id: "modernize", icon: "modernize", related: [] },
  { id: "consulting", icon: "consulting", related: [] },
];

export const SERVICE_PAGES = SERVICES.filter(
  (s): s is ServiceMeta & { slug: string } => Boolean(s.slug)
);

export const SERVICES_BY_ID: Record<ServiceId, ServiceMeta> = Object.fromEntries(
  SERVICES.map((s) => [s.id, s])
) as Record<ServiceId, ServiceMeta>;
