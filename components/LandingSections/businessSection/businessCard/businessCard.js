import React from "react";
import PrimaryLogo from "../../../../public/images/primary-logo.svg";
import WhiteLogoVariant from "../../../../public/images/white-logo-variant.svg";
import businessCard from "../../../../styles/LandingSectionsStyles/Businesses/businessCard.module.css";

const BusinessCard = ({ image, title, tag }) => {
  return (
    <aside className={`${businessCard.main_container}`}>
      <figure className={`${businessCard.image_container}`}>
        <span>
          <WhiteLogoVariant />
          <span>{tag}</span>
        </span>
        <img src={image} alt="project" />
      </figure>

      <div className={`${businessCard.title}`}>
        <h3>{title}</h3>
      </div>
    </aside>
  );
};

export default BusinessCard;
