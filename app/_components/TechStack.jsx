import React from "react";

export default function TechStack({ project }) {
  return (
    <div className="flex flex-wrap gap-3">
      {project[0]?.stack?.split(",")?.map((item) => (
        <span key={item} className="bg-slate-600 py-2 rounded-full px-3">
          {item}
        </span>
      ))}
    </div>
  );
}
