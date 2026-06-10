"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Price from "@/components/Price";
import { CloseIcon, SearchIcon } from "@/components/icons";
import { products } from "@/data/products";
import { useUI } from "@/store/ui";

export default function SearchModal() {
  const { searchOpen, setSearchOpen } = useUI();
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (searchOpen) {
      setQuery("");
      inputRef.current?.focus();
    }
  }, [searchOpen]);

  if (!searchOpen) return null;

  const q = query.trim().toLowerCase();
  const results = q
    ? products.filter((p) => p.name.toLowerCase().includes(q))
    : [];

  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/40" onClick={() => setSearchOpen(false)} />
      <div className="absolute inset-x-0 top-0 bg-white p-4 shadow-lg sm:p-6">
        <div className="mx-auto max-w-2xl">
          <div className="flex items-center gap-3 border-b border-ink pb-3">
            <SearchIcon className="shrink-0 text-neutral-400" />
            <input
              ref={inputRef}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => e.key === "Escape" && setSearchOpen(false)}
              placeholder="Busca un producto…"
              className="w-full text-lg outline-none placeholder:text-neutral-400"
            />
            <button aria-label="Cerrar búsqueda" onClick={() => setSearchOpen(false)}>
              <CloseIcon />
            </button>
          </div>

          {q && results.length === 0 && (
            <p className="py-8 text-center text-sm text-neutral-500">
              No encontramos productos para “{query}”. Intenta con “short” o “pantalón”.
            </p>
          )}

          {results.length > 0 && (
            <ul className="divide-y divide-neutral-100 py-2">
              {results.map((p) => (
                <li key={p.id}>
                  <Link
                    href={`/productos/${p.slug}`}
                    onClick={() => setSearchOpen(false)}
                    className="flex items-center gap-4 py-3 hover:bg-cream"
                  >
                    <Image
                      src={p.colors[0].image}
                      alt={p.name}
                      width={56}
                      height={56}
                      className="size-14 rounded object-cover"
                    />
                    <div>
                      <p className="text-sm font-medium">{p.name}</p>
                      <Price price={p.price} salePrice={p.salePrice} className="text-sm" />
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
