import React from "react";
import ServiceCard from "./serviceCard/serviceCard";

import Road from "../../../public/images/LandingPage/services/road.svg";
import House from "../../../public/images/LandingPage/services/housing.svg";
import Bridges from "../../../public/images/LandingPage/services/bridges.svg";

import servicesStyles from "../../../styles/LandingSectionsStyles/Services/Services.module.css";

const SERVICES = [
  {
    icon: <Road />,
    title: "Road construction",
    description:
      "Our expertise in road construction ensures solid roads which can withstand harsh weather and climatic conditions.",
  },
  {
    icon: <Bridges />,
    title: "Drains and bridges construction",
    description:
      "We offer the best in drainage construction, starting up with best materials to tough concrete castings.",
  },
  {
    icon: <House />,
    title: "Housing construction",
    description:
      "Starting up with state of the art architectural designs, quality building materials, and well supervised building culture, we deliver strong and good homes.",
  },
];

const ServiceSection = () => {
  return (
    <>
      <section className={`${servicesStyles.main_container}`}>
        <section className={`${servicesStyles.intro_card}`}>
          <h3>SERVICES WE PROVIDE</h3>
          <span>
            <svg
              width="22"
              height="15"
              viewBox="0 0 22 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.996986 8.60362V6.60958H17.3877L12.7279 1.94975L14.1421 0.535534L21.2132 7.6066L14.1421 14.6777L12.7279 13.2635L17.3877 8.60362H0.996986Z"
                fill="white"
              />
            </svg>
          </span>
        </section>
        {SERVICES.map(({ title, icon, description }, index) => (
          <ServiceCard
            key={index}
            title={title}
            icon={icon}
            description={description}
          />
        ))}
      </section>
    </>
  );
};

export { ServiceSection };
