import { Button, Kicker, Panel } from "@desert-launch/design-system";
import { Stage } from "./_stage";

/** The closing band pattern: kicker, one paragraph, a gold button on the end. */
export function ClosingBand() {
  return (
    <Stage>
      <Panel className="flex flex-col items-start gap-5 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col gap-3">
          <Kicker>Seen one you like?</Kicker>
          <p className="max-w-[62ch] text-body leading-relaxed text-ink-soft">
            Any of these would be adapted to your services, prices, hours and brand. Tell us which
            one is closest and you get a written fixed quote.
          </p>
        </div>
        <Button href="https://wa.me/201022838534" external className="shrink-0">
          Ask on WhatsApp
        </Button>
      </Panel>
    </Stage>
  );
}

/** A plain content panel with a heading and body. */
export function Content() {
  return (
    <Stage width={480}>
      <Panel className="flex flex-col gap-3">
        <Kicker>Who you're working with</Kicker>
        <h3 className="h-card">Abdullah Mohamed</h3>
        <p className="text-body text-gold">Founder & lead engineer</p>
        <p className="text-body leading-relaxed text-muted">
          Senior software engineer. Every project here is designed and built by him, with no
          account managers in between.
        </p>
      </Panel>
    </Stage>
  );
}
