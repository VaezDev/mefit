"use client";

import { useEffect, useState } from "react";

// Evita desajustes de hidratación al leer stores persistidos en localStorage.
export function useMounted(): boolean {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return mounted;
}
