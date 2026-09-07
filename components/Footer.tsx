import Link from "next/link";
import { Facebook, MessageCircle, Phone } from "lucide-react";

const WA = "https://wa.me/263780927394";

export default function Footer() {
  return (
    <footer className="bg-navy text-white pt-17.5 pb-8.75 border-t border-white/10">
      <div className="container-custom grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1fr] gap-10 pb-12.5 border-b border-white/10">
        {/* Brand Info */}
        <div>
          <Link href="/" className="flex items-center gap-2.5 text-white no-underline mb-4">
            <span className="w-9 h-9 bg-red text-white font-black text-[15px] rounded-[8px] grid place-items-center tracking-tight">
              UL
            </span>
            <span className="flex flex-col">
              <b className="font-manrope font-extrabold text-base tracking-tight leading-tight">
                UNCLE LENNY
              </b>
              <small className="text-[9px] tracking-[0.15em] font-extrabold text-[#94a3b8] uppercase">
                SCHOOL RUN SERVICES
              </small>
            </span>
          </Link>
          <p className="text-sm text-[#94a3b8] max-w-[280px]">
            Safe rides. Happy kids. Peace of mind.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-col gap-3">
          <h4 className="font-manrope font-bold text-sm text-white tracking-wider uppercase mb-1">
            Explore
          </h4>
          <Link href="/about" className="text-sm text-[#94a3b8] hover:text-white transition-colors">
            About
          </Link>
          <Link href="/services" className="text-sm text-[#94a3b8] hover:text-white transition-colors">
            Services
          </Link>
          <Link href="/fleet" className="text-sm text-[#94a3b8] hover:text-white transition-colors">
            Fleet
          </Link>
          <Link href="/schools" className="text-sm text-[#94a3b8] hover:text-white transition-colors">
            For Schools
          </Link>
        </div>

        {/* Contact Links */}
        <div className="flex flex-col gap-3">
          <h4 className="font-manrope font-bold text-sm text-white tracking-wider uppercase mb-1">
            Contact
          </h4>
          <a
            href={WA}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-[8px] text-[14px] text-[#94a3b8] hover:text-white transition-colors"
          >
            <MessageCircle size={15} className="text-red" /> WhatsApp
          </a>
          <a
            href="tel:+263780927394"
            className="inline-flex items-center gap-[8px] text-[14px] text-[#94a3b8] hover:text-white transition-colors"
          >
            <Phone size={15} className="text-red" /> +263 78 092 7394
          </a>
          <a
            href="#"
            aria-label="Facebook"
            className="inline-flex items-center gap-[8px] text-[14px] text-[#94a3b8] hover:text-white transition-colors"
          >
            <Facebook size={15} className="text-red" /> Facebook
          </a>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="container-custom flex flex-col sm:flex-row justify-between items-center gap-3 pt-7 text-[13px] text-[#64748b]">
        <span>© {new Date().getFullYear()} Uncle Lenny School Run Services.</span>
        <span>Harare, Zimbabwe</span>
      </div>
    </footer>
  );
}