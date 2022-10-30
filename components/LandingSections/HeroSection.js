import heroStyles from '../../styles/LandingSectionsStyles/Herosection/HeroSection.module.css'
import { Carousel } from './../Carousel/index'

const HeroSection = () => {
  return (
    <div className={`${heroStyles.container} container-fluid `} id="home">
      <Carousel />
    </div>
  )
}

export { HeroSection }
