import { track as vercelTrack } from "@vercel/analytics";

/** Conversion measurement for a static, backend-less marketing site.
 *
 *  Every lead leaves this site through an outbound link — `wa.me`, `mailto:` or
 *  `tel:` — so a conversion is invisible unless an event fires *before* the
 *  handoff. This module is the single place that happens.
 *
 *  Page views come from `<Analytics />` in `LocaleShell`; custom events go
 *  through `track()` below, which also forwards to Plausible or GA if either is
 *  ever added, and is a silent no-op when no tool is present (local
 *  development, a privacy-blocking extension, or before Web Analytics is
 *  switched on in the Vercel dashboard). Nothing here sets a cookie or reads
 *  personal data, so no consent banner is required — including for the
 *  EU-facing locales.
 */

export type EventName =
  | "whatsapp_click"
  | "email_click"
  | "tel_click"
  | "store_click"
  | "primary_cta_click"
  | "service_cta_click"
  | "project_cta_click"
  | "case_study_click"
  | "faq_open"
  | "lang_switch"
  | "contact_form_submit";

export type EventProps = Record<string, string | number | boolean>;

/** UTM parameters we persist for the session so a conversion event can carry
 *  the campaign that produced it. `wa.me` links cannot carry query parameters
 *  of our own, so without this the attribution chain breaks at the handoff. */
const UTM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
] as const;

const ATTRIBUTION_KEY = "dl_attribution";

interface Attribution {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
  referrer?: string;
  landing?: string;
}

function safeSession(): Storage | null {
  try {
    return window.sessionStorage;
  } catch {
    // Private mode, disabled site data, or an embedded context.
    return null;
  }
}

/** Reads the campaign parameters off the landing URL once per session and keeps
 *  them for the rest of it. Called by `AnalyticsProvider` on mount. */
export function captureAttribution(): void {
  const store = safeSession();
  if (!store) return;
  try {
    if (store.getItem(ATTRIBUTION_KEY)) return;

    const params = new URLSearchParams(window.location.search);
    const data: Attribution = {};
    for (const key of UTM_KEYS) {
      const value = params.get(key);
      if (value) data[key] = value.slice(0, 120);
    }

    // Only record a referrer that is genuinely external.
    if (document.referrer && !document.referrer.startsWith(window.location.origin)) {
      try {
        data.referrer = new URL(document.referrer).hostname;
      } catch {
        /* malformed referrer — ignore */
      }
    }
    data.landing = window.location.pathname;

    store.setItem(ATTRIBUTION_KEY, JSON.stringify(data));
  } catch {
    /* storage full or blocked — attribution is a nice-to-have, never a blocker */
  }
}

function readAttribution(): Attribution {
  const store = safeSession();
  if (!store) return {};
  try {
    const raw = store.getItem(ATTRIBUTION_KEY);
    return raw ? (JSON.parse(raw) as Attribution) : {};
  } catch {
    return {};
  }
}

interface AnalyticsWindow extends Window {
  /** Plausible, if the owner ever prefers it. */
  plausible?: (event: string, options?: { props?: EventProps }) => void;
  /** Google Analytics 4 / Tag Manager. */
  gtag?: (command: string, ...args: unknown[]) => void;
}

/** Fire a conversion event. Safe to call from anywhere in the browser; a no-op
 *  during server rendering and when no analytics tool is loaded. */
export function track(name: EventName, props: EventProps = {}): void {
  if (typeof window === "undefined") return;

  const payload: EventProps = { ...readAttribution(), ...props } as EventProps;
  const w = window as AnalyticsWindow;

  try {
    vercelTrack(name, payload);
    w.plausible?.(name, { props: payload });
    w.gtag?.("event", name, payload);
  } catch {
    /* analytics must never break a lead handoff */
  }
}
