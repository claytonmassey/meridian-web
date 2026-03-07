"use client";

import { AnimateLetters } from "@/components/AnimateLetters";
import { ScrollReveal } from "@/components/ScrollReveal";

const gapPoints = [
  {
    title: "Pressure to show ROI",
    description:
      "Leadership needs clear business impact—revenue, cost savings, and risk reduction—not pilot metrics or model benchmarks.",
  },
  {
    title: "Operational readiness",
    description:
      "AI must plug into existing ERP, CRM, and workflows without lengthy integrations or rip-and-replace projects.",
  },
  {
    title: "Governance and compliance",
    description:
      "Enterprise requirements for security, auditability, and control can’t be an afterthought when scaling AI.",
  },
  {
    title: "Moving from pilots to production",
    description:
      "Proof of concept is one thing; running AI in live processes, 24/7, with reliability and support is another.",
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
          text="The enterprise AI gap"
          as="h2"
          className="font-display text-2xl font-bold tracking-tight text-white sm:text-3xl"
          amount={0.2}
        />
        <ScrollReveal amount={0.2} delay={0.05}>
          <p className="mt-3 max-w-2xl text-base text-slate-400">
            Organizations are under pressure to deploy AI that drives revenue,
            reduces cost, and fits into how the business already operates—yet
            most initiatives stall between pilot and production.
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
            The result: experiments that don’t scale, and business leaders still
            waiting for{" "}
            <strong className="font-semibold text-white">
              AI that runs inside the business—not beside it.
            </strong>
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
