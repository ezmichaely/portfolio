import Image from 'next/image';
import Link from 'next/link';
import styles from '@/app/(page)/home/home.module.css'
import {
  facebook, gmail, github, linkedin, profile
} from '@/constants/images';
import { socials } from '@/constants/details';

const socialImages = {
  facebook, gmail, github, linkedin
};


export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.first}>
        <h1 className={styles.subtitle1}>
          Hi there 👋, I am
        </h1>
        <h1 className={styles.subtitle2}>
          EZ MICHAEL YUCOR
        </h1>
      </section>

      <section className={styles.second}>
        <div className={styles.second_left}>
          <div>
            <h1 className={styles.web}>WEB</h1>
            <h1 className={styles.developer}>DEVELOPER</h1>
          </div>

          <div className={styles.socials}>
            {socials.map((data) => {
              // @ts-ignore
              const socialImage = socialImages[data.icon];
              return (
                <Link key={data.title} href={data.url} target='_blank'>
                  <Image src={socialImage} alt={data.title} height={40} priority />
                </Link>
              )
            })}
          </div>
        </div>

        <div className={styles.profile_container}>
          <div className={styles.morphing_shape} />
          <Image src={profile} alt="profile" className={styles.profile} />
        </div>

      </section>
    </main>
  )
}
