import { IconBox } from "@desert-launch/design-system";
import { Stage } from "./_stage";

/** Every icon the system ships, in the box a card puts it in. */
export function AllIcons() {
  const icons = ["mobile","web","mvp","design","modernize","consulting","booking","dispatch","records","quote","ownership","support","direct","tooth","stethoscope","dumbbell","coffee","utensils","building","facebook","instagram"] as const;
  return (
    <Stage>
      <div className="flex flex-wrap gap-3">
        {icons.map((i) => (
          <IconBox key={i} icon={i} />
        ))}
      </div>
    </Stage>
  );
}

/** Where it lives: at the top of a card, before the title. */
export function InACard() {
  return (
    <Stage width={360}>
      <article className="card">
        <IconBox icon="ownership" />
        <h3>You own everything</h3>
        <p>Source code, IP, hosting and store accounts — all in your name from day one.</p>
      </article>
    </Stage>
  );
}
