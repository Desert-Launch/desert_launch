import { dict } from "@/app/data/copy";
import { pages } from "@/app/data/pages/copy";
import { wa, CONTENT_UPDATED } from "@/app/data/shared";
import type { PageLang } from "@/app/data/types";
import { homePath } from "@/app/lib/links";
import { simplePageSchema } from "@/app/lib/jsonld";
import { PageShell } from "../PageShell";
import { CtaBand, OnThisPage, Section } from "./PageParts";

type SimpleSlug = "about" | "privacy" | "terms";

export function SimplePageView({ lang, slug }: { lang: PageLang; slug: SimpleSlug }) {
  const t = dict(lang);
  const copy = pages(lang)[slug];

  const jsonLd = simplePageSchema({
    lang,
    slug,
    title: copy.meta.title,
    description: copy.meta.description,
    crumbLabels: { home: t.common.home, current: copy.breadcrumb },
    isAbout: slug === "about",
  });

  return (
    <PageShell
      lang={lang}
      path={slug}
      jsonLd={jsonLd}
      crumbs={[
        { label: t.common.home, href: homePath(lang) },
        { label: copy.breadcrumb },
      ]}
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

        <OnThisPage sections={copy.sections} label={t.common.onThisPage} />

        <div className="flex flex-col gap-12 md:gap-14">
          {copy.sections.map((section) => (
            <Section key={section.id} section={section} />
          ))}
        </div>

        {copy.cta ? <CtaBand cta={copy.cta} waHref={wa(copy.cta.waMessage)} /> : null}
      </div>
    </PageShell>
  );
}
