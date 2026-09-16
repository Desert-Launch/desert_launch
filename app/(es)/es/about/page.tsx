import { SimplePageView } from "@/app/components/pages/SimplePageView";
import { aboutPage } from "@/app/data/pages/copy";
import { ABOUT_LOCALES } from "@/app/data/shared";
import { buildMetadata } from "@/app/lib/metadata";

const copy = aboutPage("es");

export const metadata = buildMetadata({
  lang: "es",
  path: "about",
  title: copy.meta.title,
  description: copy.meta.description,
  langs: ABOUT_LOCALES,
});

export default function Page() {
  return <SimplePageView lang="es" slug="about" />;
}
