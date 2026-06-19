"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      className="bg-[#0a0a0a] border-t-4 border-[var(--accent)] mb-16 md:mb-0"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <span
                className="text-3xl font-black text-white uppercase"
                style={{ fontFamily: "var(--font-display)" }}
              >
                DD
              </span>
              <div className="leading-none">
                <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--accent)]">
                  Dior Tradesman
                </span>
                <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">
                  HVAC Contractor
                </span>
              </div>
            </div>
            <p
              className="text-white/50 leading-relaxed max-w-md text-sm"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Marlton&apos;s trusted HVAC contractor. Specializing in heating,
              cooling, ventilation, and emergency service. Open 24 hours. Serving
              the tri-state area — commercial and residential. Prompt, efficient,
              and trustworthy.
            </p>
            <div className="flex items-center gap-1 mt-4">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-4 h-4 text-[var(--accent)]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <span className="ml-2 text-sm font-bold text-white">5.0</span>
              <span className="text-sm text-white/40">/ 5 on Google</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="text-white font-black uppercase tracking-wider text-sm mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { href: "#services", label: "Services" },
                { href: "#about", label: "About Us" },
                { href: "#gallery", label: "Gallery" },
                { href: "#reviews", label: "Reviews" },
                { href: "#contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/50 hover:text-[var(--accent)] transition-colors text-sm uppercase tracking-wide font-medium"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4
              className="text-white font-black uppercase tracking-wider text-sm mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Services
            </h4>
            <ul
              className="space-y-3 text-sm text-white/50"
              style={{ fontFamily: "var(--font-body)" }}
            >
              <li className="uppercase tracking-wide">AC Repair</li>
              <li className="uppercase tracking-wide">Heating Repair</li>
              <li className="uppercase tracking-wide">HVAC Installation</li>
              <li className="uppercase tracking-wide">Ductwork Services</li>
              <li className="uppercase tracking-wide">Emergency HVAC</li>
              <li className="uppercase tracking-wide">Preventive Maintenance</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p
            className="text-sm text-white/30"
            style={{ fontFamily: "var(--font-body)" }}
          >
            &copy; {new Date().getFullYear()} DJ & Dior Tradesman. All rights
            reserved.
          </p>
          <div
            className="flex items-center gap-4 text-sm text-white/30"
            style={{ fontFamily: "var(--font-body)" }}
          >
            <span className="uppercase tracking-wide">Marlton, NJ</span>
            <span className="text-white/10">|</span>
            <a
              href="tel:8567238448"
              className="hover:text-[var(--accent)] transition-colors uppercase tracking-wide"
            >
              (856) 723-8448
            </a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
