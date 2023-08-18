import { createClient } from "next-sanity";

const projectId = "r2u6yh9j";
const dataset = "production";
const apiVersion = "2023-01-01";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
});
