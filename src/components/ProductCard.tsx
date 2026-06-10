"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import BadgeTag from "@/components/BadgeTag";
import Price from "@/components/Price";
import { HeartIcon } from "@/components/icons";
import type { Product } from "@/lib/types";
import { useMounted } from "@/lib/useMounted";
import { useWishlist } from "@/store/wishlist";

export default function ProductCard({ product }: { product: Product }) {
  const [colorIndex, setColorIndex] = useState(0);
  const mounted = useMounted();
  const { ids, toggle } = useWishlist();
  const isFav = mounted && ids.includes(product.id);
  const color = product.colors[colorIndex];

  return (
    <div className="group relative">
      <Link
        href={`/productos/${product.slug}?color=${color.slug}`}
        className="block overflow-hidden bg-cream"
      >
        <Image
          src={color.image}
          alt={`${product.name} — ${color.name}`}
          width={600}
          height={600}
          className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </Link>

      <button
        aria-label={isFav ? "Quitar de favoritos" : "Agregar a favoritos"}
        onClick={() => toggle(product.id)}
        className={`absolute top-3 left-3 transition-colors ${isFav ? "text-brand" : "text-ink hover:text-brand"}`}
      >
        <HeartIcon filled={isFav} />
      </button>

      {product.badge && (
        <div className="absolute top-3 right-3">
          <BadgeTag badge={product.badge} />
        </div>
      )}

      <div className="mt-3 space-y-1.5">
        <Link href={`/productos/${product.slug}`} className="block text-sm hover:text-brand">
          {product.name}
        </Link>
        <Price price={product.price} salePrice={product.salePrice} className="text-sm" />
        <div className="flex items-center gap-1.5 pt-1">
          {product.colors.map((c, i) => (
            <button
              key={c.slug}
              aria-label={`Color ${c.name}`}
              title={c.name}
              onMouseEnter={() => setColorIndex(i)}
              onClick={() => setColorIndex(i)}
              className={`overflow-hidden rounded-full border-2 transition-all ${
                i === colorIndex ? "border-ink" : "border-transparent hover:border-neutral-300"
              }`}
            >
              <Image
                src={c.image}
                alt={c.name}
                width={28}
                height={28}
                className="size-7 rounded-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
