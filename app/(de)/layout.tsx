import { LocaleShell } from "@/app/components/LocaleShell";

export default function DeLayout({ children }: { children: React.ReactNode }) {
  return <LocaleShell lang="de">{children}</LocaleShell>;
}
