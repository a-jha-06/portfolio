import Link from "next/link";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-white/5">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(16,185,129,0.15),transparent)]" />
      <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
        <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300">
          Product showcase · SaaS hub · PRD library
        </p>
        <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-white md:text-5xl lg:text-[3.25rem]">
          Shopify Developer building{" "}
          <span className="text-emerald-400">conversion-focused</span> commerce
          products.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-zinc-400 leading-relaxed">
          Not just a portfolio — a product thinking hub. App concepts, case
          studies, PRDs, roadmaps, and competitive analysis for merchants who
          need real outcomes.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/products"
            className="rounded-lg bg-emerald-500 px-5 py-2.5 text-sm font-medium text-[#0b0f0d] hover:bg-emerald-400"
          >
            Explore products
          </Link>
          <Link
            href="/prds"
            className="rounded-lg border border-white/15 px-5 py-2.5 text-sm font-medium text-zinc-200 hover:bg-white/5"
          >
            PRD library
          </Link>
        </div>
      </div>
    </section>
  );
}
