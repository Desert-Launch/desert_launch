import type { Lang } from "@/app/data/types";
import { dict } from "@/app/data/copy";
import { Header } from "./Header";
import { Hero } from "./Hero";
import { Work } from "./Work";
import { Services } from "./Services";
import { WhyUs } from "./WhyUs";
import { Process } from "./Process";
import { Testimonials } from "./Testimonials";
import { Plans } from "./Plans";
import { Faq } from "./Faq";
import { Contact } from "./Contact";
import { Footer } from "./Footer";
import { FloatingWhatsApp } from "./FloatingWhatsApp";
import { ScrollReveal } from "./ScrollReveal";

// The whole single page, composed from the locale dictionary. Rendered by each
// locale's page.tsx with its `lang`.
export function Site({ lang }: { lang: Lang }) {
  const t = dict(lang);
  return (
    <div className="relative overflow-clip">
      <Header t={t} lang={lang} />
      <main id="top">
        <Hero t={t} />
        <Work t={t} />
        <Services t={t} />
        <WhyUs t={t} />
        <Process t={t} />
        <Testimonials t={t} />
        <Plans t={t} />
        <Faq t={t} />
        <Contact t={t} />
      </main>
      <Footer t={t} lang={lang} />
      <FloatingWhatsApp t={t} />
      <ScrollReveal />
    </div>
  );
}
