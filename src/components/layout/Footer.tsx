import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { assetPath, CONTACT, FOOTER } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] py-12">
      <Container className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
        <div className="flex items-center gap-4">
          <Image
            src={assetPath("/images/logo_with_name.png")}
            alt="DesertLaunch logo"
            width={160}
            height={48}
            suppressHydrationWarning
          />
          <p className="text-sm text-[var(--muted)]">{FOOTER.tagline}</p>
        </div>
        <div className="flex flex-col gap-1 text-sm text-[var(--muted)]">
          <a className="hover:text-white" href={CONTACT.whatsapp.href} target="_blank" rel="noreferrer">
            WhatsApp: {CONTACT.whatsapp.display}
          </a>
          <a className="hover:text-white" href={`mailto:${CONTACT.email}`}>
            {CONTACT.email}
          </a>
        </div>
      </Container>
    </footer>
  );
}
