import { SvgProps } from "@/types"

const StockOverflow = ({ width, height, size, color, className, stroke, theme, shape, radius }: SvgProps) => {
  const svgWidth = `${size ? size : width ? width : '100%'}`;
  const svgHeight = `${size ? size : height ? height : '100%'}`;

  return (
    <svg width={svgWidth} height={svgHeight} className={className}  viewBox="0 0 101 101" fill="none">
        <rect x="0.558594" y="0.640625" width="100" height="100" rx={radius} fill="#1A1F33" />
        <path d="M72.307 81.257V62.2539H80.7527V89.7031H17.4082V62.2539H25.8541V81.257H72.307Z" fill="#BCBBBB" />
        <path d="M62.8059 11.5781L57.1051 15.8011L78.0086 43.884L83.7098 39.6609L62.8059 11.5781ZM72.3079 50.4293L45.4918 28.0477L49.9258 22.769L76.7418 45.1508L72.3079 50.4293ZM36.6236 43.6727L68.2957 58.4531L71.252 52.1187L39.5796 37.3382L36.6236 43.6727ZM66.1844 66.4555L67.6204 60.227L33.6253 53.1531L32.1895 60.1422L66.1844 66.4555ZM65.9731 74.9227H32.1895V68.5883H65.9731V74.9227Z" fill="#F48024" />
      </svg>
  )
}

export default StockOverflow