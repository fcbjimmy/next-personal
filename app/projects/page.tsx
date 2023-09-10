import React from "react";
import getProjects from "@/lib/getProjects";
import Image from "next/image";

export async function generateMetadata() {
  return {
    title: "Projects",
  };
}
export const revalidate = 60;

export default async function Projects() {
  const data: Data[] = await getProjects();
  console.log(data);

  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          Projects
        </h1>
      </div>
      <div className="grid gap-y-8 sm:grid-cols-2 sm:gap-6 md:gap-6 lg:grid-cols-3 lg:gap-10 pt-8">
        {data.map((project) => {
          return (
            <article
              key={project._id}
              className="overflow-hidden dark:border-zinc-600 rounded-lg border border-gray-100 bg-white shadow-lg dark:bg-black "
            >
              <div className="h-56 w-full relative">
                <Image
                  fill
                  src={project.imageUrl}
                  alt="project image"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-4">
                <a href={project.link} target="_blank">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                </a>
                <p className="mt-2 text-sm leading-relaxed text-gray-700 dark:text-gray-100">
                  {project.overview}
                </p>
                <a
                  href={project.link}
                  target="_blank"
                  className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-teal-500"
                >
                  Source
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
