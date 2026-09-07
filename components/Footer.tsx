import Link from "next/link";
import { Facebook, MessageCircle, Phone } from "lucide-react";

const WA = "https://wa.me/263780927394";

export default function Footer() {
  return (
    <footer className="bg-navy border-t border-white/10 pt-17.5 pb-8.75 text-white">
      <div className="container-custom grid grid-cols-1 gap-10 border-b border-white/10 pb-12.5 md:grid-cols-[1.5fr_1fr_1fr]">
        {/* Brand Info */}
        <div>
          <Link
            href="/"
            className="mb-4 flex items-center gap-2.5 text-white no-underline"
          >
            <span className="bg-red grid h-9 w-9 place-items-center rounded-lg text-[15px] font-black tracking-tight text-white">
              UL
            </span>
            <span className="flex flex-col">
              <b className="font-manrope text-base leading-tight font-extrabold tracking-tight">
                UNCLE LENNY
              </b>
              <small className="text-[9px] font-extrabold tracking-[0.15em] text-[#94a3b8] uppercase">
                SCHOOL RUN SERVICES
              </small>
            </span>
          </Link>
          <p className="max-w-70 text-sm text-[#94a3b8]">
            Safe rides. Happy kids. Peace of mind.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-col gap-3">
          <h4 className="font-manrope mb-1 text-sm font-bold tracking-wider text-white uppercase">
            Explore
          </h4>
          <Link
            href="/about"
            className="text-sm text-[#94a3b8] transition-colors hover:text-white"
          >
            About
          </Link>
          <Link
            href="/services"
            className="text-sm text-[#94a3b8] transition-colors hover:text-white"
          >
            Services
          </Link>
          <Link
            href="/fleet"
            className="text-sm text-[#94a3b8] transition-colors hover:text-white"
          >
            Fleet
          </Link>
          <Link
            href="/schools"
            className="text-sm text-[#94a3b8] transition-colors hover:text-white"
          >
            For Schools
          </Link>
        </div>

        {/* Contact Links */}
        <div className="flex flex-col gap-3">
          <h4 className="font-manrope mb-1 text-sm font-bold tracking-wider text-white uppercase">
            Contact
          </h4>
          <a
            href={WA}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-[14px] text-[#94a3b8] transition-colors hover:text-white"
          >
            <MessageCircle size={15} className="text-red" /> WhatsApp
          </a>
          <a
            href="tel:+263780927394"
            className="inline-flex items-center gap-2 text-[14px] text-[#94a3b8] transition-colors hover:text-white"
          >
            <Phone size={15} className="text-red" /> +263 78 092 7394
          </a>
          <a
            href="#"
            aria-label="Facebook"
            className="inline-flex items-center gap-2 text-[14px] text-[#94a3b8] transition-colors hover:text-white"
          >
            <Facebook size={15} className="text-red" /> Facebook
          </a>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="container-custom flex flex-col items-center justify-between gap-3 pt-7 text-[13px] text-[#64748b] sm:flex-row">
        <span>
          © {new Date().getFullYear()} Uncle Lenny School Run Services.
        </span>
        <span>Harare, Zimbabwe</span>
      </div>
    </footer>
  );
}