import { aboutParagraph } from '@/constants'
import styles from './about.module.css'
import { ProfileImage, Skills } from '@/components'


const AboutSection = () => {
  return (
    <section id='about' className={styles.aboutSection}>
      <div className={styles.topEdge} />

      <div className={styles.aboutContainer}>
        <div className={styles.content}>
          <h3 className={styles.title}>ABOUT ME</h3>

          <div className={styles.details}>
            <div className={styles.profile}>
              <ProfileImage />
            </div>

            <div className={styles.paragraphs}>
              {aboutParagraph.map((data, index) => (
                <p key={index} dangerouslySetInnerHTML={{__html: data}} />
              ))}
            </div>
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

export default AboutSection