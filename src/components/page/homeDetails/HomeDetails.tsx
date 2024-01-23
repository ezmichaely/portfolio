import Image from 'next/image';
import Link from 'next/link';
import styles from './homeDetails.module.css'
import HomeTypeWriter from '../homeTypeWriter/HomeTypeWriter';

const HomeDetails = () => {
  return (
    <div className={styles.homeDetailsContainer}>
      <div className={styles.homeDetailsContent}>
        <div className={styles.details}>
          <h1 className={styles.greet}> Hi there 👋, I am </h1>
          <h1 className={styles.name}> EZ Michael Yucor </h1>
          <h4 className={styles.position}> <HomeTypeWriter /> </h4>
        </div>

        <div className={styles.socials}>
          {/* {socials.map((data) => (
            <Link key={data.title} href={data.url} target='_blank'>
              <Image src={data.icon}
                alt={data.title}
                height={40}
                priority />
            </Link>
          ))} */}
        </div>

        <div className={styles.btnDownload}>
          <Link href="/EZ_MICHAEL_YUCOR_CV.pdf"
            className={styles.resumeDownload}
            rel="noopener noreferrer" download>
            RESUME / CV
          </Link>
        </div>
      </div>
    </div>
  )
}

export default HomeDetails