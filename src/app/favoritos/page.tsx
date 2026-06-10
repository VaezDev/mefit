"use client";

import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import { useMounted } from "@/lib/useMounted";
import { useWishlist } from "@/store/wishlist";

export default function FavoritosPage() {
  const mounted = useMounted();
  const ids = useWishlist((s) => s.ids);
  const favorites = mounted ? products.filter((p) => ids.includes(p.id)) : [];

  return (
    <div className="mx-auto max-w-7xl px-6 py-12">
      <h1 className="text-center font-display text-3xl font-black italic">MIS FAVORITOS</h1>

      {mounted && favorites.length === 0 ? (
        <div className="space-y-6 py-20 text-center">
          <p className="text-neutral-500">
            Aún no tienes favoritos. Toca el corazón de un producto para guardarlo aquí.
          </p>
          <Link
            href="/tienda"
            className="inline-block bg-ink px-8 py-3.5 text-sm font-medium text-white transition-colors hover:bg-brand"
          >
            Explorar la tienda
          </Link>
        </div>
      ) : (
        <div className="mt-10 grid grid-cols-2 gap-x-5 gap-y-10 lg:grid-cols-4">
          {favorites.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      )}
    </div>
  );
}
