import type { Dictionary } from "@/app/data/types";

/** Four commitments as numbered rows: the claim, the reasoning, and a small
 *  before/after panel that says what the visitor is not signing up for. */
export function WhyUs({ t }: { t: Dictionary }) {
  const w = t.why;

  return (
    <section id="why-us" aria-labelledby="why-heading" className="section scroll-mt-24">
      <div className="shell">
        <div className="reveal flex max-w-[46rem] flex-col gap-4">
          <span className="kicker">{w.kicker}</span>
          <h2 id="why-heading" className="h-section max-w-[24ch]">
            {w.title}
          </h2>
        </div>

        <ol className="mt-11 list-none border-b border-line">
          {w.features.map((f, i) => (
            <li key={f.title} className="why-row reveal grid gap-6 lg:grid-cols-3 lg:gap-8">
              <div>
                <span className="why-row__number" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="h-card mt-4">{f.title}</h3>
              </div>
              <p className="text-body leading-relaxed text-ink-soft">{f.body}</p>
              <div className="panel px-5 py-5">
                <p className="flex items-start gap-3 text-meta text-muted">
                  <span aria-hidden="true" className="shrink-0">
                    ✕
                  </span>
                  <s className="decoration-line-strong">{f.before}</s>
                </p>
                <p className="mt-3.5 flex items-start gap-3 border-t border-line pt-3.5 text-body text-ink">
                  <span aria-hidden="true" className="dir-arrow shrink-0 text-gold">
                    →
                  </span>
                  <span>{f.after}</span>
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
