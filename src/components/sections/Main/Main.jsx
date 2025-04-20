import Image from 'next/image';
import Link from 'next/link';
import styles from './main.module.css'
import { socials } from '@/constants';
import {
  heroImage
} from '@/assets/images'

export default function Home() {
  return (
    <section id="main" className={styles.main}>
      <div className={styles.mainContent}>
        <div className={styles.second}>
          <div className={styles.second_left}>
            <div className={styles.title}>
              <h1 className={styles.subtitle1}>
                <span className="whitespace-nowrap">Hi there 👋,</span>
                <span className="whitespace-nowrap">&nbsp; I am</span>
              </h1>
              <h1 className={styles.subtitle2}>
                EZ Michael Yucor
              </h1>
              <h4>
                <span> Front-end Developer / </span>
                <span> UX Designer </span>
              </h4>
            </div>

            <div className={styles.socials}>
              {socials.map((data) => (
                <Link key={data.title} href={data.url} target='_blank'>
                  <Image src={data.icon}
                    alt={data.title}
                    height={40}
                    priority />
                </Link>
              ))}
            </div>

            <div className={styles.resume}>
              <a href="/EZ_MICHAEL_YUCOR-RESUME.pdf" target="_blank"> Resume / CV </a>
            </div>
          </div>


          <div className={styles.profile_container}>
            {/* <div className={`${styles.morphing_shape}`} /> */}
            <Image src={heroImage} alt="hero" className={styles.heroImage} />
          </div>
        </div>
      </div>



    </section>
  )
}
