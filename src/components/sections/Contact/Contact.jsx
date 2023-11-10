
import styles from './contact.module.css';
import { ContactForm } from '@/components/shared';

export default function Contact() {
  return (
    <section id="contact" className={styles.main}>
      <div className={styles.mainContent}>
        <div className={styles.title}>
          <h1 className={styles.subtitle2}>
            Contact me
          </h1>
        </div>

        <div className={styles.second}>
          <div className={styles.secondLeft}>
            <div className={styles.h3}>
              <h3>
                Let’s connect. <br />
                Tell me about your <br />
                project needs.
              </h3>
            </div>

            <p className={styles.p}>I will make things possible.</p>
          </div>

          <ContactForm />

        </div>
      </div>
    </section>

  )
}
