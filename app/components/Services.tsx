import type { Dictionary } from "@/app/data/types";
import { Icon } from "@/app/data/icons";
import { SectionHead } from "./SectionHead";

export function Services({ t }: { t: Dictionary }) {
  const s = t.services;
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="scroll-mt-24 bg-gradient-to-b from-white/[0.01] to-transparent py-7"
    >
      <div className="shell flex flex-col gap-8">
        <SectionHead id="services-heading" kicker={s.kicker} title={s.title} intro={s.intro} />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {s.items.map((item) => (
            <article key={item.title} className="card reveal">
              <span className="icon-box">
                <Icon name={item.icon} />
              </span>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>

        <div className="reveal flex flex-col gap-3" aria-label="Core technology stack">
          <span className="kicker">{s.stackLabel}</span>
          <div className="flex flex-wrap gap-[0.55rem]">
            {s.stack.map((tech) => (
              <span key={tech} className="chip">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="reveal flex flex-col gap-3 sm:flex-row">
          <a href={s.primary.href} target="_blank" rel="noreferrer" className="btn btn-primary">
            {s.primary.label}
          </a>
          <a href={s.ghost.href} className="btn btn-ghost">
            {s.ghost.label}
          </a>
        </div>
      </div>
    </section>
  );
}
