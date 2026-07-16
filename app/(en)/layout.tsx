import { LocaleShell } from "@/app/components/LocaleShell";

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return <LocaleShell lang="en">{children}</LocaleShell>;
}
