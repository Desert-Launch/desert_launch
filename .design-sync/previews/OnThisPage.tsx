import { OnThisPage } from "@desert-launch/design-system";
import { Stage } from "./_stage";

/** The jump list under a long page's header. */
export function Default() {
  return (
    <Stage width={640}>
      <OnThisPage label="On this page" sections={[{ id: "how-pricing-works", title: "How pricing works here" }, { id: "what-moves-the-price", title: "What moves the price" }, { id: "not-included", title: "What is deliberately not included" }, { id: "what-you-own", title: "What you own when it's finished" }]} />
    </Stage>
  );
}
