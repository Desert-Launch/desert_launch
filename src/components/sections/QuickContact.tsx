import { Card } from "@/components/ui/Card";
import { Container } from "@/components/layout/Container";
import { CONTACT, QUICK_CONTACT } from "@/lib/constants";

export function QuickContact() {
  return (
    <section className="pb-12">
      <Container>
        <Card className="grid gap-6 md:grid-cols-[1.3fr_1fr]">
          <div>
            <p className="text-sm uppercase tracking-wide text-[var(--gold)]">
              {QUICK_CONTACT.headline}
            </p>
            <p className="mt-2 text-lg text-white">{QUICK_CONTACT.note}</p>
          </div>
          <div className="space-y-3 text-sm text-[var(--muted)]">
            <div>
              <p className="text-white">WhatsApp</p>
              <a
                href={CONTACT.whatsapp.href}
                target="_blank"
                rel="noreferrer"
                className="hover:text-white"
              >
                {CONTACT.whatsapp.display}
              </a>
            </div>
            <div>
              <p className="text-white">Phone</p>
              <p>{CONTACT.phone}</p>
            </div>
            <div>
              <p className="text-white">Email</p>
              <a href={`mailto:${CONTACT.email}`} className="hover:text-white">
                {CONTACT.email}
              </a>
            </div>
          </div>
        </Card>
      </Container>
    </section>
  );
}
