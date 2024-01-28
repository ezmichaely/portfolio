import { SvgProps } from "@/types"

const VueJS = ({ width, height, size, color, className, stroke, theme, shape, radius }: SvgProps) => {
  const svgWidth = `${size ? size : width ? width : '100%'}`;
  const svgHeight = `${size ? size : height ? height : '100%'}`;

  return (
    <svg width={svgWidth} height={svgHeight} className={className} viewBox="0 0 101 101" fill="none">
        <rect x="0.714844" y="0.265625" width="100" height="100" rx={radius} fill="#1A1F33" />
        <path d="M71.8086 19.9453H85.8711L50.7148 80.5898L15.5586 19.9453H29.4453H42.4531L50.7148 34.0078L58.8008 19.9453H71.8086Z" fill="#41B883" />
        <path d="M15.5586 19.9453L50.7148 80.5898L85.8711 19.9453H71.8086L50.7148 56.332L29.4453 19.9453H15.5586Z" fill="#41B883" />
        <path d="M29.4453 19.9453L50.7148 56.5078L71.8086 19.9453H58.8008L50.7148 34.0078L42.4531 19.9453H29.4453Z" fill="white" />
      </svg>
  )
}

export default VueJS