import { defineType, defineField } from "sanity";

export const prd = defineType({
  name: "prd",
  title: "PRD",
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
    defineField({ name: "summary", title: "Summary (preview)", type: "text", rows: 4 }),
    defineField({
      name: "product",
      title: "Related Product",
      type: "reference",
      to: [{ type: "product" }],
    }),
    defineField({ name: "status", title: "Status", type: "string", options: {
      list: ["draft", "review", "approved"],
    }}),
    defineField({ name: "body", title: "Full PRD", type: "blockContent" }),
    defineField({ name: "publishedAt", title: "Published At", type: "datetime" }),
  ],
  preview: {
    select: { title: "title", subtitle: "summary" },
  },
});
