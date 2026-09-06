import { LocaleShell } from "@/app/components/LocaleShell";
import { latinFontVars } from "@/app/lib/fonts";

export { viewport } from "@/app/lib/metadata";

export default function ESLayout({ children }: { children: React.ReactNode }) {
  return (
    <LocaleShell lang="es" fontClass={latinFontVars}>
      {children}
    </LocaleShell>
  );
}
