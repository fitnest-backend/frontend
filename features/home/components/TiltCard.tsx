"use client";

import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import { cn } from "@/lib/utils";

type TiltCardProps = {
  children: React.ReactNode;
  className?: string;
  intensity?: number;
};

const TiltCard = ({ children, className, intensity = 10 }: TiltCardProps) => {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springX = useSpring(rotateX, { stiffness: 180, damping: 22, mass: 0.4 });
  const springY = useSpring(rotateY, { stiffness: 180, damping: 22, mass: 0.4 });

  const onMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const node = ref.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width - 0.5;
    const py = (event.clientY - rect.top) / rect.height - 0.5;
    rotateX.set(-py * intensity);
    rotateY.set(px * intensity);
  };

  const onLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      className={cn("relative h-full min-w-0 [transform-style:preserve-3d]", className)}
      style={{
        rotateX: springX,
        rotateY: springY,
        transformPerspective: 1100,
      }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      {children}
    </motion.div>
  );
};

export default TiltCard;
