import { Icon } from "@desert-launch/design-system";
import { Stage } from "./_stage";

const names = ["mobile","web","mvp","design","modernize","consulting","booking","dispatch","records","quote","ownership","support","direct","tooth","stethoscope","dumbbell","coffee","utensils","building","facebook","instagram"] as const;

/** Every icon, labelled, in the gold the site draws them in. */
export function AllIcons() {
  return (
    <Stage>
      <ul className="grid list-none gap-3 sm:grid-cols-3">
        {names.map((n) => (
          <li key={n} className="flex items-center gap-3 text-body text-ink-soft">
            <Icon name={n} className="text-gold" />
            <span className="font-mono text-meta">{n}</span>
          </li>
        ))}
      </ul>
    </Stage>
  );
}
