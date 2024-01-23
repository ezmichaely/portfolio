"use client"


import { useState, useEffect } from "react";
import { gsap } from "gsap";
import { colors } from "@/constants/colors";




const MenuToggle = ({ toggle, isOpen }: any) => {
  console.log(isOpen)
  const viewBox = `${isOpen ? '0 0 18 17' : '0 0 20 15'}`;
  const width = `${isOpen ? 18 : 20}`;
  const height = `${isOpen ? 17 : 15}`;

  const defaults = {
    fill: colors.sun,
    rx: "1.5",
    width: "20",
    height: "3",
    transition: { duration: 0.1 }
  }

  const topOpen = { x: "0", y: "0", style: "" }
  const topClose = {
    x: "2.98962", y: "0.368286",
    transform: "rotate(45 2.98962 0.368286)",
    style: ""
  }

  const botClose = { y: "12" }
  const botOpen = {
    x: "0.868286", y: "14.5104",
    style: { transform: "rotate(-45 0.868286 14.5104)" },
  }
  const Rect = (props: any) => (
    <rect
      {...defaults}
      {...props}
    />
  );


  const [menuTl] = useState(gsap.timeline({ paused: true }));
  const menuBars: any = {};
  
  useEffect(() => {
    menuTl
      .to(menuBars.topBar, {
        duration: 0.2,
        x: 52,
        stroke: "#006600",
        rotation: 45,
      })
      .to(menuBars.middleBar, { duration: 0.2, alpha: 0 }, 0)
      .to(
        menuBars.bottomBar,
        { duration: 0.2, x: 52, stroke: "#006600", rotation: -45 },
        0
      )
      .reverse();
  }, []);

  const toggleMenuTimeline = () => {
    menuTl.reversed(!menuTl.reversed());
  };

  return (
    <button onClick={toggleMenuTimeline} className='h-full flex justify-center items-center'>
      <svg width={width} height={height} viewBox={viewBox} fill="none">
      
        <Rect 
          x={`${isOpen ? "2.98962" : "0"}`} 
          y={`${isOpen ? "0.368286" : "0"}`} 
          transform={`${isOpen ? "rotate(45 2.98962 0.368286)" : "rotate(0)"}`} 
          variants={{
            open: { opacity: 1 },
            closed: { opacity: 1 },
          }}
          transition={{ duration: 0.1 }}
          ref={(e: any) => (menuBars["topBar"] = e)}
        />

        <Rect y="6"
          variants={{
            open: { opacity: 0 },
            closed: { opacity: 1 },
          }}
          transition={{ duration: 0.1 }}
          ref={(e: any) => (menuBars["middleBar"] = e)}
        />

        <Rect x={`${isOpen ? "0.868286" : "0"}`}
          y={`${isOpen ? "14.5104" : "12"}`} 
          transform={`${isOpen ? "rotate(-45 0.868286 14.5104)" : "rotate(0)"}`} 
          variants={{
            open: { opacity: 1 },
            closed: { opacity: 1 },
          }}
          transition={{ duration: 0.1 }}
          ref={(e: any) => (menuBars["bottomBar"] = e)}
        />
      </svg>
    </button>
  )
}

export default MenuToggle