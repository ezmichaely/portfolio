import { SvgProps } from "@/types"

const HTML5 = ({ width, height, size, color, stroke, className }: SvgProps) => {
  const svgWidth = `${size ? size : width ? width : '100%'}`;
  const svgHeight = `${size ? size : height ? height : '100%'}`;

  return (
    <svg width={svgWidth} height={svgHeight} className={className} viewBox="0 0 101 101" fill="none">
      <rect x="0.984375" y="0.769531" width="100" height="100" rx="20" fill="#E14E1D" />
      <path d="M19.7344 15.4395L23.0976 53.1711H66.3438L64.8926 69.3547L50.9684 73.1195L37.0703 69.3602L36.1411 58.9688H23.6168L25.4077 79.0004L50.9652 86.0988L76.5551 79.0004L79.9859 40.6953H34.5094L33.3676 27.9179H81.0785H81.1168L82.2344 15.4395H19.7344Z" fill="white" />
      <path d="M50.9844 15.4395H19.7344L23.0976 53.1711H50.9844V40.6953H34.5094L33.3676 27.9179H50.9844V15.4395Z" fill="#EBEBEB" />
      <path d="M50.9848 73.1141L50.9688 73.1195L37.0708 69.3602L36.1416 58.9688H23.6172L25.4081 79.0004L50.9657 86.0988L50.9848 86.0934V73.1141Z" fill="#EBEBEB" />
    </svg>
  )
}

export default HTML5