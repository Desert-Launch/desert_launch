import { SimplePageView } from "@/app/components/pages/SimplePageView";
import { aboutPage } from "@/app/data/pages/copy";
import { ABOUT_LOCALES } from "@/app/data/shared";
import { buildMetadata } from "@/app/lib/metadata";

const copy = aboutPage("fr");

export const metadata = buildMetadata({
  lang: "fr",
  path: "about",
  title: copy.meta.title,
  description: copy.meta.description,
  langs: ABOUT_LOCALES,
});

export default function Page() {
  return <SimplePageView lang="fr" slug="about" />;
}
