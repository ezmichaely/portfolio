import { Badge } from '@/components/ui/badge'
import styles from './profileImage.module.css'

const Badges = () => {
  return (
    <div className={styles.badgesContent}>
      <Badge variant="outline" className={styles.badge}>
        + Responsive Design
      </Badge>

      <Badge variant="outline" className={styles.badge}>
        + Creative Design
      </Badge>

      <Badge variant="outline" className={styles.badge}>
        + Problem Solver
      </Badge>


      <Badge variant="outline" className={styles.badge}>
        + Attention to Details
      </Badge>


      <Badge variant="outline" className={styles.badge}>
        + Cross-Browser Compatibility
      </Badge>

      <Badge variant="outline" className={styles.badge}>
        + Search Engine Optimization (SEO)
      </Badge>
    </div>
  )
}

export default Badges