import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { CONTACT } from "@/lib/constants";

export function FinalCTA() {
  return (
    <Section id="contact">
      <Container>
        <Card className="grid gap-6 md:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="text-sm uppercase tracking-wide text-[var(--gold)]">
              Ready to start a project?
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-white">
              Let’s build something premium together.
            </h2>
            <p className="mt-3 text-sm text-[var(--muted)]">
              WhatsApp is the fastest way to reach us. We respond within 24 hours.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <Button
              href={CONTACT.whatsapp.href}
              label="Chat on WhatsApp"
              external
            />
            <Button
              href={`mailto:${CONTACT.email}`}
              label="Send Email"
              variant="outline"
            />
            <div className="text-sm text-[var(--muted)]">
              <p>WhatsApp: {CONTACT.whatsapp.display}</p>
              <p>Email: {CONTACT.email}</p>
            </div>
          </div>
        </Card>
      </Container>
    </Section>
  );
}
