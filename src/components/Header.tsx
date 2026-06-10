"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/components/Logo";
import { BagIcon, CloseIcon, HeartIcon, MenuIcon, SearchIcon } from "@/components/icons";
import { cartCount, useCart } from "@/store/cart";
import { useWishlist } from "@/store/wishlist";
import { useUI } from "@/store/ui";
import { useMounted } from "@/lib/useMounted";

const navLinks = [
  { href: "/", label: "INICIO" },
  { href: "/tienda", label: "TIENDA" },
  { href: "/contacto", label: "CONTACTO" },
];

export default function Header() {
  const pathname = usePathname();
  const mounted = useMounted();
  const items = useCart((s) => s.items);
  const wishlistIds = useWishlist((s) => s.ids);
  const { menuOpen, setMenuOpen, setCartOpen, setSearchOpen } = useUI();

  const count = mounted ? cartCount(items) : 0;
  const favCount = mounted ? wishlistIds.length : 0;

  return (
    <header className="sticky top-0 z-40 border-b border-neutral-200 bg-white/95 backdrop-blur">
      <div className="mx-auto grid h-16 max-w-7xl grid-cols-3 items-center px-4 sm:px-6">
        {/* Izquierda: nav desktop / hamburguesa móvil */}
        <div className="flex items-center gap-6">
          <button
            className="md:hidden"
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <MenuIconToggle /> : <MenuIcon />}
          </button>
          <nav className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium tracking-wide transition-colors hover:text-brand ${
                  pathname === link.href ? "text-brand" : "text-ink"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Centro: logo */}
        <div className="flex justify-center">
          <Logo />
        </div>

        {/* Derecha: acciones */}
        <div className="flex items-center justify-end gap-4 sm:gap-5">
          <button aria-label="Buscar" className="transition-colors hover:text-brand" onClick={() => setSearchOpen(true)}>
            <SearchIcon />
          </button>
          <Link aria-label="Favoritos" className="relative transition-colors hover:text-brand" href="/favoritos">
            <HeartIcon />
            {favCount > 0 && <Bubble n={favCount} />}
          </Link>
          <button aria-label="Carrito" className="relative transition-colors hover:text-brand" onClick={() => setCartOpen(true)}>
            <BagIcon />
            {count > 0 && <Bubble n={count} />}
          </button>
        </div>
      </div>

      {/* Menú móvil */}
      {menuOpen && (
        <nav className="border-t border-neutral-200 bg-white md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`block border-b border-neutral-100 px-6 py-4 text-sm font-medium tracking-wide ${
                pathname === link.href ? "text-brand" : "text-ink"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}

function MenuIconToggle() {
  return <CloseIcon />;
}

function Bubble({ n }: { n: number }) {
  return (
    <span className="absolute -top-2 -right-2 flex h-4.5 min-w-4.5 items-center justify-center rounded-full bg-brand px-1 text-[10px] font-bold text-white">
      {n}
    </span>
  );
}
