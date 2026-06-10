export const site = {
  name: "MEFIT",
  slogan: "Actitud y Comodidad en cada Movimiento",
  // TODO: reemplazar por el número real de WhatsApp de la empresa
  whatsapp: "573000000000",
  whatsappDisplay: "+57 300 000 0000",
  email: "contacto@mefit.com.co",
  instagram: "mefit.col",
  city: "Colombia",
  freeShippingFrom: 150000,
  shippingCost: 12000,
};

export function whatsappLink(message?: string): string {
  const text = encodeURIComponent(
    message ?? "¡Hola MEFIT! Quiero más información sobre sus productos.",
  );
  return `https://wa.me/${site.whatsapp}?text=${text}`;
}
