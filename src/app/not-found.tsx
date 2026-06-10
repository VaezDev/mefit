import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center gap-6 px-6 py-28 text-center">
      <p className="font-display text-6xl font-black italic">
        4<span className="text-brand">0</span>4
      </p>
      <p className="text-neutral-600">La página que buscas no existe o fue movida.</p>
      <Link
        href="/"
        className="bg-ink px-8 py-3.5 text-sm font-medium text-white transition-colors hover:bg-brand"
      >
        Volver al inicio
      </Link>
    </div>
  );
}
