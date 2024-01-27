import { SvgProps } from "@/types"

const Facebook = (
  { width, height, size, color, className, stroke, theme, shape, radius }: SvgProps) => {
  const svgWidth = `${size ? size : width ? width : '100%'}`;
  const svgHeight = `${size ? size : height ? height : '100%'}`;

  return (
    <>
      {stroke ?
        <svg width={svgWidth} height={svgHeight} className={className} viewBox="0 0 32 32" fill="none">
          {radius ?
            <rect x="1" y="1" width="30" height="30" rx={radius} fill="#1877F2" stroke="white" />
            :
            <rect x="1" y="1" width="30" height="30" fill="#1877F2" stroke="white" />
          }
          <path d="M21.9883 20.4766L22.6562 16.1406H18.4961V13.3281C18.4961 12.1445 19.0762 10.9844 20.9395 10.9844H22.832V7.29297C22.832 7.29297 21.1152 7 19.4746 7C16.0469 7 13.8086 9.07422 13.8086 12.8359V16.1406H10V20.4766H13.8086V31H18.4961V20.4766H21.9883Z" fill="white" />
        </svg>
      :
        <svg width={svgWidth} height={svgHeight} className={className} viewBox="0 0 30 30" fill="none">
          {radius ?
            <rect width="30" height="30" rx={radius} fill="#1877F2" />
            :
            <rect width="30" height="30" fill="#1877F2" />
          }
          <path d="M20.9883 19.4766L21.6562 15.1406H17.4961V12.3281C17.4961 11.1445 18.0762 9.98438 19.9395 9.98438H21.832V6.29297C21.832 6.29297 20.1152 6 18.4746 6C15.0469 6 12.8086 8.07422 12.8086 11.8359V15.1406H9V19.4766H12.8086V30H17.4961V19.4766H20.9883Z" fill="white" />
        </svg>
      }


    </>
  )
}

export default Facebook