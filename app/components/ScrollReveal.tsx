"use client";

import { useEffect } from "react";

/** Mounted once per page. Reveals every `.reveal` element as it scrolls into
 *  view, with a small stagger.
 *
 *  The hidden state lives behind `.js .reveal` in the stylesheet, so a visitor
 *  without JavaScript — or one whose bundle failed to load — sees the whole
 *  page immediately rather than a blank background. If this component never
 *  runs, nothing is lost but the animation.
 */
export function ScrollReveal() {
  useEffect(() => {
    const items = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));

    const revealAll = () => items.forEach((item) => item.classList.add("is-visible"));

    if (
      !("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      revealAll();
      return;
    }

    items.forEach((item, i) => {
      item.style.setProperty("--reveal-delay", `${(i % 4) * 70}ms`);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );

    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return null;
}
