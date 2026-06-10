import type { Badge } from "@/lib/types";

const labels: Record<Badge, { text: string; className: string }> = {
  oferta: { text: "Oferta", className: "bg-brand text-white" },
  nuevo: { text: "Nuevo", className: "bg-ink text-white" },
  agotado: { text: "Agotado", className: "bg-neutral-200 text-neutral-600" },
  "mas-vendido": { text: "Más vendido", className: "bg-white text-ink border border-neutral-300" },
};

export default function BadgeTag({ badge }: { badge: Badge }) {
  const { text, className } = labels[badge];
  return (
    <span className={`rounded-full px-3 py-1 text-xs font-medium ${className}`}>{text}</span>
  );
}
