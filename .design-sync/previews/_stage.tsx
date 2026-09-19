// Not a preview: the shared stage every preview wraps itself in. The card
// harness paints its body white, while the design system is a dark theme
// (navy page, light ink) — this div is the site's own page surface, so a
// card shows the component the way a page built with the system would.
// Underscore-prefixed so the converter never treats it as a component.
import type { ReactNode } from "react";

export function Stage({ children, width = 720 }: { children: ReactNode; width?: number }) {
  return (
    <div className="bg-bg text-ink p-6 rounded-md" style={{ maxWidth: width, colorScheme: "dark" }}>
      {children}
    </div>
  );
}
