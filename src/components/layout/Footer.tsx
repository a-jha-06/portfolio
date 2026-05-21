import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-white/5 bg-[#080a09]">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p className="text-sm text-zinc-500">
          Shopify Developer · Product-minded builder
        </p>
        <div className="flex gap-4 text-sm text-zinc-400">
          <Link href="/products" className="hover:text-white">
            Products
          </Link>
          <Link href="/prds" className="hover:text-white">
            PRDs
          </Link>
          <Link href="/contact" className="hover:text-white">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
