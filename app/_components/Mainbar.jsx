import React from "react";
import Box from "./Box";
import Navbar from "./Navbar";
import { getAllProjects } from "../_lib/data-service";

export default async function Mainbar() {
  const projects = await getAllProjects();
  return (
    <div className="h-screen overflow-scroll overflow-x-hidden p-4">
      {/* <Navbar /> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4">
        {projects.map((project) => (
          <Box
            key={project.id} // Added unique key for each Box
            project_name={project.project_name}
            project_image={project.project_image}
            project_short_desc={project.project_short_desc}
            project_created_on={project.date_created}
            project_desc={project.project_description}
            product_link={project.project_link}
            slug_name={project.slug_name}
          />
        ))}
      </div>
    </div>
  );
}
