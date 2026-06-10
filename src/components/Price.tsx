import { formatCOP } from "@/lib/format";

export default function Price({
  price,
  salePrice,
  className = "",
}: {
  price: number;
  salePrice?: number;
  className?: string;
}) {
  if (salePrice) {
    return (
      <span className={`flex items-center gap-2 ${className}`}>
        <span className="font-semibold">{formatCOP(salePrice)}</span>
        <span className="text-sm text-neutral-400 line-through">{formatCOP(price)}</span>
      </span>
    );
  }
  return <span className={`font-semibold ${className}`}>{formatCOP(price)}</span>;
}
