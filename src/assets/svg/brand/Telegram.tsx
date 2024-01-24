import { SvgProps } from "@/types"

const Telegram = ({ width, height, size, color, className }: SvgProps) => {
   const svgWidth = `${size ? size : width ? width : '100%'}`;
  const svgHeight = `${size ? size : height ? height : '100%'}`;

  return (
    <svg width={svgWidth} height={svgHeight} className={className} viewBox="0 0 30 30" fill="none">
      <path d="M24.0845 0H5.91549C2.64846 0 0 2.64846 0 5.91549V24.0845C0 27.3515 2.64846 30 5.91549 30H24.0845C27.3515 30 30 27.3515 30 24.0845V5.91549C30 2.64846 27.3515 0 24.0845 0Z" fill="#37AEE2" />
      <path d="M12.4679 22.9106C11.8157 22.9106 11.875 22.6734 11.6971 22.0805L9.79974 15.8548L24.3264 7.31671" fill="#C8DAEA" />
      <path d="M12.468 22.9106C12.883 22.9106 13.1202 22.6735 13.4166 22.4363L16.0848 19.8867L12.7644 17.8708" fill="#A9C9DD" />
      <path d="M12.7643 17.8708L20.7688 23.7407C21.5989 24.2743 22.3104 23.9779 22.5476 22.9106L25.8087 7.6132C26.1051 6.30877 25.275 5.71584 24.3856 6.13089L5.35281 13.4831C4.10767 13.9575 4.10767 14.7283 5.11564 15.0247L10.0369 16.5663L21.3024 9.39197C21.8361 9.0955 22.3104 9.21409 21.9547 9.62914" fill="#F6FBFE" />
    </svg>
  )
}

export default Telegram