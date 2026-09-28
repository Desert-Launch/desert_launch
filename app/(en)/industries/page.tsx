import { IndustriesIndexView } from "@/app/components/pages/IndustriesIndexView";
import { pages } from "@/app/data/pages/copy";
import { buildMetadata, SUBPAGE_LANGS } from "@/app/lib/metadata";

const copy = pages("en").industries.hub;

export const metadata = buildMetadata({
  lang: "en",
  path: "industries",
  title: copy.meta.title,
  description: copy.meta.description,
  langs: SUBPAGE_LANGS,
});

export default function Page() {
  return <IndustriesIndexView lang="en" />;
}
