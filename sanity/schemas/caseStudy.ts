import { defineType, defineField, defineArrayMember } from "sanity";

export const caseStudy = defineType({
  name: "caseStudy",
  title: "Case Study",
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
    defineField({ name: "excerpt", title: "Excerpt", type: "text", rows: 3 }),
    defineField({ name: "articleUrl", title: "Article URL", type: "url" }),
    defineField({ name: "articleLabel", title: "Article link label", type: "string" }),
    defineField({ name: "coverImage", title: "Cover Image", type: "image", options: { hotspot: true } }),
    defineField({
      name: "product",
      title: "Related Product",
      type: "reference",
      to: [{ type: "product" }],
    }),
    defineField({ name: "problem", title: "Problem", type: "blockContent" }),
    defineField({ name: "solution", title: "Solution", type: "blockContent" }),
    defineField({ name: "impact", title: "Impact", type: "blockContent" }),
    defineField({
      name: "metrics",
      title: "Metrics",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "label", title: "Label", type: "string" }),
            defineField({ name: "value", title: "Value", type: "string" }),
            defineField({ name: "description", title: "Description", type: "string" }),
          ],
        }),
      ],
    }),
    defineField({ name: "publishedAt", title: "Published At", type: "datetime" }),
  ],
  preview: {
    select: { title: "title", media: "coverImage", subtitle: "excerpt" },
  },
});
