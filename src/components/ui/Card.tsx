import { cx } from "@/lib/utils";

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export function Card({ children, className }: CardProps) {
  return (
    <div
      className={cx(
        "rounded-2xl border border-[var(--border)] bg-[rgba(255,255,255,0.03)] p-6",
        className
      )}
    >
      {children}
    </div>
  );
}
