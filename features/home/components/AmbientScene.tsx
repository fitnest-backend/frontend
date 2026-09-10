"use client";

import { useReducedMotion } from "framer-motion";

const AmbientScene = () => {
  const reduceMotion = useReducedMotion();

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div className="fn-horizon absolute inset-x-0 bottom-[-20%] h-[70%] opacity-40 dark:opacity-60">
        <div className={reduceMotion ? "fn-grid" : "fn-grid fn-grid-move"} />
      </div>
      <div className="absolute -left-16 top-24 size-56 rounded-full bg-cyan/25 blur-3xl dark:bg-cyan/20" />
      <div className="absolute right-[12%] top-10 size-40 rounded-full bg-energy/20 blur-3xl" />
      <div className="fn-stage absolute inset-0 hidden lg:block">
        <div className="fn-cube fn-cube-a">
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
        <div className="fn-cube fn-cube-b">
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
      </div>
    </div>
  );
};

export default AmbientScene;
