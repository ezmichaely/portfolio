import Image from 'next/image';
import Link from 'next/link';
import styles from './about.module.css';
import { aboutImage, hex_shape } from '@/assets/images';
import { about, techStacks } from '@/constants'

export default function About() {
  return (
    <section id="about" className={styles.main}>
      <div className={`${styles.mainContent}`}>
        <div className={styles.title}>
          <h1 className={styles.subtitle2}>
            About me
          </h1>
        </div>

        <div className={styles.second}>
          <Image src={aboutImage} alt="hex shape"
            priority className={styles.img} />

          <div className={styles.detailsContainer}>
            {about.map((data) => (
              <p key={data.title} className={styles.pText}>
                {data.content}
              </p>
            ))}
          </div>
        </div>

        <div className={styles.third}>
          <h1 className={styles.title2}>Tech Stack: </h1>
          <div className={styles.stacksContainer}>
            {techStacks.map((data) => (
              <div key={data.key} className={styles.stacksDiv} >
                <Image src={data.icon} alt={data.key}
                  className={styles.stack_img} />
                <p>{data.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
