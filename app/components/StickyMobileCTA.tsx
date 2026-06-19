"use client";

import { useState } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";

export default function StickyMobileCTA() {
  const [visible, setVisible] = useState(true);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setVisible(latest < 80 || latest < (scrollY.getPrevious() ?? 0));
  });

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed bottom-0 left-0 right-0 z-40 md:hidden"
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: 100 }}
          transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className="flex">
            <a
              href="tel:8567238448"
              className="flex-1 flex items-center justify-center gap-2 py-4 bg-[var(--accent)] text-[#0a0a0a] font-bold uppercase tracking-wider text-sm"
              style={{ fontFamily: "var(--font-body)" }}
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              Call Now
            </a>
            <a
              href="#contact"
              className="flex-1 flex items-center justify-center gap-2 py-4 bg-[#0a0a0a] text-white font-bold uppercase tracking-wider text-sm border-t-4 border-[var(--accent)]"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Free Estimate
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
