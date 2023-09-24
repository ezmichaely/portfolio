import Image from 'next/image';
import Link from 'next/link';
import styles from './about.module.css';
import { hex_shape } from '@/assets/images';
import { about, techStacks } from '@/constants'

export default function About() {
  return (
    <section id="about">
      <div className={`${styles.main}`}>
        <div className={styles.title}>
          <h1 className={styles.subtitle2}>
            About me
          </h1>
        </div>

        <div className={styles.second}>
          <Image src={hex_shape} alt="hex shape"
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
              <Link key={data.key} href={data.url}
                target='_blank' >
                <Image src={data.icon} alt={data.key}
                  className={styles.stack_img} />
                  {/* // height={data.height} width={data.width} */}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
