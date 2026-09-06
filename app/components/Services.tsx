import type { Dictionary, Lang } from "@/app/data/types";
import { Icon } from "@/app/data/icons";
import { SERVICES } from "@/app/data/services";
import { hasPages, servicePath } from "@/app/lib/links";
import { SectionHead } from "./SectionHead";

export function Services({ t, lang }: { t: Dictionary; lang: Lang }) {
  const s = t.services;

  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="section section--alt scroll-mt-24"
    >
      <div className="shell flex flex-col gap-8 md:gap-10">
        <SectionHead id="services-heading" kicker={s.kicker} title={s.title} intro={s.intro} />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => {
            const copy = s.items[service.id];
            const href = service.slug && hasPages(lang) ? servicePath(lang, service.slug) : null;
            return (
              <article key={service.id} className={`card reveal ${href ? "card--link" : ""}`}>
                <span className="icon-box">
                  <Icon name={service.icon} />
                </span>
                <h3>
                  {href ? (
                    <a
                      href={href}
                      className="card__link"
                      data-evt="service_cta_click"
                      data-evt-service={service.id}
                    >
                      {copy.title}
                    </a>
                  ) : (
                    copy.title
                  )}
                </h3>
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

        <div className="reveal flex flex-col gap-3" aria-label={t.a11y.techStack}>
          <span className="kicker">{s.stackLabel}</span>
          <div className="flex flex-wrap gap-2">
            {s.stack.map((tech) => (
              <span key={tech} className="chip">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="reveal flex flex-col gap-3 sm:flex-row">
          <a
            href={s.primary.href}
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary"
            data-evt="primary_cta_click"
            data-evt-placement="services"
          >
            {s.primary.label}
          </a>
          <a
            href={s.secondary.href}
            className="btn btn-secondary"
            data-evt="email_click"
            data-evt-placement="services"
          >
            {s.secondary.label}
          </a>
        </div>
      </div>
    </section>
  );
}
