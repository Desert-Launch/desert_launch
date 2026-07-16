import type { Dictionary, Lang } from "@/app/data/types";
import { LOCALES } from "@/app/data/shared";

export function Footer({ t, lang }: { t: Dictionary; lang: Lang }) {
  const f = t.footer;
  return (
    <footer className="border-t border-line py-8">
      <div className="shell grid gap-6 md:grid-cols-3">
        {/* Company */}
        <section className="reveal flex flex-col gap-3" aria-label="Company summary">
          <a href="#top" className="flex items-center gap-3">
            <img src="/assets/logo-96.png" alt="Desert Launch mark" width={44} height={44} className="h-11 w-11 rounded-[0.9rem]" />
            <span>
              <strong className="block">Desert Launch</strong>
              <span className="text-[0.8rem] text-muted">{f.tagline}</span>
            </span>
          </a>
          <p className="text-[0.9rem] leading-relaxed text-muted">{f.blurb}</p>
          <p className="text-[0.82rem] text-muted">{f.copyright}</p>
        </section>

        {/* Navigate + languages */}
        <section className="reveal flex flex-col gap-3" aria-label="Quick navigation">
          <h3 className="text-[0.95rem] font-bold">{f.navHeading}</h3>
          <div className="grid gap-2">
            {f.navLinks.map((link) => (
              <a key={link.href} href={link.href} className="flex flex-col rounded-[12px] px-1 py-1 transition-colors hover:text-ink">
                <strong className="text-[0.9rem]">{link.label}</strong>
                <span className="text-[0.8rem] text-muted">{link.sub}</span>
              </a>
            ))}
          </div>
          <p className="text-[0.85rem] text-muted" aria-label={f.langHeading}>
            {LOCALES.map((l, i) => (
              <span key={l.code}>
                {i > 0 ? " · " : ""}
                <a
                  href={l.path}
                  lang={l.hreflang}
                  hrefLang={l.hreflang}
                  className={l.code === lang ? "text-gold" : "hover:text-ink"}
                >
                  {l.endonym}
                </a>
              </span>
            ))}
          </p>
        </section>

        {/* Contact */}
        <section className="reveal flex flex-col gap-3" aria-label="Direct contact">
          <h3 className="text-[0.95rem] font-bold">{f.contactHeading}</h3>
          <div className="grid gap-2">
            {f.contactLinks.map((link, i) => (
              <a
                key={link.label}
                href={link.href}
                {...(link.external ? { target: "_blank", rel: "noreferrer" } : {})}
                className="flex flex-col rounded-[12px] px-1 py-1 transition-colors hover:text-ink"
              >
                <strong className="text-[0.9rem]">{link.label}</strong>
                <span className="text-[0.8rem] text-muted">{f.contactSub[i]}</span>
              </a>
            ))}
          </div>
          <p className="text-[0.82rem] leading-relaxed text-muted">{f.note}</p>
        </section>
      </div>
    </footer>
  );
}
