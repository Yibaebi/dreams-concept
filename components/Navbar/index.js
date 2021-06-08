import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import PrimaryLogo from "../../public/images/primary-logo.svg";
import WhiteLogoVariant from "../../public/images/white-logo-variant.svg";
import navStyles from "../../styles/Navbar.module.css";

const Navbar = () => {
  const [activeHash, setActiveHash] = useState("#home");
  const [changeNavbar, setChangeNavbar] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setActiveHash(router.asPath);
    window.addEventListener("scroll", handleNavbarBgChange);
  });

  const handleNavbarBgChange = () => {
    if (window.scrollY > 70) {
      setChangeNavbar(true);
    } else {
      setChangeNavbar(false);
    }
  };

  return (
    <nav
      className={`${navStyles.container} ${
        changeNavbar && navStyles.container__white
      } d-flex justify-content-between container-fluid p-fixed`}
    >
      <div className="drm-logo-container">
        {changeNavbar ? <PrimaryLogo /> : <WhiteLogoVariant />}
      </div>
      <ul className={`${navStyles.links__container}`}>
        <li
          className={`${navStyles.link__item} ${
            activeHash.includes("#home") && navStyles.active__link
          }`}
        >
          <Link href="#home">
            <a>Home</a>
          </Link>
        </li>
        <li
          className={`${navStyles.link__item} ${
            activeHash.includes("#about") && navStyles.active__link
          }`}
        >
          <Link href="#about">
            <a>About us</a>
          </Link>
        </li>
        <li
          className={`${navStyles.link__item} ${
            activeHash.includes("#services") && navStyles.active__link
          }`}
        >
          <Link href="#services">
            <a>Services</a>
          </Link>
        </li>
        <li
          className={`${navStyles.link__item} ${
            activeHash.includes("#businesses") && navStyles.active__link
          }`}
        >
          <Link href="#businesses">
            <a>Our businesses</a>
          </Link>
        </li>
        <li
          className={`${navStyles.link__item} ${
            activeHash.includes("#contact") && navStyles.active__link
          }`}
        >
          <Link href="#contact">
            <a>Contact us</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
