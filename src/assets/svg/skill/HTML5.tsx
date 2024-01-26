import { SvgProps } from "@/types"

const HTML5 = ({ width, height, size, color, stroke, className }: SvgProps) => {
  const svgWidth = `${size ? size : width ? width : '100%'}`;
  const svgHeight = `${size ? size : height ? height : '100%'}`;

  return (
    <svg width={svgWidth} height={svgHeight} className={className} viewBox="0 0 71 71" fill="none">
      <path d="M11.2332 63.0629L5.76172 1.69531H65.883L60.4055 63.0536L35.7857 69.8786L11.2332 63.0629Z" fill="#E44D26" />
      <path d="M35.8223 64.662L55.7165 59.1462L60.3972 6.71289H35.8223V64.662Z" fill="#F16529" />
      <path d="M35.8224 29.4735H25.8627L25.1748 21.7658H35.8224V14.2397H16.9492L17.1297 16.2588L18.9792 37.0001H35.8224V29.4735ZM35.8224 49.0204L35.7891 49.0297L27.4071 46.7657L26.8717 40.7637H19.3155L20.3699 52.5812L35.788 56.861L35.8224 56.8517V49.0204Z" fill="#EBEBEB" />
      <path d="M35.7959 29.4735V37.0001H45.0638L44.1904 46.7613L35.7959 49.027V56.8577L51.226 52.5812L51.3392 51.3097L53.1078 31.4947L53.291 29.4735H51.2632H35.7959ZM35.7959 14.2397V21.7658H53.9762L54.1271 20.0749L54.4706 16.2588L54.6505 14.2397H35.7959Z" fill="white" />
    </svg>

  )
}

export default HTML5