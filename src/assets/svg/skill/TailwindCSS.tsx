import { SvgProps } from "@/types"

const TailwindCSS = ({ width, height, size, color, className, stroke, theme, shape, radius }: SvgProps) => {
  const svgWidth = `${size ? size : width ? width : '100%'}`;
  const svgHeight = `${size ? size : height ? height : '100%'}`;

  return (
    <svg width={svgWidth} height={svgHeight} className={className} viewBox="0 0 101 101" fill="none">
        <rect x="0.984375" y="0.181641" width="100" height="100" rx={radius} fill="#1A1F33" />
        <path fillRule="evenodd" clipRule="evenodd" d="M33.4062 43.1504C35.7496 33.7757 41.6098 29.0879 50.9844 29.0879C65.0469 29.0879 66.8047 39.6348 73.8359 41.3926C78.5238 42.5648 82.625 40.807 86.1406 36.1191C83.7973 45.4938 77.9371 50.1816 68.5625 50.1816C54.5 50.1816 52.7422 39.6348 45.7109 37.877C41.023 36.7047 36.9219 38.4625 33.4062 43.1504ZM15.8281 64.2441C18.1715 54.8695 24.0316 50.1816 33.4062 50.1816C47.4688 50.1816 49.2266 60.7285 56.2578 62.4863C60.9457 63.6586 65.0469 61.9008 68.5625 57.2129C66.2191 66.5875 60.359 71.2754 50.9844 71.2754C36.9219 71.2754 35.1641 60.7285 28.1328 58.9707C23.445 57.7984 19.3438 59.5562 15.8281 64.2441Z" fill="url(#paint0_linear_244_2352)" />
        <defs>
          <linearGradient id="paint0_linear_244_2352" x1="34.7734" y1="29.0879" x2="64.8516" y2="72.6426" gradientUnits="userSpaceOnUse">
            <stop stopColor="#32B1C1" />
            <stop offset="1" stopColor="#14C6B7" />
          </linearGradient>
        </defs>
      </svg>
  )
}

export default TailwindCSS