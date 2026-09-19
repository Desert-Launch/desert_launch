import { SiteDemos } from "@desert-launch/design-system";

/** The live-demos section */
export function English() {
  return (
    <div className="bg-bg text-ink" style={{ colorScheme: "dark" }}>
      <SiteDemos lang="en" />
    </div>
  );
}

/** The same section in Arabic: right-to-left, Tajawal. */
export function Arabic() {
  return (
    <div className="bg-bg text-ink" style={{ colorScheme: "dark" }}>
      <SiteDemos lang="ar" />
    </div>
  );
}
