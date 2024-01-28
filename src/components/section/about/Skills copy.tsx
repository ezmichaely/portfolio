import { backEnd, frontEnd, graphics, toolsTech, } from "@/constants"
import styles from './about.module.css'

const Skills = () => {
  return (
    <div className={styles.skillContainer}>
      <h3>Skills and Technologies</h3>

      <div className={styles.skillContent}>

        <div className={styles.skillDiv}>
          <h5>Frontend Development</h5>
          <div className={styles.skillSection}>
            {frontEnd.map((data, index) => (
              <div key={index} className={styles.skillCard}>
                {data.icon}
                <p>{data.title}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.skillDiv}>
          <h5>Backend Development and Database</h5>
          <div className={styles.skillSection}>
            {backEnd.map((data, index) => (
              <div key={index} className={styles.skillCard}>
                {data.icon}
                <p>{data.title}</p>
              </div>
            ))}
          </div>
        </div>


        <div className={styles.skillDiv}>
          <h5>Graphics Design</h5>
          <div className={styles.skillSection}>
            {graphics.map((data, index) => (
              <div key={index} className={styles.skillCard}>
                {data.icon}
                <p>{data.title}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.skillDiv}>
          <h5>Tools and Technologies</h5>
          <div className={styles.skillSection}>
            {toolsTech.map((data, index) => (
              <div key={index} className={styles.skillCard}>
                {data.icon}
                <p>{data.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills