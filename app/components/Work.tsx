import type { Dictionary, Project, RedesignCard as RedesignCardCopy } from "@/app/data/types";
import { Icon } from "@/app/data/icons";
import { SectionHead } from "./SectionHead";

function ProjectMedia({ project }: { project: Project }) {
  if (project.media.kind === "stack") {
    return (
      <div className="pf-showcase">
        <img src={project.logo} alt={project.logoAlt} width={58} height={58} loading="lazy" />
        <div className="flex flex-wrap justify-center gap-2" aria-label="Technology stack">
          {project.media.stack.map((s) => (
            <span
              key={s}
              className="rounded-full border border-line bg-white/[0.04] px-3 py-1.5 text-micro font-semibold text-ink-soft"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    );
  }
  return (
    <div className={`pf-media ${project.media.kind === "contain" ? "pf-media--contain" : ""}`}>
      {project.media.shots.map((shot) => (
        <img key={shot.src} src={shot.src} alt={shot.alt} loading="lazy" />
      ))}
    </div>
  );
}

function ProjectCard({ project, className = "" }: { project: Project; className?: string }) {
  return (
    <article
      className={`pf-card reveal flex flex-col overflow-hidden rounded-lg border border-line bg-[rgba(11,15,25,0.82)] ${className}`}
    >
      <ProjectMedia project={project} />
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center gap-3">
          <img
            src={project.logo}
            alt={project.logoAlt}
            width={46}
            height={46}
            loading="lazy"
            className="pf-applogo"
          />
          <div>
            <h3 className="text-lg font-bold">{project.title}</h3>
            <span className="pf-tag mt-1.5">{project.tag}</span>
          </div>
        </div>
        <p className="mt-4 text-body leading-relaxed text-muted">{project.summary}</p>
        <ul className="mt-3 grid gap-2 text-body text-ink-soft">
          {project.points.map((point) => (
            <li key={point} className="flex gap-2">
              <span aria-hidden="true" className="mt-2 h-[6px] w-[6px] shrink-0 rounded-full bg-gold" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
        <div className="mt-auto flex flex-wrap gap-x-4 gap-y-2 pt-4">
          {project.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="pf-link"
              {...(link.external ? { target: "_blank", rel: "noreferrer" } : {})}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </article>
  );
}

function RedesignCard({ card }: { card: RedesignCardCopy }) {
  return (
    <article className="pf-card reveal flex flex-col overflow-hidden rounded-[24px] border border-line bg-[rgba(11,15,25,0.82)]">
      <div className="pf-media pf-media--single">
        <img src={card.image.src} alt={card.image.alt} loading="lazy" />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-bold">{card.title}</h3>
        <span className="pf-tag mt-1.5 self-start">{card.label}</span>
        <p className="mt-4 text-body leading-relaxed text-muted">{card.summary}</p>
        <ul className="mt-3 grid gap-2 text-body text-ink-soft">
          {card.points.map((point) => (
            <li key={point} className="flex gap-2">
              <span aria-hidden="true" className="mt-2 h-[6px] w-[6px] shrink-0 rounded-full bg-gold" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

/** The redesign concepts are hidden until their screenshots exist —
 *  `public/assets/redesign-landmark.jpg` and `redesign-ayyath.jpg` are still
 *  missing, so the cards render as empty frames. Flip back to `true` once the
 *  images are added; the copy for all five locales is already in place. */
const SHOW_REDESIGNS = false;

export function Work({ t }: { t: Dictionary }) {
  const w = t.work;
  return (
    <section id="work" aria-labelledby="work-heading" className="section scroll-mt-24">
      <div className="shell flex flex-col gap-8 md:gap-10">
        <SectionHead id="work-heading" kicker={w.kicker} title={w.title} intro={w.intro} />

        {/* Projects. An odd count leaves the last card orphaned beside an empty
            half-row, so it spans the full width instead — a deliberate wide
            card reads as composition, a gap reads as a mistake. */}
        <div className="grid gap-5 md:grid-cols-2 md:gap-6">
          {w.projects.map((project, i) => (
            <ProjectCard
              key={project.title}
              project={project}
              className={
                w.projects.length % 2 === 1 && i === w.projects.length - 1 ? "md:col-span-2" : ""
              }
            />
          ))}
        </div>

        {/* Website redesign concepts */}
        {SHOW_REDESIGNS && (
          <div className="flex flex-col gap-5">
            <div className="reveal flex flex-col gap-2">
              <h3 className="text-xl font-bold sm:text-2xl">{w.redesigns.title}</h3>
              <p className="max-w-3xl text-body leading-relaxed text-muted">
                {w.redesigns.intro}
              </p>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              {w.redesigns.cards.map((card) => (
                <RedesignCard key={card.title} card={card} />
              ))}
            </div>
          </div>
        )}

        {/* Capabilities — kept after the work itself so visitors hit proof first */}
        <div className="grid gap-4 lg:grid-cols-[0.9fr_1.4fr]">
          <aside className="panel reveal flex flex-col gap-3 p-6">
            <span className="kicker">{w.capabilities.kicker}</span>
            <h3 className="text-lg font-bold">{w.capabilities.title}</h3>
            <p className="text-body leading-relaxed text-muted">{w.capabilities.body}</p>
            <ul className="mt-1 grid gap-2 text-body text-ink-soft">
              {w.capabilities.points.map((point) => (
                <li key={point} className="flex gap-2">
                  <span aria-hidden="true" className="mt-2 h-[6px] w-[6px] shrink-0 rounded-full bg-gold" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </aside>

          <div className="grid gap-4 sm:grid-cols-2">
            {w.capabilityCards.map((card) => (
              <article key={card.title} className="card reveal">
                <span className="icon-box">
                  <Icon name={card.icon} />
                </span>
                <h3>{card.title}</h3>
                <p>{card.body}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
