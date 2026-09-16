import { SimplePageView } from "@/app/components/pages/SimplePageView";
import { aboutPage } from "@/app/data/pages/copy";
import { ABOUT_LOCALES } from "@/app/data/shared";
import { buildMetadata } from "@/app/lib/metadata";

const copy = aboutPage("de");

export const metadata = buildMetadata({
  lang: "de",
  path: "about",
  title: copy.meta.title,
  description: copy.meta.description,
  langs: ABOUT_LOCALES,
});

export default function Page() {
  return <SimplePageView lang="de" slug="about" />;
}
