"use client"

import Image from 'next/image';
import { Link } from 'react-scroll';
import {
  logo_emty, logo_face
} from '@/assets/images';
import {
  TbCode, TbPhone, TbSmartHome, TbUserHeart
} from 'react-icons/tb';
import './header.css';
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin.js";

gsap.registerPlugin(ScrollToPlugin);

export default function Header() {

  const handleLogo = () => {
    gsap.to(window, { duration: 1, scrollTo: 0 });
  }

  return (
    <header className={`header`}>
      <div className={`container`}>
        <div onClick={handleLogo}
          className={`brand`}>
          <Image src={logo_face} alt="logo_face" height={70} priority />
          <Image src={logo_emty} alt="logo_emty" height={60} priority
            className={`logo_emty`} />
        </div>

        <nav className={`navbar`}>
          <Link to="main"
            activeClass="nav_links_active"
            spy={true}
            smooth={true}
            offset={-120}
            duration={500}
            className={`nav_links`}>
            <TbSmartHome className={`nav_icon`} />
            <span className={`nav_title`}>HOME</span>
          </Link>

          <Link to="about"
            activeClass="nav_links_active"
            spy={true}
            smooth={true}
            offset={-120}
            duration={500}
            className={`nav_links`}>
          <TbUserHeart className={`nav_icon`} />
            <span className={`nav_title`}>ABOUT</span>
          </Link>

          <Link to="projects"
            activeClass="nav_links_active"
            spy={true}
            smooth={true}
            offset={-120}
            duration={500}
            className={`nav_links`}>
            <TbCode className={`nav_icon`}/>
            <span className={`nav_title`}>PROJECTS</span>
          </Link>

          <Link to="contact"
            activeClass="nav_links_active"
            spy={true}
            smooth={true}
            offset={-120}
            duration={500}
            className={`nav_links`}>
            <TbPhone className={`nav_icon`}/>
            <span className={`nav_title`}>CONTACT</span>
          </Link>

        </nav>
      </div>
    </header>
  )
}
