import { cx } from "@/lib/utils";

type SectionProps = {
  id?: string;
  children: React.ReactNode;
  className?: string;
};

export function Section({ id, children, className }: SectionProps) {
  return (
    <section id={id} className={cx("py-16 md:py-24", className)}>
      {children}
    </section>
  );
}
