import type { Work } from "@/types/work";

/** Client & shipped Shopify stores */
export const clientWorks: Work[] = [
  {
    _id: "work-palmonas",
    title: "PALMONAS",
    slug: "palmonas",
    excerpt:
      "Demifine jewellery storefront — 18K gold plated collections, gifting, and high-AOV UX for 8L+ customers. Lead Shopify development & integrations.",
    description:
      "Premium Indian demifine jewellery brand with complex merchandising (B1G1, bundles, pincode delivery), large catalog taxonomy, and conversion-focused PDPs. Ongoing lead development across theme, checkout, and ops tooling.",
    category: "shopify",
    role: "Lead Shopify Developer",
    client: "PALMONAS",
    year: "2024 — Present",
    status: "shipped",
    techStack: ["Shopify", "Liquid", "JavaScript", "Razorpay", "GoKwik", "Theme UX"],
    highlight: "Demifine jewellery · 8L+ customers",
    href: "https://palmonas.com/",
    hrefLabel: "Visit palmonas.com",
    featured: true,
  },
  {
    _id: "work-trevito",
    title: "TRÉVITO Lifestyle",
    slug: "trevito-lifestyle",
    excerpt:
      "Premium fragrance DTC — men, women & gift sets with tiered promos, IFRA-certified positioning, and marketplace presence (Amazon, Flipkart, Myntra).",
    description:
      "Shopify store for long-lasting EDP perfumes with campaign banners, collection-led navigation, and sale-driven PDPs. Built for a lifestyle fragrance brand emphasizing quality ingredients and Indian market fit.",
    category: "shopify",
    role: "Shopify Developer",
    client: "TRÉVITO Lifestyle",
    status: "shipped",
    techStack: ["Shopify", "Liquid", "JavaScript", "Promotions", "DTC UX"],
    highlight: "Premium fragrances · Gift sets",
    href: "https://www.trevitolifestyle.com/",
    hrefLabel: "Visit trevitolifestyle.com",
    featured: true,
  },
  {
    _id: "work-titbit",
    title: "Tit-Bit Spices",
    slug: "titbit-spices",
    excerpt:
      "Authentic Indian spice & masala mixes — NONG ranges, combos, recipes hub, B2B flows, and review-driven social proof on Shopify.",
    description:
      "Tit Bit Foods (India) Pvt Ltd — catalog-heavy spice brand with blended spices, No Onion No Garlic (NONG) lines, recipe content, and tiered cart discounts. Store optimized for repeat purchase and discovery.",
    category: "shopify",
    role: "Shopify Developer",
    client: "Tit Bit Foods (India)",
    status: "shipped",
    techStack: ["Shopify", "Liquid", "JavaScript", "Catalog UX", "Content"],
    highlight: "FMCG spices · Recipes & B2B",
    href: "https://www.titbitspices.com/",
    hrefLabel: "Visit titbitspices.com",
    featured: true,
  },
  {
    _id: "work-eternal-ganges",
    title: "Eternal Ganges",
    slug: "eternal-ganges",
    excerpt:
      "Custom Next.js site for a spiritual / lifestyle brand — brand storytelling, performance-focused UX, and a tailored commerce experience.",
    description:
      "Built from scratch on Next.js (not Shopify) — custom routing, components, and deployment for a premium spiritual/lifestyle brand with editorial content and product discovery.",
    category: "react",
    role: "Next.js Developer",
    client: "Eternal Ganges",
    status: "shipped",
    techStack: ["Next.js", "React", "TypeScript", "JavaScript", "Custom UI"],
    highlight: "Custom Next.js · Not Shopify",
    href: "https://www.eternalganges.com/",
    hrefLabel: "Visit eternalganges.com",
    featured: true,
  },
  {
    _id: "work-bijan",
    title: "House of Bijan",
    slug: "house-of-bijan",
    excerpt:
      "Luxury menswear e-boutique on custom React.js — bespoke tailoring, fragrances, and appointment-only brand experience (est. 1976).",
    description:
      "Ultra-premium menswear house built with React.js: curated shop-by-category (shirts, tie sets, fragrances, shoes), worldwide shipping, currency switching, and editorial brand history — crafted for gentlemen of taste.",
    category: "react",
    role: "React.js Developer",
    client: "House of Bijan",
    status: "shipped",
    techStack: ["React.js", "JavaScript", "CSS", "Luxury UX", "International"],
    highlight: "Custom React.js · Luxury retail",
    href: "https://www.bijan.com/",
    hrefLabel: "Visit bijan.com",
    featured: true,
  },
  {
    _id: "work-signal88",
    title: "Signal 88 Security",
    slug: "signal-88-security",
    excerpt:
      "Corporate security services site on React.js — service verticals, lead capture, director profiles, and gallery for B2B inquiries.",
    description:
      "Signal 88 Private Limited — custom React.js build for India-wide security services: industrial, fire fighting, mall & hospital security, VIP ex-marine commandos, vision/mission, and contact flows.",
    category: "react",
    role: "React.js Developer",
    client: "Signal 88 Security",
    status: "shipped",
    techStack: ["React.js", "JavaScript", "HTML", "CSS", "Responsive UI"],
    highlight: "Custom React.js · B2B leads",
    href: "https://www.signal88security.in/",
    hrefLabel: "Visit signal88security.in",
    featured: true,
  },
];

/** Product builds, experiments & internal showcases */
export const projectWorks: Work[] = [
  {
    _id: "work-mto-pricing",
    title: "Make-To-Order Dynamic Pricing",
    slug: "make-to-order-dynamic-pricing",
    excerpt:
      "Shipped per-item customization with real-time price updates (Liquid + JS) and server-side checkout validation.",
    description:
      "Dual-layer pricing architecture: instant client-side estimates for perceived speed, authoritative server validation before checkout.",
    category: "shopify",
    role: "Shopify Developer",
    status: "shipped",
    techStack: ["Shopify", "Liquid", "JavaScript"],
    highlight: "Speed + trust UX pattern",
    productSlug: "make-to-order-dynamic-pricing",
    caseStudySlug: "make-to-order-dynamic-pricing",
    href: "https://lnkd.in/dmyd6wJa",
    hrefLabel: "Read article",
    featured: false,
  },
  {
    _id: "work-shop-the-look",
    title: "Shop The Look — Visual Commerce",
    slug: "shop-the-look",
    excerpt:
      "Interactive lifestyle imagery with hotspot tagging, bundle cart UX, and AOV-focused purchase flows.",
    category: "commerce",
    role: "Product & development",
    status: "in-progress",
    techStack: ["Shopify", "Liquid", "React"],
    highlight: "+20–35% AOV potential",
    productSlug: "shop-the-look",
    caseStudySlug: "shop-the-look",
    featured: false,
  },
  {
    _id: "work-ai-blog",
    title: "AI Blog Creator",
    slug: "ai-blog-creator",
    excerpt:
      "AI-assisted content workflow for merchants — SEO-friendly blog drafts tied to catalog and campaigns.",
    category: "ai",
    role: "Builder",
    status: "shipped",
    techStack: ["Next.js", "AI APIs", "Shopify"],
    productSlug: "AI-Blog_creator",
    featured: false,
  },
  {
    _id: "work-product-portfolio",
    title: "Product Portfolio Site (This Site)",
    slug: "product-portfolio",
    excerpt:
      "Next.js portfolio with case studies, PRDs, roadmaps, and Sanity CMS.",
    category: "react",
    role: "Builder",
    status: "shipped",
    techStack: ["Next.js", "TypeScript", "Tailwind", "Sanity CMS"],
    href: "https://amisha-jha-portfolio.vercel.app/",
    hrefLabel: "Previous portfolio",
    featured: false,
  },
];

export const sampleWorks: Work[] = [...clientWorks, ...projectWorks];
