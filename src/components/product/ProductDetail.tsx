"use client";

import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import BadgeTag from "@/components/BadgeTag";
import Price from "@/components/Price";
import { BagIcon, HeartIcon } from "@/components/icons";
import type { Product } from "@/lib/types";
import { useMounted } from "@/lib/useMounted";
import { useCart } from "@/store/cart";
import { useUI } from "@/store/ui";
import { useWishlist } from "@/store/wishlist";

export default function ProductDetail({ product }: { product: Product }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const mounted = useMounted();

  const initialColor = Math.max(
    0,
    product.colors.findIndex((c) => c.slug === searchParams.get("color")),
  );
  const [colorIndex, setColorIndex] = useState(initialColor);
  const [size, setSize] = useState<string | null>(null);
  const [qty, setQty] = useState(1);
  const [sizeError, setSizeError] = useState(false);

  const add = useCart((s) => s.add);
  const setCartOpen = useUI((s) => s.setCartOpen);
  const { ids, toggle } = useWishlist();
  const isFav = mounted && ids.includes(product.id);

  const color = product.colors[colorIndex];
  const unitPrice = product.salePrice ?? product.price;

  const addToCart = (): boolean => {
    if (product.soldOut) return false;
    if (!size) {
      setSizeError(true);
      return false;
    }
    add({
      productId: product.id,
      slug: product.slug,
      name: product.name,
      image: color.image,
      color: color.name,
      size,
      unitPrice,
      qty,
    });
    return true;
  };

  return (
    <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 lg:grid-cols-2">
      {/* Galería */}
      <div className="flex flex-col-reverse gap-4 sm:flex-row">
        <div className="no-scrollbar flex gap-3 overflow-x-auto sm:max-h-[600px] sm:flex-col sm:overflow-y-auto">
          {product.colors.map((c, i) => (
            <button
              key={c.slug}
              aria-label={`Ver color ${c.name}`}
              onClick={() => setColorIndex(i)}
              className={`shrink-0 overflow-hidden border-2 transition-colors ${
                i === colorIndex ? "border-ink" : "border-transparent hover:border-neutral-300"
              }`}
            >
              <Image src={c.image} alt={c.name} width={72} height={72} className="size-18 object-cover" />
            </button>
          ))}
        </div>
        <div className="relative flex-1 bg-cream">
          <Image
            src={color.image}
            alt={`${product.name} — ${color.name}`}
            width={900}
            height={900}
            priority
            className="aspect-square w-full object-cover"
          />
          {product.badge && (
            <div className="absolute top-4 right-4">
              <BadgeTag badge={product.badge} />
            </div>
          )}
        </div>
      </div>

      {/* Información y compra */}
      <div className="space-y-6">
        <div className="space-y-3">
          <h1 className="font-display text-3xl font-black italic">{product.name}</h1>
          <Price price={product.price} salePrice={product.salePrice} className="text-xl" />
        </div>

        <div>
          <p className="mb-2 text-sm">
            Color: <span className="font-medium">{color.name}</span>
          </p>
          <div className="flex flex-wrap gap-2">
            {product.colors.map((c, i) => (
              <button
                key={c.slug}
                aria-label={`Color ${c.name}`}
                title={c.name}
                onClick={() => setColorIndex(i)}
                className={`overflow-hidden rounded-full border-2 transition-all ${
                  i === colorIndex ? "border-ink" : "border-transparent hover:border-neutral-300"
                }`}
              >
                <Image src={c.image} alt={c.name} width={44} height={44} className="size-11 rounded-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-2 text-sm">
            Talla{" "}
            {sizeError && <span className="font-medium text-brand">— selecciona una talla</span>}
          </p>
          <div className="flex flex-wrap gap-2">
            {product.sizes.map((s) => (
              <button
                key={s}
                onClick={() => {
                  setSize(s);
                  setSizeError(false);
                }}
                className={`min-w-12 border px-3 py-2.5 text-sm transition-colors ${
                  size === s
                    ? "border-ink bg-ink text-white"
                    : sizeError
                      ? "border-brand"
                      : "border-neutral-300 hover:border-ink"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        <div className="flex gap-3">
          <div className="flex items-center border border-neutral-300">
            <button className="px-4 py-3 hover:text-brand" aria-label="Disminuir cantidad" onClick={() => setQty(Math.max(1, qty - 1))}>
              −
            </button>
            <span className="w-8 text-center">{qty}</span>
            <button className="px-4 py-3 hover:text-brand" aria-label="Aumentar cantidad" onClick={() => setQty(qty + 1)}>
              +
            </button>
          </div>
          <button
            disabled={product.soldOut}
            onClick={() => {
              if (addToCart()) setCartOpen(true);
            }}
            className="flex flex-1 items-center justify-center gap-2 bg-ink py-3 text-sm font-medium text-white transition-colors hover:bg-brand disabled:cursor-not-allowed disabled:bg-neutral-300"
          >
            <BagIcon width={18} height={18} />
            {product.soldOut ? "Agotado" : "Agregar al carrito"}
          </button>
        </div>

        <button
          disabled={product.soldOut}
          onClick={() => {
            if (addToCart()) router.push("/checkout");
          }}
          className="w-full border border-ink py-3.5 text-sm font-medium transition-colors hover:border-brand hover:text-brand disabled:cursor-not-allowed disabled:border-neutral-300 disabled:text-neutral-400"
        >
          Comprar ahora
        </button>

        <button
          onClick={() => toggle(product.id)}
          className={`flex w-full items-center justify-center gap-2 border py-3 text-sm transition-colors ${
            isFav ? "border-brand text-brand" : "border-neutral-300 hover:border-ink"
          }`}
        >
          <HeartIcon filled={isFav} width={18} height={18} />
          {isFav ? "En tus favoritos" : "Agregar a favoritos"}
        </button>

        <div className="space-y-4 border-t border-neutral-200 pt-6 text-sm leading-relaxed text-neutral-600">
          {product.description.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
