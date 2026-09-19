import { SiteFooter } from "@desert-launch/design-system";

/** The four-column footer. */
export function English() {
  return (
    <div className="bg-bg text-ink" style={{ colorScheme: "dark" }}>
      <SiteFooter lang="en" />
    </div>
  );
}

/** The same section in Arabic: right-to-left, Tajawal. */
export function Arabic() {
  return (
    <div className="bg-bg text-ink" style={{ colorScheme: "dark" }}>
      <SiteFooter lang="ar" />
    </div>
  );
}
