import { Section } from "@/components/shared/Section";

export const metadata = { title: "About" };

export default function AboutPage() {
  return (
    <Section
      eyebrow="About"
      title="Shopify developer, product thinker"
      description="I build conversion-focused commerce experiences and document the complete product journey — from user pain points and UX decisions to monetization and scalable growth.

As a Lead Shopify Developer with 5+ years of experience in luxury e-commerce, I specialize in building high-performance commerce solutions that blend technical execution with product thinking. Currently at PALMONAS, I lead end-to-end product development across technical architecture, custom integrations, storefront optimization, and cross-functional collaboration.

My focus lies in creating scalable, user-centric shopping experiences for jewelry and premium retail brands — with a strong emphasis on performance, conversion, and long-term product growth."
    >
      <div className="prose prose-invert max-w-2xl space-y-4 text-zinc-300 leading-relaxed">
        <p>
          This site is a personal product portfolio — not a generic dev resume.
          Each project includes case studies, PRDs, roadmaps, and competitive
          analysis so hiring managers and founders see how I think, not just
          what I code.
        </p>
       
      </div>
    </Section>
  );
}
