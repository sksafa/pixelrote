import Link from "next/link";

export function Button({
  children,
  href = "#contact",
  variant = "primary",
  className = "",
}) {
  const styles =
    variant === "outline"
      ? "border border-slate-200 bg-white text-slate-900 hover:border-violet-600 hover:text-violet-600"
      : "bg-gradient-to-br from-violet-600 to-cyan-400 text-white shadow-lg shadow-violet-500/30";

  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 font-bold transition hover:-translate-y-0.5 ${styles} ${className}`}
    >
      {children}
    </Link>
  );
}
