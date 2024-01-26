import { SvgProps } from "@/types"

const Parallelogram = (
  { width, height, size, color, stroke, className, theme }: SvgProps) => {
  const svgWidth = `${size ? size : width ? width : 505}`;
  const svgHeight = `${size ? size : height ? height : 717}`;

  return (
    <svg width={svgWidth} height={svgHeight} className={className}
      viewBox="0 0 505 717" fill="none" >

      <path fill={color}
        d="M276.884 0H504.277L227.393 717H0L276.884 0Z" />

    </svg>
  )
}

export default Parallelogram


