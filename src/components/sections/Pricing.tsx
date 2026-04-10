import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { PRICING } from "@/lib/constants";

export function Pricing() {
  return (
    <Section id="pricing">
      <Container>
        <div className="flex flex-col gap-4">
          <p className="text-sm uppercase tracking-wide text-[var(--gold)]">Pricing</p>
          <h2 className="text-3xl font-semibold text-white">Pricing (Starting From)</h2>
          <p className="text-sm text-[var(--muted)]">
            Final pricing depends on scope and timeline.
          </p>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {PRICING.map((item) => (
            <div
              key={item.label}
              className="flex items-center justify-between rounded-2xl border border-[var(--border)] bg-[rgba(255,255,255,0.02)] px-6 py-4"
            >
              <span className="text-sm text-[var(--muted)]">{item.label}</span>
              <span className="text-lg font-semibold text-white">{item.value}</span>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
