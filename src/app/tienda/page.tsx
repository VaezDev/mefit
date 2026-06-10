import type { Metadata } from "next";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { categories, getByCategory, products } from "@/data/products";

export const metadata: Metadata = {
  title: "Tienda",
  description: "Compra ropa deportiva MEFIT: shorts de mujer, pantalones de hombre y ofertas. Envíos a todo Colombia.",
};

const sortOptions = [
  { value: "destacados", label: "Destacados" },
  { value: "precio-asc", label: "Precio: menor a mayor" },
  { value: "precio-desc", label: "Precio: mayor a menor" },
];

export default async function TiendaPage({
  searchParams,
}: {
  searchParams: Promise<{ categoria?: string; orden?: string }>;
}) {
  const { categoria, orden } = await searchParams;

  let list = categoria ? getByCategory(categoria) : [...products];
  const effectivePrice = (p: (typeof products)[number]) => p.salePrice ?? p.price;
  if (orden === "precio-asc") list.sort((a, b) => effectivePrice(a) - effectivePrice(b));
  if (orden === "precio-desc") list.sort((a, b) => effectivePrice(b) - effectivePrice(a));

  const currentCategory = categories.find((c) => c.slug === categoria);

  const filterLink = (cat?: string) => {
    const params = new URLSearchParams();
    if (cat) params.set("categoria", cat);
    if (orden) params.set("orden", orden);
    const qs = params.toString();
    return qs ? `/tienda?${qs}` : "/tienda";
  };

  const sortLink = (sort: string) => {
    const params = new URLSearchParams();
    if (categoria) params.set("categoria", categoria);
    if (sort !== "destacados") params.set("orden", sort);
    const qs = params.toString();
    return qs ? `/tienda?${qs}` : "/tienda";
  };

  return (
    <div className="mx-auto max-w-7xl px-6 py-12">
      <h1 className="text-center font-display text-3xl font-black italic">
        {currentCategory ? currentCategory.name.toUpperCase() : "TIENDA"}
      </h1>

      {/* Filtros por categoría */}
      <div className="mt-8 flex flex-wrap items-center justify-center gap-2.5">
        <Link
          href={filterLink()}
          className={`rounded-full border px-5 py-2 text-sm transition-colors ${
            !categoria ? "border-ink bg-ink text-white" : "border-neutral-300 hover:border-brand hover:text-brand"
          }`}
        >
          Todos
        </Link>
        {categories.map((cat) => (
          <Link
            key={cat.slug}
            href={filterLink(cat.slug)}
            className={`rounded-full border px-5 py-2 text-sm transition-colors ${
              categoria === cat.slug
                ? "border-ink bg-ink text-white"
                : "border-neutral-300 hover:border-brand hover:text-brand"
            }`}
          >
            {cat.name}
          </Link>
        ))}
      </div>

      {/* Orden por precio */}
      <div className="mt-6 flex items-center justify-center gap-2 text-sm sm:justify-end">
        <span className="text-neutral-500">Ordenar:</span>
        {sortOptions.map((opt) => (
          <Link
            key={opt.value}
            href={sortLink(opt.value)}
            className={`px-2 py-1 transition-colors ${
              (orden ?? "destacados") === opt.value ? "font-semibold text-brand" : "hover:text-brand"
            }`}
          >
            {opt.label}
          </Link>
        ))}
      </div>

      {list.length === 0 ? (
        <p className="py-20 text-center text-neutral-500">No hay productos en esta categoría todavía.</p>
      ) : (
        <div className="mt-8 grid grid-cols-2 gap-x-5 gap-y-10 lg:grid-cols-4">
          {list.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      )}
    </div>
  );
}
