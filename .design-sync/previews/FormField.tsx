import { Button, FormField } from "@desert-launch/design-system";
import { Stage } from "./_stage";

/** The brief form: two columns of fields, a select, a textarea, the submit. */
export function BriefForm() {
  return (
    <Stage width={640}>
      <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
        <div className="grid gap-3 sm:grid-cols-2">
          <FormField id="name" label="Your name" required placeholder="Full name" autoComplete="name" />
          <FormField id="reply" label="Email or WhatsApp" type="email" required placeholder="you@company.com" help="Where the reply should go." />
        </div>
        <FormField id="type" label="Project type" type="select" optionalMark="(optional)" options={[{ value: "mobile", label: "Mobile app" }, { value: "web", label: "Web platform" }, { value: "mvp", label: "MVP" }]} />
        <FormField id="brief" label="What are you building?" type="textarea" required placeholder="A few sentences is plenty." rows={4} />
        <div>
          <Button type="submit">Send the brief</Button>
        </div>
      </form>
    </Stage>
  );
}

/** Validation: an error line under the control, and the control marked invalid. */
export function WithError() {
  return (
    <Stage width={420}>
      <FormField id="email" label="Email" type="email" required defaultValue="abdullah@" error="Enter a full email address, like name@company.com." />
    </Stage>
  );
}
