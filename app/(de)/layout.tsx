import { LocaleShell } from "@/app/components/LocaleShell";
import { latinFontVars } from "@/app/lib/fonts";

export { viewport } from "@/app/lib/metadata";

export default function DELayout({ children }: { children: React.ReactNode }) {
  return (
    <LocaleShell lang="de" fontClass={latinFontVars}>
      {children}
    </LocaleShell>
  );
}
