/**
 * Site sections: the landing site's real section components, each with the
 * site's own copy resolved from a single `lang` prop instead of the whole
 * dictionary the site passes internally. Nothing here re-implements a
 * section — every wrapper renders the component the site renders.
 *
 * The sections that depend on `/assets/…` images (Hero, Work, Founder) are
 * deliberately not exported: those files live on the site's host and would
 * render as broken images anywhere else.
 *
 * @category Site sections
 */
import type { ReactNode } from "react";

import { Contact } from "../../app/components/Contact";
import { Demos } from "../../app/components/Demos";
import { Faq } from "../../app/components/Faq";
import { Footer } from "../../app/components/Footer";
import { Header } from "../../app/components/Header";
import { Process } from "../../app/components/Process";
import { ScrollReveal } from "../../app/components/ScrollReveal";
import { Services } from "../../app/components/Services";
import { dict } from "../../app/data/copy";
import type { Lang } from "../../app/data/types";
import { homePath, localeLinks, navItems } from "../../app/lib/links";
// Inlined at bundle time, so the mark renders outside the site's host. The
// bundler hands us a data-URI string; Next's typings call the same import a
// StaticImageData object — accept either so both builds type-check.
import logoAsset from "@/public/assets/logo-96.png";

const logo: string =
  typeof logoAsset === "string" ? logoAsset : (logoAsset as unknown as { src: string }).src;

export interface SiteSectionProps {
  /** Which locale's copy to render. Arabic switches the block to RTL and the
   *  Arabic font, exactly as the site's Arabic pages do. */
  lang?: Lang;
}

/** What the site's root layout provides and a section rendered on its own
 *  does not: `dir="rtl"` and the Arabic font for the one right-to-left
 *  locale, the `js` class that turns on JavaScript-only controls (the brief
 *  form) and scroll-reveal, and the site's own `ScrollReveal` to drive it. */
function Locale({ lang, children }: { lang: Lang; children: ReactNode }) {
  const rtl = lang === "ar";
  return (
    <div lang={lang} dir={rtl ? "rtl" : undefined} className={rtl ? "js font-arabic" : "js"}>
      <ScrollReveal />
      {children}
    </div>
  );
}

/** The sticky site header: brand, the five section links, the language
 *  switcher and the gold "Start a project" button; hamburger below 1024px. */
export function SiteHeader({ lang = "en" }: SiteSectionProps) {
  const t = dict(lang);
  const { langHrefs, translated } = localeLinks(null);
  return (
    <Locale lang={lang}>
      <Header
        header={t.header}
        a11y={t.a11y}
        lang={lang}
        homeHref={homePath(lang)}
        langHrefs={langHrefs}
        translated={translated}
        navItems={navItems(t, lang, true)}
        isHome
        logoSrc={logo}
      />
    </Locale>
  );
}

/** The four-column site footer: company summary and social links, section
 *  navigation, services with timelines, contact details, then the identity
 *  block, legal links and the language row. */
export function SiteFooter({ lang = "en" }: SiteSectionProps) {
  const t = dict(lang);
  const { langHrefs, translated } = localeLinks(null);
  return (
    <Locale lang={lang}>
      <Footer
        t={t}
        lang={lang}
        homeHref={homePath(lang)}
        langHrefs={langHrefs}
        translated={translated}
        navItems={navItems(t, lang, true)}
        logoSrc={logo}
      />
    </Locale>
  );
}

/** "Services": six ruled rows (name and typical duration, what you have at
 *  the end, what the work involves) and the four-bracket Investment panel. */
export function SiteServices({ lang = "en" }: SiteSectionProps) {
  return (
    <Locale lang={lang}>
      <Services t={dict(lang)} lang={lang} />
    </Locale>
  );
}

/** "Live demos": the six demos as one ruled list (icon, name, two flow chips,
 *  site + dashboard links) with the fictional-business notice under it. */
export function SiteDemos({ lang = "en" }: SiteSectionProps) {
  return (
    <Locale lang={lang}>
      <Demos t={dict(lang)} lang={lang} />
    </Locale>
  );
}

/** "Process": the payment-terms band, then five numbered steps on a
 *  timeline, each split into "you share", "we do" and "you get". */
export function SiteProcess({ lang = "en" }: SiteSectionProps) {
  return (
    <Locale lang={lang}>
      <Process t={dict(lang)} />
    </Locale>
  );
}

/** "FAQ": the site's questions as native `<details>` accordions. */
export function SiteFaq({ lang = "en" }: SiteSectionProps) {
  return (
    <Locale lang={lang}>
      <Faq t={dict(lang)} />
    </Locale>
  );
}

/** "Contact": what happens next in four steps, the WhatsApp/email buttons
 *  and direct details, beside the brief form (validated client-side; opens a
 *  pre-filled WhatsApp or email message). */
export function SiteContact({ lang = "en" }: SiteSectionProps) {
  return (
    <Locale lang={lang}>
      <Contact t={dict(lang)} />
    </Locale>
  );
}
