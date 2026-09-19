import { Stat } from "@desert-launch/design-system";
import { Stage } from "./_stage";

/** The three proof figures under the hero. */
export function ProofRow() {
  return (
    <Stage>
      <div className="grid gap-3 sm:grid-cols-3">
        <Stat label="Products shipped" value="8" note="Mobile apps, multi-role platforms and private business systems." />
        <Stat label="First reply" value="Under 12h" note="Direct from the engineer who would build it." />
        <Stat label="Support after launch" value="12 months" note="Free bug fixes, OS and store updates." />
      </div>
    </Stage>
  );
}

/** One figure, no note. */
export function Single() {
  return (
    <Stage width={280}>
      <Stat label="Classes a week" value="60" />
    </Stage>
  );
}
