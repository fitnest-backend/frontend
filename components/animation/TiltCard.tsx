"use client";

import { useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import { cn } from "@/lib/utils";

export type TiltCardProps = {
  children: React.ReactNode;
  className?: string;
  intensity?: number;
  maxTilt?: number;
  glare?: boolean;
};

export const TiltCard = ({
  children,
  className,
  intensity = 8,
  maxTilt,
  glare = false,
}: TiltCardProps) => {
  const actualIntensity = maxTilt ?? intensity;
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const glareX = useMotionValue(50);
  const glareY = useMotionValue(50);

  const springX = useSpring(rotateX, { stiffness: 200, damping: 22, mass: 0.35 });
  const springY = useSpring(rotateY, { stiffness: 200, damping: 22, mass: 0.35 });

  const onMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const node = ref.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width - 0.5;
    const py = (event.clientY - rect.top) / rect.height - 0.5;
    rotateX.set(-py * actualIntensity);
    rotateY.set(px * actualIntensity);

    if (glare) {
      glareX.set(((event.clientX - rect.left) / rect.width) * 100);
      glareY.set(((event.clientY - rect.top) / rect.height) * 100);
    }
  };

  const onEnter = () => setIsHovered(true);

  const onLeave = () => {
    setIsHovered(false);
    rotateX.set(0);
    rotateY.set(0);
  };

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      className={cn(
        "relative h-full min-w-0 [transform-style:preserve-3d]",
        className,
      )}
      style={{
        rotateX: springX,
        rotateY: springY,
        transformPerspective: 1200,
      }}
      onMouseEnter={onEnter}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      {children}
      {glare && isHovered ? (
        <motion.div
          className="pointer-events-none absolute inset-0 z-10 rounded-[inherit] opacity-35 transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle 260px at ${glareX.get()}% ${glareY.get()}%, rgba(255,255,255,0.25), transparent 80%)`,
          }}
        />
      ) : null}
    </motion.div>
  );
};

export default TiltCard;
