import Link from "next/link";
import type { CaseStudy } from "@/types/content";

export function CaseStudyCard({ study }: { study: CaseStudy }) {
  return (
    <Link
      href={`/case-studies/${study.slug}`}
      className="group block rounded-2xl border border-white/8 bg-white/[0.02] p-6 transition hover:border-emerald-500/30"
    >
      <p className="text-xs font-medium uppercase tracking-wider text-emerald-400/80">
        Case study
      </p>
      <h3 className="mt-2 text-xl font-semibold text-white group-hover:text-emerald-50">
        {study.title}
      </h3>
      {study.excerpt && (
        <p className="mt-2 text-sm text-zinc-400 line-clamp-3">{study.excerpt}</p>
      )}
      {study.metrics && study.metrics.length > 0 && (
        <dl className="mt-4 flex flex-wrap gap-3">
          {study.metrics.slice(0, 3).map((m) => (
            <div
              key={m.label}
              className="rounded-lg bg-white/5 px-3 py-2 text-xs"
            >
              <dt className="text-zinc-500">{m.label}</dt>
              <dd className="font-medium text-emerald-300">{m.value}</dd>
            </div>
          ))}
        </dl>
      )}
      <span className="mt-4 inline-block text-sm text-emerald-400 opacity-0 transition group-hover:opacity-100">
        Read case study →
      </span>
    </Link>
  );
}
