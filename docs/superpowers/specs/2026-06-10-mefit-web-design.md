# Diseño — Sitio web e-commerce MEFIT

**Fecha:** 2026-06-10
**Estado:** Aprobado por el usuario

## Resumen

Sitio web e-commerce para MEFIT, marca colombiana de ropa deportiva. Inspirado en la
estructura y experiencia de sietelab.com, pero con la identidad visual propia de MEFIT.
Mercado: Colombia (precios en COP, sitio en español). Checkout simulado en esta fase;
la integración con pasarela de pagos real (Wompi/MercadoPago) llegará después.

## Stack y arquitectura

- **Next.js 15 (App Router) + TypeScript + Tailwind CSS.**
- **Catálogo en archivo de datos** `src/data/products.ts`: nombre, slug, precio COP,
  precio de oferta opcional, descripción, categoría, colores (cada uno con su imagen),
  tallas, badges (Oferta / Nuevo / Agotado / Más vendido).
- **Estado del cliente con Zustand persistido en localStorage**: carrito y wishlist
  sobreviven recargas; sin cuentas de usuario ni base de datos.
- **Imágenes** de `Desktop/assets-mefit` copiadas a `public/products/` con nombres
  descriptivos, servidas con `next/image`.
- Sin backend propio. Deploy previsto en Vercel.

## Identidad visual

- Colores del logo: **negro + naranja (#F4791F)** sobre blanco/gris muy claro.
- Barra de anuncios superior negra con marquee: "Envíos a todo Colombia • Actitud y
  Comodidad en cada Movimiento".
- Títulos en tipografía deportiva bold itálica (acorde al logo); textos en tipografía
  limpia (sans-serif).
- Botones principales negros; hovers, badges y acentos en naranja.

## Páginas y componentes

1. **Inicio** (`/`): barra de anuncios → header (nav INICIO/TIENDA/CONTACTO, logo
   centrado, iconos buscar/favoritos/carrito con contador) → hero a pantalla completa
   con eslogan y CTA → carrusel "Nueva Colección" → grid "Categorías" (Shorts Mujer,
   Pantalones Hombre, Ofertas) → franja de 4 beneficios con íconos → sección
   "En Oferta" → footer completo.
2. **Tienda** (`/tienda`): grid de productos, filtro por categoría, orden por precio.
3. **Producto** (`/productos/[slug]`): galería, selector de color (cambia foto),
   selector de talla y cantidad, "Agregar al carrito" / "Comprar ahora", corazón de
   wishlist, descripción.
4. **Carrito**: drawer lateral al agregar + página `/carrito`.
5. **Checkout falso** (`/checkout`): formulario de envío (nombre, cédula, dirección,
   ciudad, teléfono, email) → método de pago simulado → estado "procesando" →
   confirmación con número de orden (ej. MF-2031) en `/orden/[id]`. Órdenes guardadas
   en localStorage. Sin cobro real; flujo estructurado para enchufar la pasarela real.
6. **Favoritos** (`/favoritos`): productos guardados en wishlist.
7. **Contacto** (`/contacto`): formulario + datos + enlace WhatsApp.

Transversales: botón flotante de WhatsApp, buscador modal por nombre de producto,
tarjetas de producto con swatches de color que cambian la foto y badges.

## Catálogo inicial

Derivado de las 14 fotos de `assets-mefit` (8 shorts de mujer en colores individuales,
5 fotos de pantalones de hombre en tríos, 1 logo):

| Producto | Colores | Precio | Badge |
|---|---|---|---|
| Short Runner mujer | Negro, Gris claro, Gris oscuro | $69.900 | — |
| Short Essential mujer | Blanco, Crema | $69.900 | Nuevo |
| Short Vibrant mujer | Lila, Vinotinto, Azul marino | $79.900 → $64.900 | Oferta |
| Pantalón Training hombre | Negro, Gris oscuro, Gris claro | $119.900 | — |
| Pantalón Classic hombre | Azul, Beige | $119.900 → $99.900 | Oferta |
| Pack x3 Pantalones hombre | Combos de 3 colores | $299.900 | Más vendido |

Tallas: XS–XL (mujer), S–XXL (hombre). Precios y nombres editables en el archivo de datos.

## Responsive

Mobile-first. Menú hamburguesa en móvil, carruseles deslizables táctiles, grids de
2 columnas (móvil) a 4-5 (desktop), hero adaptado a pantallas verticales.

## Manejo de errores y casos borde

- Producto agotado: badge "Agotado", botón de compra deshabilitado.
- Carrito vacío: estado vacío con CTA a la tienda.
- Checkout: validación de campos requeridos con mensajes en español.
- Búsqueda sin resultados: mensaje claro con sugerencia.
- Ruta de producto inexistente: página 404 de marca.

## Verificación

- `npm run build` y lint sin errores.
- Revisión visual en viewports móvil (375px), tablet (768px) y desktop (1440px).
- Flujo completo manual: agregar al carrito → checkout → orden confirmada.
