import type { Dictionary } from "@/app/data/types";
import { SectionHead } from "./SectionHead";

/** Peer recommendations, labelled as such.
 *
 *  These are LinkedIn recommendations written by colleagues about the founder,
 *  not client reviews of Desert Launch. Presenting them under a heading that
 *  implied otherwise was the single largest credibility risk on the page, so
 *  the section name, the intro and a per-card source label all say plainly what
 *  they are.
 */
export function Testimonials({ t }: { t: Dictionary }) {
  const s = t.testimonials;
  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="section scroll-mt-24"
    >
      <div className="shell flex flex-col gap-8 md:gap-10">
        <SectionHead
          id="testimonials-heading"
          kicker={s.kicker}
          title={s.title}
          intro={s.intro}
        />

        <div className="grid gap-4 md:grid-cols-3">
          {s.items.map((item) => (
            <figure key={item.name} className="card reveal">
              <span className="source-tag">{s.sourceLabel}</span>
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
                  className="h-11 w-11 rounded-full border border-line object-cover"
                />
                <div>
                  <strong className="block text-body">{item.name}</strong>
                  <span className="text-meta text-muted">{item.role}</span>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
