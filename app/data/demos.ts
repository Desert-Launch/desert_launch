import type { DemoId, IconKey } from "./types";

/** The language-neutral half of the live demos: which ones exist, where they
 *  run and what a visitor can open. The translatable half (tag, summary, the
 *  list of flows) lives in each locale dictionary under the same `DemoId`.
 *
 *  Each demo is its own Next.js app, deployed as its own Vercel project from
 *  `github.com/Desert-Launch/demo-<name>` and served on a subdomain of
 *  `DEMOS_HOST`. They are fictional businesses running against an in-memory
 *  store: nothing is persisted, and every one carries `robots: noindex` plus a
 *  Desert Launch bar that links back here with `utm_campaign=<id>`. */
export const DEMOS_HOST = "demos.desertlaunch.dev";

export interface DemoMeta {
  id: DemoId;
  /** The demo's name — deliberately generic ("Demo Gym"), never a plausible
   *  business, and shown untranslated in every locale. */
  name: string;
  icon: IconKey;
  /** Path of the staff/admin side, relative to the demo's origin. */
  adminPath: string;
  /** Interface languages the demo itself offers, for the language line.
   *  Everything runs in English except Demo Real Estate, which is Arabic-first. */
  langs: ("en" | "ar")[];
  /** GitHub repository, for the README and anyone asking where the code is. */
  repo: string;
}

export function demoUrl(id: DemoId, path = "/"): string {
  return `https://${id}.${DEMOS_HOST}${path}`;
}

export const DEMOS: DemoMeta[] = [
  {
    id: "dental",
    name: "Demo Dental Clinic",
    icon: "tooth",
    adminPath: "/admin",
    langs: ["en"],
    repo: "https://github.com/Desert-Launch/demo-dental-clinic",
  },
  {
    id: "medical",
    name: "Demo Medical Clinic",
    icon: "stethoscope",
    adminPath: "/admin",
    langs: ["en"],
    repo: "https://github.com/Desert-Launch/demo-medical-clinic",
  },
  {
    id: "gym",
    name: "Demo Gym",
    icon: "dumbbell",
    adminPath: "/admin",
    langs: ["en"],
    repo: "https://github.com/Desert-Launch/demo-gym-fitness",
  },
  {
    id: "cafe",
    name: "Demo Café",
    icon: "coffee",
    adminPath: "/admin",
    langs: ["en"],
    repo: "https://github.com/Desert-Launch/demo-coffee-shop",
  },
  {
    id: "restaurant",
    name: "Demo Restaurant",
    icon: "utensils",
    adminPath: "/admin",
    langs: ["en"],
    repo: "https://github.com/Desert-Launch/demo-restaurant",
  },
  {
    id: "realestate",
    name: "ديمو العقارية — Demo Real Estate",
    icon: "building",
    adminPath: "/admin",
    langs: ["ar", "en"],
    repo: "https://github.com/Desert-Launch/demo-ghazara-realestate",
  },
];
