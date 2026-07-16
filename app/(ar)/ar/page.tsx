import { Site } from "@/app/components/Site";
import { buildMetadata, viewport } from "@/app/lib/metadata";

export const metadata = buildMetadata("ar");
export { viewport };

export default function Page() {
  return <Site lang="ar" />;
}
