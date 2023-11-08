import { projectsData } from '@/constants';
import styles from './projects.module.css';
import { ProjectCard } from '@/components/shared';
import Link from 'next/link'


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
            <Link key={data.name}  href={data.url} target='_blank'
              className='w-full bg-white p-4 rounded'>
              {/* <Image src={props.logo} alt={props.key} height={300} /> */}
              <div>
                <h4 className='font-beaufort text-2xl font-bold text-mirage-dark'>
                  {data.name}
                </h4>
              </div>
            </Link>
            // <ProjectCard key={data.name} details={data} />
          ))}
        </div>
      </div>
    </section>
  )
}
