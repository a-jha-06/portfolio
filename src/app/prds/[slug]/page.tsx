import Link from "next/link";
import { notFound } from "next/navigation";
import { PortableText } from "@/components/shared/PortableText";
import { getPRDs, getPRDBySlug } from "@/lib/content";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const prds = await getPRDs();
  return prds.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const prd = await getPRDBySlug(slug);
  return { title: prd?.title ?? "PRD", description: prd?.summary };
}

export default async function PRDPage({ params }: Props) {
  const { slug } = await params;
  const prd = await getPRDBySlug(slug);
  if (!prd) notFound();

  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <Link href="/prds" className="text-sm text-zinc-500 hover:text-emerald-400">
        ← PRD library
      </Link>
      <p className="mt-6 text-sm font-medium uppercase tracking-wider text-emerald-400">
        PRD
      </p>
      <h1 className="mt-2 text-3xl font-semibold text-white">{prd.title}</h1>
      {prd.summary && (
        <p className="mt-4 text-lg text-zinc-400 leading-relaxed">{prd.summary}</p>
      )}
      <div className="mt-10">
        <PortableText value={prd.body} />
      </div>
      {prd.product?.slug && (
        <Link
          href={`/products/${prd.product.slug}`}
          className="mt-10 inline-block text-sm text-emerald-400"
        >
          Related product: {prd.product.title} →
        </Link>
      )}
    </article>
  );
}
