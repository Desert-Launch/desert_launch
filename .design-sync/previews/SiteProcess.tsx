import { SiteProcess } from "@desert-launch/design-system";

/** The five-step process. */
export function English() {
  return (
    <div className="bg-bg text-ink" style={{ colorScheme: "dark" }}>
      <SiteProcess lang="en" />
    </div>
  );
}

/** The same section in Arabic: right-to-left, Tajawal. */
export function Arabic() {
  return (
    <div className="bg-bg text-ink" style={{ colorScheme: "dark" }}>
      <SiteProcess lang="ar" />
    </div>
  );
}
