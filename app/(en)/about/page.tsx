import { SimplePageView } from "@/app/components/pages/SimplePageView";
import { pages } from "@/app/data/pages/copy";
import { ABOUT_LOCALES } from "@/app/data/shared";
import { buildMetadata } from "@/app/lib/metadata";

const copy = pages("en").about;

export const metadata = buildMetadata({
  lang: "en",
  path: "about",
  title: copy.meta.title,
  description: copy.meta.description,
  langs: ABOUT_LOCALES,
});

export default function Page() {
  return <SimplePageView lang="en" slug="about" />;
}
