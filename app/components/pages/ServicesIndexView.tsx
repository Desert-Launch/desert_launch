import { dict } from "@/app/data/copy";
import { Icon } from "@/app/data/icons";
import { SERVICES } from "@/app/data/services";
import { wa } from "@/app/data/shared";
import type { PageLang } from "@/app/data/types";
import { homePath, sectionHref, servicePath } from "@/app/lib/links";
import { servicesIndexSchema } from "@/app/lib/jsonld";
import { PageShell } from "../PageShell";

/** The /services/ hub.
 *
 *  It exists for two reasons: it is the URL the service breadcrumbs point at,
 *  and it gives the three depth pages a parent that can rank for the category
 *  term on its own. Its content is derived entirely from the locale dictionary,
 *  so there is no second copy of the service descriptions to keep in sync.
 */
export function ServicesIndexView({ lang }: { lang: PageLang }) {
  const t = dict(lang);
  const s = t.services;

  const jsonLd = servicesIndexSchema({
    lang,
    title: `${s.title} | Desert Launch`,
    description: s.intro,
    crumbLabels: { home: t.common.home, current: t.common.servicesLabel },
  });

  return (
    <PageShell
      lang={lang}
      path="services"
      jsonLd={jsonLd}
      crumbs={[
        { label: t.common.home, href: homePath(lang) },
        { label: t.common.servicesLabel },
      ]}
    >
      <div className="shell flex flex-col gap-12 pt-6 pb-16 md:gap-14 md:pb-24">
        <div className="page-header">
          <span className="kicker">{s.kicker}</span>
          <h1 className="h-page">{s.title}</h1>
          <p className="prose">{s.intro}</p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={s.primary.href}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
              data-evt="primary_cta_click"
              data-evt-placement="services-index"
            >
              {s.primary.label}
            </a>
            <a href={sectionHref(lang, "#work", false)} className="btn btn-secondary">
              {t.common.allWork}
            </a>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => {
            const copy = s.items[service.id];
            const href = service.slug ? servicePath(lang, service.slug) : null;
            return (
              <article key={service.id} className={`card ${href ? "card--link" : ""}`}>
                <span className="icon-box">
                  <Icon name={service.icon} />
                </span>
                <h2 className="h-card">
                  {href ? (
                    <a
                      href={href}
                      className="card__link"
                      data-evt="service_cta_click"
                      data-evt-service={service.id}
                      data-evt-placement="services-index"
                    >
                      {copy.title}
                    </a>
                  ) : (
                    copy.title
                  )}
                </h2>
                <p>{copy.body}</p>
                <p className="service-deliverable">
                  <span aria-hidden="true" className="bullet-dot" />
                  {copy.deliverable}
                </p>
                <p className="service-timeline">
                  <span className="service-timeline__label">{s.timelineLabel}</span>
                  <span className="service-timeline__value">{copy.timeline}</span>
                  {href ? <span className="service-timeline__more">{s.learnMore} →</span> : null}
                </p>
              </article>
            );
          })}
        </div>

        <section className="flex flex-col gap-3" aria-label={t.a11y.techStack}>
          <h2 className="h-section">{s.stackLabel}</h2>
          <div className="flex flex-wrap gap-2">
            {s.stack.map((tech) => (
              <span key={tech} className="chip">
                {tech}
              </span>
            ))}
          </div>
        </section>

        <section className="panel cta-band p-6">
          <div className="flex max-w-[52ch] flex-col gap-2">
            <h2 className="h-card">{t.why.band.kicker}</h2>
            <p className="text-body leading-relaxed text-muted">{t.why.band.body}</p>
          </div>
          <a
            href={wa(t.contact.form.draftIntro)}
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary shrink-0"
            data-evt="primary_cta_click"
            data-evt-placement="services-index-band"
          >
            {t.header.startProject.label}
          </a>
        </section>
      </div>
    </PageShell>
  );
}
