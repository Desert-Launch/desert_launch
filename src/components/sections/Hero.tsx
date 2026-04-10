import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/layout/Container";
import { assetPath, HERO, CONTACT } from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative overflow-hidden pb-12 pt-16 md:pb-20 md:pt-24">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <Badge>Premium Studio</Badge>
            <h1 className="text-3xl font-semibold text-white sm:text-4xl md:text-5xl">
              {HERO.title}
            </h1>
            <p className="text-lg text-[var(--gold)]">{HERO.subtitle}</p>
            <p className="text-base text-[var(--muted)] md:text-lg">
              {HERO.supporting}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                href={CONTACT.whatsapp.href}
                label="Chat on WhatsApp"
                external
              />
              <Button
                href={`mailto:${CONTACT.email}`}
                label="Get an Estimate"
                variant="outline"
              />
            </div>
            <p className="text-sm text-[var(--muted)]">{HERO.helper}</p>
            <div className="flex flex-wrap gap-4 text-xs uppercase tracking-wide text-[var(--muted)]">
              {HERO.trust.map((item) => (
                <span key={item} className="rounded-full border border-[var(--border)] px-3 py-2">
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-[rgba(212,175,55,0.15)] blur-3xl" />
            <div className="relative overflow-hidden rounded-3xl border border-[var(--border)] bg-[rgba(255,255,255,0.02)] p-4">
              <Image
                src={assetPath("/images/cover.png")}
                alt="DesertLaunch cover"
                width={640}
                height={640}
                className="h-auto w-full rounded-2xl object-cover"
                priority
                suppressHydrationWarning
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
