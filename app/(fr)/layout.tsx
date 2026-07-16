import { LocaleShell } from "@/app/components/LocaleShell";

export default function FrLayout({ children }: { children: React.ReactNode }) {
  return <LocaleShell lang="fr">{children}</LocaleShell>;
}
