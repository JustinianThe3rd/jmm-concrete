"use client";

import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { EASE } from "./ui/motion";

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
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 60);
  });

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: EASE }}
      style={{
        backgroundColor: scrolled ? "rgba(10,10,10,0.97)" : "transparent",
        borderBottom: scrolled
          ? "3px solid var(--accent)"
          : "3px solid transparent",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 sm:h-20">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <span
            className="text-2xl sm:text-3xl font-black uppercase tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            DD
          </span>
          <div className="leading-none hidden sm:block">
            <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--accent)]">
              Dior Tradesman
            </span>
            <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">
              HVAC Contractor
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
            href="tel:8567238448"
            className="ml-4 inline-flex items-center gap-2 px-5 py-2.5 bg-[var(--accent)] text-[#0a0a0a] text-sm font-bold uppercase tracking-wider hover:bg-[var(--accent-hover)] transition-colors"
            style={{ fontFamily: "var(--font-body)" }}
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            (856) 723-8448
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
        <motion.div
          className="md:hidden fixed inset-0 top-16 sm:top-20 bg-[#0a0a0a] z-40 flex flex-col"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
        >
          <nav className="flex flex-col items-center justify-center flex-1 gap-2 px-6">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block w-full text-center py-4 text-2xl font-black uppercase tracking-wider text-white hover:text-[var(--accent)] border-b border-white/10 transition-colors"
                style={{ fontFamily: "var(--font-display)" }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05, duration: 0.3 }}
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href="tel:8567238448"
              className="mt-6 inline-flex items-center justify-center gap-3 w-full py-4 bg-[var(--accent)] text-[#0a0a0a] text-lg font-bold uppercase tracking-wider"
              style={{ fontFamily: "var(--font-body)" }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.3 }}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              Call (856) 723-8448
            </motion.a>
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
}
