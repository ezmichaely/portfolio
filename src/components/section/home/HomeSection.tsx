import Image from 'next/image'
import styles from './home.module.css'
import {
  HomeDetails,
  HomeImage
} from '@/components'

const HomeSection = () => {
  return (
    <section id='home' className={styles.homeSection}>
      <div className={styles.homeContainer}>
        <div className={styles.homeContent}>
          <HomeDetails />
          <HomeImage />
        </div>
        <div className={styles.homeOverlayBg} />
      </div>
    </section>
  )
}

export default HomeSection