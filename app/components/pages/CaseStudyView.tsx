import { dict } from "@/app/data/copy";
import { pages } from "@/app/data/pages/copy";
import type { CaseSlug } from "@/app/data/pages/types";
import { PROJECTS_BY_ID, CASE_STUDIES } from "@/app/data/projects";
import { wa, CONTENT_UPDATED } from "@/app/data/shared";
import type { PageLang } from "@/app/data/types";
import { casePath, homePath, sectionHref } from "@/app/lib/links";
import { caseStudySchema } from "@/app/lib/jsonld";
import { PageShell } from "../PageShell";
import { CtaBand, FactGrid, OnThisPage, Section } from "./PageParts";

export function CaseStudyView({ lang, slug }: { lang: PageLang; slug: CaseSlug }) {
  const t = dict(lang);
  const p = pages(lang);
  const copy = p.cases[slug];
  const project = PROJECTS_BY_ID[slug];
  const work = t.work.projects[slug];

  const jsonLd = caseStudySchema({
    lang,
    projectId: slug,
    title: copy.meta.title,
    description: copy.meta.description,
    published: CONTENT_UPDATED,
    crumbLabels: {
      home: t.common.home,
      work: t.common.workLabel,
      current: copy.breadcrumb,
    },
  });

  const shots = project.media.kind === "stack" ? [] : project.media.shots;

  return (
    <PageShell
      lang={lang}
      path={`work/${slug}`}
      jsonLd={jsonLd}
      crumbs={[
        { label: t.common.home, href: homePath(lang) },
        { label: t.common.workLabel, href: sectionHref(lang, "#work", false) },
        { label: copy.breadcrumb },
      ]}
    >
      <article className="shell flex flex-col gap-12 pt-6 pb-16 md:gap-16 md:pb-24">
        <div className="page-header">
          <span className="kicker">{t.work.kicker}</span>
          <h1 className="h-page">{copy.h1}</h1>
          <p className="prose">{copy.lead}</p>
          <p className="page-meta">
            <span>
              {t.common.published} <time dateTime={CONTENT_UPDATED}>{CONTENT_UPDATED}</time>
            </span>
            <span>
              {t.common.lastUpdated} <time dateTime={CONTENT_UPDATED}>{CONTENT_UPDATED}</time>
            </span>
            <span>{t.why.founder.name}</span>
          </p>
          <div className="flex flex-wrap gap-3">
            {project.store?.appStore && (
              <a
                href={project.store.appStore}
                target="_blank"
                rel="noreferrer"
                className="btn btn-secondary"
                data-evt="store_click"
                data-evt-store="app-store"
                data-evt-project={slug}
              >
                {t.work.storeLabels.appStore}
              </a>
            )}
            {project.store?.googlePlay && (
              <a
                href={project.store.googlePlay}
                target="_blank"
                rel="noreferrer"
                className="btn btn-secondary"
                data-evt="store_click"
                data-evt-store="google-play"
                data-evt-project={slug}
              >
                {t.work.storeLabels.googlePlay}
              </a>
            )}
            <a
              href={wa(copy.cta.waMessage)}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
              data-evt="project_cta_click"
              data-evt-project={slug}
              data-evt-placement="case-hero"
            >
              {copy.cta.label}
            </a>
          </div>
        </div>

        <FactGrid facts={copy.facts} label={p.labels.atAGlance} />

        {shots.length ? (
          <div className={`case-shots ${shots.length === 1 ? "case-shots--single" : ""}`}>
            {shots.map((src, i) => (
              <img
                key={src}
                src={src}
                alt={work.shotAlts[i] ?? ""}
                loading="lazy"
                decoding="async"
                width={shots.length === 1 ? 1080 : 420}
                height={shots.length === 1 ? 700 : 909}
              />
            ))}
          </div>
        ) : (
          <div className="fact-grid" aria-label={t.a11y.projectStack}>
            {project.stack.map((s) => (
              <div key={s} className="fact">
                <span className="fact__value">{s}</span>
              </div>
            ))}
          </div>
        )}

        <OnThisPage sections={copy.sections} label={t.common.onThisPage} />

        <div className="flex flex-col gap-12 md:gap-14">
          {copy.sections.map((section) => (
            <Section key={section.id} section={section} />
          ))}
        </div>

        <p className="attribution">
          <strong>{p.labels.attribution}: </strong>
          {copy.attribution}
        </p>

        <nav aria-label={t.common.relatedWork} className="flex flex-col gap-3">
          <h2 className="h-card">{t.common.relatedWork}</h2>
          <ul className="flex flex-wrap gap-2 list-none">
            {CASE_STUDIES.filter((c) => c.id !== slug).map((c) => (
              <li key={c.id}>
                <a href={casePath(lang, c.id)} className="chip">
                  {c.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <CtaBand cta={copy.cta} waHref={wa(copy.cta.waMessage)} />
      </article>
    </PageShell>
  );
}
