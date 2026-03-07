"use client";

import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { AnimateLetters } from "@/components/AnimateLetters";
import { ScrollReveal } from "@/components/ScrollReveal";

export function About() {
  return (
    <section
      id="about"
      className="border-t border-slate-200 bg-white py-16 dark:border-slate-800 dark:bg-slate-950 md:py-24"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="font-display text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
              <AnimateLetters
                text="The gap between AI experiments and real deployment"
                as="span"
                className="block"
                amount={0.2}
                delayPerLetter={0.02}
              />
            </h2>
            <ScrollReveal amount={0.2} delay={0.05}>
              <p className="mt-5 text-base leading-relaxed text-slate-600 dark:text-slate-400">
                Most organizations are experimenting with AI but struggle to
                move from pilots to operational systems. A meridian is a
                reference line for navigation—Meridian Platforms acts as that
                reference point, helping you orient operations around AI and
                deploy systems that work inside real business workflows.
              </p>
            </ScrollReveal>
            <ScrollReveal amount={0.2} delay={0.1}>
              <ul className="mt-6 space-y-3">
                {[
                  "AI-powered operational systems that integrate into your workflows",
                  "Designed for production—not demos or one-off prototypes",
                  "Outcome-focused: we deploy, iterate, and support after launch",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-slate-700 dark:text-slate-300"
                  >
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-teal-500" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>
          <ScrollReveal y={20} amount={0.2}>
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 dark:border-slate-800 dark:bg-slate-900/50">
              <ImagePlaceholder
                aspectRatio="square"
                label="Team or office image placeholder"
                className="w-full"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
