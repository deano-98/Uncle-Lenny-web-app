"use client";

import Link from "next/link";
import { Menu, X, MessageCircle } from "lucide-react";
import { useState } from "react";
import { WhatsAppButton } from "@/components/conversions/WhatsAppButton";

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
    <header className="border-navy/8 sticky top-0 z-50 border-b bg-white/92 backdrop-blur-lg">
      <div className="container-custom flex h-19.5 items-center justify-between">
        <Link href="/" className="flex items-center gap-2.75">
          <span className="bg-navy font-manrope grid h-10.5 w-10.5 place-items-center rounded-xl font-extrabold text-white">
            UL
          </span>
          <span className="block">
            <b className="font-manrope block text-sm tracking-[0.06em]">
              UNCLE LENNY
            </b>
            <small className="text-red mt-0.5 block text-[8px] font-extrabold tracking-[0.15em]">
              SCHOOL RUN SERVICES
            </small>
          </span>
        </Link>

        {/* Links Navigation */}
        <nav
          className={`items-center gap-6.5 text-sm font-semibold lg:flex ${
            open
              ? "border-line absolute top-19.5 right-5 left-5 flex flex-col rounded-2xl border bg-white p-4 text-left shadow-xl"
              : "hidden lg:flex"
          }`}
        >
          {links.map(([label, href]) => (
            <Link
              key={label}
              href={href}
              onClick={() => setOpen(false)}
              className="hover:text-red py-2 transition-colors lg:py-0"
            >
              {label}
            </Link>
          ))}
          <WhatsAppButton
            phone="263780927394"
            location="navbar"
            service="school_transport"
            className="bg-red flex items-center justify-center gap-1.75 rounded-full px-4 py-2.75 font-semibold text-white!"
          >
            <MessageCircle size={16} /> WhatsApp
          </WhatsAppButton>
        </nav>

        {/* Mobile Toggle Button */}
        <button
          className="block border-0 bg-transparent p-2 lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
}