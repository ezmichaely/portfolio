"use client"

import Image from 'next/image';
import Link from 'next/link';
import { logo_emty, logo_face } from '@/assets/images';
import styles from './header.module.css';
import { TbCode, TbPhone, TbSmartHome, TbUserHeart } from 'react-icons/tb';
import { routers } from '@/constants/details';
import { usePathname } from 'next/navigation';

const iconComponents = {
  TbCode,
  TbPhone,
  TbSmartHome,
  TbUserHeart,
};

export default function Header() {
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.brand}>
          <Image src={logo_face} alt="logo_face" height={70} priority />
          <Image src={logo_emty} alt="logo_emty" height={60} priority className={styles.logo_emty} />
        </Link>

        <nav className={styles.navbar}>
          {routers.map((link) => {
            const isActive = (pathname.includes(link.url) && link.url.length > 1 || pathname === link.url)
            // @ts-ignore
            const IconComponent = iconComponents[link.icon];
            return (
              <Link key={link.title} href={link.url}
                className={`${styles.nav_links} ${isActive && styles.nav_links_active}`} >
                {IconComponent && <IconComponent className={styles.nav_icon} />}
                <span className={styles.nav_title}>{link.title}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  )
}
