import type { IconKey } from "./types";

// Language-neutral inline SVGs, referenced by key from the dictionaries so the
// same icon set serves every locale. 24×24 grid, stroke = currentColor.
//
// Every key has a distinct silhouette. The previous set reused the same
// circle-plus for two different services and the same rectangle-with-two-lines
// for three, which made six cards look like one card repeated.
const P = {
  fill: "none" as const,
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const paths: Record<IconKey, React.ReactNode> = {
  // Services ---------------------------------------------------------------
  /** Phone with a speaker slot. */
  mobile: (
    <>
      <rect x="6.75" y="2.5" width="10.5" height="19" rx="2.6" {...P} />
      <path d="M10.5 5.6h3M11.1 18.4h1.8" {...P} />
    </>
  ),
  /** Calendar page with a tick: a slot that is booked. */
  booking: (
    <>
      <rect x="3.25" y="4.75" width="17.5" height="16" rx="2.4" {...P} />
      <path d="M3.25 9.4h17.5M8.1 2.8v3.6M15.9 2.8v3.6" {...P} />
      <path d="M8.8 14.6l2.2 2.2 4.2-4.2" {...P} />
    </>
  ),
  /** Map pin on a route line: a technician on the way to a job. */
  dispatch: (
    <>
      <path d="M16.4 3.3c1.9 0 3.4 1.6 3.4 3.5 0 2.6-3.4 6-3.4 6s-3.4-3.4-3.4-6c0-1.9 1.5-3.5 3.4-3.5Z" {...P} />
      <path d="M16.4 6.6h.01" {...P} />
      <path d="M9.9 6.9H6.5a2.6 2.6 0 0 0 0 5.2h5a2.6 2.6 0 0 1 0 5.2H4.2" {...P} />
      <path d="M5.4 15.6l-1.2 1.7 1.2 1.7" {...P} />
    </>
  ),
  /** Stacked record cards: a case file moving through a lab. */
  records: (
    <>
      <rect x="2.75" y="6.4" width="13.5" height="14.2" rx="2.2" {...P} />
      <path d="M6.6 3.4h10.2a2.4 2.4 0 0 1 2.4 2.4v11.4" {...P} />
      <path d="M6.2 11h6.6M6.2 14.6h4.4" {...P} />
    </>
  ),
  // Social -----------------------------------------------------------------
  /** The Facebook "f", drawn as an outline to sit with the rest of the set. */
  facebook: (
    <path
      d="M13.6 21v-7.1h2.5l.4-2.9h-2.9V9.2c0-.85.25-1.45 1.5-1.45h1.5V5.15A20 20 0 0 0 14.4 5c-2.3 0-3.85 1.4-3.85 3.95V11H8v2.9h2.55V21"
      {...P}
    />
  ),
  /** Instagram glyph: rounded square, lens, flash. */
  instagram: (
    <>
      <rect x="3.25" y="3.25" width="17.5" height="17.5" rx="4.6" {...P} />
      <circle cx="12" cy="12" r="3.9" {...P} />
      <path d="M17.2 6.8h.01" {...P} strokeWidth={2.4} />
    </>
  ),
  // Demo sectors ------------------------------------------------------------
  /** Molar: crown with two roots. */
  tooth: (
    <path
      d="M12 4.2c-1.5 0-2.3-.9-3.9-.9-1.9 0-3.1 1.5-3.1 3.8 0 2.6 1.2 3.9 1.6 6.4.4 2.4.9 6.7 2.4 6.7 1.5 0 1.4-4.3 3-4.3s1.5 4.3 3 4.3c1.5 0 2-4.3 2.4-6.7.4-2.5 1.6-3.8 1.6-6.4 0-2.3-1.2-3.8-3.1-3.8-1.6 0-2.4.9-3.9.9Z"
      {...P}
    />
  ),
  /** Stethoscope: ear tubes into a U, tube down to the chest piece. */
  stethoscope: (
    <>
      <path d="M5.5 3.4v6a4.6 4.6 0 0 0 9.2 0v-6" {...P} />
      <path d="M4 3.6h3M13.2 3.6h3" {...P} />
      <path d="M10.1 14v2.4a3.7 3.7 0 0 0 7.4 0v-1.2" {...P} />
      <circle cx="17.5" cy="12.8" r="2.3" {...P} />
    </>
  ),
  /** Dumbbell: bar between two plates each side. */
  dumbbell: (
    <>
      <path d="M6.6 7.6v8.8M17.4 7.6v8.8" {...P} />
      <path d="M3.4 9.6v4.8M20.6 9.6v4.8" {...P} />
      <path d="M6.6 12h10.8" {...P} />
    </>
  ),
  /** Cup with a handle and two lines of steam. */
  coffee: (
    <>
      <path d="M4.4 9.6h12.2v5.2a4.6 4.6 0 0 1-4.6 4.6H9a4.6 4.6 0 0 1-4.6-4.6V9.6Z" {...P} />
      <path d="M16.6 11.2h1.1a2.4 2.4 0 0 1 0 4.8h-1.1" {...P} />
      <path d="M8.4 3.4c0 1.2-1 1.5-1 2.8M12.4 3.4c0 1.2-1 1.5-1 2.8" {...P} />
    </>
  ),
  /** Fork and knife. */
  utensils: (
    <>
      <path d="M5.4 3v5a3 3 0 0 0 6 0V3M8.4 3v18" {...P} />
      <path d="M18.2 3c-2.3 2.1-3.2 5.4-3.2 8.6 0 .8.7 1.4 1.5 1.4h1.7" {...P} />
      <path d="M18.2 3v18" {...P} />
    </>
  ),
  /** Two buildings on a baseline, the taller one with windows. */
  building: (
    <>
      <path d="M4.6 21V5.4a2 2 0 0 1 2-2h6.4a2 2 0 0 1 2 2V21" {...P} />
      <path d="M15 10.2h2.6a1.8 1.8 0 0 1 1.8 1.8V21" {...P} />
      <path d="M8 7.4h1.4M10.6 7.4H12M8 10.8h1.4M10.6 10.8H12M8 14.2h1.4M10.6 14.2H12" {...P} />
      <path d="M8.9 21v-3.2h2.2V21M3 21h18" {...P} />
    </>
  ),
  /** Browser window with a chrome bar. */
  web: (
    <>
      <rect x="2.75" y="4.5" width="18.5" height="15" rx="2.4" {...P} />
      <path d="M2.75 9.2h18.5" {...P} />
      <path d="M5.9 6.85h.01M8.4 6.85h.01M10.9 6.85h.01" {...P} />
    </>
  ),
  /** Rocket: nose cone, window and two fins. */
  mvp: (
    <>
      <path
        d="M12 2.8c2.5 2 3.9 5 3.9 8.2v3.4H8.1v-3.4C8.1 7.8 9.5 4.8 12 2.8Z"
        {...P}
      />
      <circle cx="12" cy="9.1" r="1.6" {...P} />
      <path d="M8.1 12.6 5.6 15.4l2.5.8M15.9 12.6l2.5 2.8-2.5.8" {...P} />
      <path d="M10.3 17.7c.5 1.2 1.1 2.2 1.7 3 .6-.8 1.2-1.8 1.7-3" {...P} />
    </>
  ),
  /** Pen nib. */
  design: (
    <>
      <path d="M3.8 20.2 6.4 13.6 15 5a2.15 2.15 0 0 1 3 3l-8.6 8.6-6.6 2.6Z" {...P} />
      <path d="M13.4 6.6 17.4 10.6" {...P} />
      <path d="M6.4 13.6 10.4 17.6" {...P} />
    </>
  ),
  /** Cycle arrows — rebuild and modernize. */
  modernize: (
    <>
      <path d="M19.8 12a7.8 7.8 0 0 1-13.3 5.5" {...P} />
      <path d="M4.2 12A7.8 7.8 0 0 1 17.5 6.5" {...P} />
      <path d="M4.2 17.4V12.6h4.8M19.8 6.6v4.8h-4.8" {...P} />
    </>
  ),
  /** Compass — direction and advice. */
  consulting: (
    <>
      <circle cx="12" cy="12" r="8.6" {...P} />
      <path d="M15.1 8.9 13.4 13.4 8.9 15.1 10.6 10.6Z" {...P} />
    </>
  ),

  // Differentiators --------------------------------------------------------
  /** Priced document with a check — the fixed quote. */
  quote: (
    <>
      <path
        d="M6.4 3.4h6.9l4.3 4.3v12.1a1.2 1.2 0 0 1-1.2 1.2H6.4a1.2 1.2 0 0 1-1.2-1.2V4.6a1.2 1.2 0 0 1 1.2-1.2Z"
        {...P}
      />
      <path d="M13.3 3.4v4.3h4.3" {...P} />
      <path d="M8.4 14.6l1.9 1.9 3.9-4.3" {...P} />
    </>
  ),
  /** Key — you own the code and the accounts. */
  ownership: (
    <>
      <circle cx="8.2" cy="12" r="3.7" {...P} />
      <path d="M11.9 12h8.2" {...P} />
      <path d="M17.2 12v3.1M19.7 12v2.2" {...P} />
    </>
  ),
  /** Shield with a check — a year of support. */
  support: (
    <>
      <path d="M12 3l7 3v5.4c0 4.3-2.9 8.1-7 9.3-4.1-1.2-7-5-7-9.3V6l7-3Z" {...P} />
      <path d="M9.2 12.1l2 2 3.6-4.1" {...P} />
    </>
  ),
  /** Two chat bubbles — you talk to the engineer. */
  direct: (
    <>
      <path d="M3.4 6.4a2 2 0 0 1 2-2h8.1a2 2 0 0 1 2 2v4.2a2 2 0 0 1-2 2H7.6l-4.2 3V6.4Z" {...P} />
      <path d="M18.1 8.6a2.5 2.5 0 0 1 2.5 2.5v7.4l-3.3-2.6h-4.4a2 2 0 0 1-1.7-1" {...P} />
    </>
  ),
};

export function Icon({ name, className }: { name: IconKey; className?: string }) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      {paths[name]}
    </svg>
  );
}
