"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const links = [
  { label: "Residents", href: "/residents" },
  { label: "Vendors", href: "/vendors" },
  { label: "Managers", href: "/managers" },
  { label: "Enterprise", href: "/enterprise" },
  { label: "Pricing", href: "/pricing" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur-2xl border-b border-gray-100" : "bg-white"}`}>
      <div className="mx-auto max-w-[1200px] px-6 flex items-center justify-between h-14">
        <Link href="/" className="text-[15px] font-semibold text-gray-900 tracking-tight">
          3WB Home
        </Link>

        <nav className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="text-[13px] text-gray-600 hover:text-gray-900 transition-colors duration-200">
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Link href="/login" className="text-[13px] text-gray-600 hover:text-gray-900 transition-colors">Log in</Link>
          <Link href="/get-started" className="text-[13px] font-medium text-white bg-blue-600 hover:bg-blue-500 rounded-full px-4 py-1.5 transition-colors">
            Get started
          </Link>
        </div>

        <button className="md:hidden p-2 -mr-2" onClick={() => setOpen(!open)}>
          <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-6 space-y-4">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="block text-lg text-gray-900 font-medium" onClick={() => setOpen(false)}>{l.label}</Link>
          ))}
          <div className="pt-4 border-t border-gray-100 space-y-3">
            <Link href="/login" className="block text-gray-600">Log in</Link>
            <Link href="/get-started" className="block bg-blue-600 text-white text-center font-semibold rounded-full py-3">Get started</Link>
          </div>
        </div>
      )}
    </header>
  );
}
