"use client";

import type { Transition } from "framer-motion";

/** Shared easing curve — premium feel, consistent across all animations */
export const EASE: Transition["ease"] = [0.25, 0.46, 0.45, 0.94];

/** Shared transition presets */
export const TRANSITION_FAST = { duration: 0.4, ease: EASE };
export const TRANSITION_DEFAULT = { duration: 0.5, ease: EASE };
export const TRANSITION_SLOW = { duration: 0.6, ease: EASE };
export const TRANSITION_HERO = { duration: 0.7, ease: EASE };
