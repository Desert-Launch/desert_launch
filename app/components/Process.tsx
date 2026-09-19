import type { Dictionary } from "@/app/data/types";
import { ProcessTimeline } from "./ProcessTimeline";
import { SectionHead } from "./SectionHead";

export function Process({ t }: { t: Dictionary }) {
  const p = t.process;
  return (
    <section id="process" aria-labelledby="process-heading" className="section scroll-mt-24">
      <div className="shell">
        <SectionHead id="process-heading" kicker={p.kicker} title={p.title} intro={p.intro} />

        {/* The commercial terms in one line: nothing is paid before the step
            before it has been seen. */}
        <div className="panel reveal mt-8 flex flex-wrap items-center justify-between gap-4 px-6 py-4">
          <p className="text-body text-ink-soft">{p.terms.note}</p>
          <ol className="flex list-none flex-wrap items-center gap-2">
            {p.terms.steps.map((step, i) => (
              <li key={step} className="flex items-center gap-2">
                {i > 0 ? (
                  <span aria-hidden="true" className="dir-arrow text-gold">
                    →
                  </span>
                ) : null}
                <span className="chip">{step}</span>
              </li>
            ))}
          </ol>
        </div>

        <ProcessTimeline>
          <ol className="grid list-none gap-7">
            {p.steps.map((step) => (
              <li key={step.n} className="timeline__item reveal">
                <span className="step-number timeline__number" aria-hidden="true">
                  {step.n}
                </span>
                <div className="panel p-6 md:px-7">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="h-card">{step.title}</h3>
                      <span className="chip">{step.chip}</span>
                    </div>
                    <span className="text-micro font-bold uppercase tracking-[0.12em] text-gold">
                      {step.payment}
                    </span>
                  </div>
                  <div className="mt-5 grid gap-5 lg:grid-cols-3 lg:gap-6">
                    <div>
                      <p className="step-col-label">{p.youShareLabel}</p>
                      <p className="text-body leading-relaxed text-ink-soft">{step.youShare}</p>
                    </div>
                    <div>
                      <p className="step-col-label">{p.weDoLabel}</p>
                      <p className="text-body leading-relaxed text-ink-soft">{step.body}</p>
                    </div>
                    <div className="step-outcome">
                      <p className="step-col-label text-gold">{p.deliverableLabel}</p>
                      <p className="text-body leading-relaxed text-ink">{step.deliverable}</p>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </ProcessTimeline>
      </div>
    </section>
  );
}
