"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import Link from 'next/link';
// import 'swiper/css/navigation';

import { galleryDesigns } from "@/constants";



export default function HeroSwiper() {
  return (
    <Swiper
      cssMode={true}
      slidesPerView={1}
      spaceBetween={30}
      // effect={'fade'}
      loop={true}
      grabCursor={true}
      pagination={{
        clickable: true,
        // dynamicBullets: true,
      }}
      autoplay={{
        delay: 1500,
        disableOnInteraction: false,
      }}
      navigation={false}
      modules={[Autoplay, EffectFade, Pagination]}
      className="h-[420px]"
      // onAutoplayTimeLeft={onAutoplayTimeLeft}
    >
      {galleryDesigns.map((image) => (
        <SwiperSlide
          key={image.key}
          style={{ backgroundImage: `url(${image.src.src})` }}
          className="h-[420px]"
        >
          <Link
            href={image.src.src}
            target="_blank"
            className="w-full h-full flex justify-center items-center backdrop-blur-md"
          >
            <Image src={image.src} alt={image.key} lazy="true" className="h-full w-full object-contain"/>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
