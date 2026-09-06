import type { Dictionary } from "@/app/data/types";
import { HeroShowcase } from "./HeroShowcase";

export function Hero({ t }: { t: Dictionary }) {
  const h = t.hero;
  return (
    <section className="hero pt-8 pb-12 sm:pt-12 md:pb-16">
      <div className="shell flex flex-col gap-10 md:gap-12">
        <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
          {/* Copy */}
          <div className="reveal flex flex-col gap-5">
            <span className="kicker">{h.eyebrow}</span>
            <h1 className="h-display">{h.title}</h1>
            <p className="max-w-[48ch] text-lead leading-relaxed text-ink-soft">{h.lead}</p>
            <div className="flex flex-wrap gap-2" aria-label={t.a11y.heroTags}>
              {h.tags.map((tag) => (
                <span key={tag} className="chip">
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href={h.primary.href}
                target="_blank"
                rel="noreferrer"
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

          {/* Real product proof, not a stock render */}
          <HeroShowcase t={t} />
        </div>

        {/* Proof — full width under both columns */}
        <div className="reveal grid gap-3 sm:grid-cols-3" aria-label={t.a11y.proofPoints}>
          {h.proof.map((p) => (
            <div key={p.label} className="panel stat">
              <small className="stat__label">{p.label}</small>
              <strong className="stat__value">{p.value}</strong>
              <span className="stat__note">{p.note}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
