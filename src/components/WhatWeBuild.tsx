"use client";

import { AnimateLetters } from "@/components/AnimateLetters";
import { ScrollReveal } from "@/components/ScrollReveal";

const items = [
  {
    title: "Eliminate bottlenecks",
    description:
      "Automate complex, multi-step workflows so your team stops doing work that shouldn't require humans.",
  },
  {
    title: "Extract value from your data",
    description:
      "Turn documents, reports, and unstructured information into decisions, not just storage.",
  },
  {
    title: "Plug into what you already use",
    description:
      "Systems built to integrate with your existing tools, not replace them.",
  },
  {
    title: "Make faster, smarter calls",
    description:
      "Give your leadership and teams real-time AI-powered insight at every decision point.",
  },
];

export function WhatWeBuild() {
  return (
    <section
      id="what-we-build"
      className="relative overflow-hidden border-y border-slate-800 bg-slate-900 py-16 dark:bg-slate-950 md:py-24"
    >
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
          <AnimateLetters
            text="What Meridian Platforms Builds"
            as="span"
            className="block"
            amount={0.2}
            delayPerLetter={0.015}
          />
        </h2>
        <ScrollReveal amount={0.2} delay={0.08}>
          <p className="mt-5 text-base leading-relaxed text-slate-400">
            Meridian builds AI-powered operational systems that run inside your
            business—not experiments, not demos. Infrastructure that works from
            day one.
          </p>
        </ScrollReveal>
        <ul className="mt-10 space-y-6">
          {items.map((item, i) => (
            <ScrollReveal key={item.title} delay={0.1 + i * 0.05} amount={0.2}>
              <li className="flex gap-4">
                <span
                  className="mt-0.5 shrink-0 text-teal-400"
                  aria-hidden
                >
                  →
                </span>
                <div>
                  <span className="font-semibold text-white">
                    {item.title}
                  </span>
                  <span className="text-slate-400"> – {item.description}</span>
                </div>
              </li>
            </ScrollReveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
