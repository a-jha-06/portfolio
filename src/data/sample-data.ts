import type { CaseStudy, PRD, Product } from "@/types/content";
import type { PortableTextBlock } from "@portabletext/types";

const MTO_SLUG = "make-to-order-dynamic-pricing";
const MTO_ARTICLE = "https://lnkd.in/dmyd6wJa";

function block(
  key: string,
  text: string,
  style: "normal" | "h2" | "h3" = "normal",
  listItem?: "bullet"
): PortableTextBlock {
  return {
    _type: "block",
    _key: key,
    style,
    ...(listItem ? { listItem } : {}),
    children: [{ _type: "span", _key: `${key}-span`, text }],
    markDefs: [],
  };
}

export const sampleProducts: Product[] = [
  {
    _id: "sample-mto-dynamic-pricing",
    title: "Make-To-Order Dynamic Pricing",
    slug: MTO_SLUG,
    tagline:
      "Per-item customization with real-time price recalculation — instant UX, server-authoritative checkout",
    category: "app-concept",
    status: "shipped",
    featured: true,
    excerpt:
      "Built MTO on Shopify with Liquid + JavaScript: client-side estimates for speed, server validation for trust.",
    articleUrl: MTO_ARTICLE,
    articleLabel: "Full architecture breakdown (LinkedIn article)",
    problem: [
      block(
        "mto-problem",
        "Customers needed per-item customization (options, materials, dimensions) with prices that update as they configure — without waiting for a full page reload or discovering a different total at checkout."
      ),
    ],
    solution: [
      block(
        "mto-solution",
        "A dual-layer pricing system: client-side JavaScript for instant UI updates and DOM price refreshes, plus Liquid-rendered baseline prices and a server-side validation step before checkout so the final amount is always authoritative."
      ),
    ],
    features: [
      "Real-time per-option price deltas in the browser",
      "Liquid-rendered price baselines on first paint (SEO + no-JS fallback)",
      "Pre-checkout validation endpoint / cart attribute sync",
      "Estimated vs. Final price labeling in the UI",
      "Edge cases: quantity changes, option dependencies, currency formatting",
    ],
    whyIBuiltThis: {
      merchantPain:
        "Make-to-order merchants lose sales when customization feels slow or opaque — shoppers abandon when they can't see price impact immediately or when checkout totals don't match what they saw on the PDP.",
      conversionGap:
        "Tiny UX details make or break conversion: a 200ms delay on price updates feels broken; a mismatch between 'shown' and 'charged' price destroys trust permanently.",
      businessOpportunity:
        "MTO and configured products command higher margins. Getting pricing UX right increases completed configurations and reduces support tickets about 'wrong charges'.",
    },
    productThinking: {
      whyMerchantsNeedThis:
        "Shopify's default variant model doesn't cover complex option→price matrices. Merchants hack it with line item properties — without a deliberate speed vs. trust architecture, those hacks leak revenue.",
      painPoints: [
        "Full page reloads on every option change",
        "Client-only math that diverges from checkout",
        "No clear 'estimate' vs 'final' price messaging",
        "Liquid-only solutions that feel sluggish on mobile",
      ],
      uxReasoning:
        "Ship the fastest, safest feedback loop: instant browser-side estimates for perceived speed, then server-side validation before checkout. Label prices clearly — shoppers forgive estimates; they don't forgive surprises.",
      monetizationLogic:
        "Shipped as custom theme + script work; repeatable playbook for MTO brands. Could productize as a theme section + validation app for agencies.",
      scalability:
        "Validation logic moves to Shopify Functions / cart transforms as catalog rules grow. Client calculator stays a thin layer over a single source-of-truth price map from the server.",
    },
    roadmap: {
      mvp: [
        "Option→price map API or Liquid snippet",
        "Client-side calculator + DOM updates",
        "Estimated price label + checkout validation",
      ],
      v2: [
        "Admin UI for option price rules",
        "A/B test estimate copy and placement",
        "Analytics on config abandonment by step",
      ],
      future: [
        "Shopify Functions for native checkout validation",
        "Multi-currency + B2B catalog rules",
      ],
    },
    competitiveAnalysis: [
      {
        name: "Line item properties only",
        gaps: "No real-time feedback; prices opaque until cart",
        differentiator: "Instant recalculation + labeled estimate/final states",
      },
      {
        name: "Third-party product customizers",
        gaps: "Heavy widgets, inconsistent with theme, pricey",
        differentiator: "Native Liquid + lightweight JS aligned to merchant theme",
      },
      {
        name: "Server-only recalculation",
        gaps: "Correct but slow; hurts perceived performance",
        differentiator: "Dual-layer: fast client estimate, authoritative server confirm",
      },
    ],
    businessImpact: [
      block(
        "mto-impact",
        "Improved configuration completion and fewer checkout surprises. UX psychology around perceived speed and price trust directly supports conversion on high-consideration MTO purchases."
      ),
    ],
    technicalArchitecture: [
      block("mto-arch-h2", "Architecture", "h2"),
      block(
        "mto-arch-1",
        "Liquid renders initial prices and serializes a price matrix (option combinations → cents) into JSON on the PDP."
      ),
      block(
        "mto-arch-2",
        "JavaScript listens to option changes, updates displayed subtotals from the matrix, and debounces calls to a validation endpoint (or cart permalink check) before add-to-cart."
      ),
      block(
        "mto-arch-3",
        "Checkout uses server-computed totals; client estimates never bypass validation."
      ),
    ],
    monetization: [
      block(
        "mto-mon",
        "Delivered as high-value theme customization for MTO merchants; expansion path to packaged section + validation micro-service for agencies."
      ),
    ],
    metrics: [
      { label: "UX principle", value: "Speed + Trust" },
      { label: "Stack", value: "Liquid + JS" },
      { label: "Feedback loop", value: "Instant + validated" },
    ],
  },
  {
    _id: "sample-shop-the-look",
    title: "Shop The Look",
    slug: "shop-the-look",
    tagline: "Interactive visual shopping that lifts AOV through curated bundles",
    category: "app-concept",
    status: "mvp",
    featured: true,
    excerpt:
      "Let shoppers buy entire looks from lifestyle imagery—reducing friction and increasing average order value.",
    features: [
      "Hotspot tagging on lifestyle images",
      "One-click add entire look to cart",
      "Bundle pricing rules & discounts",
      "Mobile-first swipe gallery",
      "Analytics on look performance",
    ],
    whyIBuiltThis: {
      merchantPain:
        "Fashion and home merchants invest heavily in lookbooks and UGC, but those assets rarely convert. Shoppers see inspiration but must hunt for each item manually.",
      conversionGap:
        "Discovery-to-cart paths are fragmented. Each extra click drops conversion 10–15%. Look-based merchandising is visual—but checkout is still item-by-item.",
      businessOpportunity:
        "Bundle and set-based selling increases AOV 20–35% in apparel. A native 'shop the look' experience turns content spend into revenue.",
    },
    productThinking: {
      whyMerchantsNeedThis:
        "Visual commerce brands compete on aesthetic cohesion. Merchants need tools that mirror how customers actually shop—in complete outfits, not SKUs.",
      painPoints: [
        "Manual collection building for each campaign shoot",
        "No attribution on which looks drive revenue",
        "Theme limitations for interactive hotspots",
        "Third-party apps with poor mobile UX",
      ],
      uxReasoning:
        "Lead with the hero image, reveal products on tap/hover, and surface a sticky 'Add all' CTA. Minimize modal depth—purchase should feel like one decision, not five.",
      monetizationLogic:
        "Tiered SaaS: Starter (1 look/mo), Growth (unlimited looks + analytics), Plus (bundle rules + A/B). Usage-based overage on high-traffic stores.",
      scalability:
        "CDN-backed image pipeline, edge-cached look configs, webhook sync with product catalog updates. Multi-store agency dashboard in V2.",
    },
    roadmap: {
      mvp: [
        "Image upload + hotspot editor",
        "Product picker per hotspot",
        "Add-all-to-cart on PDP and landing pages",
        "Basic look analytics",
      ],
      v2: [
        "AI auto-tagging from catalog",
        "Influencer / UGC import",
        "A/B test look layouts",
        "Shopify Markets localization",
      ],
      future: [
        "Personalized looks per segment",
        "AR try-on integration",
        "Wholesale B2B look sheets",
      ],
    },
    competitiveAnalysis: [
      {
        name: "Lookbook-style gallery apps",
        gaps: "Static grids, no bundle cart, weak analytics",
        differentiator: "Conversion-first hotspots with one-click bundle purchase",
      },
      {
        name: "Shopify native bundles",
        gaps: "Not visual-first; built for SKU bundles not lifestyle imagery",
        differentiator: "Image-led UX tied to campaign creative",
      },
      {
        name: "Custom theme dev",
        gaps: "Expensive, not reusable across campaigns",
        differentiator: "Merchant-owned editor, no dev per shoot",
      },
    ],
    metrics: [
      { label: "AOV uplift potential", value: "+20–35%" },
      { label: "Clicks to purchase", value: "−3 steps" },
      { label: "Campaign reuse", value: "Unlimited looks" },
    ],
  },
  {
    _id: "sample-checkout-optimizer",
    title: "Checkout Optimizer",
    slug: "checkout-optimizer",
    tagline: "Reduce checkout abandonment with smart upsells and trust signals",
    category: "saas",
    status: "idea",
    featured: true,
    excerpt:
      "Post-purchase and pre-submit optimizations designed for Shopify Plus checkout extensibility.",
    features: [
      "Dynamic trust badges",
      "Cart recovery nudges",
      "Shipping estimate transparency",
    ],
    productThinking: {
      whyMerchantsNeedThis:
        "Checkout is the highest-leverage conversion surface. Small UX wins compound at scale.",
      painPoints: ["Opaque shipping costs", "Weak trust on mobile", "No contextual upsell"],
      uxReasoning: "Surface total cost early; never surprise at pay step.",
      monetizationLogic: "Revenue share on recovered carts above baseline.",
      scalability: "Checkout UI extensions + Functions API.",
    },
    roadmap: {
      mvp: ["Trust module", "Shipping preview"],
      v2: ["Upsell rules engine"],
      future: ["ML offer ranking"],
    },
  },
];

export const sampleCaseStudies: CaseStudy[] = [
  {
    _id: "sample-cs-mto-dynamic-pricing",
    title: "Make-To-Order Dynamic Pricing on Shopify",
    slug: MTO_SLUG,
    excerpt:
      "How dual-layer pricing (instant client estimates + server validation) solves MTO customization without sacrificing conversion or trust.",
    productSlug: MTO_SLUG,
    articleUrl: MTO_ARTICLE,
    articleLabel: "Read the full breakdown →",
    metrics: [
      {
        label: "Core insight",
        value: "Tiny UX → conversion",
        description: "Perceived speed and price trust on configured products",
      },
      {
        label: "Approach",
        value: "Liquid + JS",
        description: "Client UI updates + authoritative server pricing",
      },
      {
        label: "Lesson",
        value: "Speed + Trust",
        description: "Instant estimates; validate before checkout",
      },
    ],
    problem: [
      block(
        "cs-mto-problem",
        "Customers needed per-item customization with real-time price recalculation. Without it, configuration feels broken and checkout surprises kill trust."
      ),
    ],
    solution: [
      block("cs-mto-solution-h2", "Approach", "h2"),
      block(
        "cs-mto-s1",
        "Client-side JavaScript for instant UI updates — option changes immediately refresh displayed prices and subtotals."
      ),
      block(
        "cs-mto-s2",
        "Liquid templates + server checks for authoritative pricing — baselines on first paint, validation before checkout guarantees the final total."
      ),
    ],
    impact: [
      block(
        "cs-mto-impact",
        "Lesson learned: always ship the fastest, safest feedback loop — instant browser-side estimates plus server-side validation before checkout. Three priorities for dynamic pricing on Shopify:"
      ),
      block(
        "cs-mto-p1",
        "Perceived Speed — client-side calculation + DOM updates for that instant feel.",
        "normal",
        "bullet"
      ),
      block(
        "cs-mto-p2",
        "Backend Authority — Liquid-rendered baselines + validation endpoint so final pricing is guaranteed.",
        "normal",
        "bullet"
      ),
      block(
        "cs-mto-p3",
        "Clear UX Messaging — labeling Estimated vs. Final price prevents trust issues at pay step.",
        "normal",
        "bullet"
      ),
      block(
        "cs-mto-edge",
        "Production edge cases covered in the full write-up: option dependencies, quantity changes, currency formatting, and the speed vs. trust tradeoff when estimates diverge from server math."
      ),
    ],
  },
  {
    _id: "sample-cs-shop-the-look",
    title: "Shop The Look — Visual Commerce Case Study",
    slug: "shop-the-look",
    excerpt:
      "How interactive look-based shopping addresses AOV and discovery friction for fashion merchants.",
    productSlug: "shop-the-look",
    metrics: [
      {
        label: "AOV potential",
        value: "+20–35%",
        description: "Industry benchmark for bundle/set selling",
      },
      {
        label: "UX pattern",
        value: "Interactive hotspots",
        description: "Tap-to-reveal products on lifestyle imagery",
      },
      {
        label: "Purchase flow",
        value: "Bundle cart",
        description: "Single CTA adds all linked variants",
      },
    ],
  },
];

export const samplePRDs: PRD[] = [
  {
    _id: "sample-prd-mto-dynamic-pricing",
    title: "PRD: Make-To-Order Dynamic Pricing",
    slug: "make-to-order-dynamic-pricing-prd",
    summary:
      "Dual-layer pricing for Shopify MTO: real-time client estimates, Liquid baselines, and server validation before checkout — with clear Estimated vs. Final UX.",
    status: "approved",
    productSlug: MTO_SLUG,
    productTitle: "Make-To-Order Dynamic Pricing",
    body: [
      block("prd-mto-h1", "Overview", "h2"),
      block(
        "prd-mto-intro",
        "Enable per-item customization with real-time price recalculation on Shopify PDPs. Primary goal: maximize configuration completion without checkout price surprises."
      ),
      block("prd-mto-h2", "Problem statement", "h2"),
      block(
        "prd-mto-prob",
        "Shoppers configuring make-to-order products need immediate price feedback. Merchants need checkout totals that match what was shown. Pure client-side math fails trust; pure server round-trips fail perceived speed."
      ),
      block("prd-mto-h3", "Solution principles", "h2"),
      block(
        "prd-mto-p1",
        "Perceived Speed: client-side calculator updates DOM on every option change (<50ms target from cached matrix).",
        "normal",
        "bullet"
      ),
      block(
        "prd-mto-p2",
        "Backend Authority: Liquid outputs baseline prices + JSON price matrix; validation runs on add-to-cart and pre-checkout.",
        "normal",
        "bullet"
      ),
      block(
        "prd-mto-p3",
        "Clear UX Messaging: show Estimated price during config; show Final price after validation; never hide the difference.",
        "normal",
        "bullet"
      ),
      block("prd-mto-h4", "Technical requirements", "h2"),
      block(
        "prd-mto-t1",
        "Liquid: render initial variant/option prices; embed price matrix as JSON script tag.",
        "normal",
        "bullet"
      ),
      block(
        "prd-mto-t2",
        "JavaScript: bind option inputs; recalculate; format money; debounce validation requests.",
        "normal",
        "bullet"
      ),
      block(
        "prd-mto-t3",
        "Server: endpoint or cart flow that recomputes line price from authoritative rules; reject mismatches.",
        "normal",
        "bullet"
      ),
      block("prd-mto-h5", "Edge cases (production)", "h2"),
      block(
        "prd-mto-e1",
        "Dependent options (option B only valid when A = X); quantity multipliers; sold-out variants; markets/currency; rounding to shop money format.",
        "normal",
        "bullet"
      ),
      block("prd-mto-h6", "Success metrics", "h2"),
      block(
        "prd-mto-metrics",
        "Configuration completion rate, add-to-cart rate post-config, checkout abandonment after price validation, support tickets tagged 'wrong price'."
      ),
      block("prd-mto-h7", "Out of scope (MVP)", "h2"),
      block(
        "prd-mto-oos",
        "Admin UI for non-technical rule editing; multi-language copy beyond EN; subscription selling.",
        "normal",
        "bullet"
      ),
      block("prd-mto-h8", "Reference", "h2"),
      block(
        "prd-mto-ref",
        "Detailed architecture, UX psychology, and code patterns: https://lnkd.in/dmyd6wJa"
      ),
    ],
  },
  {
    _id: "sample-prd-shop-the-look",
    title: "PRD: Shop The Look MVP",
    slug: "shop-the-look-mvp",
    summary:
      "MVP scope for a Shopify app enabling merchants to tag products on lifestyle images and sell complete looks as bundles.",
    status: "approved",
    productSlug: "shop-the-look",
    productTitle: "Shop The Look",
    body: [
      {
        _type: "block",
        _key: "goals",
        style: "h2",
        children: [{ _type: "span", _key: "g1", text: "Goals" }],
        markDefs: [],
      },
      {
        _type: "block",
        _key: "goals-body",
        style: "normal",
        children: [
          {
            _type: "span",
            _key: "g2",
            text: "Ship a merchant-facing look editor and storefront widget within 8 weeks. Primary KPI: looks published per store; secondary: add-to-cart rate from look pages.",
          },
        ],
        markDefs: [],
      },
      {
        _type: "block",
        _key: "users",
        style: "h2",
        children: [{ _type: "span", _key: "u1", text: "Users" }],
        markDefs: [],
      },
      {
        _type: "block",
        _key: "users-body",
        style: "normal",
        children: [
          {
            _type: "span",
            _key: "u2",
            text: "Merchant: marketing lead or merchandiser. Shopper: mobile-first fashion buyer discovering via Instagram or email campaigns.",
          },
        ],
        markDefs: [],
      },
      {
        _type: "block",
        _key: "scope",
        style: "h2",
        children: [{ _type: "span", _key: "s1", text: "In Scope (MVP)" }],
        markDefs: [],
      },
      {
        _type: "block",
        _key: "scope-list",
        style: "normal",
        listItem: "bullet",
        children: [{ _type: "span", _key: "s2", text: "Look editor with image upload and product hotspots" }],
        markDefs: [],
      },
      {
        _type: "block",
        _key: "scope-list2",
        style: "normal",
        listItem: "bullet",
        children: [{ _type: "span", _key: "s3", text: "Theme app block / embed for look landing pages" }],
        markDefs: [],
      },
      {
        _type: "block",
        _key: "scope-list3",
        style: "normal",
        listItem: "bullet",
        children: [{ _type: "span", _key: "s4", text: "Add-all-to-cart with inventory validation" }],
        markDefs: [],
      },
    ],
  },
];
