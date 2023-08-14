import { projects } from '@/constants/details';
import styles from './projects.module.css';
import ProjectCard from '@/components/ui/ProjectCard/ProjectCard';

export default function page() {
  return (
    <main className={styles.main}>
      <section className={styles.title}>
        <h1 className={styles.subtitle2}>
          PROJECTS
        </h1>
      </section>

      <section className={styles.second}>
        {projects.map((data) => {
          return (
            // @ts-ignore
            <ProjectCard key={data.name} props={data}/>
          )
        })}
      </section>
    </main>
  )
}
