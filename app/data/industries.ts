import type { DemoId, IconKey, IndustryId, ProjectId, ServiceId } from "./types";

/** The language-neutral half of the industry pages: which verticals have a
 *  page, which live demos prove each one, which shipped work sits closest, and
 *  which service pages it shares an audience with. The copy lives in
 *  `pages/<lang>.ts` under `industries.items`, keyed by the same id.
 *
 *  Why these pages exist, and why the demos are not the pages:
 *
 *  A clinic owner searching "dental clinic website" is a buyer; somebody
 *  searching "dental clinic Dubai" is a patient. The demos are written in the
 *  second voice — they have to look like the business — so an indexed demo
 *  could only ever rank for patient queries, with a fictional clinic and an
 *  invented address. The demos therefore stay `noindex` on their subdomains,
 *  and the buyer's query lands here instead: on www, with the site's authority
 *  behind it, the demo one click away as proof.
 *
 *  Keyword ownership is deliberately one page per intent:
 *    - the category terms ("web development", "mobile app development") belong
 *      to the service pages and the home page;
 *    - the vertical terms ("clinic website", "restaurant ordering system")
 *      belong to the page below;
 *    - the narrower product terms already owned by a use-case page stay there
 *      ("gym booking app" → /services/gym-booking-app/, "lab management
 *      system" → /services/lab-and-clinic-management-system/), and the
 *      industry page links to it instead of competing with it.
 *
 *  To add an industry: an id in `IndustryId`, an entry here, and the copy in
 *  `pages/en.ts` and `pages/ar.ts`. Routes, sitemap, hreflang, breadcrumbs,
 *  JSON-LD, the hub, the demo cards and the service-page links all derive
 *  from this list. */
export interface IndustryMeta {
  id: IndustryId;
  icon: IconKey;
  /** Live demos that show this vertical. Every demo should belong to exactly
   *  one industry, so its card and its bar have one page to point at. */
  demos: DemoId[];
  /** Shipped work nearest to the vertical. Honest proximity, not a claim that
   *  the project was in this industry — the page copy says which is which. */
  related: ProjectId[];
  /** Service pages that share this audience. Links run both ways: the
   *  industry page lists them, and each of those service pages lists this. */
  services: ServiceId[];
}

export const INDUSTRIES: IndustryMeta[] = [
  {
    id: "clinics",
    icon: "stethoscope",
    demos: ["dental", "medical"],
    related: ["xera-lab"],
    services: ["web", "clinicLab"],
  },
  {
    id: "gyms",
    icon: "dumbbell",
    demos: ["gym"],
    related: ["q-fight-gym"],
    services: ["web", "gymBooking", "mobile"],
  },
  {
    id: "restaurants-and-cafes",
    icon: "utensils",
    demos: ["restaurant", "cafe"],
    related: ["ezhal"],
    services: ["web", "mvp", "design"],
  },
  {
    id: "real-estate",
    icon: "building",
    demos: ["realestate"],
    related: ["xera-lab"],
    services: ["web"],
  },
];

export const INDUSTRIES_BY_ID: Record<IndustryId, IndustryMeta> = Object.fromEntries(
  INDUSTRIES.map((i) => [i.id, i])
) as Record<IndustryId, IndustryMeta>;

/** The industry page a demo belongs to, for its card link and its bar. */
export function industryForDemo(id: DemoId): IndustryMeta | undefined {
  return INDUSTRIES.find((i) => i.demos.includes(id));
}

/** Industry pages that share an audience with a service page. */
export function industriesForService(id: ServiceId): IndustryMeta[] {
  return INDUSTRIES.filter((i) => i.services.includes(id));
}
