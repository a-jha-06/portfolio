import type { PortableTextBlock } from "@portabletext/types";

export type Metric = { label: string; value: string; description?: string };

export type Product = {
  _id: string;
  title: string;
  slug: string;
  tagline?: string;
  category?: "app-concept" | "saas" | "business-opportunity";
  status?: "idea" | "mvp" | "shipped";
  excerpt?: string;
  featured?: boolean;
  thumbnail?: SanityImage;
  problem?: PortableTextBlock[];
  solution?: PortableTextBlock[];
  features?: string[];
  whyIBuiltThis?: {
    merchantPain?: string;
    conversionGap?: string;
    businessOpportunity?: string;
  };
  productThinking?: {
    whyMerchantsNeedThis?: string;
    painPoints?: string[];
    uxReasoning?: string;
    monetizationLogic?: string;
    scalability?: string;
  };
  roadmap?: {
    mvp?: string[];
    v2?: string[];
    future?: string[];
  };
  competitiveAnalysis?: {
    name?: string;
    gaps?: string;
    differentiator?: string;
  }[];
  screenshots?: SanityImage[];
  userFlowImages?: SanityImage[];
  businessImpact?: PortableTextBlock[];
  monetization?: PortableTextBlock[];
  technicalArchitecture?: PortableTextBlock[];
  metrics?: Metric[];
  articleUrl?: string;
  articleLabel?: string;
};

export type CaseStudy = {
  _id: string;
  title: string;
  slug: string;
  excerpt?: string;
  coverImage?: SanityImage;
  productSlug?: string;
  problem?: PortableTextBlock[];
  solution?: PortableTextBlock[];
  impact?: PortableTextBlock[];
  metrics?: Metric[];
  product?: { title: string; slug: string };
  articleUrl?: string;
  articleLabel?: string;
};

export type PRD = {
  _id: string;
  title: string;
  slug: string;
  summary?: string;
  status?: string;
  body?: PortableTextBlock[];
  productSlug?: string;
  productTitle?: string;
  product?: { title: string; slug: string };
};

export type SanityImage = {
  _type: "image";
  asset: { _ref: string; _type: "reference" };
  alt?: string;
};
