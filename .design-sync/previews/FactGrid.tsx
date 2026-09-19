import { FactGrid } from "@desert-launch/design-system";
import { Stage } from "./_stage";

/** The at-a-glance facts at the top of a case study. */
export function CaseStudyFacts() {
  return (
    <Stage>
      <FactGrid label="At a glance" facts={[{ label: "Client", value: "Q-Fight Gym, Doha" }, { label: "Platforms", value: "iOS and Android" }, { label: "Stack", value: "Flutter, Firebase, payments" }, { label: "Status", value: "Live on both stores" }]} />
    </Stage>
  );
}
