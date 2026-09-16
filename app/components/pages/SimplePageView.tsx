import { dict } from "@/app/data/copy";
import { aboutPage, pages } from "@/app/data/pages/copy";
import { wa, CONTENT_UPDATED } from "@/app/data/shared";
import type { Lang, PageLang } from "@/app/data/types";
import { homePath, simplePageLocales } from "@/app/lib/links";
import { simplePageSchema } from "@/app/lib/jsonld";
import { PageShell } from "../PageShell";
import { Testimonials } from "../Testimonials";
import { FaqList } from "../Faq";
import { CtaBand, OnThisPage, Section } from "./PageParts";

/** About exists in every locale; pricing and the legal pages in English and
 *  Arabic only. The union keeps a French pricing page from ever type-checking. */
type Props =
  | { lang: Lang; slug: "about" }
  | { lang: PageLang; slug: "pricing" | "privacy" | "terms" };

export function SimplePageView(props: Props) {
  const { lang, slug } = props;
  const t = dict(lang);
  const copy = props.slug === "about" ? aboutPage(props.lang) : pages(props.lang)[props.slug];

  /** The founder's peer recommendations belong beside his story, not on the
   *  home page — see `Testimonials`. They are a real section of this page, so
   *  the contents list has to name them. */
  const sections =
    slug === "about"
      ? [...copy.sections, { id: "testimonials", title: t.testimonials.title }]
      : copy.sections;

  const jsonLd = simplePageSchema({
    lang,
    slug,
    title: copy.meta.title,
    description: copy.meta.description,
    crumbLabels: { home: t.common.home, current: copy.breadcrumb },
    isAbout: slug === "about",
    faq: copy.faq,
  });

  return (
    <PageShell
      lang={lang}
      path={slug}
      langs={simplePageLocales(slug)}
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

        <OnThisPage sections={sections} label={t.common.onThisPage} />

        <div className="flex flex-col gap-12 md:gap-14">
          {copy.sections.map((section) => (
            <Section key={section.id} section={section} />
          ))}
        </div>

        {slug === "about" ? <Testimonials t={t} /> : null}

        {copy.faq?.length ? (
          <section className="flex flex-col gap-4">
            <h2 className="h-section">{t.common.faqHeading}</h2>
            <FaqList items={copy.faq} />
          </section>
        ) : null}

        {copy.cta ? <CtaBand cta={copy.cta} waHref={wa(copy.cta.waMessage)} /> : null}
      </div>
    </PageShell>
  );
}
