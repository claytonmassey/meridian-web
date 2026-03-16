"use client";

import { AnimateLetters } from "@/components/AnimateLetters";
import { ScrollReveal } from "@/components/ScrollReveal";

const features = [
  {
    title: "Eliminate operational bottlenecks",
    description:
      "Automate complex, multi-step workflows so teams stop doing manual work that AI can handle—freeing capacity for higher-value work.",
  },
  {
    title: "Extract value from data",
    description:
      "Transform documents, reports, and unstructured information into structured insights and decisions with our Document Intelligence Engine.",
  },
  {
    title: "Integrate with existing systems",
    description:
      "Our platforms plug into your current tools and workflows rather than replacing them—deploy faster with less disruption.",
  },
  {
    title: "Enable faster decision making",
    description:
      "Give leadership and operational teams real-time, AI-powered insights so they can act on what matters.",
  },
];

export function Features() {
  return (
    <section
      id="features"
      className="border-t border-slate-200 bg-slate-50 py-16 dark:border-slate-800 dark:bg-slate-900/30 md:py-24"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <h2 className="font-display text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
            <AnimateLetters
              text="Why Meridian"
              as="span"
              className="block"
              amount={0.3}
            />
          </h2>
          <ScrollReveal amount={0.2} delay={0.05}>
            <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600 dark:text-slate-400">
              We build document intelligence, workflow automation, and
              AI-driven decision support—tailored to how you operate, so it
              runs inside your business from day one.
            </p>
          </ScrollReveal>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, i) => (
            <ScrollReveal key={feature.title} delay={0.06 + i * 0.04} amount={0.15}>
              <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-shadow hover:shadow dark:border-slate-700 dark:bg-slate-900/50 dark:hover:shadow-none">
                <h3 className="font-display font-semibold text-slate-900 dark:text-white">
                  <AnimateLetters
                    text={feature.title}
                    as="span"
                    amount={0.5}
                    delayPerLetter={0.02}
                  />
                </h3>
                <p className="mt-2 text-sm leading-snug text-slate-600 dark:text-slate-400">
                  {feature.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
