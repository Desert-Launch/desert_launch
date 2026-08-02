import type { Dictionary, Project, RedesignCard as RedesignCardCopy } from "@/app/data/types";
import { Icon } from "@/app/data/icons";
import { SectionHead } from "./SectionHead";

function ProjectMedia({ project }: { project: Project }) {
  if (project.media.kind === "stack") {
    return (
      <div className="pf-showcase">
        <img src={project.logo} alt={project.logoAlt} width={58} height={58} loading="lazy" />
        <div className="flex flex-wrap justify-center gap-[0.45rem]" aria-label="Technology stack">
          {project.media.stack.map((s) => (
            <span
              key={s}
              className="rounded-full border border-line bg-white/[0.04] px-[0.7rem] py-[0.34rem] text-[0.74rem] font-semibold text-ink-soft"
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

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="pf-card reveal flex flex-col overflow-hidden rounded-[24px] border border-line bg-[rgba(11,15,25,0.82)]">
      <ProjectMedia project={project} />
      <div className="flex flex-1 flex-col p-[1.15rem]">
        <div className="flex items-center gap-[0.85rem]">
          <img
            src={project.logo}
            alt={project.logoAlt}
            width={46}
            height={46}
            loading="lazy"
            className="pf-applogo"
          />
          <div>
            <h3 className="text-[1.18rem] font-bold">{project.title}</h3>
            <span className="pf-tag mt-[0.35rem]">{project.tag}</span>
          </div>
        </div>
        <p className="mt-4 text-[0.94rem] leading-relaxed text-muted">{project.summary}</p>
        <ul className="mt-3 grid gap-2 text-[0.9rem] text-ink-soft">
          {project.points.map((point) => (
            <li key={point} className="flex gap-2">
              <span aria-hidden="true" className="mt-[0.5rem] h-[6px] w-[6px] shrink-0 rounded-full bg-gold" />
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
      <div className="flex flex-1 flex-col p-[1.15rem]">
        <h3 className="text-[1.18rem] font-bold">{card.title}</h3>
        <span className="pf-tag mt-[0.35rem] self-start">{card.label}</span>
        <p className="mt-4 text-[0.94rem] leading-relaxed text-muted">{card.summary}</p>
        <ul className="mt-3 grid gap-2 text-[0.9rem] text-ink-soft">
          {card.points.map((point) => (
            <li key={point} className="flex gap-2">
              <span aria-hidden="true" className="mt-[0.5rem] h-[6px] w-[6px] shrink-0 rounded-full bg-gold" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export function Work({ t }: { t: Dictionary }) {
  const w = t.work;
  return (
    <section id="work" aria-labelledby="work-heading" className="scroll-mt-24 py-7">
      <div className="shell flex flex-col gap-8">
        <SectionHead id="work-heading" kicker={w.kicker} title={w.title} intro={w.intro} />

        {/* Capabilities */}
        <div className="grid gap-4 lg:grid-cols-[0.9fr_1.4fr]">
          <aside className="panel reveal flex flex-col gap-3 p-6">
            <span className="kicker">{w.capabilities.kicker}</span>
            <h3 className="text-lg font-bold">{w.capabilities.title}</h3>
            <p className="text-[0.94rem] leading-relaxed text-muted">{w.capabilities.body}</p>
            <ul className="mt-1 grid gap-2 text-[0.9rem] text-ink-soft">
              {w.capabilities.points.map((point) => (
                <li key={point} className="flex gap-2">
                  <span aria-hidden="true" className="mt-[0.5rem] h-[6px] w-[6px] shrink-0 rounded-full bg-gold" />
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

        {/* Projects */}
        <div className="grid gap-5 md:grid-cols-2">
          {w.projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>

        {/* Website redesign concepts */}
        <div className="flex flex-col gap-5">
          <div className="reveal flex flex-col gap-2">
            <h3 className="text-xl font-bold sm:text-2xl">{w.redesigns.title}</h3>
            <p className="max-w-3xl text-[0.94rem] leading-relaxed text-muted">{w.redesigns.intro}</p>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {w.redesigns.cards.map((card) => (
              <RedesignCard key={card.title} card={card} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
