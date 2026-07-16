import type { Dictionary } from "@/app/data/types";
import { SectionHead } from "./SectionHead";

export function Process({ t }: { t: Dictionary }) {
  const p = t.process;
  return (
    <section
      id="process"
      aria-labelledby="process-heading"
      className="scroll-mt-24 bg-gradient-to-b from-white/[0.01] to-transparent py-7"
    >
      <div className="shell flex flex-col gap-8">
        <SectionHead id="process-heading" kicker={p.kicker} title={p.title} intro={p.intro} />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {p.steps.map((step) => (
            <article key={step.n} className="card reveal">
              <small className="text-[0.85rem] font-bold text-gold">{step.n}</small>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
