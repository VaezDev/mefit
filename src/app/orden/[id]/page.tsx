"use client";

import Image from "next/image";
import Link from "next/link";
import { use } from "react";
import { CheckIcon } from "@/components/icons";
import { formatCOP } from "@/lib/format";
import { useMounted } from "@/lib/useMounted";
import { useOrders } from "@/store/orders";

export default function OrdenPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const mounted = useMounted();
  const orders = useOrders((s) => s.orders);
  const order = orders.find((o) => o.id === id);

  if (!mounted) return <div className="min-h-[50vh]" />;

  if (!order) {
    return (
      <div className="space-y-6 px-6 py-24 text-center">
        <h1 className="font-display text-3xl font-black italic">ORDEN NO ENCONTRADA</h1>
        <p className="text-neutral-500">No encontramos la orden {id} en este navegador.</p>
        <Link
          href="/tienda"
          className="inline-block bg-ink px-8 py-3.5 text-sm font-medium text-white transition-colors hover:bg-brand"
        >
          Volver a la tienda
        </Link>
      </div>
    );
  }

  const date = new Date(order.date).toLocaleDateString("es-CO", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="mx-auto max-w-3xl px-6 py-14">
      <div className="space-y-4 text-center">
        <span className="mx-auto flex size-16 items-center justify-center rounded-full bg-brand text-white">
          <CheckIcon width={30} height={30} />
        </span>
        <h1 className="font-display text-3xl font-black italic">¡GRACIAS POR TU COMPRA!</h1>
        <p className="text-neutral-600">
          Tu orden <span className="font-semibold text-brand">{order.id}</span> fue confirmada el {date}.
        </p>
        <p className="text-sm text-neutral-500">
          (Compra de demostración: no se realizó ningún cobro real.)
        </p>
      </div>

      <div className="mt-10 space-y-5 bg-cream p-6">
        <h2 className="font-display text-lg font-bold italic">RESUMEN DEL PEDIDO</h2>
        <ul className="divide-y divide-neutral-200">
          {order.items.map((item) => (
            <li key={item.key} className="flex items-center gap-4 py-3">
              <Image src={item.image} alt={item.name} width={56} height={56} className="size-14 rounded object-cover" />
              <div className="flex-1 text-sm">
                <p className="font-medium">{item.name}</p>
                <p className="text-xs text-neutral-500">
                  {item.color} · Talla {item.size} · x{item.qty}
                </p>
              </div>
              <span className="text-sm font-semibold">{formatCOP(item.unitPrice * item.qty)}</span>
            </li>
          ))}
        </ul>
        <div className="space-y-2 border-t border-neutral-300 pt-4 text-sm">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>{formatCOP(order.subtotal)}</span>
          </div>
          <div className="flex justify-between">
            <span>Envío</span>
            <span>{order.shipping === 0 ? "Gratis" : formatCOP(order.shipping)}</span>
          </div>
          <div className="flex justify-between pt-2 text-base font-semibold">
            <span>Total</span>
            <span>{formatCOP(order.total)}</span>
          </div>
        </div>
        <div className="border-t border-neutral-300 pt-4 text-sm">
          <h3 className="mb-2 font-semibold">Datos de envío</h3>
          <p>{order.customer.nombre}</p>
          <p>{order.customer.direccion}</p>
          <p>
            {order.customer.ciudad}, {order.customer.departamento}
          </p>
          <p>{order.customer.telefono}</p>
        </div>
      </div>

      <div className="mt-10 text-center">
        <Link
          href="/tienda"
          className="inline-block bg-ink px-8 py-3.5 text-sm font-medium text-white transition-colors hover:bg-brand"
        >
          Seguir comprando
        </Link>
      </div>
    </div>
  );
}
