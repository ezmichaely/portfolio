'use client'

import { ScrollToTop } from '@/assets/images';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import styles from './scrolltop.module.css'
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin.js";

gsap.registerPlugin(ScrollToPlugin);

const ScrollTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    gsap.to(window, { duration: 0.5, scrollTo: 0 });
  };

  return (
    <div className={`${styles['scroll-to-top']} ${isVisible ? styles['visible'] : ''}`}>
      <button onClick={scrollToTop}>
        <Image src={ScrollToTop} alt="scroll to top"
          height={15} />
      </button>
    </div>
  );
};

export default ScrollTop;