/**
 * @desert-launch/design-system — the landing site's design system, packaged.
 *
 * Three groups: primitives (thin wrappers over the site's component classes),
 * parts (the site's reusable pieces, unchanged) and site sections (the real
 * home-page sections, resolved from a `lang` prop). Styles come from
 * `styles/index.css`, which compiles the site's own `app/globals.css`.
 */
export * from "./primitives";
export * from "./parts";
export * from "./sections";
