"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

interface AnimatedDivProps {
  children: ReactNode;
  direction?: "up" | "left" | "right";
  delay?: number;
  className?: string;
  once?: boolean;
}

const variants: Variants = {
  hidden: { opacity: 0, y: 30, x: 0 },
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

export default function AnimatedDiv({
  children,
  direction = "up",
  delay = 0,
  className = "",
  once = true,
}: AnimatedDivProps) {
  const hiddenState =
    direction === "left"
      ? { opacity: 0, x: -40, y: 0 }
      : direction === "right"
        ? { opacity: 0, x: 40, y: 0 }
        : { opacity: 0, y: 30, x: 0 };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.2 }}
      variants={{
        hidden: hiddenState,
        visible: {
          opacity: 1,
          y: 0,
          x: 0,
          transition: {
            duration: 0.6,
            ease: [0.25, 0.46, 0.45, 0.94],
            delay,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
