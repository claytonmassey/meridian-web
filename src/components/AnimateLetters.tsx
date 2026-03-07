"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

type AnimateLettersProps = {
  text: string;
  className?: string;
  as?: "span" | "p" | "h1" | "h2" | "h3";
  delayPerLetter?: number;
  delayOutPerLetter?: number;
  amount?: number;
  /** Keep words together so lines break only at word boundaries */
  preserveWords?: boolean;
};

export function AnimateLetters({
  text,
  className = "",
  as: Tag = "span",
  delayPerLetter = 0.02,
  delayOutPerLetter = 0.015,
  amount = 0.2,
  preserveWords = false,
}: AnimateLettersProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { amount, once: false });

  const chars = text.split("");

  const letter = (char: string, i: number, globalIndex: number) => (
    <motion.span
      key={`${globalIndex}-${char}`}
      className="inline-block"
      initial={{ opacity: 0 }}
      animate={{ opacity: isInView ? 1 : 0 }}
      transition={{
        duration: 0.25,
        delay: isInView
          ? globalIndex * delayPerLetter
          : (chars.length - 1 - globalIndex) * delayOutPerLetter,
      }}
    >
      {char === " " ? "\u00A0" : char}
    </motion.span>
  );

  if (!preserveWords) {
    return (
      <div ref={ref}>
        <Tag className={className}>
          <span className="inline-block">
            {chars.map((char, i) => letter(char, i, i))}
          </span>
        </Tag>
      </div>
    );
  }

  const words = text.split(" ");
  let globalIndex = 0;

  return (
    <div ref={ref}>
      <Tag className={className}>
        <span className="inline-block">
          {words.map((word, wordIndex) => (
            <span key={wordIndex} className="whitespace-nowrap">
              {wordIndex > 0 ? "\u00A0" : null}
              {word.split("").map((char, i) => letter(char, i, globalIndex++))}
            </span>
          ))}
        </span>
      </Tag>
    </div>
  );
}
