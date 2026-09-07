import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp() {
  return (
    <a
      className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 px-4.5 py-3 bg-[#25d366] text-white font-bold text-sm rounded-full shadow-[0_10px_25px_rgba(37,211,102,0.35)] hover:scale-105 hover:shadow-[0_15px_30px_rgba(37,211,102,0.45)] transition-all"
      href="https://wa.me/263780927394"
      target="_blank"
      rel="noreferrer"
      aria-label="WhatsApp Uncle Lenny"
    >
      <MessageCircle size={22} />
      <span>WhatsApp Us</span>
    </a>
  );
}