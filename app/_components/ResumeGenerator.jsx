import React, { useEffect, useState } from "react";
import { getAllProjects, getUserData } from "@/app/_lib/data-service"; // Assume these are valid functions

export default function ResumeGenerator() {
  const [userData, setUserData] = useState(null);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const user = await getUserData(); // Fetch user data like username, age, school
        const allProjects = await getAllProjects(); // Fetch all projects
        setUserData(user);
        setProjects(allProjects);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  if (!userData || !projects.length) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Resume Generator</h1>
      <button onClick={() => generateResume(userData, projects)}>
        Generate Resume
      </button>
    </div>
  );
}
