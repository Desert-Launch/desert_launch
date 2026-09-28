import { DEMOS } from "@/app/data/demos";
import { Icon } from "@/app/data/icons";
import { INDUSTRIES, type IndustryMeta } from "@/app/data/industries";
import { pages } from "@/app/data/pages/copy";
import type { IndustryId, Lang } from "@/app/data/types";
import { hasPages, industryPath } from "@/app/lib/links";

/** A row of links to the industry pages, anchored on what each page is about
 *  ("Clinic & dental websites") rather than on the brand or "learn more".
 *
 *  Industry pages exist in English and Arabic only, so in the other three
 *  locales this renders nothing rather than sending a French visitor to an
 *  English page from the middle of a French one. */
export function IndustryLinks({
  lang,
  industries = INDUSTRIES,
  exclude,
  heading,
  placement,
}: {
  lang: Lang;
  /** Subset to link; every industry when omitted. */
  industries?: IndustryMeta[];
  /** The current page's own industry, left out of its sibling list. */
  exclude?: IndustryId;
  /** "inline" puts a small label in front of the chips (inside a section that
   *  already has its heading); "block" gives the row its own h2. */
  heading: { variant: "inline" | "block"; text: string };
  /** Where the row sits, for the click event. */
  placement: string;
}) {
  if (!hasPages(lang)) return null;
  const items = industries.filter((i) => i.id !== exclude);
  if (!items.length) return null;
  const copy = pages(lang).industries.items;

  const chips = (
    <ul className="flex list-none flex-wrap gap-2">
      {items.map((industry) => (
        <li key={industry.id}>
          <a
            href={industryPath(lang, industry.id)}
            className="chip chip--link"
            data-evt="industry_click"
            data-evt-industry={industry.id}
            data-evt-placement={placement}
          >
            {copy[industry.id].linkLabel}
          </a>
        </li>
      ))}
    </ul>
  );

  if (heading.variant === "inline") {
    return (
      <nav aria-label={heading.text} className="flex flex-wrap items-center gap-x-3 gap-y-2">
        <span className="text-meta text-muted">{heading.text}</span>
        {chips}
      </nav>
    );
  }
  return (
    <nav aria-label={heading.text} className="flex flex-col gap-3">
      <h2 className="h-card">{heading.text}</h2>
      {chips}
    </nav>
  );
}

/** One card per industry page: what it is for, and which demos prove it. The
 *  whole card is the link (via the heading), so it lifts. */
export function IndustryCards({
  lang,
  headingLevel,
  placement,
}: {
  lang: "en" | "ar";
  /** h2 on the hub, where the cards are the page; h3 under a section heading. */
  headingLevel: "h2" | "h3";
  placement: string;
}) {
  const copy = pages(lang).industries;
  const Heading = headingLevel;
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {INDUSTRIES.map((industry) => {
        const item = copy.items[industry.id];
        const demoNames = industry.demos
          .map((id) => DEMOS.find((d) => d.id === id)?.name)
          .filter(Boolean)
          .join(" · ");
        return (
          <article key={industry.id} className="card card--link">
            <span className="icon-box">
              <Icon name={industry.icon} />
            </span>
            <Heading className="h-card">
              <a
                href={industryPath(lang, industry.id)}
                className="card__link"
                data-evt="industry_click"
                data-evt-industry={industry.id}
                data-evt-placement={placement}
              >
                {item.linkLabel}
              </a>
            </Heading>
            <p>{item.summary}</p>
            <p className="service-timeline">
              <span className="service-timeline__label">{copy.hub.demoLabel}</span>
              <span className="service-timeline__value">{demoNames}</span>
            </p>
          </article>
        );
      })}
    </div>
  );
}
