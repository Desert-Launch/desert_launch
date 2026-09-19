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
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="section section--alt scroll-mt-24"
    >
      <div className="shell grid items-start gap-10 lg:grid-cols-2 lg:gap-12">
        {/* What happens next, then the direct channels */}
        <div className="reveal flex flex-col items-start gap-4">
          <span className="kicker">{c.kicker}</span>
          <h2 id="contact-heading" className="h-section max-w-[24ch]">
            {c.title}
          </h2>
          <p className="max-w-[52ch] text-body leading-relaxed text-ink-soft">{c.intro}</p>

          <ol className="contact-steps mt-3 w-full list-none" aria-label={t.a11y.briefBenefits}>
            {c.steps.map((step, i) => (
              <li key={step.title}>
                <span className="contact-steps__n" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>
                  <span className="block text-body text-ink-soft">{step.title}</span>
                  <span className="mt-0.5 block text-meta text-muted">{step.note}</span>
                </span>
              </li>
            ))}
          </ol>

          <div className="mt-3 flex flex-col gap-3 sm:flex-row">
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

          <p dir="rtl" lang="ar" className="text-meta text-muted">
            {c.arabicNote}
          </p>

          {/* Real contact details in a semantic <address>, which is also what
              a crawler and an answer engine look for. */}
          <div className="mt-3 flex w-full flex-col gap-3 border-t border-line pt-5">
            <h3 className="h-card">{c.direct.heading}</h3>
            <p className="text-meta text-muted">{c.direct.body}</p>
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
        </div>

        {/* Qualification form.
            `js-only` because the form composes a message and hands it to
            WhatsApp or a mail client in JavaScript; without it the controls
            would look functional and do nothing. The direct WhatsApp, email and
            phone links in the other column carry the section on their own. */}
        <div className="panel js-only reveal flex-col gap-4 p-6 md:p-7 lg:sticky lg:top-24">
          <h3 className="h-card">{c.form.heading}</h3>
          <p className="text-meta text-muted">{c.form.body}</p>
          <ContactForm form={c.form} lang={t.lang} />
        </div>
      </div>
    </section>
  );
}
