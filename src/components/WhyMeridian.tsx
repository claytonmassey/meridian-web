"use client";

import { AnimateLetters } from "@/components/AnimateLetters";
import { ScrollReveal } from "@/components/ScrollReveal";

const rows = [
  {
    category: "Time to Value",
    mostAiFirms: "6–12 months, no deployment",
    inHouse: "12–24 months to build",
    meridian: "Live in 60–90 days",
  },
  {
    category: "What You Get",
    mostAiFirms: "Slide decks & recommendations",
    inHouse: "Prototype needing maintenance",
    meridian: "Production system in your workflows",
  },
  {
    category: "Cost",
    mostAiFirms: "High fees, low accountability",
    inHouse: "Hiring, salaries, turnover risk",
    meridian: "Fixed-scope, clear ROI",
  },
  {
    category: "Ownership",
    mostAiFirms: "They leave, knowledge leaves",
    inHouse: "Dependent on internal team",
    meridian: "You own it. Built to last.",
  },
];

export function WhyMeridian() {
  return (
    <section
      id="why-meridian"
      className="relative overflow-hidden border-y border-slate-200 bg-white py-16 dark:border-slate-800 dark:bg-slate-50 md:py-24"
    >
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="font-display text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-900 sm:text-3xl">
          <AnimateLetters
            text="Why Meridian?"
            as="span"
            className="block"
            amount={0.2}
            delayPerLetter={0.02}
          />
        </h2>
        <ScrollReveal amount={0.2} delay={0.05}>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-600">
            Two paths most companies take. Neither works.
          </p>
        </ScrollReveal>
        <ScrollReveal amount={0.15} delay={0.1}>
          <div className="mt-10 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50/50 shadow-sm dark:border-slate-700 dark:bg-slate-800/30">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[520px] border-collapse text-left">
                <thead>
                  <tr className="border-b border-slate-200 dark:border-slate-700">
                    <th className="py-4 pl-5 pr-4 text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400" />
                    <th className="py-4 px-4 text-sm font-semibold text-slate-600 dark:text-slate-400">
                      Most AI Firms
                    </th>
                    <th className="py-4 px-4 text-sm font-semibold text-slate-600 dark:text-slate-400">
                      In-House Build
                    </th>
                    <th className="py-4 pr-5 pl-4 text-sm font-semibold text-slate-900 dark:text-white">
                      Meridian Platforms
                      <span className="ml-1.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-teal-100 text-teal-600 dark:bg-teal-500/20 dark:text-teal-400" aria-hidden>
                        ✓
                      </span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row, i) => (
                    <tr
                      key={row.category}
                      className={`border-b border-slate-200 last:border-b-0 dark:border-slate-700 ${
                        i % 2 === 1 ? "bg-slate-100/50 dark:bg-slate-800/30" : ""
                      }`}
                    >
                      <td className="py-4 pl-5 pr-4 font-medium text-slate-900 dark:text-slate-200">
                        {row.category}
                      </td>
                      <td className="py-4 px-4 text-sm text-slate-600 dark:text-slate-400">
                        {row.mostAiFirms}
                      </td>
                      <td className="py-4 px-4 text-sm text-slate-600 dark:text-slate-400">
                        {row.inHouse}
                      </td>
                      <td className="py-4 pr-5 pl-4 font-semibold text-slate-900 dark:text-white">
                        {row.meridian}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
