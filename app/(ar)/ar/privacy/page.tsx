import { SimplePageView } from "@/app/components/pages/SimplePageView";
import { pages } from "@/app/data/pages/copy";
import { buildMetadata, SUBPAGE_LANGS } from "@/app/lib/metadata";

const copy = pages("ar").privacy;

export const metadata = buildMetadata({
  lang: "ar",
  path: "privacy",
  title: copy.meta.title,
  description: copy.meta.description,
  langs: SUBPAGE_LANGS,
});

export default function Page() {
  return <SimplePageView lang="ar" slug="privacy" />;
}
