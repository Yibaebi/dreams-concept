import LeftArrow from '../../../public/images/LandingPage/left_arrow.svg'
import AboutUsStyle from '../../../styles/LandingSectionsStyles/About/AboutUs.module.css'

function AboutUs() {
  return (
    <div className={`${AboutUsStyle.aboutUs} container`} id="about">
      <div className={`${AboutUsStyle.aboutInner}`}>
        <div className={`${AboutUsStyle.innerWrapper}`}>
          <h5 className={`${AboutUsStyle.heading}`}>Providing durable construction works</h5>
          <p style={{ marginTop: '30PX' }} className={`${AboutUsStyle.summary}`}>
            We are skilled and fully equipped with personnels, equipments and materials.
          </p>
          <p style={{ marginBottom: '40px' }} className={`${AboutUsStyle.summary}`}>
            Our core business focus as a construction company is to provide local, valua-added services that meet the
            basic needs’ of our clients.
          </p>
          <LeftArrow />
        </div>
      </div>
    </div>
  )
}

export { AboutUs }
