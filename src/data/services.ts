export type TechItem = {
  name: string;
  icon?: string;
  description?: string;
};

export type ServiceCategory = {
  title: string;
  description: string;
  items: TechItem[];
};

/** Tech stack & services aligned with https://amisha-jha-portfolio.vercel.app/ */
export const serviceIntro =
  "I specialize in building high-performing, brand-aligned Shopify storefronts with deep Liquid customization, scalable architecture, and seamless integrations. Beyond crafting reusable sections and optimized checkout flows, I streamline operations and advise on performance, SEO, and scalable growth for modern commerce.";

export const techStackCategories: ServiceCategory[] = [
  {
    title: "Frontend & frameworks",
    description: "Building fast, conversion-focused storefronts and product experiences.",
    items: [
      { name: "React.js", icon: "⚛️", description: "Component-driven UIs, hooks, state management" },
      { name: "Next.js", icon: "⚛️", description: "SSR, App Router, performance-first apps" },
      { name: "JavaScript", icon: "💻", description: "ES6+, async flows, DOM & API integration" },
      { name: "HTML", icon: "🌐", description: "Semantic markup, accessibility basics" },
      { name: "CSS", icon: "🎨", description: "Responsive layouts, animations, design systems" },
    ],
  },
  {
    title: "Shopify & e-commerce",
    description: "4+ years shipping custom themes, Plus stores, and conversion-critical flows.",
    items: [
      { name: "Shopify", icon: "🛍️", description: "Themes, apps, storefront customization" },
      { name: "Shopify Plus", icon: "➕", description: "Checkout extensibility, B2B, scale" },
      { name: "Liquid", icon: "💧", description: "Dynamic templates, MTO pricing, sections" },
      { name: "Theme architecture", icon: "🏗️", description: "Reusable sections, JSON templates" },
      { name: "SEO & performance", icon: "📈", description: "Core Web Vitals, structured data" },
    ],
  },
  {
    title: "CMS & platforms",
    description: "Content-driven sites, blogs, and commerce beyond Shopify.",
    items: [
      {
        name: "WordPress",
        icon: "📝",
        description: "Custom themes, plugins, WooCommerce, Gutenberg blocks, and site migrations",
      },
    ],
  },
  {
    title: "Integrations & tooling",
    description: "Payments, ops, POS, and automation that connect the full stack.",
    items: [
      { name: "Razorpay", description: "Payment gateway integration" },
      { name: "GoKwik", description: "Checkout optimization" },
      { name: "Simpl", description: "BNPL / checkout flows" },
      { name: "Matrixify", description: "Bulk import/export operations" },
      { name: "Flits", description: "Loyalty & customer accounts" },
      { name: "Ginesys POS", description: "Unified retail + online commerce" },
      { name: "Node.js", icon: "🖥️", description: "APIs, scripts, backend utilities" },
      { name: "Firebase", icon: "🔥", description: "Auth, realtime, lightweight backends" },
    ],
  },
  {
    title: "Design & workflow",
    description: "From Figma handoff to version-controlled, shippable code.",
    items: [
      { name: "Figma", icon: "🎨", description: "UI specs, component libraries" },
      { name: "Git", icon: "🔧", description: "Branching, PRs, team collaboration" },
      { name: "Webpack", icon: "📦", description: "Asset bundling & build pipelines" },
      { name: "AI-powered tools", icon: "🤖", description: "Workflow automation for e-commerce" },
    ],
  },
];

export const commerceServices = [
  {
    title: "Custom Shopify themes",
    detail: "Brand-aligned storefronts with reusable sections and optimized PDP/collection templates.",
  },
  {
    title: "Checkout & payments",
    detail: "Razorpay, GoKwik, Simpl, and conversion-focused checkout UX on Plus and standard plans.",
  },
  {
    title: "Dynamic pricing & MTO",
    detail: "Make-to-order flows with client-side estimates and server-authoritative validation (Liquid + JS).",
  },
  {
    title: "Operations & data",
    detail: "Matrixify, Flits, catalog sync, and tooling that keeps merchandising teams unblocked.",
  },
  {
    title: "POS & unified commerce",
    detail: "Shopify POS integrations with Ginesys for online + retail inventory alignment.",
  },
  {
    title: "WordPress development",
    detail: "Custom themes, plugin integration, WooCommerce setups, and performance tuning for content-heavy sites.",
  },
  {
    title: "Technical consulting",
    detail: "Architecture reviews, performance strategy, and scalable growth recommendations.",
  },
];
