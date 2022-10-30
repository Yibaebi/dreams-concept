import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useRef, useState } from 'react'

import CloseButton from '../../public/images/LandingPage/close_button.svg'
import HamMenu from '../../public/images/LandingPage/hamburger_menu.svg'
import PrimaryLogo from '../../public/images/primary-logo.svg'
import WhiteLogoVariant from '../../public/images/white-logo-variant.svg'
import navStyles from '../../styles/Navbar.module.css'

const Navbar = () => {
  const [activeHash, setActiveHash] = useState('')
  const [changeNavbar, setChangeNavbar] = useState(false)
  const [hamburgerMenu, setHamburgerMenu] = useState(false)
  const hamMenuRef = useRef()
  const router = useRouter()

  useEffect(() => {
    setActiveHash(router.asPath)
    window.addEventListener('scroll', handleNavbarBgChange)
  })

  useEffect(() => {
    const listener = event => {
      if (!hamMenuRef.current || hamMenuRef.current.contains(event.target)) {
        return
      }
      setHamburgerMenu(false)
    }

    document.addEventListener('mousedown', listener)
    return () => {
      document.removeEventListener('mousedown', listener)
    }
  }, [hamMenuRef])

  const handleNavbarBgChange = () => {
    if (window.scrollY > 70) {
      setChangeNavbar(true)
    } else {
      setChangeNavbar(false)
    }
  }

  const activeTab = hash => {
    return activeHash.replace('/', '') === hash
  }

  return (
    <nav
      className={`${navStyles.container} 
      ${changeNavbar && navStyles.container__white}  d-flex justify-content-between container-fluid p-fixed`}
    >
      <div className="drm-logo-container">
        <Link href="#home">{changeNavbar ? <PrimaryLogo on /> : <WhiteLogoVariant />}</Link>
      </div>
      <div onClick={() => setHamburgerMenu(true)} className={`${navStyles.ham__menu}`}>
        <HamMenu />
      </div>
      <ul className={`${navStyles.links__container} ${hamburgerMenu ? navStyles.hamburger : ''}`}>
        <div ref={hamMenuRef} className={`${navStyles.links__wrapper}`}>
          <span onClick={() => setHamburgerMenu(false)} className={`${navStyles.close__button}`}>
            <CloseButton />
          </span>

          <li
            className={`${navStyles.link__item} ${(activeTab('#home') || activeTab('')) && navStyles.active__link}`}
            onClick={() => setHamburgerMenu(false)}
          >
            <Link href="#home">
              <a>Home</a>
            </Link>
          </li>
          <li
            className={`${navStyles.link__item} ${activeTab('#about') && navStyles.active__link}`}
            onClick={() => setHamburgerMenu(false)}
          >
            <Link href="#about">
              <a>About us</a>
            </Link>
          </li>
          <li
            className={`${navStyles.link__item} ${activeTab('#services') && navStyles.active__link}`}
            onClick={() => setHamburgerMenu(false)}
          >
            <Link href="#services">
              <a>Services</a>
            </Link>
          </li>
          <li
            className={`${navStyles.link__item} ${activeTab('#businesses') && navStyles.active__link}`}
            onClick={() => setHamburgerMenu(false)}
          >
            <Link href="#businesses">
              <a>Our businesses</a>
            </Link>
          </li>
          <li
            className={`${navStyles.link__item} ${activeTab('#contact') && navStyles.active__link}`}
            onClick={() => setHamburgerMenu(false)}
          >
            <Link href="#contact">
              <a>Contact us</a>
            </Link>
          </li>
        </div>
      </ul>
    </nav>
  )
}

export { Navbar }
