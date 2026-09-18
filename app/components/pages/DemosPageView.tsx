import { dict } from "@/app/data/copy";
import { pages } from "@/app/data/pages/copy";
import { wa, CONTENT_UPDATED } from "@/app/data/shared";
import type { PageLang } from "@/app/data/types";
import { homePath } from "@/app/lib/links";
import { demosPageSchema } from "@/app/lib/jsonld";
import { PageShell } from "../PageShell";
import { DemoGrid } from "../Demos";
import { FaqList } from "../Faq";
import { CtaBand, OnThisPage, Section } from "./PageParts";

/** The long-form /demos/ page: how to use a demo, the six cards (the same
 *  copy the home section renders, so the two cannot disagree), what is real
 *  in them, what a real build adds, and the questions a buyer asks. */
export function DemosPageView({ lang }: { lang: PageLang }) {
  const t = dict(lang);
  const copy = pages(lang).demos;

  const sections = [
    { id: "how-to", title: copy.stepsTitle },
    { id: "the-demos", title: copy.gridTitle },
    ...copy.sections,
  ];

  const jsonLd = demosPageSchema({
    lang,
    title: copy.meta.title,
    description: copy.meta.description,
    faq: copy.faq,
    crumbLabels: { home: t.common.home, current: copy.breadcrumb },
  });

  return (
    <PageShell
      lang={lang}
      path="demos"
      jsonLd={jsonLd}
      crumbs={[{ label: t.common.home, href: homePath(lang) }, { label: copy.breadcrumb }]}
    >
      <div className="shell flex flex-col gap-12 pt-6 pb-16 md:gap-14 md:pb-24">
        <div className="page-header">
          <h1 className="h-page">{copy.h1}</h1>
          <p className="prose">{copy.lead}</p>
          <p className="page-meta">
            {t.common.lastUpdated}{" "}
            <time dateTime={CONTENT_UPDATED}>{CONTENT_UPDATED}</time>
          </p>
        </div>

        <OnThisPage sections={sections} label={t.common.onThisPage} />

        <section id="how-to" className="flex scroll-mt-24 flex-col gap-4">
          <h2 className="h-section">{copy.stepsTitle}</h2>
          <ol className="grid list-none gap-4 sm:grid-cols-3">
            {copy.steps.map((step, i) => (
              <li key={step.title} className="card">
                <span className="step-number" aria-hidden="true">
                  {i + 1}
                </span>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </li>
            ))}
          </ol>
        </section>

        <section id="the-demos" className="flex scroll-mt-24 flex-col gap-4">
          <h2 className="h-section">{copy.gridTitle}</h2>
          <p className="attribution">{t.demos.disclaimer}</p>
          <DemoGrid t={t} placement="demos-page" />
        </section>

        <div className="flex flex-col gap-12 md:gap-14">
          {copy.sections.map((section) => (
            <Section key={section.id} section={section} />
          ))}
        </div>

        <section className="flex flex-col gap-4">
          <h2 className="h-section">{t.common.faqHeading}</h2>
          <FaqList items={copy.faq} />
        </section>

        <CtaBand cta={copy.cta} waHref={wa(copy.cta.waMessage)} />
      </div>
    </PageShell>
  );
}
