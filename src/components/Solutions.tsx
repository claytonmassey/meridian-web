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
      className="border-t border-slate-200 bg-slate-50/50 py-20 dark:border-slate-800 dark:bg-slate-900/30 md:py-28"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            <AnimateLetters
              text="Platforms that run inside the business"
              as="span"
              className="block"
              amount={0.3}
            />
          </h2>
          <ScrollReveal amount={0.2}>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
              We design and deploy AI-powered operational systems that integrate
              with your workflows—not demos or prototypes, but production-ready
              infrastructure.
            </p>
          </ScrollReveal>
        </div>
        <div className="mt-16 space-y-24">
          {solutions.map((item, i) => (
            <div
              key={item.title}
              className={`grid items-center gap-12 md:grid-cols-2 md:gap-16 ${
                i % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              <ScrollReveal
                delay={i * 0.1}
                className={i % 2 === 1 ? "md:order-2" : ""}
              >
                <h3 className="font-display text-2xl font-semibold text-slate-900 dark:text-white">
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
              </ScrollReveal>
              <ScrollReveal
                delay={i * 0.1 + 0.1}
                y={24}
                className={i % 2 === 1 ? "md:order-1" : ""}
              >
                <ImagePlaceholder
                  aspectRatio="video"
                  label={item.imageLabel}
                  className="w-full"
                />
              </ScrollReveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
