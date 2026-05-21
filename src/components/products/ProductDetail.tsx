import Link from "next/link";
import { PortableText } from "@/components/shared/PortableText";
import type { Product } from "@/types/content";

function TextBlock({ title, children }: { title: string; children?: React.ReactNode }) {
  if (!children) return null;
  return (
    <div className="rounded-xl border border-white/8 bg-white/[0.02] p-6">
      <h3 className="mb-3 text-lg font-semibold text-white">{title}</h3>
      <div className="text-zinc-300 leading-relaxed">{children}</div>
    </div>
  );
}

function ListBlock({ title, items }: { title: string; items?: string[] }) {
  if (!items?.length) return null;
  return (
    <div className="rounded-xl border border-white/8 bg-white/[0.02] p-6">
      <h3 className="mb-3 text-lg font-semibold text-white">{title}</h3>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item} className="flex gap-2 text-zinc-300">
            <span className="text-emerald-500">•</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function ProductDetail({ product }: { product: Product }) {
  const pt = product.productThinking;
  const why = product.whyIBuiltThis;
  const roadmap = product.roadmap;

  return (
    <article>
      <header className="border-b border-white/5 pb-12">
        <div className="mx-auto max-w-6xl px-4 pt-12 sm:px-6">
          <Link
            href="/products"
            className="mb-6 inline-block text-sm text-zinc-500 hover:text-emerald-400"
          >
            ← All products
          </Link>
          <p className="mb-2 text-sm font-medium uppercase tracking-wider text-emerald-400">
            Product showcase
          </p>
          <h1 className="max-w-3xl text-3xl font-semibold tracking-tight text-white md:text-4xl">
            {product.title}
          </h1>
          {product.tagline && (
            <p className="mt-4 max-w-2xl text-lg text-zinc-400">{product.tagline}</p>
          )}
          {product.articleUrl && (
            <a
              href={product.articleUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-300 hover:bg-emerald-500/20"
            >
              📖 {product.articleLabel ?? "Read full article"} →
            </a>
          )}
          {product.metrics && product.metrics.length > 0 && (
            <dl className="mt-8 grid gap-4 sm:grid-cols-3">
              {product.metrics.map((m) => (
                <div
                  key={m.label}
                  className="rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-4"
                >
                  <dt className="text-xs uppercase tracking-wide text-zinc-500">
                    {m.label}
                  </dt>
                  <dd className="mt-1 text-2xl font-semibold text-emerald-300">
                    {m.value}
                  </dd>
                </div>
              ))}
            </dl>
          )}
        </div>
      </header>

      <div className="mx-auto max-w-6xl space-y-12 px-4 py-12 sm:px-6">
        {why && (
          <section>
            <h2 className="mb-6 text-2xl font-semibold text-white">Why I Built This</h2>
            <div className="grid gap-4 md:grid-cols-3">
              <TextBlock title="Merchant pain">{why.merchantPain}</TextBlock>
              <TextBlock title="Conversion gap">{why.conversionGap}</TextBlock>
              <TextBlock title="Business opportunity">
                {why.businessOpportunity}
              </TextBlock>
            </div>
          </section>
        )}

        <section className="grid gap-4 md:grid-cols-2">
          {product.problem && (
            <div className="rounded-xl border border-white/8 p-6">
              <h3 className="mb-3 text-lg font-semibold text-white">Problem</h3>
              <PortableText value={product.problem} />
            </div>
          )}
          {product.solution && (
            <div className="rounded-xl border border-white/8 p-6">
              <h3 className="mb-3 text-lg font-semibold text-white">Solution</h3>
              <PortableText value={product.solution} />
            </div>
          )}
        </section>

        <ListBlock title="Features" items={product.features} />

        {pt && (
          <section>
            <h2 className="mb-2 text-2xl font-semibold text-white">Product Thinking</h2>
            <p className="mb-6 max-w-2xl text-zinc-400">
              Why merchants need this, how it scales, and how it makes money — the PM lens.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              <TextBlock title="Why merchants need this">
                {pt.whyMerchantsNeedThis}
              </TextBlock>
              <TextBlock title="UX reasoning">{pt.uxReasoning}</TextBlock>
              <TextBlock title="Monetization logic">{pt.monetizationLogic}</TextBlock>
              <TextBlock title="Scalability">{pt.scalability}</TextBlock>
            </div>
            {pt.painPoints && pt.painPoints.length > 0 && (
              <div className="mt-4 rounded-xl border border-white/8 p-6">
                <h3 className="mb-3 font-semibold text-white">Pain points</h3>
                <ul className="grid gap-2 sm:grid-cols-2">
                  {pt.painPoints.map((p) => (
                    <li key={p} className="text-zinc-300">
                      <span className="mr-2 text-red-400/80">×</span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </section>
        )}

        {roadmap && (
          <section>
            <h2 className="mb-6 text-2xl font-semibold text-white">Roadmap</h2>
            <div className="grid gap-4 md:grid-cols-3">
              <ListBlock title="MVP scope" items={roadmap.mvp} />
              <ListBlock title="V2 features" items={roadmap.v2} />
              <ListBlock title="Future scaling" items={roadmap.future} />
            </div>
          </section>
        )}

        {product.competitiveAnalysis && product.competitiveAnalysis.length > 0 && (
          <section>
            <h2 className="mb-6 text-2xl font-semibold text-white">
              Competitive Analysis
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[600px] text-left text-sm">
                <thead>
                  <tr className="border-b border-white/10 text-zinc-500">
                    <th className="py-3 pr-4 font-medium">Existing apps</th>
                    <th className="py-3 pr-4 font-medium">Gaps</th>
                    <th className="py-3 font-medium">Your differentiator</th>
                  </tr>
                </thead>
                <tbody>
                  {product.competitiveAnalysis.map((row) => (
                    <tr
                      key={row.name}
                      className="border-b border-white/5 text-zinc-300"
                    >
                      <td className="py-4 pr-4 font-medium text-white">
                        {row.name}
                      </td>
                      <td className="py-4 pr-4">{row.gaps}</td>
                      <td className="py-4 text-emerald-300/90">
                        {row.differentiator}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {(product.businessImpact || product.monetization || product.technicalArchitecture) && (
          <section className="grid gap-4 md:grid-cols-3">
            {product.businessImpact && (
              <div className="rounded-xl border border-white/8 p-6">
                <h3 className="mb-3 font-semibold text-white">Business Impact</h3>
                <PortableText value={product.businessImpact} />
              </div>
            )}
            {product.monetization && (
              <div className="rounded-xl border border-white/8 p-6">
                <h3 className="mb-3 font-semibold text-white">Monetization</h3>
                <PortableText value={product.monetization} />
              </div>
            )}
            {product.technicalArchitecture && (
              <div className="rounded-xl border border-white/8 p-6">
                <h3 className="mb-3 font-semibold text-white">
                  Technical Architecture
                </h3>
                <PortableText value={product.technicalArchitecture} />
              </div>
            )}
          </section>
        )}

        <section className="rounded-xl border border-dashed border-white/10 p-8 text-center">
          <h3 className="text-lg font-medium text-zinc-300">Screenshots & user flows</h3>
          <p className="mt-2 text-sm text-zinc-500">
            Upload visuals in Sanity CMS → Product → Screenshots / User Flow Images
          </p>
        </section>

        <div className="flex flex-wrap gap-4">
          <Link
            href={`/case-studies/${product.slug}`}
            className="rounded-lg border border-white/10 px-4 py-2 text-sm text-zinc-300 hover:border-emerald-500/40 hover:text-white"
          >
            Read case study →
          </Link>
          <Link
            href="/prds"
            className="rounded-lg bg-emerald-500/15 px-4 py-2 text-sm font-medium text-emerald-300 ring-1 ring-emerald-500/30 hover:bg-emerald-500/25"
          >
            View PRDs →
          </Link>
        </div>
      </div>
    </article>
  );
}
