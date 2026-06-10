import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

export default function Hero() {
  return (
    <section className="bg-cream">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-14 md:grid-cols-2 md:py-20">
        <div className="order-2 space-y-6 md:order-1">
          <p className="text-sm font-semibold tracking-[0.25em] text-brand">NUEVA COLECCIÓN 2026</p>
          <h1 className="font-display text-4xl leading-tight font-black italic sm:text-5xl lg:text-6xl">
            DISEÑADO PARA
            <br />
            <span className="text-brand">MOVERTE</span>
          </h1>
          <p className="max-w-md text-neutral-600">
            <strong>MEFIT</strong> redefine lo esencial con prendas deportivas funcionales,
            cómodas y atemporales. {site.slogan}.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/tienda"
              className="bg-ink px-8 py-3.5 text-sm font-medium text-white transition-colors hover:bg-brand"
            >
              Comprar ahora
            </Link>
            <Link
              href="/tienda?categoria=ofertas"
              className="border border-ink px-8 py-3.5 text-sm font-medium transition-colors hover:border-brand hover:text-brand"
            >
              Ver ofertas
            </Link>
          </div>
        </div>

        <div className="order-1 grid grid-cols-2 gap-4 md:order-2">
          <Image
            src="/products/short-lila.jpeg"
            alt="Short deportivo MEFIT para mujer"
            width={520}
            height={520}
            priority
            className="aspect-square w-full rounded-2xl object-cover"
          />
          <Image
            src="/products/pantalon-trio-azul.jpeg"
            alt="Pantalón deportivo MEFIT para hombre"
            width={520}
            height={520}
            priority
            className="mt-8 aspect-square w-full rounded-2xl object-cover"
          />
        </div>
      </div>
    </section>
  );
}
