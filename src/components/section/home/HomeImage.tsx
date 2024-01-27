import Image from 'next/image'
import styles from './homeImage.module.css'
import { heroImage } from '@/assets/image'

const HomeImage = () => {
  const alt = `EZ Michael Yucor Portfolio Hero Image`
  return (
    <>
      <div className={styles.heroContainer}>
        <div className={styles.heroContent}>

          <div className={`${styles.heroBox}`}>
            <div className={styles.parallelogramDiv1} />
            <div className={styles.parallelogramDiv2} />

            <div className={styles.heroImageContainer}>
              <Image src={heroImage} alt={alt}
                className={styles.heroImage} priority />
            </div>

            <div className={styles.parallelogramDiv3} />

          </div>


        </div>
      </div>
    </>

  )
}

export default HomeImage