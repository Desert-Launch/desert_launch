import { Chip } from "@desert-launch/design-system";
import { Stage } from "./_stage";

/** The technology row under the services grid. */
export function TechStack() {
  return (
    <Stage>
      <div className="flex flex-wrap gap-2">
        {["Flutter", "Node.js", "PostgreSQL", "Firebase", "GraphQL & REST", "AWS", "Docker", "Stripe"].map((t) => (
          <Chip key={t}>{t}</Chip>
        ))}
      </div>
    </Stage>
  );
}

/** Link chips: related pages at the foot of a service page. */
export function RelatedLinks() {
  return (
    <Stage width={560}>
      <ul className="flex flex-wrap gap-2 list-none">
        <li><Chip href="/services/web-development/">Web development</Chip></li>
        <li><Chip href="/services/mvp-development/">MVP development</Chip></li>
        <li><Chip href="/services/ui-ux-design/">UI/UX design</Chip></li>
        <li><Chip href="/pricing/">What it costs</Chip></li>
      </ul>
    </Stage>
  );
}
