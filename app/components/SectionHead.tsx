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
    <div className="reveal flex max-w-[760px] flex-col gap-3">
      <span className="kicker">{kicker}</span>
      <h2 id={id} className="text-2xl font-extrabold leading-tight sm:text-3xl">
        {title}
      </h2>
      {intro ? <p className="text-[0.98rem] leading-relaxed text-muted">{intro}</p> : null}
    </div>
  );
}
