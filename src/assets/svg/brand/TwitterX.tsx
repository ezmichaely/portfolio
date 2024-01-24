import { SvgProps } from "@/types"

const TwitterX = ({ width, height, size, color, className }: SvgProps) => {
   const svgWidth = `${size ? size : width ? width : '100%'}`;
  const svgHeight = `${size ? size : height ? height : '100%'}`;

  return (
    <svg width={svgWidth} height={svgHeight} className={className} viewBox="0 0 30 30" fill="none">
      <path d="M24.0845 0H5.91549C2.64846 0 0 2.64846 0 5.91549V24.0845C0 27.3515 2.64846 30 5.91549 30H24.0845C27.3515 30 30 27.3515 30 24.0845V5.91549C30 2.64846 27.3515 0 24.0845 0Z" fill="black" />
      <path d="M21.6012 21.4555L16.3303 13.7977L15.7346 12.9317L11.9644 7.45421L11.6521 7H7.01843L8.14851 8.64223L13.1617 15.926L13.7573 16.7912L17.7873 22.644L18.0997 23.0973H22.7329L21.6012 21.4555ZM18.6488 22.0495L14.4639 15.9693L13.8682 15.1037L9.01202 8.04822H11.1009L15.0289 13.754L15.6246 14.6196L20.7385 22.05L18.6488 22.0495Z" fill="white" />
      <path d="M13.8678 15.1036L14.4639 15.9688L13.7574 16.7912L8.33662 23.0973H7L13.1613 15.926L13.8678 15.1036Z" fill="white" />
      <path d="M22.1733 7L16.3302 13.7977L15.6237 14.6196L15.0276 13.754L15.7341 12.9317L19.6923 8.32486L20.8367 7H22.1733Z" fill="white" />
    </svg>
  )
}

export default TwitterX