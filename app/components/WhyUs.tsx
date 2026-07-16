import type { Dictionary } from "@/app/data/types";
import { Icon } from "@/app/data/icons";
import { SectionHead } from "./SectionHead";

export function WhyUs({ t }: { t: Dictionary }) {
  const w = t.why;
  return (
    <section id="why-us" aria-labelledby="why-heading" className="scroll-mt-24 py-7">
      <div className="shell flex flex-col gap-8">
        <SectionHead id="why-heading" kicker={w.kicker} title={w.title} intro={w.intro} />

        <div className="grid gap-4 lg:grid-cols-[1.4fr_0.9fr]">
          <div className="grid gap-4 sm:grid-cols-2">
            {w.features.map((f) => (
              <article key={f.title} className="card reveal">
                <span className="icon-box">
                  <Icon name={f.icon} />
                </span>
                <h3>{f.title}</h3>
                <p>{f.body}</p>
              </article>
            ))}
          </div>

          <aside className="panel reveal flex flex-col gap-3 p-6" aria-label="Who you're working with">
            <span className="kicker">{w.founder.kicker}</span>
            <img
              src={w.founder.photo}
              alt={w.founder.photoAlt}
              width={104}
              height={104}
              loading="lazy"
              className="h-[104px] w-[104px] rounded-2xl border border-line-strong object-cover"
            />
            <div>
              <h3 className="text-lg font-bold">{w.founder.name}</h3>
              <p className="text-[0.9rem] text-gold">{w.founder.role}</p>
            </div>
            <p className="text-[0.92rem] leading-relaxed text-muted">{w.founder.body}</p>
            <div className="flex flex-wrap gap-2" aria-label="Founder facts">
              {w.founder.facts.map((fact) => (
                <span key={fact} className="chip">
                  {fact}
                </span>
              ))}
            </div>
          </aside>
        </div>

        <div className="panel reveal flex flex-col items-start gap-5 p-6 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-3">
            <span className="kicker">{w.band.kicker}</span>
            <p className="max-w-[60ch] text-[0.96rem] leading-relaxed text-ink-soft">{w.band.body}</p>
            <div className="flex flex-wrap gap-2" aria-label="Engagement proof points">
              {w.band.points.map((p) => (
                <span key={p} className="chip">
                  {p}
                </span>
              ))}
            </div>
          </div>
          <a href={w.band.cta.href} className="btn btn-secondary shrink-0">
            {w.band.cta.label}
          </a>
        </div>
      </div>
    </section>
  );
}
