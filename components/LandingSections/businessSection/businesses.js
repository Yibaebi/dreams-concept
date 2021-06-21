import React from "react";
import BusinessCard from "./businessCard/businessCard";

import businessStyles from "../../../styles/LandingSectionsStyles/Businesses/Businesses.module.css";

const BUSINESSES = [
  {
    image: "/images/LandingPage/businesses/business_1.png",
    title:
      "In addition to meeting your construction needs, we also offer other valueable services which are affordable and cost friendly.",
    tag: "Construction",
  },
  {
    image: "/images/LandingPage/businesses/business_2.png",
    title:
      "In addition to meeting your construction needs, we also offer other valueable services which are affordable and cost friendly.",
    tag: "Photography",
  },
  {
    image: "/images/LandingPage/businesses/business_1.png",
    title:
      "In addition to meeting your construction needs, we also offer other valueable services which are affordable and cost friendly.",
    tag: "Event Management",
  },
];

const Businesses = () => {
  return (
    <>
      <section
        className={`${businessStyles.main_container} d-flex align-items-center flex-column`}
      >
        <h3>Our Businesses</h3>
        <p>
          In addition to meeting your construction needs, we also offer other
          valueable services which are affordable and cost friendly.
        </p>
        <section
          className={`container d-flex w-100 justify-content-center flex-wrap`}
        >
          {BUSINESSES.map(({ title, image, tag }, index) => (
            <BusinessCard key={index} title={title} image={image} tag={tag} />
          ))}
        </section>
      </section>
    </>
  );
};

export { Businesses };
