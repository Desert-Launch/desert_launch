import type { Dictionary } from "@/app/data/types";
import { SectionHead } from "./SectionHead";

export function Plans({ t }: { t: Dictionary }) {
  const p = t.plans;
  return (
    <section id="plans" aria-labelledby="plans-heading" className="section scroll-mt-24">
      <div className="shell flex flex-col gap-8 md:gap-10">
        <SectionHead id="plans-heading" kicker={p.kicker} title={p.title} intro={p.intro} />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {p.items.map((plan, i) => (
            <article
              key={plan.name}
              className={`card reveal ${
                i === 1 ? "border-gold/35 shadow-[0_0_0_1px_rgba(245,197,66,0.25)]" : ""
              }`}
            >
              {plan.note ? (
                <span className="pf-tag self-start">{plan.note}</span>
              ) : null}
              <h3 className="text-lead">{plan.name}</h3>
              <p>{plan.body}</p>
              <ul className="grid gap-2 text-body text-ink-soft">
                {plan.points.map((point) => (
                  <li key={point} className="flex gap-2">
                    <span aria-hidden="true" className="mt-2 h-[6px] w-[6px] shrink-0 rounded-full bg-gold" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-auto pt-2 font-bold text-ink">
                {plan.price.main}
                <span className="mt-0.5 block text-micro font-normal text-muted">
                  {plan.price.sub}
                </span>
              </p>
              <a
                href={plan.cta.href}
                target="_blank"
                rel="noreferrer"
                className="btn btn-ghost w-full"
              >
                {plan.cta.label}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
