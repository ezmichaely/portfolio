import { EdgePaper } from '@/assets/svg'
import { colors } from '@/constants/colors'
import styles from './about.module.css'
import { Skills } from '@/components'


const AboutPage = () => {
  return (
    <section id='about' className={styles.aboutSection}>
      <div className={styles.topEdge} />

      <div className={styles.aboutContainer}>
        <div className={styles.content}>
          <h3 className={styles.title}>ABOUT ME</h3>

          <div className={styles.details}>
            <div></div>
          </div>
        </div>


        <div className={styles.skills}>
          <Skills />
        </div>
      </div>

      <div className={styles.botEdge} />
    </section>
  )
}

export default AboutPage