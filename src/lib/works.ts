import { clientWorks, projectWorks, sampleWorks } from "@/data/sample-works";
import type { Work } from "@/types/work";

export async function getWorks(): Promise<Work[]> {
  return sampleWorks;
}

export async function getClientWorks(): Promise<Work[]> {
  return clientWorks;
}

export async function getProjectWorks(): Promise<Work[]> {
  return projectWorks;
}

export async function getFeaturedWorks(): Promise<Work[]> {
  return clientWorks;
}

export async function getWorkBySlug(slug: string): Promise<Work | null> {
  return sampleWorks.find((w) => w.slug === slug) ?? null;
}
