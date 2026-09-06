import type { Dictionary, Lang, ProjectId } from "@/app/data/types";
import { FEATURED_PROJECTS, MORE_PROJECTS, type ProjectMeta } from "@/app/data/projects";
import { wa } from "@/app/data/shared";
import { casePath, hasPages } from "@/app/lib/links";
import { LogoMarquee } from "./LogoMarquee";
import { SectionHead } from "./SectionHead";

function ProjectMedia({
  project,
  copyAlts,
  stackLabel,
}: {
  project: ProjectMeta;
  copyAlts: string[];
  stackLabel: string;
}) {
  if (project.media.kind === "stack") {
    return (
      <div className="pf-showcase">
        <img src={project.logo} alt="" width={56} height={56} loading="lazy" decoding="async" />
        <div className="flex flex-wrap justify-center gap-2" aria-label={stackLabel}>
          {project.media.stack.map((s) => (
            <span key={s} className="pf-stack-chip">
              {s}
            </span>
          ))}
        </div>
      </div>
    );
  }

  const modifiers = [
    project.media.kind === "contain" ? "pf-media--contain" : "",
    project.media.shots.length === 1 ? "pf-media--single" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={`pf-media ${modifiers}`}>
      {project.media.shots.map((src, i) => (
        <img
          key={src}
          src={src}
          alt={copyAlts[i] ?? ""}
          loading="lazy"
          decoding="async"
          width={project.media.kind === "contain" && project.media.shots.length === 1 ? 640 : 240}
          height={project.media.kind === "contain" && project.media.shots.length === 1 ? 400 : 308}
        />
      ))}
    </div>
  );
}

function ProjectCard({
  t,
  lang,
  project,
  compact = false,
  className = "",
}: {
  t: Dictionary;
  lang: Lang;
  project: ProjectMeta;
  compact?: boolean;
  className?: string;
}) {
  const w = t.work;
  const copy = w.projects[project.id];
  const statusLabel =
    project.status === "live"
      ? w.statusLabels.live
      : project.status === "delivered"
        ? w.statusLabels.delivered
        : w.statusLabels.inHouse;

  const caseHref = project.caseStudy && hasPages(lang) ? casePath(lang, project.id) : null;

  return (
    <article className={`pf-card reveal ${className}`}>
      <ProjectMedia project={project} copyAlts={copy.shotAlts} stackLabel={t.a11y.projectStack} />
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start gap-3">
          <img
            src={project.logo}
            alt={copy.logoAlt}
            width={44}
            height={44}
            loading="lazy"
            decoding="async"
            className="pf-applogo"
          />
          <div className="min-w-0">
            <h3 className="h-card">{project.name}</h3>
            <p className="mt-1 text-meta text-muted">{copy.tag}</p>
          </div>
          <span className={`pf-status pf-status--${project.status} ms-auto shrink-0`}>
            {statusLabel}
          </span>
        </div>

        <p className="mt-4 text-body leading-relaxed text-muted">{copy.summary}</p>

        {!compact && (
          <ul className="mt-3 grid gap-2 text-body text-ink-soft">
            {copy.points.map((point) => (
              <li key={point} className="flex gap-2">
                <span aria-hidden="true" className="bullet-dot" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        )}

        <div className="mt-auto flex flex-wrap items-center gap-x-4 gap-y-2 pt-4">
          {project.store?.appStore && (
            <a
              href={project.store.appStore}
              target="_blank"
              rel="noreferrer"
              className="pf-link"
              data-evt="store_click"
              data-evt-store="app-store"
              data-evt-project={project.id}
            >
              {w.storeLabels.appStore}
            </a>
          )}
          {project.store?.googlePlay && (
            <a
              href={project.store.googlePlay}
              target="_blank"
              rel="noreferrer"
              className="pf-link"
              data-evt="store_click"
              data-evt-store="google-play"
              data-evt-project={project.id}
            >
              {w.storeLabels.googlePlay}
            </a>
          )}
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
        </div>
      </div>
    </article>
  );
}

export function Work({ t, lang }: { t: Dictionary; lang: Lang }) {
  const w = t.work;
  const logoAlts = Object.fromEntries(
    (Object.keys(w.projects) as ProjectId[]).map((id) => [id, w.projects[id].logoAlt])
  ) as Record<ProjectId, string>;

  return (
    <section id="work" aria-labelledby="work-heading" className="section scroll-mt-24">
      <div className="shell flex flex-col gap-8 md:gap-10">
        <SectionHead id="work-heading" kicker={w.kicker} title={w.title} intro={w.intro} />

        {/* Honest attribution, directly under the intro rather than buried. */}
        <p className="attribution reveal">{w.attribution}</p>

        <LogoMarquee
          alts={logoAlts}
          label={w.logosLabel}
          pauseLabel={w.logosPause}
          playLabel={w.logosPlay}
        />

        {/* Four featured projects. The other four sit behind a disclosure so the
            section stops being a third of the page on a phone. */}
        <div className="grid gap-5 md:grid-cols-2 md:gap-6">
          {FEATURED_PROJECTS.map((project) => (
            <ProjectCard key={project.id} t={t} lang={lang} project={project} />
          ))}
        </div>

        {/* Native <details>: works with JavaScript disabled and is keyboard
            operable without a single line of script. */}
        <details className="more-work reveal">
          <summary className="more-work__summary">
            <span>{w.moreLabel}</span>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              className="h-4 w-4 shrink-0 text-gold transition-transform"
              aria-hidden="true"
              focusable="false"
            >
              <path d="M12 5v14M5 12h14" />
            </svg>
          </summary>
          <div className="mt-5 grid gap-5 md:grid-cols-2 md:gap-6">
            {MORE_PROJECTS.map((project) => (
              <ProjectCard key={project.id} t={t} lang={lang} project={project} compact />
            ))}
          </div>
        </details>
      </div>
    </section>
  );
}
