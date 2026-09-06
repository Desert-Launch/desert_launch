import type { Dictionary, Lang } from "@/app/data/types";
import { LOCALES, MAILTO, PHONE_HREF, PHONE_DISPLAY, EMAIL } from "@/app/data/shared";
import { SERVICES } from "@/app/data/services";
import { hasPages, servicePath, simplePath } from "@/app/lib/links";

export function Footer({
  t,
  lang,
  homeHref,
  langHrefs,
  translated,
  navItems,
}: {
  t: Dictionary;
  lang: Lang;
  homeHref: string;
  langHrefs: Partial<Record<Lang, string>>;
  translated: Lang[];
  navItems: { label: string; href: string }[];
}) {
  const f = t.footer;
  const pageLocale = hasPages(lang) ? lang : null;
  const servicePages = SERVICES.filter((s) => s.slug);

  return (
    <footer className="site-footer border-t border-line">
      <div className="shell grid gap-8 py-10 md:grid-cols-2 lg:grid-cols-4">
        {/* Company */}
        <section className="reveal flex flex-col gap-3" aria-label={t.a11y.companySummary}>
          <a href={homeHref} className="flex items-center gap-3">
            <img
              src="/assets/logo-96.png"
              alt=""
              width={40}
              height={40}
              loading="lazy"
              decoding="async"
              className="h-10 w-10 rounded-[0.85rem]"
            />
            <span>
              <strong className="block">Desert Launch</strong>
              <span className="text-meta text-muted">{f.tagline}</span>
            </span>
          </a>
          <p className="text-body leading-relaxed text-muted">{f.blurb}</p>
        </section>

        {/* Navigate */}
        <nav className="reveal flex flex-col gap-3" aria-label={t.a11y.footerNav}>
          <h2 className="footer-heading">{f.navHeading}</h2>
          <ul className="grid list-none gap-2">
            {f.navLinks.map((link, i) => (
              <li key={link.href}>
                <a href={navItems[i]?.href ?? link.href} className="footer-link">
                  <strong className="text-body">{link.label}</strong>
                  <span className="text-meta text-muted">{link.sub}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Services — real internal links to the depth pages where they exist */}
        <nav className="reveal flex flex-col gap-3" aria-label={t.common.servicesLabel}>
          <h2 className="footer-heading">{t.common.servicesLabel}</h2>
          <ul className="grid list-none gap-2">
            {servicePages.map((service) => {
              const copy = t.services.items[service.id];
              const href = pageLocale ? servicePath(pageLocale, service.slug!) : "#services";
              return (
                <li key={service.id}>
                  <a href={href} className="footer-link">
                    <strong className="text-body">{copy.title}</strong>
                    <span className="text-meta text-muted">{copy.timeline}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Contact + identity */}
        <section className="reveal flex flex-col gap-3" aria-label={t.a11y.directContact}>
          <h2 className="footer-heading">{f.contactHeading}</h2>
          <address className="not-italic">
            <ul className="grid list-none gap-2">
              <li>
                <a
                  href={f.contactLinks[0].href}
                  target="_blank"
                  rel="noreferrer"
                  className="footer-link"
                  data-evt="whatsapp_click"
                  data-evt-placement="footer"
                >
                  <strong className="text-body">{f.contactLinks[0].label}</strong>
                  <span className="text-meta text-muted" dir="ltr">
                    {PHONE_DISPLAY}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={MAILTO}
                  className="footer-link"
                  data-evt="email_click"
                  data-evt-placement="footer"
                >
                  <strong className="text-body">{f.contactLinks[1].label}</strong>
                  <span className="text-meta text-muted" dir="ltr">
                    {EMAIL}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={PHONE_HREF}
                  className="footer-link"
                  data-evt="tel_click"
                  data-evt-placement="footer"
                >
                  <strong className="text-body">{t.contact.direct.phone.label}</strong>
                  <span className="text-meta text-muted" dir="ltr">
                    {PHONE_DISPLAY}
                  </span>
                </a>
              </li>
              <li className="footer-link footer-link--static">
                <strong className="text-body">{f.identity.addressLabel}</strong>
                <span className="text-meta text-muted">{f.identity.address}</span>
              </li>
            </ul>
          </address>
        </section>
      </div>

      {/* Identity + legal + languages */}
      <div className="shell flex flex-col gap-4 border-t border-line py-6">
        <p className="max-w-[70ch] text-meta leading-relaxed text-muted">{f.identity.body}</p>

        {/* The privacy notice and engagement terms are written in English and
            Arabic. A French, Spanish or German visitor still needs to reach
            them — a European page with no privacy link at all is worse than one
            that links to the English notice and says so. */}
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-meta">
          {f.identity.links.map((link) => (
            <a
              key={link.slug}
              href={simplePath(pageLocale ?? "en", link.slug)}
              {...(pageLocale ? {} : { hrefLang: "en", lang: "en" })}
              className="footer-legal-link"
            >
              {link.label}
              {pageLocale ? null : <span aria-hidden="true"> (EN)</span>}
            </a>
          ))}
        </div>

        {/* A list of links rather than links inside a sentence. Inline links
            that differ from the surrounding text only by colour fail WCAG 1.4.1
            — and this row is navigation, not prose. */}
        <nav className="footer-langs" aria-label={f.langHeading}>
          <span className="footer-langs__label">{f.langHeading}</span>
          <ul>
            {LOCALES.filter((l) => langHrefs[l.code]).map((l) => (
              <li key={l.code}>
                <a
                  href={langHrefs[l.code]}
                  lang={l.hreflang}
                  {...(translated.includes(l.code) ? { hrefLang: l.hreflang } : {})}
                  aria-current={l.code === lang ? "true" : undefined}
                  dir={l.dir}
                  data-evt="lang_switch"
                  data-evt-to={l.code}
                  data-evt-placement="footer"
                  className="footer-langs__link"
                >
                  {l.endonym}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <p className="text-meta text-muted">{f.copyright}</p>
      </div>
    </footer>
  );
}
