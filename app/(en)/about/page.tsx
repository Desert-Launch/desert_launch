import { SimplePageView } from "@/app/components/pages/SimplePageView";
import { pages } from "@/app/data/pages/copy";
import { buildMetadata, SUBPAGE_LANGS } from "@/app/lib/metadata";

const copy = pages("en").about;

export const metadata = buildMetadata({
  lang: "en",
  path: "about",
  title: copy.meta.title,
  description: copy.meta.description,
  langs: SUBPAGE_LANGS,
});

export default function Page() {
  return <SimplePageView lang="en" slug="about" />;
}
