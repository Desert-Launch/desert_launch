import { LocaleShell } from "@/app/components/LocaleShell";

export default function EsLayout({ children }: { children: React.ReactNode }) {
  return <LocaleShell lang="es">{children}</LocaleShell>;
}
