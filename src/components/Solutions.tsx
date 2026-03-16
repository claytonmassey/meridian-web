"use client";

import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { AnimateLetters } from "@/components/AnimateLetters";
import { ScrollReveal } from "@/components/ScrollReveal";

const solutions = [
  {
    title: "Operational AI Platforms",
    description:
      "AI systems embedded directly into business operations—automating processes, analyzing data, and supporting decision-making where it matters.",
    imageLabel: "Operational AI platform screenshot",
  },
  {
    title: "Revenue Intelligence Platforms",
    description:
      "AI-powered systems that help organizations understand performance drivers, market signals, and growth opportunities in real time.",
    imageLabel: "Revenue intelligence dashboard placeholder",
  },
  {
    title: "Document & Data Intelligence",
    description:
      "Our Document Intelligence Engine turns documents into operational intelligence—extracting structured data from PDFs, analyzing financial statements, summarizing contracts, and processing large volumes of unstructured content so organizations can act on it.",
    imageLabel: "Document Intelligence Engine placeholder",
  },
];

export function Solutions() {
  return (
    <section
      id="solutions"
      className="border-t border-slate-200 bg-white py-16 dark:border-slate-800 dark:bg-slate-950 md:py-24"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <h2 className="font-display text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
            <AnimateLetters
              text="Platforms that run inside the business"
              as="span"
              className="block"
              amount={0.3}
            />
          </h2>
          <ScrollReveal amount={0.2} delay={0.05}>
            <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600 dark:text-slate-400">
              After we understand how you operate, we design and deploy
              AI-powered platforms tailored to your business—not off-the-shelf
              products, but production-ready infrastructure built for you.
            </p>
          </ScrollReveal>
        </div>
        <div className="mt-14 space-y-20">
          {solutions.map((item, i) => (
            <div
              key={item.title}
              className={`grid items-center gap-10 md:grid-cols-2 md:gap-14 ${
                i % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              <ScrollReveal
                delay={i * 0.08}
                className={i % 2 === 1 ? "md:order-2" : ""}
              >
                <div className="rounded-2xl border border-slate-200 bg-slate-50/50 p-6 dark:border-slate-800 dark:bg-slate-900/30 md:p-8">
                  <h3 className="font-display text-xl font-semibold text-slate-900 dark:text-white sm:text-2xl">
                    <AnimateLetters
                      text={item.title}
                      as="span"
                      amount={0.2}
                      delayPerLetter={0.025}
                    />
                  </h3>
                  <p className="mt-4 text-slate-600 dark:text-slate-400">
                    {item.description}
                  </p>
                </div>
              </ScrollReveal>
              <ScrollReveal
                delay={i * 0.08 + 0.05}
                y={16}
                className={i % 2 === 1 ? "md:order-1" : ""}
              >
                <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 dark:border-slate-800 dark:bg-slate-900/50">
                  <ImagePlaceholder
                    aspectRatio="video"
                    label={item.imageLabel}
                    className="w-full"
                  />
                </div>
              </ScrollReveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
