import { cx } from "@/lib/utils";

type BadgeProps = {
  children: React.ReactNode;
  className?: string;
};

export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cx(
        "inline-flex items-center rounded-full border border-[var(--border)] bg-[rgba(212,175,55,0.1)] px-3 py-1 text-xs font-semibold uppercase tracking-widest text-[var(--gold)]",
        className
      )}
    >
      {children}
    </span>
  );
}
