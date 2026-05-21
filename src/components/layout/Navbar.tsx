"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/prds", label: "PRDs" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-[#0b0f0d]/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <Link href="/" className="group flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/15 text-sm font-bold text-emerald-400 ring-1 ring-emerald-500/30">
            PM
          </span>
          <span className="text-sm font-medium text-zinc-200 group-hover:text-white">
            Product Portfolio
          </span>
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map(({ href, label }) => {
            const active =
              href === "/" ? pathname === "/" : pathname.startsWith(href);
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`rounded-md px-3 py-2 text-sm transition-colors ${
                    active
                      ? "bg-white/10 text-white"
                      : "text-zinc-400 hover:bg-white/5 hover:text-zinc-200"
                  }`}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>

        <details className="relative md:hidden">
          <summary className="cursor-pointer list-none rounded-md border border-white/10 px-3 py-2 text-sm text-zinc-300">
            Menu
          </summary>
          <ul className="absolute right-0 mt-2 w-48 rounded-lg border border-white/10 bg-[#121816] p-2 shadow-xl">
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="block rounded-md px-3 py-2 text-sm text-zinc-300 hover:bg-white/5 hover:text-white"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </details>
      </nav>
    </header>
  );
}
