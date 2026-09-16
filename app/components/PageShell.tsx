import type { Lang } from "@/app/data/types";
import { dict } from "@/app/data/copy";
import { homePath, localeLinks, navItems } from "@/app/lib/links";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { FloatingWhatsApp } from "./FloatingWhatsApp";
import { Breadcrumbs, type Crumb } from "./Breadcrumbs";

/** Chrome for every sub-page: header, breadcrumbs, footer and the mobile
 *  WhatsApp shortcut, with the language switcher pointed at the equivalent page
 *  in each locale that has one. */
export function PageShell({
  lang,
  path,
  langs,
  crumbs,
  jsonLd,
  children,
}: {
  lang: Lang;
  /** Shared sub-path, e.g. "services/mobile-app-development". */
  path: string;
  /** Locales this page exists in; the switcher only claims those. Defaults to
   *  the English-and-Arabic set every sub-page except About belongs to. */
  langs?: readonly Lang[];
  crumbs: Crumb[];
  jsonLd: object[];
  children: React.ReactNode;
}) {
  const t = dict(lang);
  const { langHrefs, translated } = localeLinks(path, langs);
  const nav = navItems(t, lang, false);
  const home = homePath(lang);

  return (
    <div className="page-shell">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header
        header={t.header}
        a11y={t.a11y}
        lang={lang}
        homeHref={home}
        langHrefs={langHrefs}
        translated={translated}
        navItems={nav}
        isHome={false}
      />
      <main id="main">
        <div className="shell pt-6">
          <Breadcrumbs items={crumbs} label={t.a11y.breadcrumb} />
        </div>
        {children}
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
