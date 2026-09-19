import { Attribution } from "@desert-launch/design-system";
import { Stage } from "./_stage";

/** The honest caveat under a section intro. */
export function UnderAnIntro() {
  return (
    <Stage width={640}>
      <div className="flex flex-col gap-6">
        <p className="text-lead text-muted">Eight products across consumer mobile, multi-role platforms and private business systems.</p>
        <Attribution>
          Every product here was designed and built by our founder, Abdullah Mohamed — across Desert
          Launch client work and earlier senior engineering roles.
        </Attribution>
      </div>
    </Stage>
  );
}

/** The demos notice. */
export function DemoNotice() {
  return (
    <Stage width={640}>
      <Attribution>
        Every business, name, price and phone number in these demos is invented. What you enter stays
        in your browser for the session and resets when you refresh.
      </Attribution>
    </Stage>
  );
}
