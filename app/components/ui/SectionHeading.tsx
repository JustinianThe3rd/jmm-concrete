"use client";

import { motion } from "framer-motion";
import { EASE } from "./motion";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="text-center max-w-2xl mx-auto mb-14">
      <motion.span
        className="text-[var(--accent)] font-bold uppercase tracking-[0.25em] text-sm"
        style={{ fontFamily: "var(--font-body)" }}
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, ease: EASE }}
      >
        {eyebrow}
      </motion.span>
      <motion.h2
        className="mt-3 text-4xl sm:text-5xl md:text-6xl font-black uppercase leading-[0.95] text-white heading-section"
        style={{ fontFamily: "var(--font-display)" }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{
          duration: 0.6,
          ease: EASE,
          delay: 0.1,
        }}
      >
        {title}
      </motion.h2>
      <motion.div
        className="w-16 h-1 bg-[var(--accent)] mx-auto mt-5"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{
          duration: 0.7,
          ease: EASE,
          delay: 0.2,
        }}
        style={{ originX: 0 }}
      />
      {description && (
        <motion.p
          className="mt-5 text-white/50 text-lg leading-relaxed"
          style={{ fontFamily: "var(--font-body)" }}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.5,
            ease: EASE,
            delay: 0.3,
          }}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
