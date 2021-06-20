import React from "react";
import cardStyles from "../../../../styles/LandingSectionsStyles/Services/ServiceCards.module.css";

const ServiceCard = ({ icon, title, description }) => {
  return (
    <aside className={`${cardStyles.main_container}`}>
      <div className={`${cardStyles.content_wrapper}`}>
        <span>{icon}</span>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </aside>
  );
};

export default ServiceCard;
