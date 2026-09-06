import { dict } from "@/app/data/copy";
import { pages } from "@/app/data/pages/copy";
import type { ServiceSlug } from "@/app/data/pages/types";
import { SERVICES } from "@/app/data/services";
import { wa } from "@/app/data/shared";
import type { PageLang } from "@/app/data/types";
import { homePath, sectionHref, servicePath, servicesIndexPath } from "@/app/lib/links";
import { servicePageSchema } from "@/app/lib/jsonld";
import { PageShell } from "../PageShell";
import { FaqList } from "../Faq";
import { CtaBand, OnThisPage, RelatedProjects, Section } from "./PageParts";

export function ServicePageView({ lang, slug }: { lang: PageLang; slug: ServiceSlug }) {
  const t = dict(lang);
  const p = pages(lang);
  const copy = p.services[slug];
  const meta = SERVICES.find((s) => s.slug === slug)!;

  const jsonLd = servicePageSchema({
    lang,
    slug,
    title: copy.meta.title,
    description: copy.meta.description,
    serviceName: t.services.items[meta.id].title,
    serviceDescription: copy.schemaDescription,
    faq: copy.faq,
    crumbLabels: {
      home: t.common.home,
      services: t.common.servicesLabel,
      current: copy.breadcrumb,
    },
  });

  return (
    <PageShell
      lang={lang}
      path={`services/${slug}`}
      jsonLd={jsonLd}
      crumbs={[
        { label: t.common.home, href: homePath(lang) },
        { label: t.common.servicesLabel, href: servicesIndexPath(lang) },
        { label: copy.breadcrumb },
      ]}
    >
      <div className="shell flex flex-col gap-12 pt-6 pb-16 md:gap-16 md:pb-24">
        <div className="page-header">
          <span className="kicker">{t.services.kicker}</span>
          <h1 className="h-page">{copy.h1}</h1>
          <p className="prose">{copy.lead}</p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={wa(copy.cta.waMessage)}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
              data-evt="primary_cta_click"
              data-evt-placement="service-hero"
              data-evt-service={meta.id}
            >
              {copy.cta.label}
            </a>
            <a href={sectionHref(lang, "#work", false)} className="btn btn-secondary">
              {t.common.allWork}
            </a>
          </div>
        </div>

        <OnThisPage sections={copy.sections} label={t.common.onThisPage} />

        <div className="flex flex-col gap-12 md:gap-14">
          {copy.sections.map((section) => (
            <Section key={section.id} section={section} />
          ))}
        </div>

        <RelatedProjects
          t={t}
          lang={lang}
          ids={meta.related}
          heading={t.common.relatedWork}
        />

        <section className="flex flex-col gap-4">
          <h2 className="h-section">{t.common.faqHeading}</h2>
          <FaqList items={copy.faq} />
        </section>

        <nav aria-label={t.common.relatedServices} className="flex flex-col gap-3">
          <h2 className="h-card">{t.common.relatedServices}</h2>
          <ul className="flex flex-wrap gap-2 list-none">
            {SERVICES.filter((s) => s.slug && s.slug !== slug).map((s) => (
              <li key={s.id}>
                <a href={servicePath(lang, s.slug!)} className="chip">
                  {t.services.items[s.id].title}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <CtaBand cta={copy.cta} waHref={wa(copy.cta.waMessage)} />

        <p className="text-meta text-muted">{t.faq.updated}</p>
      </div>
    </PageShell>
  );
}
