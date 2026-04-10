import { Card } from "@/components/ui/Card";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SERVICES } from "@/lib/constants";

export function Services() {
  return (
    <Section id="services">
      <Container>
        <div className="flex flex-col gap-4">
          <p className="text-sm uppercase tracking-wide text-[var(--gold)]">Services</p>
          <h2 className="text-3xl font-semibold text-white">Packages built for momentum</h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {SERVICES.map((service) => (
            <Card key={service.title} className="flex flex-col gap-4">
              <h3 className="text-xl font-semibold text-white">{service.title}</h3>
              <p className="text-sm text-[var(--gold)]">{service.description}</p>
              <p className="text-sm text-[var(--muted)]">{service.helper}</p>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
