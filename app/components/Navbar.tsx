"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#gallery", label: "Gallery" },
  { href: "#reviews", label: "Reviews" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[var(--primary)] border-b-[3px] border-[var(--accent)]"
          : "bg-transparent border-b-[3px] border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 sm:h-20">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <span
            className="text-2xl sm:text-3xl font-black uppercase tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            JJM
          </span>
          <div className="leading-none hidden sm:block">
            <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--accent)]">
              Concrete
            </span>
            <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--muted-foreground)]">
              & Masonry
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3 py-2 text-sm font-medium uppercase tracking-wider text-white/80 hover:text-[var(--accent)] transition-colors"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:8563128923"
            className="ml-4 inline-flex items-center gap-2 px-5 py-2.5 bg-[var(--accent)] text-[var(--primary)] text-sm font-bold uppercase tracking-wider hover:bg-[var(--accent-hover)] transition-colors"
            style={{ fontFamily: "var(--font-body)" }}
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            (856) 312-8923
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-white hover:text-[var(--accent)] transition-colors"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
              <path strokeLinecap="square" d="M6 6l12 12M6 18L18 6" />
            </svg>
          ) : (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
              <path strokeLinecap="square" d="M3 7h18M3 12h18M3 17h18" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      {open && (
        <div className="md:hidden fixed inset-0 top-16 sm:top-20 bg-[var(--primary)] z-40 flex flex-col">
          <nav className="flex flex-col items-center justify-center flex-1 gap-2 px-6">
            {navLinks.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block w-full text-center py-4 text-2xl font-black uppercase tracking-wider text-white hover:text-[var(--accent)] border-b border-white/10 transition-colors animate-fade-up"
                style={{
                  fontFamily: "var(--font-display)",
                  animationDelay: `${i * 0.05}s`,
                }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:8563128923"
              className="mt-6 inline-flex items-center justify-center gap-3 w-full py-4 bg-[var(--accent)] text-[var(--primary)] text-lg font-bold uppercase tracking-wider"
              style={{ fontFamily: "var(--font-body)" }}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              Call (856) 312-8923
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
