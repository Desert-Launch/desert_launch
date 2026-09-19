import type { DemoId, Dictionary, Lang } from "@/app/data/types";
import { DEMOS, demoUrl, type DemoMeta } from "@/app/data/demos";
import { Icon } from "@/app/data/icons";
import { hasPages, simplePath } from "@/app/lib/links";

/** One demo: the public site and the staff dashboard, both in a new tab. The
 *  demo's own bar brings the visitor back here with attribution. */
export function DemoCard({
  t,
  demo,
  placement,
}: {
  t: Dictionary;
  demo: DemoMeta;
  /** Where the card sits, for the click event. */
  placement: "home" | "demos-page" | "service";
}) {
  const d = t.demos;
  const copy = d.items[demo.id];
  const langs = demo.langs.map((l) => d.langs[l]).join(" · ");
  return (
    <article className="card demo-card reveal">
      <span className="icon-box">
        <Icon name={demo.icon} />
      </span>
      <div>
        <h3>{demo.name}</h3>
        <p className="demo-card__tag">
          {copy.tag} · {langs}
        </p>
      </div>
      <p>{copy.summary}</p>
      <ul className="flex flex-wrap gap-2" aria-label={d.flowsLabel}>
        {copy.flows.map((flow) => (
          <li key={flow} className="chip">
            {flow}
          </li>
        ))}
      </ul>
      <div className="mt-auto flex flex-wrap items-center gap-x-4 gap-y-1 pt-2">
        <a
          href={demoUrl(demo.id)}
          target="_blank"
          rel="noreferrer"
          className="pf-link pf-link--strong pf-link--external"
          data-evt="demo_click"
          data-evt-demo={demo.id}
          data-evt-surface="site"
          data-evt-placement={placement}
        >
          {d.siteCta}
          <span className="sr-only"> ({t.a11y.newTab})</span>
        </a>
        <a
          href={demoUrl(demo.id, demo.adminPath)}
          target="_blank"
          rel="noreferrer"
          className="pf-link pf-link--external"
          data-evt="demo_click"
          data-evt-demo={demo.id}
          data-evt-surface="admin"
          data-evt-placement={placement}
        >
          {d.adminCta}
          <span className="sr-only"> ({t.a11y.newTab})</span>
        </a>
      </div>
    </article>
  );
}

export function DemoGrid({
  t,
  ids,
  placement,
}: {
  t: Dictionary;
  /** Subset to show; every demo when omitted. */
  ids?: DemoId[];
  placement: "home" | "demos-page" | "service";
}) {
  const demos = ids ? ids.map((id) => DEMOS.find((d) => d.id === id)!).filter(Boolean) : DEMOS;
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {demos.map((demo) => (
        <DemoCard key={demo.id} t={t} demo={demo} placement={placement} />
      ))}
    </div>
  );
}

/** One row of the home-page list: icon, name, the two flows, two links. */
function DemoRow({ t, demo }: { t: Dictionary; demo: DemoMeta }) {
  const d = t.demos;
  const copy = d.items[demo.id];
  return (
    <li className="demo-row">
      <span className="icon-box shrink-0">
        <Icon name={demo.icon} />
      </span>
      <div className="min-w-[11rem]">
        <h3 className="text-body font-semibold text-ink">{demo.name}</h3>
        <p className="mt-0.5 text-meta text-ink-soft">{copy.tag}</p>
      </div>
      {/* A 16rem basis, not 0: with a zero basis the list "fits" beside the
          name on a phone and its chips spill out of the panel. */}
      <ul className="flex min-w-0 flex-[1_1_16rem] flex-wrap gap-2" aria-label={d.flowsLabel}>
        {copy.flows.slice(0, 2).map((flow) => (
          <li key={flow} className="chip">
            {flow}
          </li>
        ))}
      </ul>
      <span className="flex shrink-0 gap-4">
        <a
          href={demoUrl(demo.id)}
          target="_blank"
          rel="noreferrer"
          className="pf-link pf-link--external text-meta"
          data-evt="demo_click"
          data-evt-demo={demo.id}
          data-evt-surface="site"
          data-evt-placement="home"
        >
          {d.siteShort}
          <span className="sr-only">
            {" "}
            — {demo.name} ({t.a11y.newTab})
          </span>
        </a>
        <a
          href={demoUrl(demo.id, demo.adminPath)}
          target="_blank"
          rel="noreferrer"
          className="pf-link pf-link--external text-meta"
          data-evt="demo_click"
          data-evt-demo={demo.id}
          data-evt-surface="admin"
          data-evt-placement="home"
        >
          {d.adminShort}
          <span className="sr-only">
            {" "}
            — {demo.name} ({t.a11y.newTab})
          </span>
        </a>
      </span>
    </li>
  );
}

/** Home-page section: six working demos on their own subdomains, as one
 *  list in a panel. The card grid is kept for the service pages and /demos/. */
export function Demos({ t, lang }: { t: Dictionary; lang: Lang }) {
  const d = t.demos;
  const pageHref = hasPages(lang) ? simplePath(lang, "demos") : null;

  return (
    <section
      id="demos"
      aria-labelledby="demos-heading"
      className="section section--alt scroll-mt-24"
    >
      <div className="shell">
        <div className="grid gap-6 lg:grid-cols-2 lg:items-end lg:gap-8">
          <div className="reveal flex flex-col gap-4">
            <span className="kicker">{d.kicker}</span>
            <h2 id="demos-heading" className="h-section max-w-[26ch]">
              {d.title}
            </h2>
          </div>
          <p className="reveal text-body leading-relaxed text-ink-soft">{d.intro}</p>
        </div>

        <ul className="panel reveal mt-9 list-none overflow-hidden p-0">
          {DEMOS.map((demo) => (
            <DemoRow key={demo.id} t={t} demo={demo} />
          ))}
        </ul>

        {/* Fictional businesses, invented numbers: said plainly, right under
            the list, for the same reason the portfolio attribution is. */}
        <div className="reveal mt-4 flex flex-wrap items-center justify-between gap-4">
          <p className="attribution">{d.disclaimer}</p>
          {pageHref ? (
            <a href={pageHref} className="pf-link pf-link--strong" data-evt="demos_page_click">
              {d.pageLink}
            </a>
          ) : null}
        </div>
      </div>
    </section>
  );
}
