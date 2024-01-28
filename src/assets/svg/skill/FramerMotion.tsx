import { SvgProps } from "@/types"

const FramerMotion = ({ width, height, size, color, className, stroke, theme, shape, radius }: SvgProps) => {
  const svgWidth = `${size ? size : width ? width : '100%'}`;
  const svgHeight = `${size ? size : height ? height : '100%'}`;

  return (
    <svg width={svgWidth} height={svgHeight} className={className} viewBox="0 0 101 101" fill="none">
        <rect x="0.761719" y="0.607422" width="100" height="100" rx={radius} fill="#1A1F33" />
        <path d="M85.7617 15.6074V50.6074L68.2617 68.1074L50.7617 85.6074L33.2617 68.1074L50.7617 50.6074L85.7617 15.6074Z" fill="#59529D" />
        <path d="M85.7617 50.6074V85.6074L68.2617 68.1074L85.7617 50.6074Z" fill="#5271B4" />
        <path d="M50.7617 50.6074L33.2617 68.1074L15.7617 85.6074V15.6074L33.2617 33.1074L50.7617 50.6074Z" fill="#BB4B96" />
      </svg>
  )
}

export default FramerMotion