import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";
import { assetPath, CONTACT, NAV_LINKS } from "@/lib/constants";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[rgba(11,15,25,0.9)] backdrop-blur">
      <Container className="flex items-center justify-between gap-3 py-3 md:py-4">
        <div className="flex items-center gap-3">
          <Image
            src={assetPath("/images/logo.png")}
            alt="DesertLaunch logo"
            width={48}
            height={48}
            priority
            suppressHydrationWarning
            className="h-auto w-10 md:w-12"
          />
        </div>
        <nav className="hidden items-center gap-4 text-sm text-[var(--muted)] md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <Button
          href={CONTACT.whatsapp.href}
          label="WhatsApp"
          external
          size="sm"
          className="w-auto px-4 py-2 text-xs md:text-sm"
        />
      </Container>
    </header>
  );
}
