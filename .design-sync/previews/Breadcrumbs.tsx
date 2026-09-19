import { Breadcrumbs } from "@desert-launch/design-system";
import { Stage } from "./_stage";

/** Two levels: home, then the current page. */
export function TwoLevels() {
  return (
    <Stage width={560}>
      <Breadcrumbs label="Breadcrumb" items={[{ label: "Home", href: "/" }, { label: "Pricing" }]} />
    </Stage>
  );
}

/** Three levels: home, the services hub, then a service page. */
export function ThreeLevels() {
  return (
    <Stage width={560}>
      <Breadcrumbs label="Breadcrumb" items={[{ label: "Home", href: "/" }, { label: "Services", href: "/services/" }, { label: "Mobile app development" }]} />
    </Stage>
  );
}
