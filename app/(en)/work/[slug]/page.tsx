import type { Metadata } from "next";
import { CaseStudyView } from "@/app/components/pages/CaseStudyView";
import { pages } from "@/app/data/pages/copy";
import type { CaseSlug } from "@/app/data/pages/types";
import { CASE_STUDIES } from "@/app/data/projects";
import { buildMetadata, SUBPAGE_LANGS } from "@/app/lib/metadata";

export const dynamicParams = false;

export function generateStaticParams() {
  return CASE_STUDIES.map((c) => ({ slug: c.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const copy = pages("en").cases[slug as CaseSlug];
  return buildMetadata({
    lang: "en",
    path: `work/${slug}`,
    title: copy.meta.title,
    description: copy.meta.description,
    langs: SUBPAGE_LANGS,
    ogType: "article",
  });
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <CaseStudyView lang="en" slug={slug as CaseSlug} />;
}
