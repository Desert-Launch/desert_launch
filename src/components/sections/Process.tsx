import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { PROCESS } from "@/lib/constants";

export function Process() {
  return (
    <Section id="process">
      <Container>
        <div className="flex flex-col gap-4">
          <p className="text-sm uppercase tracking-wide text-[var(--gold)]">How We Work</p>
          <h2 className="text-3xl font-semibold text-white">Simple, focused, and transparent</h2>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {PROCESS.map((step, index) => (
            <div
              key={step}
              className="rounded-2xl border border-[var(--border)] bg-[rgba(255,255,255,0.02)] p-5"
            >
              <p className="text-sm text-[var(--gold)]">Step {index + 1}</p>
              <p className="mt-2 text-base text-white">{step}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
