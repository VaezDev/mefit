"use client";

import { useState } from "react";
import { WhatsAppIcon } from "@/components/icons";
import { site, whatsappLink } from "@/lib/site";

export default function ContactoPage() {
  const [sent, setSent] = useState(false);

  return (
    <div className="mx-auto grid max-w-5xl gap-12 px-6 py-12 md:grid-cols-2">
      <div className="space-y-6">
        <h1 className="font-display text-3xl font-black italic">CONTACTO</h1>
        <p className="text-neutral-600">
          ¿Tienes preguntas sobre tallas, envíos o tu pedido? Escríbenos y te respondemos lo
          antes posible.
        </p>
        <ul className="space-y-3 text-sm">
          <li>
            <span className="font-semibold">WhatsApp:</span>{" "}
            <a className="text-brand hover:underline" href={whatsappLink()} target="_blank" rel="noopener noreferrer">
              {site.whatsappDisplay}
            </a>
          </li>
          <li>
            <span className="font-semibold">Correo:</span>{" "}
            <a className="text-brand hover:underline" href={`mailto:${site.email}`}>
              {site.email}
            </a>
          </li>
          <li>
            <span className="font-semibold">Instagram:</span>{" "}
            <a
              className="text-brand hover:underline"
              href={`https://instagram.com/${site.instagram}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              @{site.instagram}
            </a>
          </li>
          <li>
            <span className="font-semibold">Cobertura:</span> Envíos a todo Colombia
          </li>
        </ul>
        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#1f2c24] px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
        >
          <WhatsAppIcon width={20} height={20} />
          Chatear por WhatsApp
        </a>
      </div>

      {sent ? (
        <div className="flex flex-col items-center justify-center gap-4 bg-cream p-10 text-center">
          <p className="font-display text-xl font-bold italic">¡MENSAJE ENVIADO!</p>
          <p className="text-sm text-neutral-600">
            Gracias por escribirnos. Te responderemos muy pronto.
          </p>
        </div>
      ) : (
        <form
          className="space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
        >
          <Field label="Nombre" name="nombre" required placeholder="Tu nombre" />
          <Field label="Correo" name="email" type="email" required placeholder="tucorreo@ejemplo.com" />
          <div>
            <label className="mb-1.5 block text-sm font-medium" htmlFor="mensaje">
              Mensaje
            </label>
            <textarea
              id="mensaje"
              name="mensaje"
              required
              rows={5}
              placeholder="Cuéntanos en qué te podemos ayudar…"
              className="w-full border border-neutral-300 px-4 py-3 text-sm outline-none focus:border-brand"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-ink py-3.5 text-sm font-medium text-white transition-colors hover:bg-brand"
          >
            Enviar mensaje
          </button>
        </form>
      )}
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium" htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full border border-neutral-300 px-4 py-3 text-sm outline-none focus:border-brand"
      />
    </div>
  );
}
