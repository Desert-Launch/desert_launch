import { LocaleShell } from "@/app/components/LocaleShell";
import { arabicFontVars } from "@/app/lib/fonts-ar";

export { viewport } from "@/app/lib/metadata";

export default function ArLayout({ children }: { children: React.ReactNode }) {
  return (
    <LocaleShell lang="ar" fontClass={arabicFontVars}>
      {children}
    </LocaleShell>
  );
}
