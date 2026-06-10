"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Order } from "@/lib/types";

interface OrdersState {
  orders: Order[];
  addOrder: (order: Order) => void;
}

export const useOrders = create<OrdersState>()(
  persist(
    (set) => ({
      orders: [],
      addOrder: (order) => set((state) => ({ orders: [order, ...state.orders] })),
    }),
    { name: "mefit-orders" },
  ),
);

export function newOrderId(): string {
  const n = Math.floor(1000 + Math.random() * 9000);
  return `MF-${n}`;
}
