import type { Dictionary } from "@/app/data/types";
import { JourneyLoop } from "./JourneyLoop";

export function Hero({ t }: { t: Dictionary }) {
  const h = t.hero;
  return (
    <>
      <section className="hero pt-10 pb-12 sm:pt-14 md:pb-16">
        <div className="shell grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
          {/* Copy */}
          <div className="reveal flex flex-col items-start gap-5">
            <span className="kicker">{h.eyebrow}</span>
            <h1 className="h-display max-w-[15ch]">{h.title}</h1>
            <p className="max-w-[48ch] text-lead leading-relaxed text-ink-soft [text-wrap:pretty]">
              {h.lead}
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href={h.primary.href}
                className="btn btn-primary"
                data-evt="primary_cta_click"
                data-evt-placement="hero"
              >
                {h.primary.label}
              </a>
              <a href={h.secondary.href} className="btn btn-secondary">
                {h.secondary.label}
              </a>
            </div>
            <p className="text-meta text-muted">{h.responseNote}</p>
          </div>

          {/* The animated journey from idea to production. */}
          <div className="reveal">
            <JourneyLoop journey={h.journey} />
          </div>
        </div>
      </section>

      {/* Proof — a full-width band of four figures, divided by hairlines. */}
      <div className="proof-band" aria-label={t.a11y.proofPoints}>
        <div className="shell grid sm:grid-cols-2 lg:grid-cols-4">
          {h.proof.map((p) => (
            <div key={p.label} className="proof-band__cell">
              <small className="stat__label">{p.label}</small>
              <strong className="stat__value">{p.value}</strong>
              <span className="stat__note">{p.note}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
