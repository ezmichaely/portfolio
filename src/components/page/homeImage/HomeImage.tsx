import Image from 'next/image'
import styles from './homeImage.module.css'
import { heroImage } from '@/assets/image'
import { Parallelogram } from '@/assets/svg'
import { colors } from '@/constants/colors'

const HomeImage = () => {
  return (
    <>
      <div className={styles.heroContainer}>
        <div className={styles.heroContent}>
          <div className={styles.heroBox}>
            <div className={styles.parallelogram1} />
            <div className={styles.parallelogram2} />
            <div className={styles.heroImageContainer}>
              <Image src={heroImage} alt="ez michael yucor portfolio hero image" className={styles.heroImage} priority />
            </div>
            <div className={styles.parallelogram3} />
          </div>
        </div>
      </div>


    </>

  )
}

export default HomeImage