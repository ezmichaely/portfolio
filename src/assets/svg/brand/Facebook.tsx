import { SvgProps } from "@/types"

const Facebook = ({ width, height, size, color, className }: SvgProps) => {
  const svgWidth = `${size ? size : width ? width : '100%'}`;
  const svgHeight = `${size ? size : height ? height : '100%'}`;

  return (
    <svg width={svgWidth} height={svgHeight} className={className} viewBox="0 0 30 30" fill="none">
      <path d="M24.0845 0H5.91549C2.64846 0 0 2.64846 0 5.91549V24.0845C0 27.3515 2.64846 30 5.91549 30H24.0845C27.3515 30 30 27.3515 30 24.0845V5.91549C30 2.64846 27.3515 0 24.0845 0Z" fill="#1877F2" />
      <path d="M20.9883 19.4766L21.6562 15.1406H17.4961V12.3281C17.4961 11.1445 18.0762 9.98438 19.9395 9.98438H21.832V6.29297C21.832 6.29297 20.1152 6 18.4746 6C15.0469 6 12.8086 8.07422 12.8086 11.8359V15.1406H9V19.4766H12.8086V30H17.4961V19.4766H20.9883Z" fill="white" />
    </svg>
  )
}

export default Facebook