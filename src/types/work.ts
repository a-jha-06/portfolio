export type WorkCategory =
  | "shopify"
  | "react"
  | "wordpress"
  | "ai"
  | "commerce";

export type WorkStatus = "shipped" | "in-progress" | "concept";

export type Work = {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  description?: string;
  category: WorkCategory;
  role?: string;
  client?: string;
  year?: string;
  status: WorkStatus;
  techStack: string[];
  highlight?: string;
  href?: string;
  hrefLabel?: string;
  productSlug?: string;
  caseStudySlug?: string;
  featured?: boolean;
};
