import { SvgProps } from "@/types"

const AngularJS = ({ width, height, size, color, className, stroke, theme, shape, radius }: SvgProps) => {
  const svgWidth = `${size ? size : width ? width : '100%'}`;
  const svgHeight = `${size ? size : height ? height : '100%'}`;

  return (
    <>
      <svg width={svgWidth} height={svgHeight} className={className} viewBox="0 0 101 101" fill="none">
        <rect x="0.287109" y="0.242188" width="100" height="100" rx={radius} fill="#1A1F33" />
        <path d="M13.4512 24.1191L49.8086 11.1797L87.123 23.9189L81.0926 72L49.8086 89.3047L19.0322 72.2246L13.4512 24.1191Z" fill="#E23237" />
        <path d="M87.1231 23.9189L49.8086 11.1797V89.3047L81.0926 72L87.1231 23.9189Z" fill="#B52E31" />
        <path d="M49.8653 20.3105L27.209 70.7012L35.6636 70.5301L40.229 59.1437H60.4927L65.4536 70.6184L73.5149 70.7891L49.8653 20.3105ZM49.9212 36.4873L57.5872 52.4957H43.2368L49.9434 36.4873H49.9212Z" fill="white" />
      </svg>
    </>
  )
}

export default AngularJS