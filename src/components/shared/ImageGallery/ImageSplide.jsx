"use client";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "./imageSplide.css";

import Image from "next/image";
import Link from "next/link";

import { galleryDesigns } from "@/constants";

export default function ImageSplide() {

  const options = {
    type: "loop",
    rewind: true,
    rewindByDrag: true,
    width: "100%",
    fixedWidth: "322px",
    fixedHeight: "420px",
    autoplay: true,
    trimSpace: false,
    perMove: 1,
    focus: "left",
  };

  const options2 = {
    rewind: true,
    rewindByDrag: true,
    width: "100vw",
    perPage: 1,
    autoplay: true,
  };

  return (
    <Splide aria-label="Image Splide" options={options2}>
      {galleryDesigns.map((image) => (
        <SplideSlide
          key={image.key}
          // style={{ backgroundImage: `url(${image.src.src})` }}
          className="h-[420px] bg-accent"
        >
          <Link
            href={image.src.src}
            target="_blank"
            className="w-full h-full flex justify-center items-center backdrop-blur-md p-2"
          >
            <Image
              src={image.src}
              alt={image.key}
              lazy="true"
              className="h-full w-full object-contain"
            />
          </Link>
        </SplideSlide>
      ))}
    </Splide>

    // <div className="splide-container">
    //   <Splide
    //     hasTrack={false}
    //     aria-label="Main Slider"
    //     options={options}
    //     className="splide-div"
    //   >
    //     <div className="splide-content">
    //       <div className="splide__arrows mainSlider_arrows">
    //         <button className="splide__arrow splide__arrow--prev mainSlider_arrow  mainSlider_arrow_prev">
    //           <ChevronLeft />
    //         </button>
    //         <button className="splide__arrow splide__arrow--next mainSlider_arrow mainSlider_arrow_next">
    //           <ChevronRight />
    //         </button>
    //       </div>

    //       <SplideTrack>
    //         {mainPageData.sec04.map((data, index) => (
    //           <SplideSlide key={index} className="splide-slide">
    //             <div className="splide-slide-card">
    //               <div className="splide-slide-card-title">
    //                 <h4>{data.title1}</h4>
    //                 <h4>{data.title2}</h4>
    //               </div>
    //               <div className="splide-slide-card-img">
    //                 <Image src={data.img} alt={data.alt} />
    //               </div>
    //             </div>
    //           </SplideSlide>
    //         ))}
    //       </SplideTrack>
    //     </div>
    //   </Splide>
    // </div>
  );
}
