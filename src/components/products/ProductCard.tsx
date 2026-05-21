import Link from "next/link";
import type { Product } from "@/types/content";

const categoryLabels: Record<string, string> = {
  "app-concept": "App Concept",
  saas: "SaaS Idea",
  "business-opportunity": "Opportunity",
};

const statusColors: Record<string, string> = {
  idea: "bg-zinc-500/20 text-zinc-300",
  mvp: "bg-amber-500/20 text-amber-200",
  shipped: "bg-emerald-500/20 text-emerald-200",
};

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/8 bg-gradient-to-b from-white/[0.06] to-transparent p-5 transition hover:border-emerald-500/30 hover:shadow-[0_0_40px_-12px_rgba(16,185,129,0.25)]"
    >
      <div className="mb-4 flex aspect-[16/10] items-center justify-center rounded-xl bg-gradient-to-br from-emerald-950/80 via-[#0f1412] to-zinc-900 ring-1 ring-white/5">
        <span className="text-4xl font-bold text-emerald-500/20 transition group-hover:text-emerald-500/35">
          {product.title.charAt(0)}
        </span>
      </div>

      <div className="mb-2 flex flex-wrap gap-2">
        {product.category && (
          <span className="rounded-full bg-white/5 px-2 py-0.5 text-xs text-zinc-400">
            {categoryLabels[product.category] ?? product.category}
          </span>
        )}
        {product.status && (
          <span
            className={`rounded-full px-2 py-0.5 text-xs capitalize ${statusColors[product.status] ?? ""}`}
          >
            {product.status}
          </span>
        )}
      </div>

      <h3 className="text-lg font-semibold text-white group-hover:text-emerald-50">
        {product.title}
      </h3>
      {product.tagline && (
        <p className="mt-1 line-clamp-2 text-sm text-zinc-400">{product.tagline}</p>
      )}
      <span className="mt-4 text-sm font-medium text-emerald-400 opacity-0 transition group-hover:opacity-100">
        View product →
      </span>
    </Link>
  );
}
