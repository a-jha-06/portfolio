export const productsQuery = `*[_type == "product"] | order(order asc, _createdAt desc) {
  _id,
  title,
  "slug": slug.current,
  tagline,
  category,
  status,
  excerpt,
  featured,
  articleUrl,
  articleLabel,
  thumbnail
}`;

export const productBySlugQuery = `*[_type == "product" && slug.current == $slug][0] {
  _id,
  title,
  "slug": slug.current,
  tagline,
  category,
  status,
  excerpt,
  problem,
  solution,
  features,
  whyIBuiltThis,
  productThinking,
  roadmap,
  competitiveAnalysis,
  screenshots,
  userFlowImages,
  businessImpact,
  monetization,
  technicalArchitecture,
  metrics,
  articleUrl,
  articleLabel,
  thumbnail
}`;

export const featuredProductsQuery = `*[_type == "product" && featured == true] | order(order asc)[0...6] {
  _id,
  title,
  "slug": slug.current,
  tagline,
  category,
  status,
  excerpt,
  thumbnail
}`;

export const caseStudiesQuery = `*[_type == "caseStudy"] | order(publishedAt desc) {
  _id,
  title,
  "slug": slug.current,
  excerpt,
  articleUrl,
  articleLabel,
  coverImage,
  "productSlug": product->slug.current,
  metrics
}`;

export const caseStudyBySlugQuery = `*[_type == "caseStudy" && slug.current == $slug][0] {
  _id,
  title,
  "slug": slug.current,
  excerpt,
  articleUrl,
  articleLabel,
  coverImage,
  problem,
  solution,
  impact,
  metrics,
  "product": product->{ title, "slug": slug.current }
}`;

export const prdsQuery = `*[_type == "prd"] | order(publishedAt desc) {
  _id,
  title,
  "slug": slug.current,
  summary,
  status,
  "productSlug": product->slug.current,
  "productTitle": product->title
}`;

export const prdBySlugQuery = `*[_type == "prd" && slug.current == $slug][0] {
  _id,
  title,
  "slug": slug.current,
  summary,
  status,
  body,
  "product": product->{ title, "slug": slug.current }
}`;
