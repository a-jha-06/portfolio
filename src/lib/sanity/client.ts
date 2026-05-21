import { createClient } from "next-sanity";
import {
  isSanityConfigured,
  sanityDataset as dataset,
  sanityProjectId as projectId,
} from "./env";

export { isSanityConfigured, projectId, dataset };
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-05-21";

export const client = createClient({
  projectId: projectId || "your-project-id",
  dataset,
  apiVersion,
  useCdn: true,
});
