import { projectsData } from '@/constants/details';
import styles from './projects.module.css';
import {
  ProjectCard
} from '@/components/shared/ProjectCard/ProjectCard';

export default function Projects() {
  // console.log(projects)
  return (
    <section id="projects" className={styles.main}>
      <div className={styles.title}>
        <h1 className={styles.subtitle2}>
          PROJECTS
        </h1>
      </div>

      <div className={styles.second}>
        {/* {projectsData.map((data) => (
          <ProjectCard key={data.name} props={data} />
        ))} */}
      </div>
    </section>
  )
}
