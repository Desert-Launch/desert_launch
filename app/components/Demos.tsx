import type { DemoId, Dictionary, Lang } from "@/app/data/types";
import { DEMOS, demoUrl, type DemoMeta } from "@/app/data/demos";
import { Icon } from "@/app/data/icons";
import { hasPages, simplePath } from "@/app/lib/links";
import { SectionHead } from "./SectionHead";

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

/** The closing band: the quote CTA, plus a link to the long-form /demos/ page
 *  in the locales that have it. */
export function DemosBand({
  t,
  lang,
  placement,
}: {
  t: Dictionary;
  lang: Lang;
  placement: string;
}) {
  const d = t.demos;
  const pageHref = hasPages(lang) ? simplePath(lang, "demos") : null;
  return (
    <div className="panel reveal flex flex-col items-start gap-5 p-6 md:flex-row md:items-center md:justify-between">
      <div className="flex flex-col gap-3">
        <span className="kicker">{d.band.kicker}</span>
        <p className="max-w-[62ch] text-body leading-relaxed text-ink-soft">{d.band.body}</p>
        {pageHref ? (
          <a href={pageHref} className="pf-link pf-link--strong self-start" data-evt="demos_page_click">
            {d.pageLink}
          </a>
        ) : null}
      </div>
      <a
        href={d.band.cta.href}
        target="_blank"
        rel="noreferrer"
        className="btn btn-primary shrink-0"
        data-evt="primary_cta_click"
        data-evt-placement={placement}
      >
        {d.band.cta.label}
      </a>
    </div>
  );
}

/** Home-page section: six working demos on their own subdomains. */
export function Demos({ t, lang }: { t: Dictionary; lang: Lang }) {
  const d = t.demos;

  return (
    <section id="demos" aria-labelledby="demos-heading" className="section scroll-mt-24">
      <div className="shell flex flex-col gap-8 md:gap-10">
        <SectionHead id="demos-heading" kicker={d.kicker} title={d.title} intro={d.intro} />

        {/* Fictional businesses, invented numbers: said before the cards, not
            in a footnote, for the same reason the portfolio attribution is. */}
        <p className="attribution reveal">{d.disclaimer}</p>

        <DemoGrid t={t} placement="home" />

        <DemosBand t={t} lang={lang} placement="demos" />
      </div>
    </section>
  );
}
