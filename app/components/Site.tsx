import type { Lang } from "@/app/data/types";
import { dict } from "@/app/data/copy";
import { homePath, localeLinks, navItems } from "@/app/lib/links";
import { faqSchema, homePageSchema } from "@/app/lib/jsonld";
import { Header } from "./Header";
import { Hero } from "./Hero";
import { Work } from "./Work";
import { Services } from "./Services";
import { WhyUs } from "./WhyUs";
import { Process } from "./Process";
import { Testimonials } from "./Testimonials";
import { Faq } from "./Faq";
import { Contact } from "./Contact";
import { Footer } from "./Footer";
import { FloatingWhatsApp } from "./FloatingWhatsApp";

/** The home page, composed from the locale dictionary. */
export function Site({ lang }: { lang: Lang }) {
  const t = dict(lang);
  const { langHrefs, translated } = localeLinks(null);
  const nav = navItems(t, lang, true);
  const home = homePath(lang);

  return (
    <div className="page-shell">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([homePageSchema(lang), faqSchema(t, lang)]),
        }}
      />
      <Header
        header={t.header}
        a11y={t.a11y}
        lang={lang}
        homeHref={home}
        langHrefs={langHrefs}
        translated={translated}
        navItems={nav}
        isHome
      />
      <main id="main">
        <Hero t={t} />
        <Work t={t} lang={lang} />
        <Services t={t} lang={lang} />
        <WhyUs t={t} lang={lang} />
        <Process t={t} />
        <Testimonials t={t} />
        <Faq t={t} />
        <Contact t={t} />
      </main>
      <Footer
        t={t}
        lang={lang}
        homeHref={home}
        langHrefs={langHrefs}
        translated={translated}
        navItems={nav}
      />
      <FloatingWhatsApp t={t} />
    </div>
  );
}
