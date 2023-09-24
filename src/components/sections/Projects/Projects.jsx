import { projectsData } from '@/constants';
import styles from './projects.module.css';
import { ProjectCard } from '@/components/shared';


export default function Projects() {
  // console.log(projects)
  return (
    <section id="projects" >
      <div className={styles.main}>
        <div className={styles.title}>
          <h1 className={styles.subtitle2}>
            Projects
          </h1>
        </div>

        {/* <ProjectCard /> */}
        <div className={styles.second}>
          {projectsData.map((data) => (
            <ProjectCard key={data.name} details={data} />
          ))}
        </div>
      </div>
    </section>
  )
}
