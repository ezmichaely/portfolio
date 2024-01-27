'use client'

// import { ScrollToTop } from '@/assets/images';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import styles from './scrollToTop.module.css'
import { gsap } from "gsap";
// import { useRef } from "react";
// import { useGSAP } from "@gsap/react";
import { ArrowUp } from 'lucide-react';
import { colors } from '@/constants/colors';
import { ScrollToPlugin } from "gsap/ScrollToPlugin.js";



const ScrollToTop = () => {
  gsap.registerPlugin(ScrollToPlugin);


  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // console.log({ wind: window.pageYOffset });
      if (window.pageYOffset > 80) {
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
    gsap.to(window, { duration: 0.5, scrollTo: (0) });
  };

  return (
    <div className={`${styles.scrollToTop} ${isVisible ? styles.visible : ''}`}>
      <button onClick={scrollToTop}>
        <ArrowUp color={colors.sun} />
      </button>
    </div>
  );
};

export default ScrollToTop;