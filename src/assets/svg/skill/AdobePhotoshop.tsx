import { SvgProps } from "@/types"

const AdobePhotoshop = ({ width, height, size, color, stroke, className, theme }: SvgProps) => {
  const svgWidth = `${size ? size : width ? width : '100%'}`;
  const svgHeight = `${size ? size : height ? height : '100%'}`;

  return (
    <svg width={svgWidth} height={svgHeight} className={className}>


    </svg>
  )
}

export default AdobePhotoshop