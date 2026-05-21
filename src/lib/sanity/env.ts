/** Next.js site reads these (NEXT_PUBLIC_*). Studio uses SANITY_STUDIO_* — keep both in .env.local */
export const sanityProjectId =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ||
  process.env.SANITY_STUDIO_PROJECT_ID;

export const sanityDataset =
  process.env.NEXT_PUBLIC_SANITY_DATASET ||
  process.env.SANITY_STUDIO_DATASET ||
  "production";

export const isSanityConfigured = Boolean(
  sanityProjectId && sanityProjectId !== "your-project-id"
);
