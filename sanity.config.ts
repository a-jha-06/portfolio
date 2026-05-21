import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./sanity/schemas";

// Studio (Vite) only exposes SANITY_STUDIO_* to the browser — not NEXT_PUBLIC_*
const projectId =
  process.env.SANITY_STUDIO_PROJECT_ID ||
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ||
  "";

const dataset =
  process.env.SANITY_STUDIO_DATASET ||
  process.env.NEXT_PUBLIC_SANITY_DATASET ||
  "production";

if (!projectId || projectId === "your-project-id") {
  console.warn(
    "[Sanity Studio] Set SANITY_STUDIO_PROJECT_ID in .env.local (see .env.local.example)."
  );
}

export default defineConfig({
  name: "shopify-pm",
  title: "Product Portfolio CMS",
  projectId,
  dataset,
  plugins: [structureTool(), visionTool()],
  schema: { types: schemaTypes },
});
