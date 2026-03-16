"use client";

import { AnimateLetters } from "@/components/AnimateLetters";
import { ScrollReveal } from "@/components/ScrollReveal";

const gapPoints = [
  {
    title: "One-size-fits-all platforms",
    description:
      "Big providers push products built for everyone—so they fit no one. Your operations get bent to the tool, not the other way around.",
  },
  {
    title: "Solutions before understanding",
    description:
      "They lead with what they sell. Nobody spends time learning how your business really works, where the friction is, or what you actually need.",
  },
  {
    title: "Deploy and disappear",
    description:
      "Implementation ends at go-live. No deep integration with how you operate, no ongoing tuning to how your company changes.",
  },
  {
    title: "The real problem goes unsolved",
    description:
      "You’re left with new software and the same operational gaps. The bottleneck was never “we need another solution”—it was “we need something built for us.”",
  },
];

export function AdoptionGap() {
  return (
    <section
      id="adoption-gap"
      className="border-y border-slate-200 bg-slate-900 py-16 dark:border-slate-800 dark:bg-slate-950 md:py-24"
    >
      <div className="mx-auto max-w-6xl px-6">
        <AnimateLetters
          text="Solutions aren’t the problem"
          as="h2"
          className="font-display text-2xl font-bold tracking-tight text-white sm:text-3xl"
          amount={0.2}
        />
        <ScrollReveal amount={0.2} delay={0.05}>
          <p className="mt-3 max-w-2xl text-base text-slate-400">
            Large vendors sell solutions. They rarely address the real
            problem—how your company actually runs. So you get tools, not
            transformation.
          </p>
        </ScrollReveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {gapPoints.map((item, i) => (
            <ScrollReveal key={item.title} delay={0.08 + i * 0.04} amount={0.15}>
              <div className="rounded-xl border border-slate-700/60 bg-slate-800/50 p-5 backdrop-blur dark:border-slate-700/40 dark:bg-slate-800/30">
                <h3 className="font-display font-semibold text-white">
                  <AnimateLetters
                    text={item.title}
                    as="span"
                    amount={0.5}
                    delayPerLetter={0.02}
                  />
                </h3>
                <p className="mt-1.5 text-sm leading-snug text-slate-400">
                  {item.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
        <ScrollReveal amount={0.2} delay={0.2}>
          <p className="mt-8 max-w-2xl text-base text-slate-400">
            We do the opposite: we come in,{" "}
            <strong className="font-semibold text-white">
              monitor how your company operates
            </strong>
            , and build tailored solutions that fit the way you work—not the
            other way around.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
