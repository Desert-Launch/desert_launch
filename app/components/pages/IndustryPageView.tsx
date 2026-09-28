import { dict } from "@/app/data/copy";
import { INDUSTRIES, INDUSTRIES_BY_ID } from "@/app/data/industries";
import { pages } from "@/app/data/pages/copy";
import { SERVICES } from "@/app/data/services";
import { wa } from "@/app/data/shared";
import type { IndustryId, PageLang } from "@/app/data/types";
import { homePath, industriesIndexPath, servicePath, simplePath } from "@/app/lib/links";
import { industryPageSchema } from "@/app/lib/jsonld";
import { PageShell } from "../PageShell";
import { FaqList } from "../Faq";
import { DemoGrid } from "../Demos";
import { IndustryLinks } from "../Industries";
import { CtaBand, OnThisPage, RelatedProjects, Section } from "./PageParts";

/** One industry page. The order is the argument: what we build for this kind
 *  of business, then the working demo straight away (proof before prose), then
 *  who it is for, what it does, what the demo leaves out, the shipped work
 *  nearest to it, and the price. */
export function IndustryPageView({ lang, id }: { lang: PageLang; id: IndustryId }) {
  const t = dict(lang);
  const p = pages(lang);
  const copy = p.industries.items[id];
  const meta = INDUSTRIES_BY_ID[id];
  const path = `industries/${id}`;

  const jsonLd = industryPageSchema({
    lang,
    id,
    crumbLabels: {
      home: t.common.home,
      industries: p.labels.industries,
      current: copy.breadcrumb,
    },
  });

  const services = SERVICES.filter((s) => s.slug && meta.services.includes(s.id));

  return (
    <PageShell
      lang={lang}
      path={path}
      jsonLd={jsonLd}
      crumbs={[
        { label: t.common.home, href: homePath(lang) },
        { label: p.labels.industries, href: industriesIndexPath(lang) },
        { label: copy.breadcrumb },
      ]}
    >
      <div className="shell flex flex-col gap-12 pt-6 pb-16 md:gap-16 md:pb-24">
        <div className="page-header">
          <span className="kicker">{copy.kicker}</span>
          <h1 className="h-page">{copy.h1}</h1>
          <p className="prose">{copy.lead}</p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={wa(copy.cta.waMessage)}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
              data-evt="primary_cta_click"
              data-evt-placement="industry-hero"
              data-evt-industry={id}
            >
              {copy.cta.label}
            </a>
            {/* In-page jump, not measured: `demo_click` counts demos actually
                opened, which the cards below report with placement=industry. */}
            <a href="#demo" className="btn btn-secondary">
              {copy.demo.title}
            </a>
          </div>
        </div>

        {/* The demo sits directly under the header: a clinic owner who can
            open a working clinic site should not have to read to find it. */}
        <section id="demo" className="flex scroll-mt-24 flex-col gap-4">
          <h2 className="h-section">{copy.demo.title}</h2>
          <p className="prose">{copy.demo.body}</p>
          <p className="attribution">{t.demos.disclaimer}</p>
          <DemoGrid t={t} lang={lang} ids={meta.demos} placement="industry" linkIndustry={false} />
        </section>

        <OnThisPage sections={copy.sections} label={t.common.onThisPage} />

        <div className="flex flex-col gap-12 md:gap-14">
          {copy.sections.map((section) => (
            <Section key={section.id} section={section} />
          ))}
        </div>

        <RelatedProjects t={t} lang={lang} ids={meta.related} heading={t.common.relatedWork} />

        <section className="flex flex-col gap-4">
          <h2 className="h-section">{t.common.faqHeading}</h2>
          <FaqList items={copy.faq} />
        </section>

        {/* The service pages this vertical draws on (one of them may own a
            narrower query, e.g. "gym booking app"), then the pricing page. */}
        <nav aria-label={p.labels.servicesForIndustry} className="flex flex-col gap-3">
          <h2 className="h-card">{p.labels.servicesForIndustry}</h2>
          <ul className="flex list-none flex-wrap gap-2">
            {services.map((s) => (
              <li key={s.id}>
                <a
                  href={servicePath(lang, s.slug!)}
                  className="chip chip--link"
                  data-evt="service_cta_click"
                  data-evt-service={s.id}
                  data-evt-placement="industry-related"
                >
                  {t.services.items[s.id].title}
                </a>
              </li>
            ))}
            <li>
              <a href={simplePath(lang, "pricing")} className="chip chip--link">
                {t.common.pricingLabel}
              </a>
            </li>
          </ul>
        </nav>

        <IndustryLinks
          lang={lang}
          industries={INDUSTRIES}
          exclude={id}
          heading={{ variant: "block", text: p.labels.industriesHeading }}
          placement="industry-siblings"
        />

        <CtaBand cta={copy.cta} waHref={wa(copy.cta.waMessage)} />

        <p className="text-meta text-muted">{t.faq.updated}</p>
      </div>
    </PageShell>
  );
}
