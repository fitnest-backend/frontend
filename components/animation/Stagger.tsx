"use client";

import { Children, type ReactNode } from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { APPLE_EASE, type RevealVariant } from "./Reveal";
import { cn } from "@/lib/utils";

const hiddenFor: Record<RevealVariant, Record<string, number | string>> = {
  rise: { opacity: 0, y: 32 },
  up: { opacity: 0, y: 32 },
  blur: { opacity: 0, y: 16, filter: "blur(10px)" },
  scale: { opacity: 0, scale: 0.94, y: 16 },
  left: { opacity: 0, x: -32, filter: "blur(6px)" },
  right: { opacity: 0, x: 32, filter: "blur(6px)" },
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

export type StaggerProps = {
  children: ReactNode;
  className?: string;
  itemClassName?: string;
  variant?: RevealVariant;
  delay?: number;
  initialDelay?: number;
  amount?: number;
  once?: boolean;
};

export const Stagger = ({
  children,
  className,
  itemClassName,
  variant = "rise",
  delay = 0.07,
  initialDelay = 0.04,
  amount = 0.12,
  once = true,
}: StaggerProps) => {
  const reduceMotion = useReducedMotion();

  const container: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: reduceMotion ? 0 : delay,
        delayChildren: reduceMotion ? 0 : initialDelay,
      },
    },
  };

  const item: Variants = {
    hidden: reduceMotion ? shown : hiddenFor[variant],
    visible: {
      ...shown,
      transition: { duration: 0.65, ease: APPLE_EASE },
    },
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={container}
    >
      {Children.map(children, (child, index) => {
        if (!child) return null;
        return (
          <motion.div
            key={index}
            variants={item}
            className={cn("h-full min-w-0", itemClassName)}
          >
            {child}
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default Stagger;
