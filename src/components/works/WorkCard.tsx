import Link from "next/link";
import type { Work } from "@/types/work";

const categoryLabels: Record<string, string> = {
  shopify: "Shopify",
  react: "React",
  wordpress: "WordPress",
  ai: "AI",
  commerce: "Commerce UX",
};

const statusStyles: Record<string, string> = {
  shipped: "bg-emerald-500/20 text-emerald-200",
  "in-progress": "bg-amber-500/20 text-amber-200",
  concept: "bg-zinc-500/20 text-zinc-300",
};

export function WorkCard({ work }: { work: Work }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-white/8 bg-gradient-to-b from-white/[0.06] to-transparent transition hover:border-emerald-500/30 hover:shadow-[0_0_40px_-12px_rgba(16,185,129,0.2)]">
      <div className="flex aspect-[16/9] items-center justify-center bg-gradient-to-br from-emerald-950/60 via-[#0f1412] to-zinc-900 p-6">
        <div className="text-center">
          <p className="text-xs font-medium uppercase tracking-wider text-emerald-400/80">
            {categoryLabels[work.category] ?? work.category}
          </p>
          <p className="mt-2 text-2xl font-semibold text-white/90">
            {work.client ?? work.title.split("—")[0].trim().slice(0, 12)}
          </p>
          {work.highlight && (
            <p className="mt-1 text-sm text-zinc-400">{work.highlight}</p>
          )}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="mb-2 flex flex-wrap gap-2">
          <span
            className={`rounded-full px-2 py-0.5 text-xs capitalize ${statusStyles[work.status] ?? ""}`}
          >
            {work.status.replace("-", " ")}
          </span>
          {work.year && (
            <span className="rounded-full bg-white/5 px-2 py-0.5 text-xs text-zinc-400">
              {work.year}
            </span>
          )}
        </div>

        <h3 className="text-lg font-semibold text-white group-hover:text-emerald-50">
          <Link href={`/works/${work.slug}`}>{work.title}</Link>
        </h3>
        {work.role && (
          <p className="mt-1 text-xs text-emerald-400/90">{work.role}</p>
        )}
        <p className="mt-2 line-clamp-3 flex-1 text-sm text-zinc-400">
          {work.excerpt}
        </p>

        <ul className="mt-4 flex flex-wrap gap-1.5">
          {work.techStack.slice(0, 4).map((tech) => (
            <li
              key={tech}
              className="rounded-md bg-white/5 px-2 py-0.5 text-xs text-zinc-400"
            >
              {tech}
            </li>
          ))}
          {work.techStack.length > 4 && (
            <li className="px-1 text-xs text-zinc-500">
              +{work.techStack.length - 4}
            </li>
          )}
        </ul>

        <div className="mt-4 flex flex-wrap items-center gap-3">
          {work.href && (
            <a
              href={work.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-emerald-400 hover:text-emerald-300"

            >
              {work.hrefLabel ?? "Live site"} ↗
            </a>
          )}
          <Link
            href={`/works/${work.slug}`}
            className="text-sm text-zinc-500 hover:text-white"
          >
            Details →
          </Link>
        </div>
      </div>
    </article>
  );
}
