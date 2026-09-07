"use client";

import Link from "next/link";
import { Menu, X, MessageCircle } from "lucide-react";
import { useState } from "react";

const WA = "https://wa.me/263780927394";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [
    ["About", "/about"],
    ["Services", "/services"],
    ["Fleet", "/fleet"],
    ["For Schools", "/schools"],
    ["Contact", "/contact"],
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/92 backdrop-blur-[16px] border-b border-navy/8">
      <div className="container-custom h-[78px] flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.75">
          <span className="w-10.5 h-10.5 rounded-[12px] bg-navy text-white grid place-items-center font-manrope font-extrabold">
            UL
          </span>
          <span className="block">
            <b className="block font-manrope text-sm tracking-[0.06em]">UNCLE LENNY</b>
            <small className="block text-[8px] text-red font-extrabold tracking-[0.15em] mt-0.5">
              SCHOOL RUN SERVICES
            </small>
          </span>
        </Link>

        {/* Links Navigation */}
        <nav
          className={`lg:flex items-center gap-6.5 text-sm font-semibold ${
            open
              ? "flex flex-col absolute top-[78px] left-[20px] right-[20px] bg-white border border-line rounded-[16px] p-4 shadow-xl text-left"
              : "hidden lg:flex"
          }`}
        >
          {links.map(([label, href]) => (
            <Link
              key={label}
              href={href}
              onClick={() => setOpen(false)}
              className="hover:text-red transition-colors py-2 lg:py-0"
            >
              {label}
            </Link>
          ))}
          <a
            className="bg-red text-white! px-4 py-2.75 rounded-full flex gap-1.75 items-center justify-center font-semibold"
            href={WA}
            target="_blank"
            rel="noreferrer"
          >
            <MessageCircle size={16} /> WhatsApp
          </a>
        </nav>

        {/* Mobile Toggle Button */}
        <button
          className="block lg:hidden border-0 bg-transparent p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
}