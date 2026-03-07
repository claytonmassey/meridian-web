import { Hero } from "@/components/Hero";
import { Partners } from "@/components/Partners";
import { AdoptionGap } from "@/components/AdoptionGap";
import { Solutions } from "@/components/Solutions";
import { Features } from "@/components/Features";
import { About } from "@/components/About";
import { CTA } from "@/components/CTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <Partners />
      <AdoptionGap />
      <Solutions />
      <Features />
      <About />
      <CTA />
    </main>
  );
}
