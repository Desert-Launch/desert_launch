import type { Dictionary, Lang } from "@/app/data/types";
import { HOME_SERVICES } from "@/app/data/services";
import { hasPages, hasSimplePage, servicePath, simplePath } from "@/app/lib/links";

/** The four budget brackets. Ranges are the same strings the brief form
 *  offers, so a visitor places themselves here and picks the same option
 *  there. Nothing in the panel is a quote, and it says so. */
function Investment({ t, lang }: { t: Dictionary; lang: Lang }) {
  const p = t.pricing;
  // Pricing exists in English and Arabic; the other locales link to the
  // English page and say so, as the footer does for the legal pages.
  const local = hasSimplePage(lang, "pricing");
  const pricingHref = simplePath(local ? lang : "en", "pricing");

  return (
    <section className="panel reveal mt-11 overflow-hidden p-0" aria-labelledby="investment-heading">
      <div className="flex flex-wrap items-end justify-between gap-5 px-7 pt-7 pb-6">
        <div className="flex flex-col gap-3.5">
          <span className="kicker">{p.kicker}</span>
          <h3 id="investment-heading" className="h-card">
            {p.title}
          </h3>
        </div>
        <p className="max-w-[44ch] text-body leading-relaxed text-ink-soft">{p.intro}</p>
      </div>

      <div className="grid gap-8 px-7 pb-7 sm:grid-cols-2 lg:grid-cols-4">
        {p.brackets.map((b, i) => (
          <div key={b.range} className="bracket" style={{ "--tier": i + 1 } as React.CSSProperties}>
            <span className="bracket__bar" aria-hidden="true" />
            <p className="bracket__range">{b.range}</p>
            <p className="mt-2 mb-4 max-w-[30ch] text-meta text-muted">{b.summary}</p>
            <dl className="bracket__rows">
              <div>
                <dt>{p.labels.typical}</dt>
                <dd>{b.typical}</dd>
              </div>
              <div>
                <dt>{p.labels.youGet}</dt>
                <dd>{b.youGet}</dd>
              </div>
              <div>
                <dt>{p.labels.fits}</dt>
                <dd>{b.fits}</dd>
              </div>
            </dl>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-line bg-bg px-7 py-5">
        {p.checks.map((check) => (
          <span key={check} className="flex items-center gap-2 text-body text-ink-soft">
            <span aria-hidden="true" className="text-gold">
              ✓
            </span>
            {check}
          </span>
        ))}
        <a
          href={pricingHref}
          {...(local ? {} : { hrefLang: "en", lang: "en" })}
          className="pf-link pf-link--strong ms-auto"
          data-evt="pricing_click"
          data-evt-placement="investment"
        >
          {p.link}
          {local ? null : <span aria-hidden="true"> (EN)</span>}
        </a>
      </div>
    </section>
  );
}

export function Services({ t, lang }: { t: Dictionary; lang: Lang }) {
  const s = t.services;

  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="section section--alt scroll-mt-24"
    >
      <div className="shell">
        <div className="reveal flex max-w-[46rem] flex-col gap-4">
          <span className="kicker">{s.kicker}</span>
          <h2 id="services-heading" className="h-section">
            {s.title}
          </h2>
        </div>

        {/* One row per service: name and typical duration, what you have at
            the end, and what the work involves. Rows with a page are links. */}
        <div className="reveal mt-11 border-b border-line">
          {HOME_SERVICES.map((service) => {
            const copy = s.items[service.id];
            const href = service.slug && hasPages(lang) ? servicePath(lang, service.slug) : null;
            const inner = (
              <>
                <div>
                  <h3 className="h-card">{copy.title}</h3>
                  <p className="mt-1.5 text-meta text-muted">
                    {s.timelineLabel} {copy.timeline}
                  </p>
                </div>
                <p className="text-body leading-relaxed text-ink-soft">{copy.deliverable}</p>
                <p className="text-body leading-relaxed text-ink-soft">{copy.body}</p>
              </>
            );
            return href ? (
              <a
                key={service.id}
                href={href}
                className="service-row service-row--link"
                data-evt="service_cta_click"
                data-evt-service={service.id}
              >
                {inner}
              </a>
            ) : (
              <div key={service.id} className="service-row">
                {inner}
              </div>
            );
          })}
        </div>

        <Investment t={t} lang={lang} />
      </div>
    </section>
  );
}
