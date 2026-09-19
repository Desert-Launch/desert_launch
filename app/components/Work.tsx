import type { Dictionary, Lang } from "@/app/data/types";
import { HOME_CARD_PROJECTS, HOME_CASE_PROJECTS, type ProjectMeta } from "@/app/data/projects";
import { wa } from "@/app/data/shared";
import { casePath, hasPages } from "@/app/lib/links";
import { SectionHead } from "./SectionHead";

/** Store links, shared by the case rows and the small cards. */
function StoreLinks({ t, project }: { t: Dictionary; project: ProjectMeta }) {
  const w = t.work;
  if (!project.store) return null;
  return (
    <>
      {project.store.appStore && (
        <a
          href={project.store.appStore}
          target="_blank"
          rel="noreferrer"
          className="pf-link pf-link--external text-meta"
          data-evt="store_click"
          data-evt-store="app-store"
          data-evt-project={project.id}
        >
          {w.storeLabels.appStore}
          <span className="sr-only"> ({t.a11y.newTab})</span>
        </a>
      )}
      {project.store.googlePlay && (
        <a
          href={project.store.googlePlay}
          target="_blank"
          rel="noreferrer"
          className="pf-link pf-link--external text-meta"
          data-evt="store_click"
          data-evt-store="google-play"
          data-evt-project={project.id}
        >
          {w.storeLabels.googlePlay}
          <span className="sr-only"> ({t.a11y.newTab})</span>
        </a>
      )}
    </>
  );
}

function CaseMedia({ project, alts }: { project: ProjectMeta; alts: string[] }) {
  if (project.media.kind === "stack") return null;
  const shots = project.media.shots;

  // One wide screenshot (a web platform) fills the column; a set of phone
  // screenshots steps down the row so three tall images read as one object.
  if (shots.length === 1) {
    return (
      <img
        src={shots[0]}
        alt={alts[0] ?? ""}
        width={1080}
        height={698}
        loading="lazy"
        decoding="async"
        className="case-shot case-shot--wide"
      />
    );
  }
  return (
    <div className="case-shots-stagger">
      {shots.map((src, i) => (
        <img
          key={src}
          src={src}
          alt={alts[i] ?? ""}
          width={420}
          height={909}
          loading="lazy"
          decoding="async"
          className="case-shot"
        />
      ))}
    </div>
  );
}

/** A full case row: screenshots on one side, the problem / built / outcome
 *  lines on the other. Rows alternate sides on desktop. */
function CaseRow({
  t,
  lang,
  project,
  flip,
}: {
  t: Dictionary;
  lang: Lang;
  project: ProjectMeta;
  flip: boolean;
}) {
  const w = t.work;
  const copy = w.projects[project.id];
  const c = copy.case;
  const statusLabel =
    project.status === "live"
      ? w.statusLabels.live
      : project.status === "delivered"
        ? w.statusLabels.delivered
        : w.statusLabels.inHouse;
  const caseHref = project.caseStudy && hasPages(lang) ? casePath(lang, project.id) : null;

  return (
    <article className="case-row reveal grid items-center gap-8 lg:grid-cols-2">
      <div className={flip ? "lg:order-2" : ""}>
        <CaseMedia project={project} alts={copy.shotAlts} />
      </div>

      <div className={flip ? "lg:order-1" : ""}>
        <div className="flex flex-wrap items-center gap-3">
          <img
            src={project.logo}
            alt={copy.logoAlt}
            width={40}
            height={40}
            loading="lazy"
            decoding="async"
            className="h-10 w-10 rounded-sm border border-line"
          />
          <div className="min-w-0 flex-1 basis-40">
            <h3 className="h-card">{project.name}</h3>
            <p className="mt-0.5 text-meta text-ink-soft">{copy.tag}</p>
          </div>
          <span className={`pf-status pf-status--${project.status} ms-auto shrink-0`}>
            {statusLabel}
          </span>
        </div>

        {c ? (
          <dl className="case-lines mt-6">
            <div>
              <dt>{w.caseLabels.problem}</dt>
              <dd>{c.problem}</dd>
            </div>
            <div>
              <dt>{w.caseLabels.built}</dt>
              <dd>{c.built}</dd>
            </div>
            <div>
              <dt>{w.caseLabels.outcome}</dt>
              <dd className="text-ink">{c.outcome}</dd>
            </div>
          </dl>
        ) : (
          <p className="mt-5 text-body leading-relaxed text-muted">{copy.summary}</p>
        )}

        <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2">
          {caseHref ? (
            <a
              href={caseHref}
              className="pf-link pf-link--strong"
              data-evt="case_study_click"
              data-evt-project={project.id}
            >
              {w.caseStudyCta}
            </a>
          ) : (
            <a
              href={wa(copy.waMessage)}
              target="_blank"
              rel="noreferrer"
              className="pf-link pf-link--strong"
              data-evt="project_cta_click"
              data-evt-project={project.id}
            >
              {w.similarCta}
            </a>
          )}
          <StoreLinks t={t} project={project} />
        </div>
      </div>
    </article>
  );
}

/** The products without a case row: logo, name and category. The ones with a
 *  case study are links; the rest are plain cards, so nothing lifts on hover
 *  that will not open. */
function MiniCard({ t, lang, project }: { t: Dictionary; lang: Lang; project: ProjectMeta }) {
  const copy = t.work.projects[project.id];
  const caseHref = project.caseStudy && hasPages(lang) ? casePath(lang, project.id) : null;
  const inner = (
    <>
      <img
        src={project.logo}
        alt={copy.logoAlt}
        width={32}
        height={32}
        loading="lazy"
        decoding="async"
        className="h-8 w-8 rounded-xs"
      />
      <h3 className="mt-3.5 text-[1rem]">
        {caseHref ? (
          <a
            href={caseHref}
            className="card__link"
            data-evt="case_study_click"
            data-evt-project={project.id}
          >
            {project.name}
          </a>
        ) : (
          project.name
        )}
      </h3>
      <p className="text-meta text-muted">{copy.tag}</p>
    </>
  );
  return (
    <article className={`card mini-card reveal ${caseHref ? "card--link" : ""}`}>{inner}</article>
  );
}

export function Work({ t, lang }: { t: Dictionary; lang: Lang }) {
  const w = t.work;

  return (
    <section id="work" aria-labelledby="work-heading" className="section scroll-mt-24">
      <div className="shell">
        <SectionHead id="work-heading" kicker={w.kicker} title={w.title} intro={w.intro} />

        {/* Honest attribution, directly under the intro rather than buried. */}
        <p className="attribution reveal mt-6">{w.attribution}</p>

        {/* Three case rows, then the other five as small cards. */}
        <div className="mt-8 flex flex-col">
          {HOME_CASE_PROJECTS.map((project, i) => (
            <CaseRow key={project.id} t={t} lang={lang} project={project} flip={i % 2 === 1} />
          ))}
        </div>

        <div className="reveal mt-12 border-t border-line pt-7">
          <p className="mb-4 text-micro uppercase tracking-[0.1em] text-muted">{w.moreHeading}</p>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {HOME_CARD_PROJECTS.map((project) => (
              <MiniCard key={project.id} t={t} lang={lang} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
