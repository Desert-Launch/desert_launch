import type { Dictionary } from "@/app/data/types";

/** The three public LinkedIn recommendations.
 *
 *  They are peer endorsements, not client reviews, and the kicker, the intro
 *  and a source tag on every card say so — the home page carries no star
 *  rating and never will (see the honesty rules).
 *
 *  The founder panel that sat above them — portrait, "your project is never
 *  handed from sales to a development team you never meet", the fact chips and
 *  the About/LinkedIn links — is hidden for now at the owner's request. Its
 *  copy is untouched in `why.founder` in every locale and the 880px portrait
 *  is still in `public/assets/founder-lg.webp`, so restoring it is a matter of
 *  putting the markup back (see the 2026-09-19 redesign commit) and passing
 *  `lang` in again for the About link. */
export function Founder({ t }: { t: Dictionary }) {
  const r = t.testimonials;

  return (
    <section className="section section--alt" aria-labelledby="recommendations-heading">
      <div className="shell">
        <div className="reveal flex flex-col gap-3.5">
          <span className="kicker">{r.kicker}</span>
          <h2
            id="recommendations-heading"
            className="h-section max-w-[34ch] text-[clamp(1.5rem,2.4vw,2rem)]"
          >
            {r.title}
          </h2>
          <p className="max-w-[70ch] text-meta leading-relaxed text-muted">{r.intro}</p>
          <div className="mt-4 grid gap-4 lg:grid-cols-3">
            {r.items.map((item) => (
              <figure key={item.name} className="card">
                <span className="source-tag">{r.sourceLabel}</span>
                <blockquote className="text-body leading-relaxed text-ink-soft">
                  {item.quote}
                </blockquote>
                <figcaption className="mt-auto flex items-center gap-3 pt-2">
                  <img
                    src={item.photo}
                    alt=""
                    width={44}
                    height={44}
                    loading="lazy"
                    decoding="async"
                    className="h-9 w-9 rounded-full border border-line object-cover"
                  />
                  <span className="text-meta text-muted">
                    <strong className="text-ink-soft">{item.name}</strong> · {item.role}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
