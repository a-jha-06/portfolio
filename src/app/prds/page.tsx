import { PRDExpandable } from "@/components/prds/PRDExpandable";
import { Section } from "@/components/shared/Section";
import { getPRDs } from "@/lib/content";

export const metadata = { title: "PRDs" };

export default async function PRDsPage() {
  const prds = await getPRDs();

  return (
    <Section
      eyebrow="Documentation"
      title="PRD library"
      description="Click any PRD to expand. Manage full documents in Sanity CMS."
    >
      <div className="max-w-3xl space-y-4">
        {prds.map((prd) => (
          <PRDExpandable key={prd._id} prd={prd} />
        ))}
      </div>
    </Section>
  );
}
