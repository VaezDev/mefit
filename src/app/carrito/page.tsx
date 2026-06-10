"use client";

import Image from "next/image";
import Link from "next/link";
import { TrashIcon } from "@/components/icons";
import { formatCOP } from "@/lib/format";
import { site } from "@/lib/site";
import { useMounted } from "@/lib/useMounted";
import { cartSubtotal, useCart } from "@/store/cart";

export default function CarritoPage() {
  const mounted = useMounted();
  const { items, setQty, remove } = useCart();
  const subtotal = cartSubtotal(items);
  const shipping = subtotal >= site.freeShippingFrom ? 0 : site.shippingCost;

  if (!mounted) return <div className="min-h-[50vh]" />;

  return (
    <div className="mx-auto max-w-5xl px-6 py-12">
      <h1 className="text-center font-display text-3xl font-black italic">TU CARRITO</h1>

      {items.length === 0 ? (
        <div className="space-y-6 py-20 text-center">
          <p className="text-neutral-500">Tu carrito está vacío.</p>
          <Link
            href="/tienda"
            className="inline-block bg-ink px-8 py-3.5 text-sm font-medium text-white transition-colors hover:bg-brand"
          >
            Ir a la tienda
          </Link>
        </div>
      ) : (
        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_340px]">
          <ul className="divide-y divide-neutral-100">
            {items.map((item) => (
              <li key={item.key} className="flex gap-5 py-5">
                <Link href={`/productos/${item.slug}`}>
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={110}
                    height={110}
                    className="size-24 rounded object-cover sm:size-28"
                  />
                </Link>
                <div className="flex flex-1 flex-col">
                  <Link href={`/productos/${item.slug}`} className="font-medium hover:text-brand">
                    {item.name}
                  </Link>
                  <p className="text-sm text-neutral-500">
                    {item.color} · Talla {item.size}
                  </p>
                  <p className="text-sm text-neutral-500">{formatCOP(item.unitPrice)} c/u</p>
                  <div className="mt-auto flex items-center justify-between">
                    <div className="flex items-center border border-neutral-300">
                      <button className="px-3 py-1.5 hover:text-brand" aria-label="Disminuir cantidad" onClick={() => setQty(item.key, item.qty - 1)}>
                        −
                      </button>
                      <span className="w-8 text-center text-sm">{item.qty}</span>
                      <button className="px-3 py-1.5 hover:text-brand" aria-label="Aumentar cantidad" onClick={() => setQty(item.key, item.qty + 1)}>
                        +
                      </button>
                    </div>
                    <span className="font-semibold">{formatCOP(item.unitPrice * item.qty)}</span>
                  </div>
                </div>
                <button
                  aria-label="Eliminar del carrito"
                  className="self-start text-neutral-400 hover:text-brand"
                  onClick={() => remove(item.key)}
                >
                  <TrashIcon width={18} height={18} />
                </button>
              </li>
            ))}
          </ul>

          <aside className="h-fit space-y-4 bg-cream p-6">
            <h2 className="font-display text-lg font-bold italic">RESUMEN</h2>
            <div className="flex justify-between text-sm">
              <span>Subtotal</span>
              <span>{formatCOP(subtotal)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Envío</span>
              <span>{shipping === 0 ? "Gratis" : formatCOP(shipping)}</span>
            </div>
            {shipping > 0 && (
              <p className="text-xs text-neutral-500">
                Envío gratis en compras desde {formatCOP(site.freeShippingFrom)}.
              </p>
            )}
            <div className="flex justify-between border-t border-neutral-300 pt-4 font-semibold">
              <span>Total</span>
              <span>{formatCOP(subtotal + shipping)}</span>
            </div>
            <Link
              href="/checkout"
              className="block bg-ink py-3.5 text-center text-sm font-medium text-white transition-colors hover:bg-brand"
            >
              Finalizar compra
            </Link>
          </aside>
        </div>
      )}
    </div>
  );
}
