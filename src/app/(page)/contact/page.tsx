import type { Metadata } from 'next'

import styles from './contact.module.css';

export const metadata: Metadata = {
  title: 'Contact | EZ MICHAEL',
  description: 'A personal portfolio of EZ MICHAEL YUCOR',
}

export default function pages() {
  return (
    <main className={styles.main}>
      <section className={styles.title}>
        <h1 className={styles.subtitle2}>
          CONTACT
        </h1>
      </section>
    </main>
  )
}
