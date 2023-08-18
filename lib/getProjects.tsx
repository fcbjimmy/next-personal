import { client } from "./sanity";

export default async function getProjects() {
  const query = `*[_type == "project"] {
    title,
      overview,
      link,
      _id,
    "imageUrl": image.asset->url
  }`;

  const data = await client.fetch(query);

  return data;
}
