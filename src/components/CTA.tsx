"use client";

import { AnimateLetters } from "@/components/AnimateLetters";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ContactForm } from "@/components/ContactForm";

export function CTA() {
  return (
    <section
      id="contact"
      className="border-t border-slate-200 bg-slate-50 py-16 dark:border-slate-800 dark:bg-slate-900/30 md:py-24"
    >
      <div className="mx-auto max-w-2xl px-6 lg:max-w-3xl">
        <div className="text-center">
          <h2 className="font-display text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
            <AnimateLetters
              text="Get in touch"
              as="span"
              className="block"
              amount={0.3}
              delayPerLetter={0.03}
            />
          </h2>
          <ScrollReveal amount={0.2} delay={0.05}>
            <p className="mt-4 text-base text-slate-600 dark:text-slate-400">
              We start by understanding how you operate. Tell us about your
              business—we&apos;ll map the real problem and build a tailored path
              forward.
            </p>
          </ScrollReveal>
        </div>
        <ScrollReveal amount={0.2} delay={0.1}>
          <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800/50 md:p-8">
            <ContactForm />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
