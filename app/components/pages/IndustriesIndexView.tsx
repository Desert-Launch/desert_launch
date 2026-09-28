import { dict } from "@/app/data/copy";
import { pages } from "@/app/data/pages/copy";
import { wa } from "@/app/data/shared";
import type { PageLang } from "@/app/data/types";
import { homePath, servicesIndexPath, simplePath } from "@/app/lib/links";
import { industriesIndexSchema } from "@/app/lib/jsonld";
import { PageShell } from "../PageShell";
import { IndustryCards } from "../Industries";
import { CtaBand } from "./PageParts";

/** The /industries/ hub. It is the parent in every industry breadcrumb and the
 *  one place new verticals appear without anyone editing a menu. Its cards are
 *  built from the same copy as the pages, so the two cannot disagree. */
export function IndustriesIndexView({ lang }: { lang: PageLang }) {
  const t = dict(lang);
  const p = pages(lang);
  const hub = p.industries.hub;

  const jsonLd = industriesIndexSchema({
    lang,
    crumbLabels: { home: t.common.home, current: hub.breadcrumb },
  });

  return (
    <PageShell
      lang={lang}
      path="industries"
      jsonLd={jsonLd}
      crumbs={[{ label: t.common.home, href: homePath(lang) }, { label: hub.breadcrumb }]}
    >
      <div className="shell flex flex-col gap-12 pt-6 pb-16 md:gap-14 md:pb-24">
        <div className="page-header">
          <h1 className="h-page">{hub.h1}</h1>
          <p className="prose">{hub.lead}</p>
        </div>

        <IndustryCards lang={lang} headingLevel="h2" placement="industries-index" />

        <section className="flex flex-col gap-4">
          <h2 className="h-section">{hub.other.title}</h2>
          <p className="prose">{hub.other.body}</p>
          <ul className="flex list-none flex-wrap gap-2">
            <li>
              <a href={servicesIndexPath(lang)} className="chip chip--link">
                {t.common.allServices}
              </a>
            </li>
            <li>
              <a href={simplePath(lang, "demos")} className="chip chip--link" data-evt="demos_page_click">
                {t.demos.pageLink}
              </a>
            </li>
            <li>
              <a href={simplePath(lang, "pricing")} className="chip chip--link">
                {t.common.pricingLabel}
              </a>
            </li>
          </ul>
        </section>

        <CtaBand cta={hub.cta} waHref={wa(hub.cta.waMessage)} />
      </div>
    </PageShell>
  );
}
