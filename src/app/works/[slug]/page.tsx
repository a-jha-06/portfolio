import Link from "next/link";
import { notFound } from "next/navigation";
import { getWorkBySlug, getWorks } from "@/lib/works";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const works = await getWorks();
  return works.map((w) => ({ slug: w.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const work = await getWorkBySlug(slug);
  return {
    title: work?.title ?? "Work",
    description: work?.excerpt,
  };
}

export default async function WorkDetailPage({ params }: Props) {
  const { slug } = await params;
  const work = await getWorkBySlug(slug);
  if (!work) notFound();

  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <Link href="/works" className="text-sm text-zinc-500 hover:text-emerald-400">
        ← Sample work
      </Link>

      <p className="mt-6 text-sm font-medium uppercase tracking-wider text-emerald-400">
        {work.category} · {work.status.replace("-", " ")}
      </p>
      <h1 className="mt-2 text-3xl font-semibold text-white">{work.title}</h1>

      {(work.role || work.client || work.year) && (
        <dl className="mt-4 flex flex-wrap gap-4 text-sm text-zinc-400">
          {work.role && (
            <div>
              <dt className="text-zinc-500">Role</dt>
              <dd className="text-zinc-300">{work.role}</dd>
            </div>
          )}
          {work.client && (
            <div>
              <dt className="text-zinc-500">Client</dt>
              <dd className="text-zinc-300">{work.client}</dd>
            </div>
          )}
          {work.year && (
            <div>
              <dt className="text-zinc-500">Timeline</dt>
              <dd className="text-zinc-300">{work.year}</dd>
            </div>
          )}
        </dl>
      )}

      <p className="mt-6 text-lg text-zinc-300 leading-relaxed">{work.excerpt}</p>
      {work.description && (
        <p className="mt-4 text-zinc-400 leading-relaxed">{work.description}</p>
      )}

      {work.highlight && (
        <p className="mt-6 rounded-xl border border-emerald-500/20 bg-emerald-500/5 px-4 py-3 text-sm text-emerald-300">
          {work.highlight}
        </p>
      )}

      <div className="mt-8">
        <h2 className="text-sm font-medium uppercase tracking-wider text-zinc-500">
          Tech stack
        </h2>
        <ul className="mt-3 flex flex-wrap gap-2">
          {work.techStack.map((tech) => (
            <li
              key={tech}
              className="rounded-lg border border-white/8 bg-white/[0.02] px-3 py-1.5 text-sm text-zinc-300"
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-10 flex flex-wrap gap-3">
        {work.href && (
          <a
            href={work.href}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-emerald-500 px-4 py-2 text-sm font-medium text-[#0b0f0d] hover:bg-emerald-400"
          >
            {work.hrefLabel ?? "View live"} →
          </a>
        )}
        {work.productSlug && (
          <Link
            href={`/products/${work.productSlug}`}
            className="rounded-lg border border-white/10 px-4 py-2 text-sm text-zinc-300 hover:border-emerald-500/40 hover:text-white"
          >
            Product deep dive →
          </Link>
        )}
        {work.caseStudySlug && (
          <Link
            href={`/case-studies/${work.caseStudySlug}`}
            className="rounded-lg border border-white/10 px-4 py-2 text-sm text-zinc-300 hover:border-emerald-500/40 hover:text-white"
          >
            Case study →
          </Link>
        )}
      </div>
    </article>
  );
}
