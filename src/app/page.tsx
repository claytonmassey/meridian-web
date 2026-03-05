import { Hero } from "@/components/Hero";
import { Solutions } from "@/components/Solutions";
import { Features } from "@/components/Features";
import { About } from "@/components/About";
import { CTA } from "@/components/CTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <Solutions />
      <Features />
      <About />
      <CTA />
    </main>
  );
}
