import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

export default function Hero() {
  return (
    <section className="bg-cream">
      {/* Móvil: imagen a pantalla completa con texto superpuesto, como la referencia */}
      <div className="relative md:hidden">
        <Image
          src="/products/short-lila.jpeg"
          alt="Short deportivo MEFIT para mujer"
          width={750}
          height={1000}
          priority
          className="h-[78vh] min-h-[480px] w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 space-y-4 px-6 pb-10 text-white">
          <p className="text-xs font-semibold tracking-[0.25em] text-brand">
            NUEVA COLECCIÓN 2026
          </p>
          <h1 className="font-display text-4xl leading-tight font-black italic">
            DISEÑADO PARA
            <br />
            <span className="text-brand">MOVERTE</span>
          </h1>
          <p className="max-w-xs text-sm text-neutral-200">
            <strong>MEFIT</strong> redefine lo esencial con prendas deportivas funcionales,
            cómodas y atemporales.
          </p>
          <div className="flex flex-wrap gap-3 pt-1">
            <Link
              href="/tienda"
              className="bg-white px-7 py-3 text-sm font-medium text-ink transition-colors hover:bg-brand hover:text-white"
            >
              Comprar ahora
            </Link>
            <Link
              href="/tienda?categoria=ofertas"
              className="border border-white px-7 py-3 text-sm font-medium text-white transition-colors hover:border-brand hover:text-brand"
            >
              Ver ofertas
            </Link>
          </div>
        </div>
      </div>

      {/* Desktop: texto + collage de imágenes */}
      <div className="mx-auto hidden max-w-7xl items-center gap-10 px-6 py-14 md:grid md:grid-cols-2 md:py-20">
        <div className="space-y-6">
          <p className="text-sm font-semibold tracking-[0.25em] text-brand">NUEVA COLECCIÓN 2026</p>
          <h1 className="font-display text-5xl leading-tight font-black italic lg:text-6xl">
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

        <div className="grid grid-cols-2 gap-4">
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
