import Link from "next/link";
import { Logo } from "@/components/Logo";

const navLinks = [
  { href: "#solutions", label: "Platforms" },
  { href: "#features", label: "Capabilities" },
  { href: "#about", label: "Why Meridian" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/90 bg-white/90 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/90">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
        <Logo size="header" className="text-slate-900 dark:text-white" />
        <nav className="hidden items-center gap-7 md:flex">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
            >
              {label}
            </Link>
          ))}
        </nav>
        <Link
          href="#contact"
          className="rounded-lg bg-teal-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-teal-700 dark:bg-teal-500 dark:hover:bg-teal-600"
        >
          Get in touch
        </Link>
      </div>
    </header>
  );
}
