import "@/app/globals.css";
import type { Lang } from "@/app/data/types";
import { dict } from "@/app/data/copy";
import { localeByCode } from "@/app/data/shared";
import { fontVars } from "@/app/lib/fonts";
import { entityGraph, faqSchema } from "@/app/lib/jsonld";
import { Analytics } from "@vercel/analytics/next";

// Renders the per-locale document shell. Each locale is a separate Next "root
// layout" (via route groups) so its static HTML carries the correct
// <html lang dir> — essential for RTL Arabic and per-language SEO.
export function LocaleShell({ lang, children }: { lang: Lang; children: React.ReactNode }) {
  const t = dict(lang);
  const loc = localeByCode(lang);
  return (
    <html lang={loc.hreflang} dir={loc.dir} className={fontVars} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(entityGraph()) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(t)) }}
        />
      </head>
      <body suppressHydrationWarning>
        <a href="#top" className="skip-link">
          {t.skipToContent}
        </a>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
