import { PfLink } from "@desert-launch/design-system";
import { Stage } from "./_stage";

/** The link row at the foot of a project card: store links, then the strong
 *  one that leads to the case study. */
export function CardFooter() {
  return (
    <Stage width={480}>
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
        <PfLink href="https://apps.apple.com/">App Store</PfLink>
        <PfLink href="https://play.google.com/">Google Play</PfLink>
        <PfLink href="/work/q-fight-gym/" strong>Read the case study</PfLink>
      </div>
    </Stage>
  );
}

/** External links point outward. */
export function External() {
  return (
    <Stage width={480}>
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
        <PfLink href="https://dental.demos.desertlaunch.dev/" strong external>Open the website</PfLink>
        <PfLink href="https://dental.demos.desertlaunch.dev/admin" external>Open the dashboard</PfLink>
      </div>
    </Stage>
  );
}
