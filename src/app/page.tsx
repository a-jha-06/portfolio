import Link from "next/link";
import { Hero } from "@/components/home/Hero";
import { Section } from "@/components/shared/Section";
import { ProductCard } from "@/components/products/ProductCard";
import { CaseStudyCard } from "@/components/case-studies/CaseStudyCard";
import { PRDExpandable } from "@/components/prds/PRDExpandable";
import { WorkCard } from "@/components/works/WorkCard";
import { getFeaturedProducts, getCaseStudies, getPRDs } from "@/lib/content";
import { getFeaturedWorks } from "@/lib/works";

export default async function HomePage() {
  const [products, works, caseStudies, prds] = await Promise.all([
    getFeaturedProducts(),
    getFeaturedWorks(),
    getCaseStudies(),
    getPRDs(),
  ]);

  return (
    <>
      <Hero />

      {/* {isUsingSampleData() && (
        <div className="border-b border-amber-500/20 bg-amber-500/10 px-4 py-2 text-center text-sm text-amber-200">
          Showing sample content — set{" "}
          <code className="text-amber-100">SANITY_STUDIO_PROJECT_ID</code> /{" "}
          <code className="text-amber-100">NEXT_PUBLIC_SANITY_PROJECT_ID</code> in{" "}
          <code className="text-amber-100">.env.local</code> and manage content with{" "}
          <code className="text-amber-100">npm run cms</code> (not on this site).
        </div>
      )} */}

      <Section
        id="product-ideas"
        eyebrow="01 — Product Ideas"
        title="App concepts, SaaS ideas & opportunities"
        description="Showcase what you're building — not just what you've shipped. Each card links to full product thinking."
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <ProductCard key={p._id} product={p} />
          ))}
        </div>
        <Link
          href="/products"
          className="mt-8 inline-block text-sm font-medium text-emerald-400 hover:text-emerald-300"
        >
          View all products →
        </Link>
      </Section>

      <Section
        id="sample-work"
        eyebrow="02 — Sample Work"
        title="Live Shopify stores"
        description="PALMONAS, TRÉVITO, Tit-Bit, Eternal Ganges, House of Bijan, Signal 88 Security — shipped client sites."
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {works.map((work) => (
            <WorkCard key={work._id} work={work} />
          ))}
        </div>
        <Link
          href="/works"
          className="mt-8 inline-block text-sm font-medium text-emerald-400 hover:text-emerald-300"
        >
          View all work →
        </Link>
      </Section>

      <Section
        id="case-studies"
        eyebrow="03 — Case Studies"
        title="Problem, solution, impact"
        description="Metrics-driven narratives that prove product outcomes — like Shop The Look's AOV and bundle UX story."
        className="bg-white/[0.02]"
      >
        <div className="grid gap-6 md:grid-cols-2">
          {caseStudies.map((s) => (
            <CaseStudyCard key={s._id} study={s} />
          ))}
        </div>
      </Section>

      <Section
        id="product-thinking"
        eyebrow="04 — Product Thinking"
        title="Think like a PM, not just a dev"
        description="Every product page covers merchant pain, UX reasoning, monetization, and scalability."
      >
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {[
            { title: "Merchant pain", desc: "Why stores struggle today" },
            { title: "UX reasoning", desc: "Conversion-first flows" },
            { title: "Monetization", desc: "SaaS tiers & revenue logic" },
            { title: "Scalability", desc: "MVP → enterprise path" },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-white/8 p-5"
            >
              <h3 className="font-semibold text-white">{item.title}</h3>
              <p className="mt-1 text-sm text-zinc-400">{item.desc}</p>
            </div>
          ))}
        </div>
        {products[0] && (
          <Link
            href={`/products/${products[0].slug}`}
            className="mt-8 inline-block rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-300"
          >
            See full product thinking: {products[0].title} →
          </Link>
        )}
      </Section>

      <Section
        id="prds"
        eyebrow="PRD Library"
        title="Expandable PRDs"
        description="Click to expand summaries. Full PRDs live on dedicated pages."
        className="bg-white/[0.02]"
      >
        <div className="space-y-4">
          {prds.map((prd) => (
            <PRDExpandable key={prd._id} prd={prd} />
          ))}
        </div>
        <Link
          href="/prds"
          className="mt-6 inline-block text-sm text-emerald-400"
        >
          Full PRD library →
        </Link>
      </Section>
    </>
  );
}
