import type { Dictionary } from "@/app/data/types";

/** Peer recommendations — rendered on the About page, not the home page.
 *
 *  These are LinkedIn recommendations written by colleagues about the founder,
 *  not client reviews of Desert Launch, and the section name, the intro and a
 *  per-card source label all say so plainly.
 *
 *  They sat on the home page until it became clear what they were doing there:
 *  three senior engineers praising an engineer reads as a hiring reference. It
 *  drew developers looking for work while doing little for a buyer deciding
 *  whether to commission a build. Beside the founder's story on /about/ they
 *  say what they actually say; the home page keeps the proof a buyer needs —
 *  shipped products, store links and case studies. About exists in all five
 *  locales, so this holds everywhere.
 *
 *  Rendered inside the About page's `.shell`, so it emits no container of its
 *  own and matches the heading shape of the sections around it.
 */
export function Testimonials({ t }: { t: Dictionary }) {
  const s = t.testimonials;
  return (
    <section id="testimonials" className="flex scroll-mt-24 flex-col gap-4">
      <h2 className="h-section">{s.title}</h2>
      <div className="prose">
        <p>{s.intro}</p>
      </div>

      <div className="mt-2 grid gap-4 md:grid-cols-3">
        {s.items.map((item) => (
          <figure key={item.name} className="card">
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
    </section>
  );
}
