"use client";

import Link from "next/link";
import { AnimateLetters } from "@/components/AnimateLetters";
import { ScrollReveal } from "@/components/ScrollReveal";

export function CTA() {
  return (
    <section
      id="contact"
      className="border-t border-slate-200 bg-white py-20 dark:border-slate-800 dark:bg-slate-950 md:py-28"
    >
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="font-display text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
          <AnimateLetters
            text="Ready to operationalize AI?"
            as="span"
            className="block"
            amount={0.3}
            delayPerLetter={0.03}
          />
        </h2>
        <ScrollReveal amount={0.2}>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
            Explore how Meridian can help your organization move from AI
            experimentation to systems that run inside your business.
          </p>
        </ScrollReveal>
        <ScrollReveal amount={0.2} delay={0.1}>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="mailto:hello@meridian.example"
              className="inline-flex items-center justify-center rounded-full bg-teal-600 px-6 py-3 text-base font-medium text-white transition-colors hover:bg-teal-700 dark:bg-teal-500 dark:hover:bg-teal-600"
            >
              Get in touch
            </Link>
            <Link
              href="#"
              className="inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-3 text-base font-medium text-slate-700 transition-colors hover:bg-slate-50 dark:border-slate-600 dark:text-slate-300 dark:hover:bg-slate-800/50"
            >
              Book a call
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
