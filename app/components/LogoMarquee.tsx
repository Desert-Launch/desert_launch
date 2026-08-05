import type { Project } from "@/app/data/types";

/** How many times the row is repeated inside the track.
 *
 *  The animation translates the track by one row width, so the loop only looks
 *  seamless while the *remaining* copies still cover the container: with COPIES
 *  copies that needs `(COPIES - 1) × row ≥ container`. Eight logos come to roughly
 *  1130px against a 1320px shell, so two copies would flash an empty gap at the
 *  wrap on a wide screen — three clears it with room to spare. Keep this in sync
 *  with the `-100% / 3` in the `logo-marquee` keyframe. */
const COPIES = 3;

/** Auto-scrolling strip of shipped-product logos, shown above the project grid.
 *
 *  Only the first copy is announced; the rest are `aria-hidden` with empty alt
 *  text, since they are presentational filler and a screen reader should hear
 *  each product once.
 *
 *  Logos come from `work.projects` rather than a second list, so adding a
 *  project adds it to the strip automatically. Motion is pure CSS: hover and
 *  focus pause it, and `prefers-reduced-motion` drops the animation and wraps
 *  the single announced row into a static centered row (see `globals.css`).
 */
export function LogoMarquee({ projects, label }: { projects: Project[]; label: string }) {
  if (projects.length === 0) return null;

  return (
    <div className="logo-marquee reveal" role="group" aria-label={label}>
      <div className="logo-marquee__track">
        {Array.from({ length: COPIES }, (_, copy) => (
          <ul
            key={copy}
            className="logo-marquee__row"
            {...(copy > 0 ? { "aria-hidden": true } : {})}
          >
            {projects.map((project) => (
              <li key={project.title} className="logo-marquee__item">
                <img
                  src={project.logo}
                  alt={copy === 0 ? project.logoAlt : ""}
                  width={36}
                  height={36}
                  loading="lazy"
                />
                <span>{project.title}</span>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
