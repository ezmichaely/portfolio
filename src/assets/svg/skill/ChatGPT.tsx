import { SvgProps } from "@/types"

const ChatGPT = ({ width, height, size, color, className, stroke, theme, shape, radius }: SvgProps) => {
  const svgWidth = `${size ? size : width ? width : '100%'}`;
  const svgHeight = `${size ? size : height ? height : '100%'}`;

  return (
    <>
      <svg width={svgWidth} height={svgHeight} className={className} viewBox="0 0 101 101" fill="none">
      </svg>
    </>
  )
}

export default ChatGPT