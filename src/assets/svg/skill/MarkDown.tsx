import { SvgProps } from "@/types"

const MarkDown = ({ width, height, size, color, className, stroke, theme, shape, radius }: SvgProps) => {
  const svgWidth = `${size ? size : width ? width : '100%'}`;
  const svgHeight = `${size ? size : height ? height : '100%'}`;

  return (
    <svg width={svgWidth} height={svgHeight} className={className} viewBox="0 0 101 101" fill="none">
      <rect x="0.0820312" y="0.0566406" width="100" height="100" rx={radius} fill="#1A1F33" />
      <path d="M84.8477 27.0098H15.3164C13.1591 27.0098 11.4102 28.7587 11.4102 30.916V69.1973C11.4102 71.3547 13.1591 73.1035 15.3164 73.1035H84.8477C87.0051 73.1035 88.7539 71.3547 88.7539 69.1973V30.916C88.7539 28.7587 87.0051 27.0098 84.8477 27.0098Z" stroke="white" stroke-width="4" />
      <path d="M21.1758 63.3379V36.7754H28.9883L36.8008 46.541L44.6133 36.7754H52.4258V63.3379H44.6133V48.1035L36.8008 57.8691L28.9883 48.1035V63.3379H21.1758ZM70.0039 63.3379L58.2852 50.4473H66.0977V36.7754H73.9102V50.4473H81.7227L70.0039 63.3379Z" fill="white" />
    </svg>
  )
}

export default MarkDown