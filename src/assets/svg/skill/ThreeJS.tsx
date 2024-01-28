import { SvgProps } from "@/types"

const ThreeJS = ({ width, height, size, color, className, stroke, theme, shape, radius }: SvgProps) => {
  const svgWidth = `${size ? size : width ? width : '100%'}`;
  const svgHeight = `${size ? size : height ? height : '100%'}`;

  return (
    <svg width={svgWidth} height={svgHeight} className={className} viewBox="0 0 101 101" fill="none">
        <rect x="0.957031" y="0.939453" width="100" height="100" rx={radius} fill="#1A1F33" />
        <path fillRule="evenodd" clipRule="evenodd" d="M36.0031 88.1074L19.123 19.7715L86.791 39.2535L36.0031 88.1074Z" stroke="white" strokeWidth="2" strokeMiterlimit="10" strokeLinejoin="round" />
        <path fillRule="evenodd" clipRule="evenodd" d="M52.9437 29.5137L61.3777 63.6918L27.5625 53.9477L52.9437 29.5137Z" stroke="white" strokeWidth="2" strokeMiterlimit="10" strokeLinejoin="round" />
        <path fillRule="evenodd" clipRule="evenodd" d="M44.5543 58.584L40.3652 41.6055L57.1652 46.4281L44.5543 58.584Z" stroke="white" strokeWidth="2" strokeMiterlimit="10" strokeLinejoin="round" />
        <path fillRule="evenodd" clipRule="evenodd" d="M36.1734 24.6465L40.3625 41.625L23.5625 36.8023L36.1734 24.6465Z" stroke="white" strokeWidth="2" strokeMiterlimit="10" strokeLinejoin="round" />
        <path fillRule="evenodd" clipRule="evenodd" d="M69.773 34.3262L73.9621 51.3048L57.1621 46.4821L69.773 34.3262Z" stroke="white" strokeWidth="2" strokeMiterlimit="10" strokeLinejoin="round" />
        <path fillRule="evenodd" clipRule="evenodd" d="M44.5563 58.5957L48.7453 75.5742L31.9453 70.7516L44.5563 58.5957Z" stroke="white" strokeWidth="2" strokeMiterlimit="10" strokeLinejoin="round" />
      </svg>
  )
}

export default ThreeJS