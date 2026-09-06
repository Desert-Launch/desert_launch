import { Site } from "@/app/components/Site";
import { buildHomeMetadata } from "@/app/lib/metadata";

export const metadata = buildHomeMetadata("es");

export default function Page() {
  return <Site lang="es" />;
}
