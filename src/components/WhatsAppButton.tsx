import { WhatsAppIcon } from "@/components/icons";
import { whatsappLink } from "@/lib/site";

export default function WhatsAppButton() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
      className="fixed right-5 bottom-5 z-40 flex size-14 items-center justify-center rounded-full bg-[#1f2c24] text-white shadow-lg transition-transform hover:scale-110"
    >
      <WhatsAppIcon />
    </a>
  );
}
