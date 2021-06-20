import React from "react";
import projectCard from "../../../../styles/LandingSectionsStyles/Projects/ProjectCard.module.css";

const ProjectCard = ({ image, title }) => {
  return (
    <aside className={`${projectCard.main_container}`}>
      <img src={image} alt="project" />
      <div className={`${projectCard.title}`}>
        <h3>{title}</h3>
      </div>
    </aside>
  );
};

export default ProjectCard;
