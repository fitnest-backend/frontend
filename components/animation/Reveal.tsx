"use client";

import { type ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

/** Apple-like ease-out (slow settle, no bounce). */
export const APPLE_EASE = [0.16, 1, 0.3, 1] as const;

export type RevealVariant =
  | "rise"
  | "blur"
  | "scale"
  | "left"
  | "right"
  | "fade"
  | "tilt"
  | "up";

const hiddenFor: Record<RevealVariant, Record<string, number | string>> = {
  rise: { opacity: 0, y: 32 },
  up: { opacity: 0, y: 32 },
  blur: { opacity: 0, y: 20, filter: "blur(12px)" },
  scale: { opacity: 0, scale: 0.94, y: 20 },
  left: { opacity: 0, x: -36, filter: "blur(6px)" },
  right: { opacity: 0, x: 36, filter: "blur(6px)" },
  fade: { opacity: 0 },
  tilt: { opacity: 0, y: 32, rotateX: 10, filter: "blur(8px)" },
};

const shown = {
  opacity: 1,
  x: 0,
  y: 0,
  scale: 1,
  rotateX: 0,
  filter: "blur(0px)",
};

export type RevealProps = {
  children: ReactNode;
  variant?: RevealVariant;
  delay?: number;
  duration?: number;
  className?: string;
  amount?: number;
  once?: boolean;
};

export const Reveal = ({
  children,
  variant = "blur",
  delay = 0,
  duration = 0.75,
  className,
  amount = 0.15,
  once = true,
}: RevealProps) => {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={cn("will-change-[transform,opacity]", className)}
      initial={reduceMotion ? false : hiddenFor[variant]}
      whileInView={shown}
      viewport={{ once, amount }}
      transition={{ duration, delay, ease: APPLE_EASE }}
    >
      {children}
    </motion.div>
  );
};
export default Reveal;
