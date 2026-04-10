import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { ABOUT } from "@/lib/constants";

export function About() {
  return (
    <Section>
      <Container className="grid gap-8 md:grid-cols-[1.2fr_0.8fr]">
        <div>
          <p className="text-sm uppercase tracking-wide text-[var(--gold)]">
            {ABOUT.title}
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-white">
            {ABOUT.body}
          </h2>
        </div>
        <ul className="grid gap-3 text-sm text-[var(--muted)]">
          {ABOUT.bullets.map((item) => (
            <li
              key={item}
              className="rounded-2xl border border-[var(--border)] bg-[rgba(255,255,255,0.02)] px-4 py-3"
            >
              {item}
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
