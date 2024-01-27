import { SvgProps } from "@/types"

const Telegram = (
  { width, height, size, color, className, stroke, theme, shape, radius }: SvgProps) => {
  const svgWidth = `${size ? size : width ? width : '100%'}`;
  const svgHeight = `${size ? size : height ? height : '100%'}`;


  return (

    <>
      {stroke ?
        <svg width={svgWidth} height={svgHeight} className={className} viewBox="0 0 32 32" fill="none">
          {radius ?
            <rect x="1" y="1" width="30" height="30" rx={radius} fill="#37AEE2" stroke="white" />
            :
            <rect x="1" y="1" width="30" height="30" fill="#37AEE2" stroke="white" />
          }
          <path d="M13.0809 23.9106C12.4287 23.9106 12.488 23.6734 12.3101 23.0805L10.4128 16.8548L24.9394 8.31671" fill="#C8DAEA" />
          <path d="M13.081 23.9106C13.496 23.9106 13.7332 23.6735 14.0297 23.4363L16.6978 20.8867L13.3775 18.8708" fill="#A9C9DD" />
          <path d="M13.3774 18.8708L21.3819 24.7407C22.2119 25.2743 22.9235 24.9779 23.1606 23.9106L26.4217 8.6132C26.7182 7.30877 25.8881 6.71584 24.9987 7.13089L5.96585 14.4831C4.72071 14.9575 4.72071 15.7283 5.72868 16.0247L10.6499 17.5663L21.9155 10.392C22.4491 10.0955 22.9235 10.2141 22.5677 10.6291" fill="#F6FBFE" />
        </svg>
      :
        <svg width={svgWidth} height={svgHeight} className={className} viewBox="0 0 30 30" fill="none">
          {radius ?
            <rect width="30" height="30" rx={radius} fill="#37AEE2" />
            :
            <rect width="30" height="30" fill="#37AEE2" />
          }
          <path d="M12.0809 22.9106C11.4287 22.9106 11.488 22.6734 11.3101 22.0805L9.41278 15.8548L23.9394 7.31671" fill="#C8DAEA" />
          <path d="M12.081 22.9106C12.496 22.9106 12.7332 22.6735 13.0297 22.4363L15.6978 19.8867L12.3775 17.8708" fill="#A9C9DD" />
          <path d="M12.3774 17.8708L20.3819 23.7407C21.2119 24.2743 21.9235 23.9779 22.1606 22.9106L25.4217 7.6132C25.7182 6.30877 24.8881 5.71584 23.9987 6.13089L4.96585 13.4831C3.72071 13.9575 3.72071 14.7283 4.72868 15.0247L9.64994 16.5663L20.9155 9.39197C21.4491 9.0955 21.9235 9.21409 21.5677 9.62914" fill="#F6FBFE" />
        </svg>
      }


    </>
  )
}

export default Telegram