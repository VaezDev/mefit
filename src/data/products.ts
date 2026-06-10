import type { Product } from "@/lib/types";

export const products: Product[] = [
  {
    id: "short-runner",
    slug: "short-runner-mujer",
    name: "Short Runner",
    category: "shorts-mujer",
    price: 69900,
    description: [
      "Short deportivo de mujer con corte runner y aberturas laterales que dan libertad total de movimiento. Su pretina ancha elasticada se ajusta a la cintura sin apretar, creando una silueta cómoda y femenina.",
      "Confeccionado en tela ligera de secado rápido, es ideal para correr, entrenar en el gimnasio o llevar un look deportivo en el día a día.",
    ],
    colors: [
      { name: "Negro", slug: "negro", image: "/products/short-negro.jpeg" },
      { name: "Gris claro", slug: "gris-claro", image: "/products/short-gris-claro.jpeg" },
      { name: "Gris oscuro", slug: "gris-oscuro", image: "/products/short-gris-oscuro.jpeg" },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    featured: true,
  },
  {
    id: "short-essential",
    slug: "short-essential-mujer",
    name: "Short Essential",
    category: "shorts-mujer",
    price: 69900,
    description: [
      "La versión más limpia y versátil de nuestro short runner. Tonos neutros que combinan con todo, pretina ancha que estiliza la figura y tela suave que se siente como una segunda piel.",
      "Un básico de la colección MEFIT pensado para entrenar con actitud y comodidad en cada movimiento.",
    ],
    colors: [
      { name: "Blanco", slug: "blanco", image: "/products/short-blanco.jpeg" },
      { name: "Crema", slug: "crema", image: "/products/short-crema.jpeg" },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    badge: "nuevo",
    featured: true,
  },
  {
    id: "short-vibrant",
    slug: "short-vibrant-mujer",
    name: "Short Vibrant",
    category: "shorts-mujer",
    price: 79900,
    salePrice: 64900,
    description: [
      "Colores con personalidad para quienes entrenan sin pasar desapercibidas. El Short Vibrant tiene el mismo corte runner con aberturas laterales y pretina ancha, en tonos lila, vinotinto y azul marino.",
      "Incluye licra interna en tono contraste para mayor cobertura y confianza durante el ejercicio.",
    ],
    colors: [
      { name: "Lila", slug: "lila", image: "/products/short-lila.jpeg" },
      { name: "Vinotinto", slug: "vinotinto", image: "/products/short-vinotinto.jpeg" },
      { name: "Azul marino", slug: "azul-marino", image: "/products/short-azul-marino.jpeg" },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    badge: "oferta",
    featured: true,
  },
  {
    id: "top-essential",
    slug: "top-essential-mujer",
    name: "Top Essential",
    category: "tops",
    price: 59900,
    description: [
      "Top deportivo de tiras ajustables con soporte cómodo y tela suave de alta elasticidad. Su corte limpio se adapta al cuerpo y acompaña cada movimiento sin marcar.",
      "Un básico imprescindible de la colección MEFIT: perfecto para entrenar, hacer yoga o combinar con tus shorts y leggings favoritos.",
    ],
    colors: [
      { name: "Negro", slug: "negro", image: "/products/top-negro.jpeg" },
      { name: "Blanco", slug: "blanco", image: "/products/top-blanco.jpeg" },
      { name: "Lila", slug: "lila", image: "/products/top-lila.jpeg" },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    featured: true,
  },
  {
    id: "top-active",
    slug: "top-active-mujer",
    name: "Top Active",
    category: "tops",
    price: 64900,
    description: [
      "Tonos con personalidad para entrenar con actitud. El Top Active suma soporte y libertad de movimiento en un diseño femenino de tiras finas ajustables.",
      "Tela ligera y transpirable que se siente fresca durante todo el entrenamiento.",
    ],
    colors: [
      { name: "Vinotinto", slug: "vinotinto", image: "/products/top-vinotinto.jpeg" },
      { name: "Azul", slug: "azul", image: "/products/top-azul.jpeg" },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    badge: "nuevo",
    featured: true,
  },
  {
    id: "pantalon-training",
    slug: "pantalon-training-hombre",
    name: "Pantalón Training",
    category: "pantalones-hombre",
    price: 119900,
    description: [
      "Pantalón deportivo de hombre con cintura elasticada de cordón interno y bolsillos laterales con cierre. Corte recto y cómodo que acompaña cada movimiento sin restricciones.",
      "Tela liviana, fresca y de secado rápido: perfecto para entrenar, para el trabajo en casa o para un look casual deportivo.",
    ],
    colors: [
      { name: "Negro", slug: "negro", image: "/products/pantalon-trio-negro.jpeg" },
      { name: "Gris", slug: "gris", image: "/products/pantalon-trio-gris.jpeg" },
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    featured: true,
  },
  {
    id: "pantalon-classic",
    slug: "pantalon-classic-hombre",
    name: "Pantalón Classic",
    category: "pantalones-hombre",
    price: 119900,
    salePrice: 99900,
    description: [
      "El mismo corte cómodo del Training en tonos con carácter: azul y beige. Cintura elasticada, bolsillos funcionales y caída limpia que estiliza.",
      "Un pantalón que pasa del gimnasio a la calle sin esfuerzo.",
    ],
    colors: [
      { name: "Azul", slug: "azul", image: "/products/pantalon-trio-azul.jpeg" },
      { name: "Beige", slug: "beige", image: "/products/pantalon-trio-beige.jpeg" },
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    badge: "oferta",
  },
  {
    id: "pack-x3-pantalones",
    slug: "pack-x3-pantalones-hombre",
    name: "Pack x3 Pantalones",
    category: "pantalones-hombre",
    price: 329900,
    salePrice: 299900,
    description: [
      "Tres pantalones deportivos MEFIT por un precio especial. Elige el combo de colores que más te guste y ten siempre uno listo para entrenar.",
      "Misma calidad de siempre: cintura elasticada, bolsillos con cierre y tela de secado rápido.",
    ],
    colors: [
      { name: "Gris claro / Negro / Beige", slug: "combo-beige", image: "/products/pantalon-trio-beige.jpeg" },
      { name: "Gris / Negro / Azul", slug: "combo-azul", image: "/products/pantalon-trio-azul-derecha.jpeg" },
      { name: "Azul / Negro / Gris", slug: "combo-gris", image: "/products/pantalon-trio-azul.jpeg" },
      { name: "Triple Negro", slug: "combo-negro", image: "/products/pantalon-trio-negro.jpeg" },
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    badge: "mas-vendido",
    featured: true,
  },
];

export const categories = [
  {
    slug: "shorts-mujer",
    name: "Shorts Mujer",
    image: "/products/short-lila.jpeg",
  },
  {
    slug: "pantalones-hombre",
    name: "Pantalones Hombre",
    image: "/products/pantalon-trio-azul.jpeg",
  },
  {
    slug: "tops",
    name: "Tops",
    image: "/products/top-lila.jpeg",
  },
  {
    slug: "ofertas",
    name: "Ofertas",
    image: "/products/short-vinotinto.jpeg",
  },
] as const;

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getByCategory(category: string): Product[] {
  if (category === "ofertas") return products.filter((p) => p.salePrice);
  return products.filter((p) => p.category === category);
}

export const featuredProducts = products.filter((p) => p.featured);
export const saleProducts = products.filter((p) => p.salePrice);
