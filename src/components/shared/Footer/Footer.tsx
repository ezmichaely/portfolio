import Image from 'next/image';
import Link from 'next/link';
import { 
  logo_emty, logo_face, 
  facebook, gmail, github, linkedin  } from '@/constants/images';
import styles from './footer.module.css';
import { footerDetails, copyRights, socials } from '@/constants/details';

const socialImages = {
  facebook, gmail, github, linkedin
};


export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.left}>
          <Link href="/" className={styles.brand}>
            <Image src={logo_face} alt="logo_face" priority 
              height={80} />
            <Image src={logo_emty} alt="logo_emty" priority 
              className={styles.logo_emty} />
          </Link>

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
              const socialImage = socialImages[data.icon];
              return (
                <Link key={data.title} href={data.url} target='_blank'>
                  <Image src={socialImage} alt={data.title} height={40} priority />
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
