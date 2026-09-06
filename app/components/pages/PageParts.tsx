import type { PageCta, PageSection } from "@/app/data/pages/types";
import type { Dictionary, Lang } from "@/app/data/types";
import { PROJECTS_BY_ID } from "@/app/data/projects";
import type { ProjectId } from "@/app/data/types";
import { casePath, hasPages } from "@/app/lib/links";

/** One long-form section: prose, a bullet list, or a card grid. */
export function Section({ section }: { section: PageSection }) {
  return (
    <section id={section.id} className="flex scroll-mt-24 flex-col gap-4">
      <h2 className="h-section">{section.title}</h2>

      {section.body?.length ? (
        <div className="prose">
          {section.body.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      ) : null}

      {section.list?.length ? (
        <ul className="grid max-w-[68ch] list-none gap-2.5">
          {section.list.map((item) => (
            <li key={item} className="flex gap-2.5 text-body leading-relaxed text-ink-soft">
              <span aria-hidden="true" className="bullet-dot" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      ) : null}

      {section.cards?.length ? (
        <div className="grid gap-4 sm:grid-cols-2">
          {section.cards.map((card) => (
            <article key={card.title} className="card">
              <h3>{card.title}</h3>
              <p>{card.body}</p>
            </article>
          ))}
        </div>
      ) : null}
    </section>
  );
}

/** In-page contents. Long pages get a jump list; it doubles as a signal to a
 *  crawler about how the page is organised. */
export function OnThisPage({
  sections,
  label,
}: {
  sections: PageSection[];
  label: string;
}) {
  if (sections.length < 3) return null;
  return (
    <nav aria-label={label} className="on-this-page">
      <span className="on-this-page__label">{label}</span>
      <ul>
        {sections.map((s) => (
          <li key={s.id}>
            <a href={`#${s.id}`}>{s.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export function FactGrid({ facts, label }: { facts: { label: string; value: string }[]; label: string }) {
  return (
    <section aria-label={label} className="fact-grid">
      {facts.map((fact) => (
        <div key={fact.label} className="fact">
          <span className="fact__label">{fact.label}</span>
          <span className="fact__value">{fact.value}</span>
        </div>
      ))}
    </section>
  );
}

/** Proof links back into the portfolio, and the internal links that make the
 *  service pages part of one site rather than orphans. */
export function RelatedProjects({
  t,
  lang,
  ids,
  heading,
}: {
  t: Dictionary;
  lang: Lang;
  ids: ProjectId[];
  heading: string;
}) {
  if (!ids.length) return null;
  return (
    <section className="flex flex-col gap-4">
      <h2 className="h-section">{heading}</h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {ids.map((id) => {
          const project = PROJECTS_BY_ID[id];
          const copy = t.work.projects[id];
          const href = project.caseStudy && hasPages(lang) ? casePath(lang, id) : null;
          return (
            <article key={id} className={`card ${href ? "card--link" : ""}`}>
              <img
                src={project.logo}
                alt=""
                width={44}
                height={44}
                loading="lazy"
                decoding="async"
                className="pf-applogo"
              />
              <h3>
                {href ? (
                  <a href={href} className="card__link" data-evt="case_study_click" data-evt-project={id}>
                    {project.name}
                  </a>
                ) : (
                  project.name
                )}
              </h3>
              <p>{copy.tag}</p>
              {href ? (
                <p className="service-timeline">
                  <span className="service-timeline__more">{t.common.readCaseStudy} →</span>
                </p>
              ) : null}
            </article>
          );
        })}
      </div>
    </section>
  );
}

export function CtaBand({ cta, waHref }: { cta: PageCta; waHref: string }) {
  return (
    <section className="panel cta-band p-6">
      <div className="flex max-w-[52ch] flex-col gap-2">
        <h2 className="h-card">{cta.title}</h2>
        <p className="text-body leading-relaxed text-muted">{cta.body}</p>
      </div>
      <a
        href={waHref}
        target="_blank"
        rel="noreferrer"
        className="btn btn-primary shrink-0"
        data-evt="primary_cta_click"
        data-evt-placement="page-cta"
      >
        {cta.label}
      </a>
    </section>
  );
}
