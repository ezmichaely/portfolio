import { SvgProps } from "@/types"

const CSS3 = ({ width, height, size, color, className, stroke, theme, shape, radius }: SvgProps) => {
  const svgWidth = `${size ? size : width ? width : '100%'}`;
  const svgHeight = `${size ? size : height ? height : '100%'}`;

  return (
    <svg width={svgWidth} height={svgHeight} className={className} viewBox="0 0 101 101" fill="none">
        <rect x="0.984375" y="0.269531" width="100" height="100" rx={radius} fill="#0277BD" />
        <path d="M21.9824 40.1953L23.1007 52.6727H51.0228V40.1953H21.9824Z" fill="#EBEBEB" />
        <path d="M51.0215 14.9414H50.9785H19.7344L20.8686 27.4189H51.0215V14.9414Z" fill="#EBEBEB" />
        <path d="M51.0205 85.5828V72.6012L50.9658 72.6156L37.0698 68.8637L36.1815 58.9121H29.4291H23.6562L25.4043 78.5035L50.9631 85.5988L51.0205 85.5828Z" fill="#EBEBEB" />
        <path d="M66.343 52.673L64.8945 68.8551L50.9785 72.6113V85.5922L76.5578 78.5031L76.7453 76.3949L79.6773 43.5465L79.9816 40.1957L82.2344 14.9414H50.9785V27.4189H68.5602L67.425 40.1957H50.9785V52.673H66.343Z" fill="white" />
      </svg>
  )
}

export default CSS3