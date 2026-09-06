import { LocaleShell } from "@/app/components/LocaleShell";
import { latinFontVars } from "@/app/lib/fonts";

export { viewport } from "@/app/lib/metadata";

export default function ENLayout({ children }: { children: React.ReactNode }) {
  return (
    <LocaleShell lang="en" fontClass={latinFontVars}>
      {children}
    </LocaleShell>
  );
}
