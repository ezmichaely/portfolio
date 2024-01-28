import { SvgProps } from "@/types"


const Close = (
  { width, height, size, color, className, stroke, theme, shape, radius }: SvgProps) => {
  const svgWidth = `${size ? size : width ? width : '100%'}`;
  const svgHeight = `${size ? size : height ? height : '100%'}`;

  return (
    <svg width={svgWidth} height={svgHeight} className={className} viewBox="0 0 18 17" fill="none">
      <rect x="2.98962" y="0.368286" width="20" height="3" rx="1.5" transform="rotate(45 2.98962 0.368286)" fill={color} />
      <rect x="0.868286" y="14.5104" width="20" height="3" rx="1.5" transform="rotate(-45 0.868286 14.5104)" fill={color} />
    </svg>
  )
}

export default Close