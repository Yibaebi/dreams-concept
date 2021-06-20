import { Carousel } from "./../Carousel/index";
import heroStyles from "../../styles/LandingSectionsStyles/Herosection/HeroSection.module.css";

const HeroSection = () => {
  return (
    <div className={`${heroStyles.container} container-fluid `}>
      <Carousel />
    </div>
  );
};

export { HeroSection };
