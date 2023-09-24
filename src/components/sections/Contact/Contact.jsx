import { paper_plane } from '@/assets/images';
import styles from './contact.module.css';
import Image from 'next/image';

export default function Contact() {
  return (
    <section id="contact" >
      <div className={styles.main}>
        <div className={styles.title}>
          <h1 className={styles.subtitle2}>
            Contact me
          </h1>
        </div>

        <div className={styles.second}>
          <div className={styles.secondLeft}>
            <div className={styles.h3}>
              <h3>
                Let’s connect.
              </h3>
              <h3>
                Tell me about your project needs.
              </h3>
            </div>

            <p className={styles.p}>I will make things possible.</p>
          </div>

          <div className={styles.form}>
            <div className={styles.form_title}>
              <h1>
                Send me a message
              </h1>
              <Image src={paper_plane} alt="paper plane" height={32}/>
            </div>
            <div className={styles.form_control}>
              <label className={styles.form_label}>Full Name</label>
              <input type="text" className={`${styles.input_forms} form-input`}/>
            </div>

            <div className={styles.form_control}>
              <label className={styles.form_label}>Email Address</label>
              <input type="text" className={`${styles.input_forms} form-input`}/>
            </div>

            <div className={styles.form_control}>
              <label className={styles.form_label}>Subject</label>
              <input type="text" className={`${styles.input_forms} form-input`}/>
            </div>

            <div className={styles.form_control}>
              <label className={styles.form_label}>Message</label>
              <textarea className={`${styles.textarea_forms} form-textarea`}></textarea>
            </div>

            <div className={styles.form_control}>
              <button className={styles.form_button}> SUBMIT </button>
            </div>

          </div>

        </div>
      </div>
    </section>

  )
}
