import Image from 'next/image';
import Link from 'next/link';
import styles from './about.module.css';
import { hex_shape } from '@/constants/images';
import { about, techStacks } from '@/constants/details'


export default function page() {
  return (
    <main className={styles.main}>
      <section className={styles.title}>
        <h1 className={styles.subtitle2}>
          About me
        </h1>
      </section>

      <section className={styles.second}>
        <Image src={hex_shape} alt="hex shape" height={300} priority />
        {/* @ts-ignore */}
        <div className="lg:ml-24 text-xl flex flex-col gap-10">
          {about.map((data) => {
            return (
              <p key={data.title} className="text-justify px-6"> 
                {data.content}
              </p>
            )
          })}
        </div>
      </section>


      <section className={styles.third}>
        <h1 className="text-xl font-roboto_slab font-semibold text-pink-500 mb-2">Tech Stack: </h1>
        <div className="flex justify-start items-center gap-x-2">
          {techStacks.map((data) => {
            return (
              <Link key={data.key} href={data.url} 
                target='_blank' >
                <Image src={data.icon} alt={data.key} height={50} width={50}
                  className={styles.stack_img} />
              </Link>
            )
          })}
        </div>
      </section>
    </main>
  )
}
