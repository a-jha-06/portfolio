import Link from "next/link";
import { notFound } from "next/navigation";
import { PortableText } from "@/components/shared/PortableText";
import { getCaseStudies, getCaseStudyBySlug } from "@/lib/content";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const studies = await getCaseStudies();
  return studies.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const study = await getCaseStudyBySlug(slug);
  return { title: study?.title ?? "Case Study", description: study?.excerpt };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const study = await getCaseStudyBySlug(slug);
  if (!study) notFound();

  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <Link
        href="/case-studies"
        className="text-sm text-zinc-500 hover:text-emerald-400"
      >
        ← Case studies
      </Link>
      <p className="mt-6 text-sm font-medium uppercase tracking-wider text-emerald-400">
        Case study
      </p>
      <h1 className="mt-2 text-3xl font-semibold text-white">{study.title}</h1>
      {study.excerpt && (
        <p className="mt-4 text-lg text-zinc-400">{study.excerpt}</p>
      )}

      {study.articleUrl && (
        <a
          href={study.articleUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-300 hover:bg-emerald-500/20"
        >
          {study.articleLabel ?? "Read full article"} →
        </a>
      )}

      {study.metrics && study.metrics.length > 0 && (
        <dl className="mt-8 grid gap-4 sm:grid-cols-3">
          {study.metrics.map((m) => (
            <div
              key={m.label}
              className="rounded-xl border border-white/8 bg-white/[0.02] p-4"
            >
              <dt className="text-xs text-zinc-500">{m.label}</dt>
              <dd className="mt-1 text-xl font-semibold text-emerald-300">
                {m.value}
              </dd>
              {m.description && (
                <dd className="mt-1 text-xs text-zinc-500">{m.description}</dd>
              )}
            </div>
          ))}
        </dl>
      )}

      <div className="mt-12 space-y-10">
        {study.problem && (
          <section>
            <h2 className="mb-4 text-xl font-semibold text-white">Problem</h2>
            <PortableText value={study.problem} />
          </section>
        )}
        {study.solution && (
          <section>
            <h2 className="mb-4 text-xl font-semibold text-white">Solution</h2>
            <PortableText value={study.solution} />
          </section>
        )}
        {study.impact && (
          <section>
            <h2 className="mb-4 text-xl font-semibold text-white">Impact</h2>
            <PortableText value={study.impact} />
          </section>
        )}
      </div>

      {(study.product?.slug || study.productSlug) && (
        <Link
          href={`/products/${study.product?.slug ?? study.productSlug}`}
          className="mt-10 inline-block rounded-lg bg-emerald-500/15 px-4 py-2 text-sm font-medium text-emerald-300 ring-1 ring-emerald-500/30"
        >
          View product: {study.product?.title ?? "Related product"} →
        </Link>
      )}
    </article>
  );
}
