import Link from 'next/link'
import React from 'react'

import Facebook from '../../public/images/Footer/facebook.svg'
import Instagram from '../../public/images/Footer/instagram.svg'
import Twitter from '../../public/images/Footer/twitter.svg'
import WhatsApp from '../../public/images/Footer/whatsapp.svg'
import WhiteLogoVariant from '../../public/images/white-logo-variant.svg'

import footerStyles from '../../styles/Footer/Footer.module.css'

const Footer = () => {
  return (
    <section className={`${footerStyles.main_container}`} id="contact">
      <div>
        <aside className={`${footerStyles.link_container}`}>
          <h3>Company</h3>
          <ul>
            <li>
              <Link href="#about">About us</Link>
            </li>
            <li>
              <Link href="#services">Services</Link>
            </li>
            <li>
              <Link href="#businesses">Our Businesses</Link>
            </li>
            <li>
              <Link href="#contact">Contact us</Link>
            </li>
          </ul>
        </aside>
        <aside className={`${footerStyles.link_container}`}>
          <h3>Businesses</h3>
          <ul>
            <li>
              <Link href="#about">Construction works </Link>
            </li>
            <li>
              <Link href="">Photography</Link>
            </li>
            <li>
              <Link href="">Event management</Link>
            </li>
          </ul>
        </aside>
        <aside className={`${footerStyles.link_container}`}>
          <h3>Contact us</h3>
          <ul>
            <li>+234 - 987 - 9887 - 008</li>
            <li>+234 - 987 - 9887 - 008</li>
            <li>info@dreamsconcept.com</li>
          </ul>
        </aside>
        <aside className={`${footerStyles.social_media}`}>
          <Link href="#facebook">
            <Facebook />
          </Link>
          <Link href="#whatsapp">
            <WhatsApp />
          </Link>
          <Link href="#instagram">
            <Instagram />
          </Link>
          <Link href="#twitter">
            <Twitter />
          </Link>
        </aside>
      </div>
      <WhiteLogoVariant />
    </section>
  )
}

export { Footer }
