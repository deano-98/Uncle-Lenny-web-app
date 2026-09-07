"use client";
import Link from "next/link";
import { Menu, X, MessageCircle } from "lucide-react";
import { useState } from "react";
const WA = "https://wa.me/263780927394";
export default function Navbar() {
    const [open, setOpen] = useState(false);
    const links = [["About", "/about"], ["Services", "/services"], ["Fleet", "/fleet"], ["For Schools", "/schools"], ["Contact", "/contact"]];
    return <header className="nav"><div className="container nav-inner">
        <Link href="/" className="brand"><span className="brand-mark">UL</span><span><b>UNCLE LENNY</b><small>SCHOOL RUN SERVICES</small></span></Link>
        <nav className={`nav-links ${open ? "open" : ""}`}>{links.map(([label, href]) => <Link key={label} href={href} onClick={() => setOpen(false)}>{label}</Link>)}<a className="nav-wa" href={WA} target="_blank" rel="noreferrer"><MessageCircle size={16} /> WhatsApp</a></nav>
        <button className="menu" onClick={() => setOpen(!open)} aria-label="Toggle menu">{open ? <X /> : <Menu />}</button>
    </div></header>
}
