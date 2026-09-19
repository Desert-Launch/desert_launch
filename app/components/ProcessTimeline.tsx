"use client";

import { useEffect, useRef } from "react";

/** Wraps the process steps and fills the gold line beside them as the
 *  visitor scrolls through. The steps themselves are server-rendered children;
 *  this only writes one custom property, so without JavaScript the rail is
 *  simply the plain hairline. */
export function ProcessTimeline({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const onScroll = () => {
      const r = el.getBoundingClientRect();
      const p = reduced ? 1 : Math.max(0, Math.min(1, (window.innerHeight * 0.72 - r.top) / r.height));
      el.style.setProperty("--progress", `${(p * 100).toFixed(1)}%`);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div ref={ref} className="timeline">
      <span className="timeline__rail" aria-hidden="true" />
      <span className="timeline__fill" aria-hidden="true" />
      {children}
    </div>
  );
}
