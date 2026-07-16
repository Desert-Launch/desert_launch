import type { Dictionary } from "@/app/data/types";
import { SectionHead } from "./SectionHead";

export function Testimonials({ t }: { t: Dictionary }) {
  const s = t.testimonials;
  return (
    <section id="testimonials" aria-labelledby="testimonials-heading" className="scroll-mt-24 py-7">
      <div className="shell flex flex-col gap-8">
        <SectionHead id="testimonials-heading" kicker={s.kicker} title={s.title} intro={s.intro} />

        <div className="grid gap-4 md:grid-cols-3">
          {s.items.map((item) => (
            <figure key={item.name} className="card reveal">
              <blockquote className="text-[0.96rem] leading-relaxed text-ink-soft">
                {item.quote}
              </blockquote>
              <figcaption className="mt-auto flex items-center gap-3 pt-2">
                <img
                  src={item.photo}
                  alt={item.name}
                  width={48}
                  height={48}
                  loading="lazy"
                  className="h-12 w-12 rounded-full border border-line object-cover"
                />
                <div>
                  <strong className="block text-[0.95rem]">{item.name}</strong>
                  <span className="text-[0.82rem] text-muted">{item.role}</span>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
