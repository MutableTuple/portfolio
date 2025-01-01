import Link from "next/link";
import React from "react";
import { FaRegCalendar } from "react-icons/fa";
import { TbExternalLink } from "react-icons/tb";
import { FaLink } from "react-icons/fa6";
export default function Box({
  project_name,
  project_image,
  project_short_desc,
  project_desc,
  project_created_on,
  product_link,
}) {
  // Function to get the day with the correct suffix (1st, 2nd, 3rd, etc.)
  const getDaySuffix = (day) => {
    if (day > 3 && day < 21) return `${day}th`; // Special case for numbers 4-20
    const suffix = ["st", "nd", "rd", "th"];
    return day + (suffix[(day % 10) - 1] || suffix[3]);
  };

  // Function to format the date to "1st August 2023"
  const formatDate = (date) => {
    const day = new Date(date).getDate();
    const month = new Date(date).toLocaleString("default", { month: "long" });
    const year = new Date(date).getFullYear();
    return `${getDaySuffix(day)} ${month} ${year}`;
  };

  const formattedDate = formatDate(project_created_on);

  return (
    <div className="flex flex-col gap-2">
      <img
        src={project_image}
        className="h-48 object-cover w-auto"
        alt="project image"
      />
      <h1 className="font-semibold tracking-wide text-xl underline underline-offset-2 hover:text-stone-400 cursor-pointer transition-all duration-150">
        {project_name} &mdash; {project_short_desc}
      </h1>
      <Link
        className="text-xs flex items-center gap-2 text-stone-300 hover:underline"
        href={product_link}
        target="_blank"
      >
        <FaLink /> {product_link}
      </Link>
      <p className="text-xs flex items-center gap-2">
        <FaRegCalendar /> {formattedDate}
      </p>
      <p className="text-md font-medium">{project_desc}</p>
    </div>
  );
}
