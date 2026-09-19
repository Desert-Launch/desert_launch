import { FaqList } from "@desert-launch/design-system";
import { Stage } from "./_stage";

const items = [
  {
    q: "How much does a project cost?",
    a: "Every project gets a written fixed quote in USD after a free scope call. The same brief can differ by a factor of three depending on how many kinds of user it has, so there is no price list — but the number is fixed before you commit.",
  },
  {
    q: "Who owns the code?",
    a: "You do. The source code, the intellectual property, and the hosting, domain, storage and app store accounts are created in your name from the start.",
  },
  {
    q: "What happens after launch?",
    a: "Twelve months of free support and maintenance: bug fixes, OS and store updates. Small changes are free for the first three months.",
  },
];

/** Native <details> accordions, closed: the state a visitor lands on. */
export function Closed() {
  return (
    <Stage>
      <FaqList items={items} />
    </Stage>
  );
}

/** A short list of two — the shape on a service page. */
export function Short() {
  return (
    <Stage width={560}>
      <FaqList items={items.slice(0, 2)} />
    </Stage>
  );
}
