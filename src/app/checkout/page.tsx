"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { formatCOP } from "@/lib/format";
import { site } from "@/lib/site";
import type { OrderCustomer } from "@/lib/types";
import { useMounted } from "@/lib/useMounted";
import { cartSubtotal, useCart } from "@/store/cart";
import { newOrderId, useOrders } from "@/store/orders";

const fields: { name: keyof OrderCustomer; label: string; type?: string; placeholder: string; half?: boolean }[] = [
  { name: "nombre", label: "Nombre completo", placeholder: "Ej: Laura Gómez" },
  { name: "cedula", label: "Cédula / NIT", placeholder: "Ej: 1023456789", half: true },
  { name: "telefono", label: "Teléfono / WhatsApp", type: "tel", placeholder: "Ej: 300 123 4567", half: true },
  { name: "email", label: "Correo electrónico", type: "email", placeholder: "tucorreo@ejemplo.com" },
  { name: "direccion", label: "Dirección de envío", placeholder: "Ej: Cra 10 # 20-30, Apto 101" },
  { name: "ciudad", label: "Ciudad", placeholder: "Ej: Bogotá", half: true },
  { name: "departamento", label: "Departamento", placeholder: "Ej: Cundinamarca", half: true },
];

export default function CheckoutPage() {
  const router = useRouter();
  const mounted = useMounted();
  const { items, clear } = useCart();
  const addOrder = useOrders((s) => s.addOrder);
  const [processing, setProcessing] = useState(false);

  const subtotal = cartSubtotal(items);
  const shipping = subtotal >= site.freeShippingFrom ? 0 : site.shippingCost;
  const total = subtotal + shipping;

  if (!mounted) return <div className="min-h-[50vh]" />;

  if (items.length === 0 && !processing) {
    return (
      <div className="space-y-6 px-6 py-24 text-center">
        <h1 className="font-display text-3xl font-black italic">CHECKOUT</h1>
        <p className="text-neutral-500">No tienes productos en el carrito.</p>
        <Link
          href="/tienda"
          className="inline-block bg-ink px-8 py-3.5 text-sm font-medium text-white transition-colors hover:bg-brand"
        >
          Ir a la tienda
        </Link>
      </div>
    );
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const customer = Object.fromEntries(
      fields.map((f) => [f.name, String(data.get(f.name) ?? "").trim()]),
    ) as unknown as OrderCustomer;
    customer.notas = String(data.get("notas") ?? "").trim();

    setProcessing(true);
    const order = {
      id: newOrderId(),
      date: new Date().toISOString(),
      items,
      customer,
      subtotal,
      shipping,
      total,
    };

    // Pago simulado: aquí se conectará la pasarela real (Wompi / MercadoPago).
    setTimeout(() => {
      addOrder(order);
      clear();
      router.push(`/orden/${order.id}`);
    }, 1800);
  };

  return (
    <div className="mx-auto max-w-6xl px-6 py-12">
      <h1 className="text-center font-display text-3xl font-black italic">CHECKOUT</h1>

      <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_380px]">
        <form onSubmit={handleSubmit} className="space-y-6">
          <section>
            <h2 className="mb-4 font-display text-lg font-bold italic">DATOS DE ENVÍO</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {fields.map((f) => (
                <div key={f.name} className={f.half ? "" : "sm:col-span-2"}>
                  <label className="mb-1.5 block text-sm font-medium" htmlFor={f.name}>
                    {f.label}
                  </label>
                  <input
                    id={f.name}
                    name={f.name}
                    type={f.type ?? "text"}
                    required
                    placeholder={f.placeholder}
                    className="w-full border border-neutral-300 px-4 py-3 text-sm outline-none focus:border-brand"
                  />
                </div>
              ))}
              <div className="sm:col-span-2">
                <label className="mb-1.5 block text-sm font-medium" htmlFor="notas">
                  Notas del pedido (opcional)
                </label>
                <textarea
                  id="notas"
                  name="notas"
                  rows={3}
                  placeholder="Indicaciones de entrega, referencias, etc."
                  className="w-full border border-neutral-300 px-4 py-3 text-sm outline-none focus:border-brand"
                />
              </div>
            </div>
          </section>

          <section>
            <h2 className="mb-4 font-display text-lg font-bold italic">MÉTODO DE PAGO</h2>
            <div className="space-y-3">
              <label className="flex cursor-pointer items-center gap-3 border border-ink bg-cream px-4 py-3.5 text-sm">
                <input type="radio" name="pago" defaultChecked className="accent-brand" />
                Pago de prueba (simulado)
              </label>
              <label className="flex cursor-not-allowed items-center gap-3 border border-neutral-200 px-4 py-3.5 text-sm text-neutral-400">
                <input type="radio" name="pago" disabled />
                Tarjeta / PSE — próximamente con pasarela de pagos
              </label>
              <p className="text-xs text-neutral-500">
                Este es un checkout de demostración: no se realizará ningún cobro real.
              </p>
            </div>
          </section>

          <button
            type="submit"
            disabled={processing}
            className="w-full bg-ink py-4 text-sm font-medium text-white transition-colors hover:bg-brand disabled:cursor-wait disabled:bg-neutral-400"
          >
            {processing ? "Procesando pago…" : `Pagar ${formatCOP(total)}`}
          </button>
        </form>

        <aside className="h-fit space-y-4 bg-cream p-6">
          <h2 className="font-display text-lg font-bold italic">TU PEDIDO</h2>
          <ul className="divide-y divide-neutral-200">
            {items.map((item) => (
              <li key={item.key} className="flex items-center gap-3 py-3">
                <div className="relative">
                  <Image src={item.image} alt={item.name} width={56} height={56} className="size-14 rounded object-cover" />
                  <span className="absolute -top-2 -right-2 flex size-5 items-center justify-center rounded-full bg-ink text-[10px] font-bold text-white">
                    {item.qty}
                  </span>
                </div>
                <div className="flex-1 text-sm">
                  <p className="font-medium">{item.name}</p>
                  <p className="text-xs text-neutral-500">
                    {item.color} · {item.size}
                  </p>
                </div>
                <span className="text-sm font-semibold">{formatCOP(item.unitPrice * item.qty)}</span>
              </li>
            ))}
          </ul>
          <div className="space-y-2 border-t border-neutral-300 pt-4 text-sm">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>{formatCOP(subtotal)}</span>
            </div>
            <div className="flex justify-between">
              <span>Envío</span>
              <span>{shipping === 0 ? "Gratis" : formatCOP(shipping)}</span>
            </div>
            <div className="flex justify-between pt-2 text-base font-semibold">
              <span>Total</span>
              <span>{formatCOP(total)}</span>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
