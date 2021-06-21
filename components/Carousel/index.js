import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

import { sliderData } from "./sliderData";
import CurrentSlideIndicator from "../../public/images/LandingPage/current_slide_indicator.svg";
import SlideIndicator from "../../public/images/LandingPage/slide_indicator.svg";

import carouselStyles from "../../styles/Carousel.module.css";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  return (
    <AnimatePresence>
      <section
        className={`${carouselStyles.drm_carousel__main} carousel-background`}
      >
        <div className={`${carouselStyles.image_overlay}`}></div>
        <div className={`${carouselStyles.carousel_content}`}>
          {sliderData.map((slide, index) => {
            if (index === currentSlide) {
              return (
                <motion.figure
                  initial={{ y: 390 }}
                  animate={{ transition: { duration: 0.2 }, y: 0 }}
                  className="image"
                  key={index}
                  layoutId="image"
                >
                  <img src={`${slide.image}`} alt="dreams works" />
                </motion.figure>
              );
            }
          })}
          <aside className={`${carouselStyles.slide_intro}`}>
            <h3>{sliderData[currentSlide].title}</h3>
            <p>{sliderData[currentSlide].description}</p>
          </aside>
          <aside
            className={`${carouselStyles.company_statement} d-flex flex-column justify-content-center`}
          >
            <p>WE BUILD TO IMPRESS AND SOLVE PROBLEMS</p>
            <p>
              when it comes to experience, reliable and professional solutions.
            </p>
            <div className={`${carouselStyles.slide_indicator}`}>
              {sliderData.map((item, index) => {
                if (currentSlide === index) {
                  return (
                    <motion.span onClick={() => setCurrentSlide(index)}>
                      <CurrentSlideIndicator />
                    </motion.span>
                  );
                } else {
                  return (
                    <motion.span onClick={() => setCurrentSlide(index)}>
                      <SlideIndicator />
                    </motion.span>
                  );
                }
              })}
            </div>
          </aside>
        </div>
      </section>
    </AnimatePresence>
  );
};

export { Carousel };
