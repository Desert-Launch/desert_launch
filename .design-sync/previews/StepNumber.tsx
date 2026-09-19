import { StepNumber } from "@desert-launch/design-system";
import { Stage } from "./_stage";

/** The numbers alone. */
export function OneToFive() {
  return (
    <Stage width={360}>
      <div className="flex gap-3">
        {[1, 2, 3, 4, 5].map((n) => (
          <StepNumber key={n} n={n} />
        ))}
      </div>
    </Stage>
  );
}

/** A process step card, as the site's "how we work" section lays them out. */
export function InAStepCard() {
  return (
    <Stage width={720}>
      <ol className="grid list-none gap-4 sm:grid-cols-2">
        <li className="card">
          <StepNumber n={1} />
          <h3>Free scope call</h3>
          <p>You describe the problem; we tell you what it would take and whether a smaller build gets you there.</p>
        </li>
        <li className="card">
          <StepNumber n={2} />
          <h3>Written fixed quote</h3>
          <p>A price in USD and a milestone plan, in writing, before you pay anything.</p>
        </li>
      </ol>
    </Stage>
  );
}
