"use client";

import Link from "next/link";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { AnimateLetters } from "@/components/AnimateLetters";
import { ScrollReveal } from "@/components/ScrollReveal";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white dark:bg-slate-950">
      <div className="mx-auto max-w-6xl px-6 py-14 md:py-20 lg:py-24">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <div>
            <AnimateLetters
              text="From experiments to operational AI"
              as="p"
              className="font-display text-xs font-medium uppercase tracking-wider text-teal-600 dark:text-teal-400"
              delayPerLetter={0.015}
              amount={0.1}
              preserveWords
            />
            <h1 className="font-display mt-2 text-3xl font-bold leading-none tracking-tight text-slate-900 dark:text-white sm:text-4xl lg:text-5xl">
              <AnimateLetters
                text="From AI Experiments to"
                as="span"
                className="block"
                delayPerLetter={0.03}
                amount={0.1}
                preserveWords
              />
              <span className="block -mt-0.5">
                <AnimateLetters
                  text="Operational AI Platforms"
                  as="span"
                  className="block text-teal-600 dark:text-teal-400"
                  delayPerLetter={0.03}
                  amount={0.1}
                  preserveWords
                />
              </span>
            </h1>
            <ScrollReveal delay={0.4} amount={0.2}>
              <p className="mt-4 max-w-xl text-base leading-snug text-slate-600 dark:text-slate-400">
                Meridian Platforms builds AI-powered systems that integrate
                directly into business workflows—transforming AI from a tool into
                core operational infrastructure.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.5} amount={0.2}>
              <div className="mt-6 flex flex-wrap gap-4">
                <Link
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full bg-teal-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-teal-700 dark:bg-teal-500 dark:hover:bg-teal-600"
                >
                  Explore how we can help
                </Link>
                <Link
                  href="#solutions"
                  className="inline-flex items-center justify-center rounded-full border border-slate-300 px-5 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50 dark:border-slate-600 dark:text-slate-300 dark:hover:bg-slate-800/50"
                >
                  Our platforms
                </Link>
              </div>
            </ScrollReveal>
          </div>
          <ScrollReveal delay={0.2} y={24} amount={0.2}>
            <div className="relative">
              <ImagePlaceholder
                aspectRatio="video"
                label="Hero image placeholder"
                className="w-full shadow-2xl"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
