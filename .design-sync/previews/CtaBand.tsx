import { CtaBand } from "@desert-launch/design-system";
import { Stage } from "./_stage";

const cta = {
  title: "Seen one that fits?",
  body: "Tell us which demo is closest to your business and what would need to change. You get a written fixed quote after a free scope call.",
  label: "Ask on WhatsApp",
  waMessage: "Hi Desert Launch, I've been through the demos page and I'd like to talk about something similar.",
};

/** The band that closes every long-form page. */
export function Default() {
  return (
    <Stage>
      <CtaBand cta={cta} waHref={`https://wa.me/201022838534?text=${encodeURIComponent(cta.waMessage)}`} />
    </Stage>
  );
}
