import Link from "next/link";

export default function Logo({
  light = false,
  className = "",
}: {
  light?: boolean;
  className?: string;
}) {
  return (
    <Link
      href="/"
      aria-label="MEFIT — Inicio"
      className={`font-display text-3xl font-black italic tracking-tight select-none ${className}`}
    >
      <span className={light ? "text-white" : "text-ink"}>ME</span>
      <span className="text-brand">FIT</span>
    </Link>
  );
}
