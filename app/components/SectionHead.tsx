export function SectionHead({
  kicker,
  title,
  intro,
  id,
}: {
  kicker: string;
  title: string;
  intro?: string;
  /** id for the <h2>, referenced by the section's aria-labelledby. */
  id?: string;
}) {
  return (
    // Capped near 60ch so intros never run the full container width — long
    // measure is the fastest way to make a page tiring to read.
    <div className="reveal flex max-w-[46rem] flex-col gap-4">
      <span className="kicker">{kicker}</span>
      <h2 id={id} className="h-section">
        {title}
      </h2>
      {intro ? <p className="max-w-[58ch] text-lead text-muted">{intro}</p> : null}
    </div>
  );
}
