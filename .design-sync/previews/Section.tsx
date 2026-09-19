import { Section } from "@desert-launch/design-system";
import { Stage } from "./_stage";

/** Prose paragraphs. */
export function Prose() {
  return (
    <Stage width={680}>
      <Section section={{ id: "how", title: "How pricing works here", body: ["There is no price list on this page, because an honest number depends on what you are actually building.", "What there is instead is the entire pricing model in the open: how the figure is arrived at, what moves it, and what you own when the work is finished."] }} />
    </Stage>
  );
}

/** A bullet list with the site's gold dots. */
export function BulletList() {
  return (
    <Stage width={680}>
      <Section section={{ id: "what-is-real", title: "What is real in each demo", list: ["The booking, ordering and reservation rules are computed from the data, not hard-coded.", "Anything done on the public side appears on the staff side immediately.", "Every demo works on a phone."] }} />
    </Stage>
  );
}

/** A card grid. */
export function Cards() {
  return (
    <Stage width={680}>
      <Section section={{ id: "who-for", title: "Who this is for", cards: [{ title: "Gyms and studios", body: "Plans, trainers, schedules and payments, so the front desk stops taking bookings by phone." }, { title: "Clinics and labs", body: "A portal for the people who send work in, and an admin side for the team processing it." }] }} />
    </Stage>
  );
}
