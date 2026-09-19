import { Kicker } from "@desert-launch/design-system";
import { Stage } from "./_stage";

/** The label above a section title. */
export function AboveATitle() {
  return (
    <Stage width={520}>
      <div className="flex flex-col gap-4">
        <Kicker>Services</Kicker>
        <h2 className="h-section">Mobile app, web and MVP development services</h2>
      </div>
    </Stage>
  );
}

/** Inside a panel, where it names the block. */
export function InAPanel() {
  return (
    <Stage width={420}>
      <div className="panel flex flex-col gap-3 p-6">
        <Kicker>How engagements start</Kicker>
        <p className="text-body leading-relaxed text-ink-soft">
          Most projects begin with a free scope call. You get a written fixed quote and a milestone
          plan before you pay anything.
        </p>
      </div>
    </Stage>
  );
}
