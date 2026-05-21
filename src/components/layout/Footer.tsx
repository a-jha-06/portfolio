import Link from "next/link";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-white/5 bg-[#080a09]">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="space-y-3">
            <Logo href="/" size="sm" />
            <p className="max-w-xs text-sm text-zinc-500">
              Shopify Developer · Product-minded builder
            </p>
          </div>
          <div className="flex flex-wrap gap-4 text-sm text-zinc-400">
            <Link href="/products" className="hover:text-white">
              Products
            </Link>
            <Link href="/services" className="hover:text-white">
              Services
            </Link>
            <Link href="/prds" className="hover:text-white">
              PRDs
            </Link>
            <Link href="/contact" className="hover:text-white">
              Contact
            </Link>
          </div>
        </div>
        <p className="mt-8 border-t border-white/5 pt-6 text-center text-xs text-zinc-600">
          © {new Date().getFullYear()} Amisha Jha. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
