export type CategorySlug = "shorts-mujer" | "pantalones-hombre" | "ofertas";

export type Badge = "oferta" | "nuevo" | "agotado" | "mas-vendido";

export interface ProductColor {
  name: string;
  slug: string;
  image: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: Exclude<CategorySlug, "ofertas">;
  price: number;
  salePrice?: number;
  description: string[];
  colors: ProductColor[];
  sizes: string[];
  badge?: Badge;
  featured?: boolean;
  soldOut?: boolean;
}

export interface CartItem {
  key: string;
  productId: string;
  slug: string;
  name: string;
  image: string;
  color: string;
  size: string;
  unitPrice: number;
  qty: number;
}

export interface OrderCustomer {
  nombre: string;
  cedula: string;
  email: string;
  telefono: string;
  direccion: string;
  ciudad: string;
  departamento: string;
  notas?: string;
}

export interface Order {
  id: string;
  date: string;
  items: CartItem[];
  customer: OrderCustomer;
  subtotal: number;
  shipping: number;
  total: number;
}
