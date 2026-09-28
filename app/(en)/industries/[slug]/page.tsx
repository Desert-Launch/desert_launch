import type { Metadata } from "next";
import { IndustryPageView } from "@/app/components/pages/IndustryPageView";
import { INDUSTRIES } from "@/app/data/industries";
import { pages } from "@/app/data/pages/copy";
import type { IndustryId } from "@/app/data/types";
import { buildMetadata, SUBPAGE_LANGS } from "@/app/lib/metadata";

export const dynamicParams = false;

export function generateStaticParams() {
  return INDUSTRIES.map((i) => ({ slug: i.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const copy = pages("en").industries.items[slug as IndustryId];
  return buildMetadata({
    lang: "en",
    path: `industries/${slug}`,
    title: copy.meta.title,
    description: copy.meta.description,
    langs: SUBPAGE_LANGS,
  });
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <IndustryPageView lang="en" id={slug as IndustryId} />;
}
