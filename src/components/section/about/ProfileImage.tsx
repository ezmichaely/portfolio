import { profileImage } from '@/assets/image'
import Image from 'next/image'
import styles from './profileImage.module.css'
import { Badge } from '@/components/ui/badge'
import { Plus } from 'lucide-react'
import { Badges } from '@/components'


const ProfileImage = () => {
  return (
    <div className={styles.profileContainer}>
      <div className={styles.imageContainer}>
        <div className={styles.profileContent}>
          <Image src={profileImage} alt="Profile Picture"
            className={styles.profileImage} />
          <div className={styles.profileBg} />

          <div className='hidden md:block lg:hidden xl:block absolute top-12 z-50 -left-20'>
            <Badge variant="outline" className={styles.badge}>
              + Responsive Design
            </Badge>
          </div>

          <div className='hidden md:block lg:hidden xl:block absolute top-40 z-50 -left-24'>
            <Badge variant="outline" className={styles.badge}>
              + Creative Design
            </Badge>
          </div>

          <div className='hidden md:block lg:hidden xl:block absolute top-72 z-50 -left-12'>
            <Badge variant="outline" className={styles.badge}>
              + Problem Solver
            </Badge>
          </div>

          <div className='hidden md:block lg:hidden xl:block absolute top-12 z-50 -right-24'>
            <Badge variant="outline" className={styles.badge}>
              + Cross-Browser Compatibility
            </Badge>
          </div>

          <div className='hidden md:block lg:hidden xl:block absolute top-48 z-50 -right-28'>
            <Badge variant="outline" className={styles.badge}>
              + Attention to Details
            </Badge>
          </div>

          <div className='hidden md:block lg:hidden xl:block absolute top-[21rem] z-50 -right-24'>
            <Badge variant="outline" className={styles.badge}>
              + Search Engine Optimization (SEO)
            </Badge>
          </div>
        </div>
      </div>

      <div className={styles.badgesContainer}>
        <Badges />
      </div>
    </div>
  )
}

export default ProfileImage