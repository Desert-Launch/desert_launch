import type { Dictionary } from "@/app/data/types";
import { SectionHead } from "./SectionHead";

export function Process({ t }: { t: Dictionary }) {
  const p = t.process;
  return (
    <section
      id="process"
      aria-labelledby="process-heading"
      className="section section--alt scroll-mt-24"
    >
      <div className="shell flex flex-col gap-8 md:gap-10">
        <SectionHead id="process-heading" kicker={p.kicker} title={p.title} intro={p.intro} />

        {/* Three-up before five-up: five 177px columns at 1024px wrapped every
            body to six lines and shrank the step number to caption size. */}
        <ol className="grid list-none gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {p.steps.map((step) => (
            <li key={step.n} className="card reveal">
              <span className="step-number" aria-hidden="true">
                {step.n}
              </span>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
              <p className="step-deliverable">
                <span className="step-deliverable__label">{p.deliverableLabel}</span>
                {step.deliverable}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
