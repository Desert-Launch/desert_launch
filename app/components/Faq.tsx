import type { Dictionary } from "@/app/data/types";
import { SectionHead } from "./SectionHead";

export function Faq({ t }: { t: Dictionary }) {
  const f = t.faq;
  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="scroll-mt-24 bg-gradient-to-b from-white/[0.01] to-transparent section"
    >
      <div className="shell flex flex-col gap-8 md:gap-10">
        <SectionHead id="faq-heading" kicker={f.kicker} title={f.title} intro={f.intro} />

        <div className="grid max-w-[900px] gap-2">
          {f.items.map((item) => (
            <details
              key={item.q}
              className="reveal group rounded-[18px] border border-line bg-white/[0.02] px-5 py-4 open:border-line-strong"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold marker:content-none">
                <span>{item.q}</span>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  className="h-4 w-4 shrink-0 text-gold transition-transform group-open:rotate-45"
                  aria-hidden="true"
                >
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </summary>
              <p className="mt-3 text-body leading-relaxed text-muted">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
