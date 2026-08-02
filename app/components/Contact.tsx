import type { Dictionary } from "@/app/data/types";
import { ContactForm } from "./ContactForm";

/** The brief-drafting form is hidden for now; the direct WhatsApp and email
 *  links above it still carry the section. Flip back to `true` to restore it —
 *  the form copy for all five locales is untouched in the dictionaries. */
const SHOW_CONTACT_FORM = false;

export function Contact({ t }: { t: Dictionary }) {
  const c = t.contact;
  return (
    <section id="contact" aria-labelledby="contact-heading" className="section scroll-mt-24">
      {/* items-start so the shorter column sizes to its content instead of
          stretching into a tall panel with a void at the bottom. */}
      <div className="shell grid items-start gap-4 lg:grid-cols-2 lg:gap-6">
        {/* Info */}
        <article className="panel reveal flex flex-col gap-4 p-6">
          <span className="kicker">{c.kicker}</span>
          <h2 id="contact-heading" className="text-2xl font-extrabold leading-tight sm:text-3xl">
            {c.title}
          </h2>
          <p className="text-body leading-relaxed text-muted">{c.intro}</p>
          <div className="grid gap-2" aria-label="Why send a brief">
            {c.highlights.map((h) => (
              <div key={h} className="flex gap-2 text-body text-ink-soft">
                <span aria-hidden="true" className="mt-2 h-[6px] w-[6px] shrink-0 rounded-full bg-gold" />
                <span>{h}</span>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a href={c.primary.href} target="_blank" rel="noreferrer" className="btn btn-primary">
              {c.primary.label}
            </a>
            <a href={c.secondary.href} className="btn btn-secondary">
              {c.secondary.label}
            </a>
          </div>
          <p dir="rtl" lang="ar" className="text-body text-muted">
            {c.arabicNote}
          </p>
          <figure className="media-zoom mt-1 rounded-[18px] border border-line">
            <img src={c.image.src} alt={c.image.alt} loading="lazy" className="w-full object-cover" />
            <figcaption className="px-4 py-3 text-meta text-muted">{c.imageCaption}</figcaption>
          </figure>
        </article>

        {/* Direct channels. Sticky on large screens: without the form this
            column is far shorter than the info panel, so it rides along
            instead of leaving a tall empty gutter beside it. */}
        <aside className="panel reveal flex flex-col gap-4 p-6 lg:sticky lg:top-28">
          <h3 className="text-lg font-bold">{c.direct.heading}</h3>
          <p className="text-body text-muted">{c.direct.body}</p>
          <div className="grid gap-2">
            <a
              href={c.primary.href}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between rounded-[14px] border border-line bg-white/[0.02] px-4 py-3 transition-colors hover:border-line-strong"
            >
              <span className="flex flex-col">
                <strong>{c.direct.whatsapp.label}</strong>
                <span className="text-meta text-muted" dir="ltr">
                  {c.direct.whatsapp.value}
                </span>
              </span>
              <span aria-hidden="true" className="text-meta text-gold">
                →
              </span>
            </a>
            <a
              href={c.secondary.href}
              className="flex items-center justify-between rounded-[14px] border border-line bg-white/[0.02] px-4 py-3 transition-colors hover:border-line-strong"
            >
              <span className="flex flex-col">
                <strong>{c.direct.email.label}</strong>
                <span className="text-meta text-muted" dir="ltr">
                  {c.direct.email.value}
                </span>
              </span>
              <span aria-hidden="true" className="text-meta text-gold">
                →
              </span>
            </a>
          </div>
          {SHOW_CONTACT_FORM ? <ContactForm form={c.form} /> : null}
        </aside>
      </div>
    </section>
  );
}
