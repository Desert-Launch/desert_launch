import { Card, SectionBand, SectionHead } from "@desert-launch/design-system";

/** A full section: head, then a card grid — the rhythm every home section
 *  follows. Rendered without the Stage: the band brings its own surface. */
export function Default() {
  return (
    <div className="bg-bg text-ink" style={{ colorScheme: "dark" }}>
      <SectionBand id="why-us" labelledBy="why-heading">
        <SectionHead id="why-heading" kicker="Why us" title="Four commitments, not adjectives" intro="What every engagement includes, in writing, before you commit." />
        <div className="grid gap-4 sm:grid-cols-2">
          <Card icon="quote" title="A fixed quote first">One number in USD, in writing, after a free scope call.</Card>
          <Card icon="ownership" title="You own the code">Source, IP, hosting and store accounts in your name.</Card>
          <Card icon="support" title="A year of support">Bug fixes, OS and store updates, free for twelve months.</Card>
          <Card icon="direct" title="Direct line to the engineer">No account managers; the person who builds it answers.</Card>
        </div>
      </SectionBand>
    </div>
  );
}

/** The alternate band, a shade lighter — used every other section. */
export function Alternate() {
  return (
    <div className="bg-bg text-ink" style={{ colorScheme: "dark" }}>
      <SectionBand id="process" alt labelledBy="process-heading">
        <SectionHead id="process-heading" kicker="Process" title="From scope call to launch in five steps" />
        <p className="text-body text-muted">Each step ends with something you can open and use.</p>
      </SectionBand>
    </div>
  );
}
