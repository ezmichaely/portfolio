import { SvgProps } from "@/types"

const Cplusplus = ({ width, height, size, color, className, stroke, theme, shape, radius }: SvgProps) => {
  const svgWidth = `${size ? size : width ? width : '100%'}`;
  const svgHeight = `${size ? size : height ? height : '100%'}`;

  return (
    <svg width={svgWidth} height={svgHeight} className={className} viewBox="0 0 101 101" fill="none">
      <rect x="0.787109" y="0.015625" width="100" height="100" rx={radius} fill="#00599C" />
      <path d="M44.0523 82.3426C26.2267 82.3426 11.7246 67.8406 11.7246 50.0152C11.7246 32.1896 26.2267 17.6875 44.0523 17.6875C55.5543 17.6875 66.282 23.8773 72.0477 33.8411L58.057 41.9371C55.1715 36.9496 49.8047 33.8513 44.0523 33.8513C35.1393 33.8513 27.8884 41.1023 27.8884 50.0152C27.8884 58.9277 35.1393 66.1789 44.0523 66.1789C49.8051 66.1789 55.1719 63.0805 58.0578 58.0922L72.0484 66.1879C66.2828 76.1527 55.5551 82.3426 44.0523 82.3426Z" fill="white" />
      <path d="M76.3793 48.2191H72.7871V44.627H69.1957V48.2191H65.6035V51.8109H69.1957V55.4031H72.7871V51.8109H76.3793V48.2191Z" fill="white" />
      <path d="M89.85 48.2191H86.2578V44.627H82.6664V48.2191H79.0742V51.8109H82.6664V55.4031H86.2578V51.8109H89.85V48.2191Z" fill="white" />
    </svg>
  )
}

export default Cplusplus