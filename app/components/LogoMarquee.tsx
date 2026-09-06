"use client";

import { useState } from "react";
import type { ProjectId } from "@/app/data/types";
import { PROJECTS } from "@/app/data/projects";

/** How many times the row is repeated inside the track.
 *
 *  The animation translates the track by one row width, so the loop only looks
 *  seamless while the *remaining* copies still cover the container: with COPIES
 *  copies that needs `(COPIES - 1) × row ≥ container`. Eight logos come to
 *  roughly 1130px against a 1320px shell, so two copies would flash an empty
 *  gap at the wrap on a wide screen — three clears it. Keep this in sync with
 *  the `-100% / 3` in the `logo-marquee` keyframe. */
const COPIES = 3;

/** Auto-scrolling strip of shipped-product logos, shown above the project grid.
 *
 *  Only the first copy is announced; the rest are `aria-hidden` with empty alt
 *  text, since they are presentational filler and a screen reader should hear
 *  each product once.
 *
 *  Motion that starts on its own and runs past five seconds needs a real pause
 *  mechanism (WCAG 2.2.2). Hover and focus pause it, but a touch user can do
 *  neither — so the toggle below is the mechanism, and it is permanently
 *  visible on any device without a hover-capable pointer.
 */
export function LogoMarquee({
  alts,
  label,
  pauseLabel,
  playLabel,
}: {
  /** One alt string per project id — not the whole dictionary, which React
   *  would serialise into the document as client-component props. */
  alts: Record<ProjectId, string>;
  label: string;
  pauseLabel: string;
  playLabel: string;
}) {
  const [paused, setPaused] = useState(false);

  if (PROJECTS.length === 0) return null;

  return (
    <div className="logo-marquee reveal" role="group" aria-label={label}>
      <div className="logo-marquee__viewport">
        <div className={`logo-marquee__track${paused ? " is-paused" : ""}`}>
          {Array.from({ length: COPIES }, (_, copy) => (
            <ul
              key={copy}
              className="logo-marquee__row"
              {...(copy > 0 ? { "aria-hidden": true } : {})}
            >
              {PROJECTS.map((project) => (
                <li key={project.id} className="logo-marquee__item">
                  <img
                    src={project.logo}
                    alt={copy === 0 ? alts[project.id] : ""}
                    width={32}
                    height={32}
                    loading="lazy"
                    decoding="async"
                  />
                  <span>{project.name}</span>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>

      {/* aria-pressed carries the state, so the label stays the action rather
          than flipping between two names for one control. */}
      <button
        type="button"
        className="logo-marquee__toggle"
        aria-pressed={paused}
        aria-label={paused ? playLabel : pauseLabel}
        onClick={() => setPaused((wasPaused) => !wasPaused)}
      >
        <svg
          aria-hidden="true"
          focusable="false"
          viewBox="0 0 16 16"
          width="14"
          height="14"
          fill="currentColor"
        >
          {paused ? <path d="M5 3.5v9l8-4.5-8-4.5Z" /> : <path d="M5 3h2v10H5V3Zm4 0h2v10H9V3Z" />}
        </svg>
      </button>
    </div>
  );
}
