import { LocaleShell } from "@/app/components/LocaleShell";

export default function ArLayout({ children }: { children: React.ReactNode }) {
  return <LocaleShell lang="ar">{children}</LocaleShell>;
}
