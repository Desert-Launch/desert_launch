import type { Metadata } from "next";
import { ServicePageView } from "@/app/components/pages/ServicePageView";
import { pages } from "@/app/data/pages/copy";
import type { ServiceSlug } from "@/app/data/pages/types";
import { SERVICE_PAGES } from "@/app/data/services";
import { buildMetadata, SUBPAGE_LANGS } from "@/app/lib/metadata";

export const dynamicParams = false;

export function generateStaticParams() {
  return SERVICE_PAGES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const copy = pages("en").services[slug as ServiceSlug];
  return buildMetadata({
    lang: "en",
    path: `services/${slug}`,
    title: copy.meta.title,
    description: copy.meta.description,
    langs: SUBPAGE_LANGS,
  });
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <ServicePageView lang="en" slug={slug as ServiceSlug} />;
}
