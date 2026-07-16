import type { Dictionary } from "@/app/data/types";
import { ContactForm } from "./ContactForm";

export function Contact({ t }: { t: Dictionary }) {
  const c = t.contact;
  return (
    <section id="contact" aria-labelledby="contact-heading" className="scroll-mt-24 py-7">
      <div className="shell grid gap-4 lg:grid-cols-2">
        {/* Info */}
        <article className="panel reveal flex flex-col gap-4 p-6">
          <span className="kicker">{c.kicker}</span>
          <h2 id="contact-heading" className="text-2xl font-extrabold leading-tight sm:text-[1.9rem]">
            {c.title}
          </h2>
          <p className="text-[0.96rem] leading-relaxed text-muted">{c.intro}</p>
          <div className="grid gap-2" aria-label="Why send a brief">
            {c.highlights.map((h) => (
              <div key={h} className="flex gap-2 text-[0.9rem] text-ink-soft">
                <span aria-hidden="true" className="mt-[0.5rem] h-[6px] w-[6px] shrink-0 rounded-full bg-gold" />
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
          <p dir="rtl" lang="ar" className="text-[0.9rem] text-muted">
            {c.arabicNote}
          </p>
          <figure className="mt-1 overflow-hidden rounded-[18px] border border-line">
            <img src={c.image.src} alt={c.image.alt} loading="lazy" className="w-full object-cover" />
            <figcaption className="px-4 py-3 text-[0.82rem] text-muted">{c.imageCaption}</figcaption>
          </figure>
        </article>

        {/* Form */}
        <aside className="panel reveal flex flex-col gap-4 p-6">
          <h3 className="text-lg font-bold">{c.direct.heading}</h3>
          <p className="text-[0.92rem] text-muted">{c.direct.body}</p>
          <div className="grid gap-2">
            <a
              href={c.primary.href}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between rounded-[14px] border border-line bg-white/[0.02] px-4 py-3 transition-colors hover:border-line-strong"
            >
              <span className="flex flex-col">
                <strong>{c.direct.whatsapp.label}</strong>
                <span className="text-[0.85rem] text-muted" dir="ltr">
                  {c.direct.whatsapp.value}
                </span>
              </span>
              <span aria-hidden="true" className="text-[0.85rem] text-gold">
                →
              </span>
            </a>
            <a
              href={c.secondary.href}
              className="flex items-center justify-between rounded-[14px] border border-line bg-white/[0.02] px-4 py-3 transition-colors hover:border-line-strong"
            >
              <span className="flex flex-col">
                <strong>{c.direct.email.label}</strong>
                <span className="text-[0.85rem] text-muted" dir="ltr">
                  {c.direct.email.value}
                </span>
              </span>
              <span aria-hidden="true" className="text-[0.85rem] text-gold">
                →
              </span>
            </a>
          </div>
          <ContactForm form={c.form} />
        </aside>
      </div>
    </section>
  );
}
