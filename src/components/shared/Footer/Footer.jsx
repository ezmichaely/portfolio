"use client"

import Image from 'next/image';
import Link from 'next/link';
import {
  logo_ezyDark, logo_face,
  facebook, gmail, github, linkedin
} from '@/assets/images';
import styles from './footer.module.css';
import { footerDetails, copyRights, socials } from '@/constants';
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin.js";

gsap.registerPlugin(ScrollToPlugin);

const socialImages = {
  facebook, gmail, github, linkedin
};


export default function Footer() {

  const handleLogo = () => {
    gsap.to(window, { duration: 1, scrollTo: 0 });
  }


  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.left}>
          <div onClick={handleLogo} className={styles.brand}>
            <Image src={logo_face} alt="logo_face" priority
              height={80} />
            <Image src={logo_ezyDark} alt="logo_ezyDark" priority
              className={styles.logo_ezyDark} />
          </div>

          <div className={styles.details}>
            {footerDetails.map((data) => {
              return (
                <p key={data.title}>
                  <span className={styles.title}>{data.title}: </span>
                  <span className={styles.content}>{data.content}</span>
                </p>
              )
            })}
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.socials}>
            {socials.map((data) => {
              // @ts-ignore
              return (
                <Link key={data.title} href={data.url} target='_blank'>
                  <Image src={data.icon} alt={data.title} height={40} priority />
                </Link>
              )
            })}
          </div>
          <div className={styles.copyrights}>
            {copyRights}
          </div>
        </div>
      </div>
    </footer>
  )
}
