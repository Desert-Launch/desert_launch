import type { Dictionary } from "@/app/data/types";

/** Mirrors `.hero-showcase__phone { width: clamp(8.5rem, 32vw, 13.5rem) }`. */
const PHONE_SIZES = "(max-width: 425px) 136px, (min-width: 675px) 216px, 32vw";

/** The hero visual: two real product screenshots in device frames.
 *
 *  It replaces a stock render whose own alt text admitted it was a stand-in.
 *  Both apps shown are published on the App Store and Google Play, so the first
 *  thing a visitor sees is verifiable proof rather than an illustration — and
 *  the frames are drawn in CSS, so the composition stays sharp at any density
 *  and costs two images instead of one large flattened one.
 */
export function HeroShowcase({ t }: { t: Dictionary }) {
  const s = t.hero.showcase;

  return (
    <figure className="hero-showcase reveal" aria-label={s.label}>
      {/* The frames are `clamp(8.5rem, 32vw, 13.5rem)` wide, so `sizes` mirrors
          that and the browser picks the 250px file on a phone and the 440px one
          only where a high-density desktop actually needs it. */}
      <div className="hero-showcase__stage">
        <div className="hero-showcase__phone hero-showcase__phone--back">
          <img
            src="/assets/hero-almuslim.webp"
            srcSet="/assets/hero-almuslim-250.webp 250w, /assets/hero-almuslim.webp 440w"
            sizes={PHONE_SIZES}
            alt={s.alts[0]}
            width={440}
            height={954}
            decoding="async"
          />
        </div>
        <div className="hero-showcase__phone hero-showcase__phone--front">
          <img
            src="/assets/hero-qfightgym.webp"
            srcSet="/assets/hero-qfightgym-250.webp 250w, /assets/hero-qfightgym.webp 440w"
            sizes={PHONE_SIZES}
            alt={s.alts[1]}
            width={440}
            height={952}
            fetchPriority="high"
            decoding="async"
          />
        </div>
      </div>
      <figcaption className="hero-showcase__caption">
        <span className="hero-showcase__badge">
          <svg
            viewBox="0 0 24 24"
            width="14"
            height="14"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.4}
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            focusable="false"
          >
            <path d="M5 13l4 4L19 7" />
          </svg>
          {s.badge}
        </span>
        <span className="text-meta text-muted">{s.caption}</span>
      </figcaption>
    </figure>
  );
}
