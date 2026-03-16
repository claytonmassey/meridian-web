"use client";

import Link from "next/link";
import { AnimateLetters } from "@/components/AnimateLetters";
import { ScrollReveal } from "@/components/ScrollReveal";

export function Hero() {
  return (
    <section className="relative min-h-[80vh] overflow-hidden bg-white dark:bg-slate-50">
      {/* Full-bleed video background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
        aria-hidden
      >
        <source src="/video/rotate.mp4" type="video/mp4" />
      </video>
      {/* White overlay for subtle video */}
      <div
        className="absolute inset-0 bg-white/70 dark:bg-slate-50/75"
        aria-hidden
      />
      <div className="relative z-10 mx-auto flex min-h-[80vh] max-w-6xl items-center px-6 py-20 md:py-28 lg:py-36">
        <div className="max-w-2xl">
          <h1 className="font-display text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-900 sm:text-5xl lg:text-6xl">
            <AnimateLetters
              text="Meridian Platforms"
              as="span"
              className="block"
              amount={0.1}
              delayPerLetter={0.02}
              preserveWords
            />
          </h1>
          <ScrollReveal amount={0.2} delay={0.1}>
            <p className="mt-4 text-xl font-medium text-slate-800 dark:text-slate-800 sm:text-2xl">
              AI Infrastructure for Modern Businesses
            </p>
          </ScrollReveal>
          <ScrollReveal amount={0.2} delay={0.15}>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-600 dark:text-slate-600">
              We don’t just offer solutions—we learn how your company operates,
              then build AI infrastructure tailored to you.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.25} amount={0.2}>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="#contact"
                className="inline-flex items-center justify-center rounded-lg bg-teal-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-teal-700 dark:bg-teal-600 dark:hover:bg-teal-700"
              >
                Get in touch
              </Link>
              <Link
                href="#solutions"
                className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50 dark:border-slate-300 dark:bg-white dark:text-slate-700 dark:hover:bg-slate-50"
              >
                Our platforms
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
