import { defineType, defineField, defineArrayMember } from "sanity";

export const product = defineType({
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (r) => r.required(),
    }),
    defineField({ name: "tagline", title: "Tagline", type: "string" }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "App Concept", value: "app-concept" },
          { title: "SaaS Idea", value: "saas" },
          { title: "Business Opportunity", value: "business-opportunity" },
        ],
      },
    }),
    defineField({
      name: "status",
      title: "Status",
      type: "string",
      options: {
        list: [
          { title: "Idea", value: "idea" },
          { title: "MVP", value: "mvp" },
          { title: "Shipped", value: "shipped" },
        ],
      },
    }),
    defineField({ name: "thumbnail", title: "Thumbnail", type: "image", options: { hotspot: true } }),
    defineField({ name: "excerpt", title: "Excerpt", type: "text", rows: 3 }),
    defineField({ name: "articleUrl", title: "Article URL", type: "url" }),
    defineField({ name: "articleLabel", title: "Article link label", type: "string" }),
    defineField({ name: "featured", title: "Featured on Homepage", type: "boolean", initialValue: false }),
    defineField({ name: "order", title: "Sort Order", type: "number" }),

    defineField({ name: "problem", title: "Problem", type: "blockContent" }),
    defineField({ name: "solution", title: "Solution", type: "blockContent" }),
    defineField({
      name: "features",
      title: "Features",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
    }),

    defineField({ name: "whyIBuiltThis", title: "Why I Built This", type: "object", fields: [
      defineField({ name: "merchantPain", title: "Merchant Pain", type: "text", rows: 4 }),
      defineField({ name: "conversionGap", title: "Conversion Gap", type: "text", rows: 4 }),
      defineField({ name: "businessOpportunity", title: "Business Opportunity", type: "text", rows: 4 }),
    ]}),

    defineField({ name: "productThinking", title: "Product Thinking", type: "object", fields: [
      defineField({ name: "whyMerchantsNeedThis", title: "Why Merchants Need This", type: "text", rows: 4 }),
      defineField({ name: "painPoints", title: "Pain Points", type: "array", of: [defineArrayMember({ type: "string" })] }),
      defineField({ name: "uxReasoning", title: "UX Reasoning", type: "text", rows: 4 }),
      defineField({ name: "monetizationLogic", title: "Monetization Logic", type: "text", rows: 4 }),
      defineField({ name: "scalability", title: "Scalability", type: "text", rows: 4 }),
    ]}),

    defineField({ name: "roadmap", title: "Roadmap", type: "object", fields: [
      defineField({ name: "mvp", title: "MVP Scope", type: "array", of: [defineArrayMember({ type: "string" })] }),
      defineField({ name: "v2", title: "V2 Features", type: "array", of: [defineArrayMember({ type: "string" })] }),
      defineField({ name: "future", title: "Future Scaling", type: "array", of: [defineArrayMember({ type: "string" })] }),
    ]}),

    defineField({
      name: "competitiveAnalysis",
      title: "Competitive Analysis",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "name", title: "Competitor / App", type: "string" }),
            defineField({ name: "gaps", title: "Gaps", type: "text", rows: 3 }),
            defineField({ name: "differentiator", title: "Your Differentiator", type: "text", rows: 3 }),
          ],
        }),
      ],
    }),

    defineField({
      name: "screenshots",
      title: "Screenshots",
      type: "array",
      of: [defineArrayMember({ type: "image", options: { hotspot: true } })],
    }),
    defineField({
      name: "userFlowImages",
      title: "User Flow Images",
      type: "array",
      of: [defineArrayMember({ type: "image", options: { hotspot: true } })],
    }),

    defineField({ name: "businessImpact", title: "Business Impact", type: "blockContent" }),
    defineField({ name: "monetization", title: "Monetization", type: "blockContent" }),
    defineField({ name: "technicalArchitecture", title: "Technical Architecture", type: "blockContent" }),

    defineField({
      name: "metrics",
      title: "Impact Metrics",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "label", title: "Label", type: "string" }),
            defineField({ name: "value", title: "Value", type: "string" }),
          ],
        }),
      ],
    }),
  ],
  preview: {
    select: { title: "title", media: "thumbnail", subtitle: "tagline" },
  },
});
