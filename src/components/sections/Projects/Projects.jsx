import { projectsData } from '@/constants';
import styles from './projects.module.css';
import { ProjectCard, ImageGallery } from '@/components/shared';
import Link from 'next/link'


export default function Projects() {
  return (
    <section id="projects" className={styles.main}>
      <div className={styles.mainContent}>
        <div className={styles.title}>
          <h1 className={styles.subtitle2}>
            Projects
          </h1>
        </div>

        <div className={styles.web}>
          <h3>WEB DEVELOPMENT</h3>
          <div className={styles.webContent}>
            {projectsData.map((data) => (
              <ProjectCard key={data.key} details={data} />
            ))}
          </div>
        </div>

        {/* <div className={styles.ux}>
          <h3>Graphics Design</h3>
          <div className={styles.uxContent}>
            <ImageGallery />
          </div>
        </div> */}
      </div>
    </section>
  )
}
