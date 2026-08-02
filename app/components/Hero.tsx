import type { Dictionary } from "@/app/data/types";

export function Hero({ t }: { t: Dictionary }) {
  const h = t.hero;
  return (
    <section className="pt-10 pb-12 sm:pt-14 md:pb-18">
      <div className="shell flex flex-col gap-10 md:gap-12">
        <div className="grid items-start gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
          {/* Copy */}
          <div className="reveal flex flex-col gap-5">
            <span className="kicker">{h.eyebrow}</span>
            <h1 className="text-4xl font-extrabold leading-[1.05] sm:text-5xl">
              {h.title}
            </h1>
            <p className="max-w-[46ch] text-lead leading-relaxed text-ink-soft">{h.lead}</p>
            <div className="flex flex-wrap gap-2" aria-label="What Desert Launch builds">
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
              >
                {h.primary.label}
              </a>
              <a href={h.secondary.href} className="btn btn-secondary">
                {h.secondary.label}
              </a>
            </div>
            <p className="text-meta text-muted">{h.responseNote}</p>
          </div>

          {/* Visual */}
          <figure className="reveal panel media-zoom">
            <img src={h.image.src} alt={h.image.alt} className="w-full object-cover" />
            <figcaption className="px-4 py-3 text-meta text-muted">
              {h.imageCaption}
            </figcaption>
          </figure>
        </div>

        {/* Proof — full width under both columns */}
        <div className="reveal grid gap-3 sm:grid-cols-3" aria-label="Key proof points">
          {h.proof.map((p) => (
            <div key={p.label} className="panel flex flex-col gap-1 p-4">
              <small className="text-micro uppercase tracking-[0.12em] text-muted">
                {p.label}
              </small>
              <strong className="text-lg text-gold">{p.value}</strong>
              <span className="text-meta leading-snug text-muted">{p.note}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
