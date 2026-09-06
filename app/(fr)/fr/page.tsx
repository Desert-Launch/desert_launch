import { Site } from "@/app/components/Site";
import { buildHomeMetadata } from "@/app/lib/metadata";

export const metadata = buildHomeMetadata("fr");

export default function Page() {
  return <Site lang="fr" />;
}
