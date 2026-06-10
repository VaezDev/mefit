import { site } from "@/lib/site";

const messages = ["Envíos a todo Colombia", site.slogan, "Checkout seguro"];

export default function AnnouncementBar() {
  // Se duplica el contenido para que el marquee sea continuo.
  const sequence = [...messages, ...messages, ...messages, ...messages];
  return (
    <div className="overflow-hidden bg-ink py-2 text-white">
      <div className="flex w-max animate-marquee items-center gap-10 whitespace-nowrap text-xs tracking-wide">
        {[0, 1].map((half) => (
          <div key={half} className="flex items-center gap-10" aria-hidden={half === 1}>
            {sequence.map((msg, i) => (
              <span key={i} className="flex items-center gap-10">
                {msg}
                <span className="text-brand">•</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
