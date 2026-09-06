"use client";

import { useEffect } from "react";
import { captureAttribution, track, type EventName } from "@/app/lib/analytics";

/** Mounted once per page. Two jobs, no per-link JavaScript:
 *
 *  1. Capture the campaign parameters off the landing URL so a conversion can
 *     be attributed later — `wa.me` links cannot carry our own query string.
 *  2. Listen for clicks at the document level and fire an event for any element
 *     carrying `data-evt`. Section components stay server components and add a
 *     couple of attributes instead of each becoming a client component.
 *
 *  Events fire on the click, before the browser follows the outbound link, so a
 *  WhatsApp or mailto handoff is still measured.
 */
export function AnalyticsProvider({ lang }: { lang: string }) {
  useEffect(() => {
    captureAttribution();

    function propsFrom(el: HTMLElement): Record<string, string> {
      const out: Record<string, string> = { lang };
      for (const { name, value } of Array.from(el.attributes)) {
        if (name.startsWith("data-evt-")) out[name.slice("data-evt-".length)] = value;
      }
      return out;
    }

    const onClick = (event: MouseEvent) => {
      const target = event.target as Element | null;
      const el = target?.closest?.("[data-evt]") as HTMLElement | null;
      if (!el) return;
      const name = el.getAttribute("data-evt") as EventName | null;
      if (name) track(name, propsFrom(el));
    };

    // `toggle` does not bubble, so it has to be observed in the capture phase.
    const onToggle = (event: Event) => {
      const el = event.target as HTMLElement | null;
      if (!el || !(el instanceof HTMLDetailsElement) || !el.open) return;
      const name = el.getAttribute("data-evt") as EventName | null;
      if (name) track(name, propsFrom(el));
    };

    document.addEventListener("click", onClick);
    document.addEventListener("toggle", onToggle, true);
    return () => {
      document.removeEventListener("click", onClick);
      document.removeEventListener("toggle", onToggle, true);
    };
  }, [lang]);

  return null;
}
