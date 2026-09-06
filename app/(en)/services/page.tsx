import { ServicesIndexView } from "@/app/components/pages/ServicesIndexView";
import { dict } from "@/app/data/copy";
import { buildMetadata, SUBPAGE_LANGS } from "@/app/lib/metadata";

const t = dict("en");

export const metadata = buildMetadata({
  lang: "en",
  path: "services",
  title: `${t.services.title} | Desert Launch`,
  description: t.services.intro,
  langs: SUBPAGE_LANGS,
});

export default function Page() {
  return <ServicesIndexView lang="en" />;
}
