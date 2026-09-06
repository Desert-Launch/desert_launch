import type { Dictionary, FaqItem } from "@/app/data/types";
import { SectionHead } from "./SectionHead";

/** Native `<details>` accordion: keyboard operable, works with JavaScript
 *  disabled, and readable by crawlers whether open or closed. */
export function FaqList({ items }: { items: FaqItem[] }) {
  return (
    <div className="grid max-w-[900px] gap-2">
      {items.map((item) => (
        <details key={item.q} className="faq-item reveal" data-evt="faq_open" data-evt-q={item.q}>
          <summary className="faq-item__summary">
            <span>{item.q}</span>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              className="faq-item__icon"
              aria-hidden="true"
              focusable="false"
            >
              <path d="M12 5v14M5 12h14" />
            </svg>
          </summary>
          <p className="mt-3 text-body leading-relaxed text-muted">{item.a}</p>
        </details>
      ))}
    </div>
  );
}

export function Faq({ t }: { t: Dictionary }) {
  const f = t.faq;
  return (
    <section id="faq" aria-labelledby="faq-heading" className="section scroll-mt-24">
      <div className="shell flex flex-col gap-8 md:gap-10">
        <SectionHead id="faq-heading" kicker={f.kicker} title={f.title} intro={f.intro} />
        <FaqList items={f.items} />
        <p className="reveal text-meta text-muted">{f.updated}</p>
      </div>
    </section>
  );
}
