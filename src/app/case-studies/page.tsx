import { CaseStudyCard } from "@/components/case-studies/CaseStudyCard";
import { Section } from "@/components/shared/Section";
import { getCaseStudies } from "@/lib/content";

export const metadata = { title: "Case Studies" };

export default async function CaseStudiesPage() {
  const studies = await getCaseStudies();

  return (
    <Section
      eyebrow="Outcomes"
      title="Case studies"
      description="Problem → solution → impact, with metrics that matter to merchants and stakeholders."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {studies.map((s) => (
          <CaseStudyCard key={s._id} study={s} />
        ))}
      </div>
    </Section>
  );
}
