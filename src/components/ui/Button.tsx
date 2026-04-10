import Link from "next/link";
import { cx } from "@/lib/utils";

type ButtonProps = {
  href: string;
  label: string;
  variant?: "primary" | "outline";
  size?: "sm" | "md";
  external?: boolean;
  className?: string;
};

export function Button({
  href,
  label,
  variant = "primary",
  size = "md",
  external = false,
  className,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-full font-semibold transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--gold)]";
  const variants = {
    primary:
      "bg-[var(--gold)] text-black hover:translate-y-[-1px] hover:shadow-[0_12px_30px_rgba(212,175,55,0.25)]",
    outline:
      "border border-[var(--gold)] text-[var(--gold)] hover:bg-[rgba(212,175,55,0.1)]",
  };
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-5 py-3 text-sm md:text-base",
  };

  return (
    <Link
      href={href}
      className={cx(base, variants[variant], sizes[size], className)}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
    >
      {label}
    </Link>
  );
}
