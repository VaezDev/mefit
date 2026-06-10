import Link from "next/link";
import Benefits from "@/components/home/Benefits";
import Categories from "@/components/home/Categories";
import Hero from "@/components/home/Hero";
import ProductCarousel from "@/components/home/ProductCarousel";
import ProductCard from "@/components/ProductCard";
import { featuredProducts, saleProducts } from "@/data/products";

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-8 text-center font-display text-2xl font-black italic sm:text-3xl">
      {children}
    </h2>
  );
}

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="mx-auto max-w-7xl px-6 py-16">
        <SectionTitle>NUEVA COLECCIÓN</SectionTitle>
        <ProductCarousel products={featuredProducts} />
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16">
        <SectionTitle>CATEGORÍAS</SectionTitle>
        <Categories />
      </section>

      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-6 py-14">
          <Benefits />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <SectionTitle>EN OFERTA</SectionTitle>
        <div className="grid grid-cols-2 gap-5 lg:grid-cols-3">
          {saleProducts.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/tienda?categoria=ofertas"
            className="inline-block border border-ink px-8 py-3 text-sm font-medium transition-colors hover:border-brand hover:text-brand"
          >
            Ver todas las ofertas
          </Link>
        </div>
      </section>
    </>
  );
}
