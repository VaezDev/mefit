"use client";

import Image from "next/image";
import Link from "next/link";
import { CloseIcon, TrashIcon } from "@/components/icons";
import { formatCOP } from "@/lib/format";
import { cartSubtotal, useCart } from "@/store/cart";
import { useUI } from "@/store/ui";

export default function CartDrawer() {
  const { cartOpen, setCartOpen } = useUI();
  const { items, setQty, remove } = useCart();
  const subtotal = cartSubtotal(items);

  return (
    <div className={`fixed inset-0 z-50 ${cartOpen ? "" : "pointer-events-none"}`}>
      <div
        className={`absolute inset-0 bg-black/40 transition-opacity ${cartOpen ? "opacity-100" : "opacity-0"}`}
        onClick={() => setCartOpen(false)}
      />
      <aside
        className={`absolute top-0 right-0 flex h-full w-full max-w-md transform flex-col bg-white shadow-xl transition-transform duration-300 ${
          cartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-neutral-200 px-5 py-4">
          <h2 className="font-display text-lg font-bold italic">TU CARRITO</h2>
          <button aria-label="Cerrar carrito" onClick={() => setCartOpen(false)}>
            <CloseIcon />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-4 px-6 text-center">
            <p className="text-neutral-500">Tu carrito está vacío.</p>
            <Link
              href="/tienda"
              onClick={() => setCartOpen(false)}
              className="bg-ink px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-brand"
            >
              Ir a la tienda
            </Link>
          </div>
        ) : (
          <>
            <ul className="flex-1 divide-y divide-neutral-100 overflow-y-auto px-5">
              {items.map((item) => (
                <li key={item.key} className="flex gap-4 py-4">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={80}
                    height={80}
                    className="size-20 rounded object-cover"
                  />
                  <div className="flex flex-1 flex-col">
                    <Link
                      href={`/productos/${item.slug}`}
                      onClick={() => setCartOpen(false)}
                      className="text-sm font-medium hover:text-brand"
                    >
                      {item.name}
                    </Link>
                    <p className="text-xs text-neutral-500">
                      {item.color} · Talla {item.size}
                    </p>
                    <div className="mt-auto flex items-center justify-between">
                      <div className="flex items-center border border-neutral-300">
                        <button
                          className="px-2.5 py-1 hover:text-brand"
                          aria-label="Disminuir cantidad"
                          onClick={() => setQty(item.key, item.qty - 1)}
                        >
                          −
                        </button>
                        <span className="w-7 text-center text-sm">{item.qty}</span>
                        <button
                          className="px-2.5 py-1 hover:text-brand"
                          aria-label="Aumentar cantidad"
                          onClick={() => setQty(item.key, item.qty + 1)}
                        >
                          +
                        </button>
                      </div>
                      <span className="text-sm font-semibold">
                        {formatCOP(item.unitPrice * item.qty)}
                      </span>
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

            <div className="space-y-3 border-t border-neutral-200 px-5 py-4">
              <div className="flex items-center justify-between text-sm">
                <span>Subtotal</span>
                <span className="font-semibold">{formatCOP(subtotal)}</span>
              </div>
              <Link
                href="/checkout"
                onClick={() => setCartOpen(false)}
                className="block bg-ink py-3.5 text-center text-sm font-medium text-white transition-colors hover:bg-brand"
              >
                Finalizar compra
              </Link>
              <Link
                href="/carrito"
                onClick={() => setCartOpen(false)}
                className="block border border-ink py-3 text-center text-sm font-medium transition-colors hover:border-brand hover:text-brand"
              >
                Ver carrito
              </Link>
            </div>
          </>
        )}
      </aside>
    </div>
  );
}
