import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import PrimaryLogo from "../../public/images/primary-logo.svg";
import WhiteLogoVariant from "../../public/images/white-logo-variant.svg";
import navStyles from "../../styles/Navbar.module.css";

const Navbar = () => {
  const [activeHash, setActiveHash] = useState("");
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

  const activeTab = (hash) => {
    return activeHash.replace("/", "") === hash;
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
            (activeTab("#home") || activeTab("")) && navStyles.active__link
          }`}
        >
          <Link href="#home">
            <a>Home</a>
          </Link>
        </li>
        <li
          className={`${navStyles.link__item} ${
            activeTab("#about") && navStyles.active__link
          }`}
        >
          <Link href="#about">
            <a>About us</a>
          </Link>
        </li>
        <li
          className={`${navStyles.link__item} ${
            activeTab("#services") && navStyles.active__link
          }`}
        >
          <Link href="#services">
            <a>Services</a>
          </Link>
        </li>
        <li
          className={`${navStyles.link__item} ${
            activeTab("#businesses") && navStyles.active__link
          }`}
        >
          <Link href="#businesses">
            <a>Our businesses</a>
          </Link>
        </li>
        <li
          className={`${navStyles.link__item} ${
            activeTab("#contact") && navStyles.active__link
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

export { Navbar };
