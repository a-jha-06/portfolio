import { client, isSanityConfigured } from "@/lib/sanity/client";
import {
  caseStudiesQuery,
  caseStudyBySlugQuery,
  featuredProductsQuery,
  prdBySlugQuery,
  prdsQuery,
  productBySlugQuery,
  productsQuery,
} from "@/lib/sanity/queries";
import {
  sampleCaseStudies,
  samplePRDs,
  sampleProducts,
} from "@/data/sample-data";
import type { CaseStudy, PRD, Product } from "@/types/content";

async function fetchSanity<T>(
  query: string,
  params: { slug: string }
): Promise<T | null> {
  if (!isSanityConfigured) return null;
  try {
    return await client.fetch<T>(query, params);
  } catch {
    return null;
  }
}

async function fetchSanityList<T>(query: string): Promise<T | null> {
  if (!isSanityConfigured) return null;
  try {
    return await client.fetch<T>(query);
  } catch {
    return null;
  }
}

export async function getProducts(): Promise<Product[]> {
  const data = await fetchSanityList<Product[]>(productsQuery);
  return data?.length ? data : sampleProducts;
}

export async function getFeaturedProducts(): Promise<Product[]> {
  const data = await fetchSanityList<Product[]>(featuredProductsQuery);
  if (data?.length) return data;
  return sampleProducts.filter((p) => p.featured);
}

export async function getProductBySlug(slug: string): Promise<Product | null> {
  const data = await fetchSanity<Product>(productBySlugQuery, { slug });
  if (data) return data;
  return sampleProducts.find((p) => p.slug === slug) ?? null;
}

export async function getCaseStudies(): Promise<CaseStudy[]> {
  const data = await fetchSanityList<CaseStudy[]>(caseStudiesQuery);
  return data?.length ? data : sampleCaseStudies;
}

export async function getCaseStudyBySlug(slug: string): Promise<CaseStudy | null> {
  const data = await fetchSanity<CaseStudy>(caseStudyBySlugQuery, { slug });
  if (data) return data;
  return sampleCaseStudies.find((c) => c.slug === slug) ?? null;
}

export async function getPRDs(): Promise<PRD[]> {
  const data = await fetchSanityList<PRD[]>(prdsQuery);
  return data?.length ? data : samplePRDs;
}

export async function getPRDBySlug(slug: string): Promise<PRD | null> {
  const data = await fetchSanity<PRD>(prdBySlugQuery, { slug });
  if (data) return data;
  return samplePRDs.find((p) => p.slug === slug) ?? null;
}

export function isUsingSampleData() {
  return !isSanityConfigured;
}
