"use client";

import { Children, type ReactNode } from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";

/** Apple-like ease-out (slow settle, no bounce). */
const EASE = [0.16, 1, 0.3, 1] as const;

export type RevealVariant = "rise" | "blur" | "scale" | "left" | "right" | "fade";

const hiddenFor: Record<RevealVariant, Record<string, number | string>> = {
  rise: { opacity: 0, y: 40 },
  blur: { opacity: 0, y: 16, filter: "blur(14px)" },
  scale: { opacity: 0, scale: 0.92, y: 28 },
  left: { opacity: 0, x: -56, filter: "blur(8px)" },
  right: { opacity: 0, x: 56, filter: "blur(8px)" },
  fade: { opacity: 0 },
};

const shown = {
  opacity: 1,
  x: 0,
  y: 0,
  scale: 1,
  filter: "blur(0px)",
};

type RevealProps = {
  children: ReactNode;
  variant?: RevealVariant;
  delay?: number;
  className?: string;
  amount?: number;
};

const Reveal = ({
  children,
  variant = "blur",
  delay = 0,
  className,
  amount = 0.16,
}: RevealProps) => {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={cn("will-change-transform", className)}
      initial={reduceMotion ? false : hiddenFor[variant]}
      whileInView={shown}
      viewport={{ once: true, amount }}
      transition={{ duration: 0.8, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
};

type StaggerProps = {
  children: ReactNode;
  className?: string;
  variant?: RevealVariant;
  delay?: number;
  amount?: number;
};

export const Stagger = ({
  children,
  className,
  variant = "rise",
  delay = 0.08,
  amount = 0.12,
}: StaggerProps) => {
  const reduceMotion = useReducedMotion();

  const container: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: reduceMotion ? 0 : delay,
        delayChildren: reduceMotion ? 0 : 0.05,
      },
    },
  };

  const item: Variants = {
    hidden: reduceMotion ? shown : hiddenFor[variant],
    visible: {
      ...shown,
      transition: { duration: 0.7, ease: EASE },
    },
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      variants={container}
    >
      {Children.map(children, (child, index) => (
        <motion.div key={index} variants={item} className="h-full min-w-0">
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Reveal;
