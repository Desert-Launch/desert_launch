export interface Crumb {
  label: string;
  href?: string;
}

/** Visible breadcrumb trail. The matching `BreadcrumbList` JSON-LD is emitted
 *  by the page, from the same array, so the two can never disagree. */
export function Breadcrumbs({ items, label }: { items: Crumb[]; label: string }) {
  return (
    <nav aria-label={label} className="breadcrumbs">
      <ol>
        {items.map((item, i) => {
          const last = i === items.length - 1;
          return (
            <li key={`${item.label}-${i}`}>
              {item.href && !last ? (
                <a href={item.href}>{item.label}</a>
              ) : (
                <span aria-current={last ? "page" : undefined}>{item.label}</span>
              )}
              {!last && (
                <span aria-hidden="true" className="breadcrumbs__sep">
                  /
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
