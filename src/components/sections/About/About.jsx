import Image from 'next/image';
import Link from 'next/link';
import styles from './about.module.css';
import { hex_shape } from '@/assets/images';
import { about, techStacks } from '@/constants/details'

export default function About() {
  return (
    <section id="about" >
      <div className={`${styles.main} container`}>
        <div className={styles.title}>
          <h1 className={styles.subtitle2}>
            ABOUT ME
          </h1>
        </div>

        <div className={styles.second}>
          <Image src={hex_shape} alt="hex shape" height={300} priority />
          <div className="lg:ml-24 text-xl flex flex-col gap-10">
            {about.map((data) => {
              return (
                <p key={data.title} className="text-justify px-6">
                  {data.content}
                </p>
              )
            })}
          </div>
        </div>

        <div className={styles.third}>
          <h1 className="text-xl font-beaufort font-semibold text-pink-500 mb-2">Tech Stack: </h1>
          <div className="flex justify-start items-center gap-x-2">
            {techStacks.map((data) => (
                <Link key={data.key} href={data.url}
                  target='_blank' >
                  <Image src={data.icon} alt={data.key} height={50} width={50}
                    className={styles.stack_img} />
                </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
