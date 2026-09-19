import { SiteServices } from "@desert-launch/design-system";

/** The services section */
export function English() {
  return (
    <div className="bg-bg text-ink" style={{ colorScheme: "dark" }}>
      <SiteServices lang="en" />
    </div>
  );
}

/** The same section in Arabic: right-to-left, Tajawal. */
export function Arabic() {
  return (
    <div className="bg-bg text-ink" style={{ colorScheme: "dark" }}>
      <SiteServices lang="ar" />
    </div>
  );
}
