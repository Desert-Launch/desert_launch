/**
 * Parts: the site's reusable pieces, re-exported unchanged. These are the
 * components the site's long-form pages are composed from; each takes plain
 * data, not the locale dictionary.
 *
 * @category Parts
 */
export { SectionHead } from "../../app/components/SectionHead";
export { FaqList } from "../../app/components/Faq";
export { Breadcrumbs } from "../../app/components/Breadcrumbs";
export type { Crumb } from "../../app/components/Breadcrumbs";
export { CtaBand, FactGrid, OnThisPage, Section } from "../../app/components/pages/PageParts";
export { Icon } from "../../app/data/icons";
export type { FaqItem, IconKey, Lang } from "../../app/data/types";
export type { PageCta, PageSection } from "../../app/data/pages/types";
