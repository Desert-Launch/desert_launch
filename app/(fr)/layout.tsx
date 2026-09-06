import { LocaleShell } from "@/app/components/LocaleShell";
import { latinFontVars } from "@/app/lib/fonts";

export { viewport } from "@/app/lib/metadata";

export default function FRLayout({ children }: { children: React.ReactNode }) {
  return (
    <LocaleShell lang="fr" fontClass={latinFontVars}>
      {children}
    </LocaleShell>
  );
}
