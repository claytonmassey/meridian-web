import Link from "next/link";
import { Logo } from "@/components/Logo";

const footerLinks = {
  product: [
    { href: "#solutions", label: "Platforms" },
    { href: "#features", label: "Capabilities" },
    { href: "#", label: "Pricing" },
  ],
  company: [
    { href: "#why-meridian", label: "Why Meridian" },
    { href: "#about", label: "How we work" },
    { href: "#contact", label: "Contact" },
  ],
  legal: [
    { href: "#", label: "Privacy" },
    { href: "#", label: "Terms" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-100 dark:border-slate-800 dark:bg-slate-950">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <Logo size="footer" className="text-slate-900 dark:text-white" />
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              We monitor how your company operates and build tailored AI
              solutions—not off-the-shelf products.
            </p>
          </div>
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Product
            </h3>
            <ul className="mt-4 space-y-2.5">
              {footerLinks.product.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-slate-600 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Company
            </h3>
            <ul className="mt-4 space-y-2.5">
              {footerLinks.company.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-slate-600 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-8 dark:border-slate-800 sm:flex-row">
          <div className="flex gap-6">
            {footerLinks.legal.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-xs text-slate-500 transition-colors hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300"
              >
                {label}
              </Link>
            ))}
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            © {new Date().getFullYear()} Meridian Platforms. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
