import type { Metadata } from 'next'

import { projects } from '@/constants/details';
import styles from './projects.module.css';
import ProjectCard from '@/components/ui/ProjectCard/ProjectCard';

export const metadata: Metadata = {
  title: 'Projects | EZ MICHAEL',
  description: 'A personal portfolio of EZ MICHAEL YUCOR',
}

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
            <ProjectCard key={data.name} props={data} />
          )
        })}
      </section>
    </main>
  )
}
