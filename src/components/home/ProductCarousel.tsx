"use client";

import { useRef } from "react";
import ProductCard from "@/components/ProductCard";
import { ArrowLeftIcon, ArrowRightIcon } from "@/components/icons";
import type { Product } from "@/lib/types";

export default function ProductCarousel({ products }: { products: Product[] }) {
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollBy({ left: dir * track.clientWidth * 0.8, behavior: "smooth" });
  };

  return (
    <div className="relative">
      <div
        ref={trackRef}
        className="no-scrollbar flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth"
      >
        {products.map((p) => (
          <div key={p.id} className="w-[48%] shrink-0 snap-start sm:w-[45%] lg:w-[23%]">
            <ProductCard product={p} />
          </div>
        ))}
      </div>

      <button
        aria-label="Anterior"
        onClick={() => scroll(-1)}
        className="absolute top-1/3 -left-3 hidden size-10 items-center justify-center rounded-full bg-white shadow-md transition-colors hover:text-brand md:flex"
      >
        <ArrowLeftIcon width={18} height={18} />
      </button>
      <button
        aria-label="Siguiente"
        onClick={() => scroll(1)}
        className="absolute top-1/3 -right-3 hidden size-10 items-center justify-center rounded-full bg-white shadow-md transition-colors hover:text-brand md:flex"
      >
        <ArrowRightIcon width={18} height={18} />
      </button>
    </div>
  );
}
