import type { Dictionary } from "@/app/data/types";
import { MAILTO, PHONE_HREF } from "@/app/data/shared";
import { ContactForm } from "./ContactForm";

function Row({
  href,
  label,
  value,
  external,
  evt,
  ltr = true,
}: {
  href?: string;
  label: string;
  value: string;
  external?: boolean;
  evt?: string;
  ltr?: boolean;
}) {
  const inner = (
    <>
      <span className="flex min-w-0 flex-col">
        <strong className="text-body">{label}</strong>
        <span className="text-meta text-muted" {...(ltr ? { dir: "ltr" as const } : {})}>
          {value}
        </span>
      </span>
      {href ? (
        <span aria-hidden="true" className="contact-row__arrow">
          →
        </span>
      ) : null}
    </>
  );

  if (!href) return <div className="contact-row">{inner}</div>;

  return (
    <a
      href={href}
      className="contact-row contact-row--link"
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
      {...(evt ? { "data-evt": evt, "data-evt-placement": "contact" } : {})}
    >
      {inner}
    </a>
  );
}

export function Contact({ t }: { t: Dictionary }) {
  const c = t.contact;
  return (
    <section id="contact" aria-labelledby="contact-heading" className="section scroll-mt-24">
      <div className="shell grid items-start gap-4 lg:grid-cols-2 lg:gap-6">
        {/* Info + direct channels */}
        <article className="panel reveal flex flex-col gap-4 p-6">
          <span className="kicker">{c.kicker}</span>
          <h2 id="contact-heading" className="h-section">
            {c.title}
          </h2>
          <p className="text-body leading-relaxed text-muted">{c.intro}</p>

          <ul className="grid list-none gap-2" aria-label={t.a11y.briefBenefits}>
            {c.highlights.map((h) => (
              <li key={h} className="flex gap-2 text-body text-ink-soft">
                <span aria-hidden="true" className="bullet-dot" />
                <span>{h}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={c.primary.href}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
              data-evt="whatsapp_click"
              data-evt-placement="contact"
            >
              {c.primary.label}
            </a>
            <a
              href={c.secondary.href}
              className="btn btn-secondary"
              data-evt="email_click"
              data-evt-placement="contact"
            >
              {c.secondary.label}
            </a>
          </div>

          <p dir="rtl" lang="ar" className="text-body text-muted">
            {c.arabicNote}
          </p>

          <div className="mt-2 flex flex-col gap-3 border-t border-line pt-5">
            <h3 className="h-card">{c.direct.heading}</h3>
            <p className="text-body text-muted">{c.direct.body}</p>
            {/* Real contact details in a semantic <address>, which is also
                what a crawler and an answer engine look for. */}
            <address className="contact-list" aria-label={t.a11y.directContact}>
              <Row
                href={c.primary.href}
                external
                evt="whatsapp_click"
                label={c.direct.whatsapp.label}
                value={c.direct.whatsapp.value}
              />
              <Row
                href={MAILTO}
                evt="email_click"
                label={c.direct.email.label}
                value={c.direct.email.value}
              />
              <Row
                href={PHONE_HREF}
                evt="tel_click"
                label={c.direct.phone.label}
                value={c.direct.phone.value}
              />
              <Row label={c.direct.location.label} value={c.direct.location.value} ltr={false} />
              <Row label={c.direct.hours.label} value={c.direct.hours.value} ltr={false} />
            </address>
          </div>
        </article>

        {/* Qualification form.
            `js-only` because the form composes a message and hands it to
            WhatsApp or a mail client in JavaScript; without it the controls
            would look functional and do nothing. The direct WhatsApp, email and
            phone links in the other column carry the section on their own. */}
        <aside className="panel js-only reveal flex-col gap-4 p-6 lg:sticky lg:top-24">
          <h3 className="h-card">{c.form.heading}</h3>
          <p className="text-body text-muted">{c.form.body}</p>
          <ContactForm form={c.form} lang={t.lang} />
        </aside>
      </div>
    </section>
  );
}
