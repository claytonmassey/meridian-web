"use client";

import Image from "next/image";

import partner1 from "@/assets/partners/1.png";
import partner2 from "@/assets/partners/2.png";
import partner3 from "@/assets/partners/3.png";
import partner4 from "@/assets/partners/4.png";
import partner5 from "@/assets/partners/5.png";

const partners = [partner1, partner2, partner3, partner4, partner5];

/* Duplicate multiple times so the scroll is seamless at any viewport width */
const partnersRow = [...partners, ...partners, ...partners, ...partners];

export function Partners() {
  return (
    <section
      id="partners"
      className="border-y border-slate-200 bg-white py-10 dark:border-slate-800 dark:bg-slate-950 md:py-12"
      aria-label="Trusted by leading organizations"
    >
      <div className="overflow-hidden">
        <p className="sr-only">Trusted by leading organizations</p>
        <div
          className="flex w-max animate-partners-scroll gap-14 md:gap-20"
          style={{ width: "max-content" }}
        >
          {partnersRow.map((src, i) => (
            <div
              key={i}
              className="flex shrink-0 items-center justify-center grayscale opacity-80 transition-opacity hover:opacity-100"
            >
              <Image
                src={src}
                alt=""
                width={180}
                height={72}
                className="h-12 w-auto object-contain md:h-14"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
