import { SectionHead } from "@desert-launch/design-system";
import { Stage } from "./_stage";

/** Kicker, title, intro — the head of every section. */
export function WithIntro() {
  return (
    <Stage width={760}>
      <SectionHead id="services-heading" kicker="Services" title="Mobile app, web and MVP development services" intro="Six things we build. Every one comes with a fixed quote in USD, milestone payments, full code ownership and a year of support." />
    </Stage>
  );
}

/** Title only. */
export function TitleOnly() {
  return (
    <Stage width={560}>
      <SectionHead kicker="FAQ" title="Cost, timeline, ownership and support" />
    </Stage>
  );
}
