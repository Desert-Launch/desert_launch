import { DemosPageView } from "@/app/components/pages/DemosPageView";
import { pages } from "@/app/data/pages/copy";
import { buildMetadata, SUBPAGE_LANGS } from "@/app/lib/metadata";

const copy = pages("en").demos;

export const metadata = buildMetadata({
  lang: "en",
  path: "demos",
  title: copy.meta.title,
  description: copy.meta.description,
  langs: SUBPAGE_LANGS,
});

export default function Page() {
  return <DemosPageView lang="en" />;
}
