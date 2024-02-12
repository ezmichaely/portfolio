import Link from "next/link";
import Image from "next/image";
import styles from "./projectCard.module.css";

export default function ProjectCard({ details }) {
  return (
    <div className={styles.card}>
      <div className={styles.cardContent}>
        <div className={styles.imgHolder}>
          <Image src={details.img} alt={details.name} />
          <div className={styles.imgDesc}>
            <h4> {details.name} </h4>
          </div>
        </div>

        <div className={styles.descriptions}>
          <div className={styles.descTop}>
            {/* <h4> {details.name} </h4> */}
            <p>{details.desc}</p>
          </div>

          <div className={styles.descBot}>
            <div className={styles.links}>
              {details.url && (
                <Link
                  href={details.url}
                  target="_blank"
                  className={styles.live}
                >
                  LIVE SITE
                </Link>
              )}

              {details.github && (
                <Link
                  href={details.github}
                  target="_blank"
                  className={styles.github}
                >
                  GITHUB
                </Link>
              )}
            </div>
            <div className={styles.stacks}>
              <h5>TECH USED:</h5>

              <div className={styles.tech}>
                {details.stack.map((data, i) => (
                  <div key={i} className={styles.techContent}>
                    {data}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
