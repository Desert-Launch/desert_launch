import type { Dictionary, Lang } from "@/app/data/types";
import { Icon } from "@/app/data/icons";
import { hasPages, simplePath } from "@/app/lib/links";
import { SectionHead } from "./SectionHead";

export function WhyUs({ t, lang }: { t: Dictionary; lang: Lang }) {
  const w = t.why;
  const aboutHref = hasPages(lang) ? simplePath(lang, "about") : null;

  return (
    <section id="why-us" aria-labelledby="why-heading" className="section scroll-mt-24">
      <div className="shell flex flex-col gap-8 md:gap-10">
        <SectionHead id="why-heading" kicker={w.kicker} title={w.title} intro={w.intro} />

        <div className="grid gap-4 lg:grid-cols-[1.4fr_0.9fr]">
          {/* The four commitments, not adjectives. */}
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

          <aside className="panel reveal flex flex-col gap-3 p-6" aria-label={t.a11y.founderPanel}>
            <span className="kicker">{w.founder.kicker}</span>
            <img
              src={w.founder.photo}
              alt={w.founder.photoAlt}
              width={96}
              height={96}
              loading="lazy"
              decoding="async"
              className="h-24 w-24 rounded-md border border-line-strong object-cover"
            />
            <div>
              <h3 className="h-card">{w.founder.name}</h3>
              <p className="text-body text-gold">{w.founder.role}</p>
            </div>
            <p className="text-body leading-relaxed text-muted">{w.founder.body}</p>
            <div className="flex flex-wrap gap-2" aria-label={t.a11y.founderFacts}>
              {w.founder.facts.map((fact) => (
                <span key={fact} className="chip">
                  {fact}
                </span>
              ))}
            </div>
            {aboutHref ? (
              <a href={aboutHref} className="pf-link pf-link--strong mt-1 self-start">
                {w.founder.moreLabel}
              </a>
            ) : null}
          </aside>
        </div>

        <div className="panel reveal flex flex-col items-start gap-5 p-6 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-3">
            <span className="kicker">{w.band.kicker}</span>
            <p className="max-w-[62ch] text-body leading-relaxed text-ink-soft">{w.band.body}</p>
            <div className="flex flex-wrap gap-2" aria-label={t.a11y.engagementPoints}>
              {w.band.points.map((p) => (
                <span key={p} className="chip">
                  {p}
                </span>
              ))}
            </div>
          </div>
          <a
            href={w.band.cta.href}
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary shrink-0"
            data-evt="primary_cta_click"
            data-evt-placement="why-band"
          >
            {w.band.cta.label}
          </a>
        </div>
      </div>
    </section>
  );
}
