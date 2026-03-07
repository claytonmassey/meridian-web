"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

type ScrollRevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  /** Set to 0 for fade-only (no vertical movement). Slight values (e.g. 8) add a gentle rise on reveal. */
  y?: number;
  amount?: number;
};

export function ScrollReveal({
  children,
  className = "",
  delay = 0,
  y = 0,
  amount = 0.15,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { amount, once: false });

  const hasY = y !== 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...(hasY && { y }) }}
      animate={{
        opacity: isInView ? 1 : 0,
        ...(hasY && { y: isInView ? 0 : y }),
      }}
      transition={{ duration: 0.45, delay, ease: [0.25, 0.4, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
