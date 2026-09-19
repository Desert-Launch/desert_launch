import { Button } from "@desert-launch/design-system";
import { Stage } from "./_stage";

/** The gold primary beside its outlined secondary — the pair every section
 *  ends with on the site. */
export function PrimaryAndSecondary() {
  return (
    <Stage>
      <div className="flex flex-col gap-3 sm:flex-row">
        <Button href="https://wa.me/201022838534" external>
          Get a Free Quote on WhatsApp
        </Button>
        <Button variant="secondary" href="#services">
          See our services
        </Button>
      </div>
    </Stage>
  );
}

/** A real `<button>` for in-page actions such as a form submit. */
export function FormSubmit() {
  return (
    <Stage>
      <div className="flex flex-col gap-3 sm:flex-row">
        <Button type="submit">Send the brief</Button>
        <Button variant="secondary" disabled>
          Sending…
        </Button>
      </div>
    </Stage>
  );
}

/** On a phone the pair stacks and each pill takes the full width. */
export function Stacked() {
  return (
    <Stage width={360}>
      <div className="flex flex-col gap-3">
        <Button href="#contact">Book a free scope call</Button>
        <Button variant="secondary" href="mailto:abdullah@desertlaunch.dev">
          Email us
        </Button>
      </div>
    </Stage>
  );
}
