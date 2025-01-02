import { Markdown } from "@/app/_components/Markdown";
import React from "react";
import { getProjectBySlugName } from "@/app/_lib/data-service";
import Image from "next/image";
import TechStack from "@/app/_components/TechStack";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";
export default async function Page({ params }) {
  try {
    const { projectName } = await params;
    const project = await getProjectBySlugName(projectName);

    if (!project || project.length === 0) {
      console.error(
        "Error: Project not found for the given slug:",
        projectName
      );
      return (
        <div className="p-8 h-screen flex items-center justify-center text-center">
          <h1 className="text-2xl font-semibold text-red-500">
            Oops! The project you are looking for does not exist. <br />
            Please check the URL or try searching for another project.
          </h1>
        </div>
      );
    }

    return (
      <div className="p-8 h-screen overflow-scroll overflow-x-hidden max-w-full">
        <h1 className="text-3xl font-bold my-6 underline flex justify-between">
          <span>
            {project[0].project_name} &mdash; {project[0].project_short_desc}
          </span>
          <Link href={project[0].github_repo || "#"} target="_blank">
            <span className="text-sm border border-stone-700 flex items-center justify-center px-4 py-2 gap-1 bg-slate-600  hover:bg-slate-700 ">
              github repo <FaExternalLinkAlt />
            </span>
          </Link>
        </h1>
        <Image
          src={project[0].project_image}
          alt="Project Image"
          layout="responsive"
          width={100}
          height={100}
          className="rounded-lg"
        />
        <p className="italic text-stone-300 mt-4">
          {project[0].project_description}
        </p>
        <Markdown text={project[0]?.project_long_data} />

        <div>
          <h1 className="text-3xl font-bold my-6">Tech Stack</h1>
          <TechStack project={project} />
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error fetching project data:", error);

    return (
      <div className="p-8 h-screen flex items-center justify-center text-center">
        <h1 className="text-2xl font-semibold text-red-500">
          Something went wrong while fetching the project data. <br />
          Please try again later or contact support.
        </h1>
      </div>
    );
  }
}
