import { SiteHeader } from "@desert-launch/design-system";

/** The sticky header at desktop width, on the site's navy. */
export function English() {
  return (
    <div className="bg-bg text-ink" style={{ colorScheme: "dark" }}>
      <SiteHeader lang="en" />
    </div>
  );
}

/** The same section in Arabic: right-to-left, Tajawal. */
export function Arabic() {
  return (
    <div className="bg-bg text-ink" style={{ colorScheme: "dark" }}>
      <SiteHeader lang="ar" />
    </div>
  );
}
