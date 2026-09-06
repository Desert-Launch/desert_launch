import "@/app/globals.css";
import { Analytics } from "@vercel/analytics/next";
import type { Lang } from "@/app/data/types";
import { dict } from "@/app/data/copy";
import { localeByCode } from "@/app/data/shared";
import { entityGraph } from "@/app/lib/jsonld";
import { AnalyticsProvider } from "./AnalyticsProvider";
import { ScrollReveal } from "./ScrollReveal";

/** Renders the per-locale document shell. Each locale is a separate Next "root
 *  layout" (via route groups) so its static HTML carries the correct
 *  <html lang dir> — essential for RTL Arabic and per-language SEO.
 *
 *  Only the Arabic shell loads Tajawal; the other four ship one variable Latin
 *  font file instead of nine preloaded weights.
 */
export function LocaleShell({
  lang,
  fontClass,
  children,
}: {
  lang: Lang;
  /** Passed in by each locale layout so the Arabic font module is only ever in
   *  the Arabic route's graph. */
  fontClass: string;
  children: React.ReactNode;
}) {
  const t = dict(lang);
  const loc = localeByCode(lang);

  return (
    <html lang={loc.hreflang} dir={loc.dir} className={fontClass} suppressHydrationWarning>
      <head>
        {/* Marks the document as script-capable before first paint. Every
            progressive enhancement (scroll reveal, sticky header state) is
            scoped to `.js`, so the page is fully readable without JavaScript
            instead of rendering as a blank column. */}
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js')",
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(entityGraph()) }}
        />
      </head>
      <body suppressHydrationWarning>
        <a href="#main" className="skip-link">
          {t.skipToContent}
        </a>
        {children}
        <ScrollReveal />
        {/* Page views, from the official package. Cookieless and first-party:
            the script and its beacon are both same-origin, so the strict
            Content-Security-Policy needs no third-party allowance. */}
        <Analytics />
        {/* Conversion events. Every lead leaves through an outbound link, so a
            conversion is invisible unless something fires before the handoff;
            this listens for `data-evt` at the document level. */}
        <AnalyticsProvider lang={lang} />
      </body>
    </html>
  );
}
