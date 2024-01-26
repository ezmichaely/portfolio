import styles from './homeDetails.module.css'
import HomeTypeWriter from './HomeTypeWriter';
import { ResumeBtn, SocialLInk } from '@/components';
import { socialLinks } from '@/constants';


const HomeDetails = () => {

  const resumeBtnCss = `text-moon text-lg whitespace-nowrap relative uppercase font-bold tracking-widest flex items-center justify-center py-2`;


  return (
    <div className={styles.homeDetailsContainer}>
      <div className={styles.homeDetailsContent}>
        <div className={styles.details}>
          <h1 className={styles.greet}> Hi there 👋, I am </h1>
          <h1 className={styles.name}> EZ Michael Yucor </h1>
          <h4 className={styles.position}> <HomeTypeWriter /> </h4>
        </div>

        <div className={styles.socials}>
          {socialLinks.map((data, index) => (
            <SocialLInk key={index} title={data.title} path={data.path} icon={data.icon} />
          ))}
        </div>

        <div className={styles.btnDownloadContainer}>
          <div className={styles.btnDownload}>
            <ResumeBtn classnames={resumeBtnCss} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeDetails