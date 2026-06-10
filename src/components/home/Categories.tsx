import Image from "next/image";
import Link from "next/link";
import { categories } from "@/data/products";

export default function Categories() {
  return (
    <div className="grid gap-5 sm:grid-cols-3">
      {categories.map((cat) => (
        <Link
          key={cat.slug}
          href={`/tienda?categoria=${cat.slug}`}
          className="group relative block overflow-hidden"
        >
          <Image
            src={cat.image}
            alt={cat.name}
            width={600}
            height={700}
            className="aspect-[6/7] w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-x-0 bottom-0 bg-ink/80 py-3.5 text-center text-sm font-semibold tracking-widest text-white transition-colors group-hover:bg-brand">
            {cat.name.toUpperCase()}
          </div>
        </Link>
      ))}
    </div>
  );
}
