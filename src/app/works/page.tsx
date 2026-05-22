import { WorkCard } from "@/components/works/WorkCard";
import { Section } from "@/components/shared/Section";
import { getClientWorks, getProjectWorks } from "@/lib/works";

export const metadata = {
  title: "Sample Work",
  description:
    "Shipped client sites — PALMONAS, TRÉVITO, Tit-Bit, Eternal Ganges, Bijan, Signal 88 Security — plus product builds.",
};

export default async function WorksPage() {
  const [clients, projects] = await Promise.all([
    getClientWorks(),
    getProjectWorks(),
  ]);

  return (
    <>
      <Section
        eyebrow="Client work"
        title="Live Shopify stores"
        description="Production storefronts and corporate sites — e-commerce, luxury, FMCG, and B2B security services."
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {clients.map((work) => (
            <WorkCard key={work._id} work={work} />
          ))}
        </div>
      </Section>

      {projects.length > 0 && (
        <Section
          eyebrow="Product & experiments"
          title="Builds & deep dives"
          description="Product concepts, technical articles, and tools — with case studies and PRDs on this site."
          className="bg-white/[0.02]"
        >
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((work) => (
              <WorkCard key={work._id} work={work} />
            ))}
          </div>
        </Section>
      )}
    </>
  );
}
