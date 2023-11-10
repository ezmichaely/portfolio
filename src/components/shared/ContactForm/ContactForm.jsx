"use client"

import Image from 'next/image';
import { paper_plane } from '@/assets/images';
import styles from './contactform.module.css';

export default function ContactForm() {
  return (
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

      {/* <div className={styles.form_control}>
        <label className={styles.form_label}>Subject</label>
        <input type="text" className={`${styles.input_forms} form-input`}/>
      </div> */}

      <div className={styles.form_control}>
        <label className={styles.form_label}>Message</label>
        <textarea className={`${styles.textarea_forms} form-textarea`}></textarea>
      </div>

      <div className={styles.form_control}>
        <button className={styles.form_button}> SUBMIT </button>
      </div>

    </div>
  )
}
