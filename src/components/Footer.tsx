import Link from "next/link";
import Logo from "@/components/Logo";
import { site, whatsappLink } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-4">
          <Logo light />
          <p className="text-sm text-neutral-400">{site.slogan}.</p>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold tracking-widest text-brand">TIENDA</h3>
          <ul className="space-y-2.5 text-sm text-neutral-300">
            <li><Link className="hover:text-brand" href="/tienda">Todos los productos</Link></li>
            <li><Link className="hover:text-brand" href="/tienda?categoria=shorts-mujer">Shorts Mujer</Link></li>
            <li><Link className="hover:text-brand" href="/tienda?categoria=pantalones-hombre">Pantalones Hombre</Link></li>
            <li><Link className="hover:text-brand" href="/tienda?categoria=ofertas">Ofertas</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold tracking-widest text-brand">AYUDA</h3>
          <ul className="space-y-2.5 text-sm text-neutral-300">
            <li><Link className="hover:text-brand" href="/contacto">Contacto</Link></li>
            <li><Link className="hover:text-brand" href="/favoritos">Mis favoritos</Link></li>
            <li><Link className="hover:text-brand" href="/carrito">Mi carrito</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold tracking-widest text-brand">CONTACTO</h3>
          <ul className="space-y-2.5 text-sm text-neutral-300">
            <li>
              <a className="hover:text-brand" href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                WhatsApp: {site.whatsappDisplay}
              </a>
            </li>
            <li>
              <a className="hover:text-brand" href={`mailto:${site.email}`}>{site.email}</a>
            </li>
            <li>
              <a
                className="hover:text-brand"
                href={`https://instagram.com/${site.instagram}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram: @{site.instagram}
              </a>
            </li>
            <li>Envíos a todo Colombia</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-5 text-center text-xs text-neutral-500">
        © {new Date().getFullYear()} MEFIT. Todos los derechos reservados.
      </div>
    </footer>
  );
}
