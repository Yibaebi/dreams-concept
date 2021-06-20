import React from "react";
import ProjectCard from "./projectCard/projectCard";

import projectStyles from "../../../styles/LandingSectionsStyles/Projects/Projects.module.css";

const PROJECTS = [
  {
    image: "/images/LandingPage/recent projects/project_1.png",
    title: "Bridge construction at Ihiagwa Owerri Imo State",
  },
  {
    image: "/images/LandingPage/recent projects/project_2.png",
    title: "Completed house at Tenece gardens, Centenary city, Enugu.",
  },
  {
    image: "/images/LandingPage/recent projects/project_3.png",
    title: "Completed house at Almond gardens, Centenary city, Enugu.",
  },
  {
    image: "/images/LandingPage/recent projects/project_4.png",
    title: "Bridge construction at Suleja, FCT, Abuja, Nigeriaa.",
  },
];

const RecentProjects = () => {
  return (
    <>
      <section
        className={`${projectStyles.main_container} container d-flex align-items-center flex-column`}
      >
        <h3>Recent Projects</h3>

        <section
          className={`container d-flex w-100 justify-content-even flex-wrap`}
        >
          {PROJECTS.concat([...PROJECTS]).map(({ title, image }, index) => (
            <ProjectCard key={index} title={title} image={image} />
          ))}
        </section>
      </section>
    </>
  );
};

export { RecentProjects };
