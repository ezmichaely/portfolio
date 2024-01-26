import { SvgProps } from "@/types"

const Menu = (
  { width, height, size, color, stroke, className, theme }: SvgProps) => {
  const svgWidth = `${size ? size : width ? width : '100%'}`;
  const svgHeight = `${size ? size : height ? height : '100%'}`;

  return (
    <svg width={svgWidth} height={svgHeight} className={className} viewBox="0 0 20 15" fill="none">
      <rect width="20" height="3" rx="1.5" fill={color} />
      <rect y="6" width="20" height="3" rx="1.5" fill={color} />
      <rect y="12" width="20" height="3" rx="1.5" fill={color} />
    </svg>
  )
}

export default Menu