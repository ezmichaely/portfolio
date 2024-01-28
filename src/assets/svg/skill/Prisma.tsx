import { SvgProps } from "@/types"

const Prisma = ({ width, height, size, color, className, stroke, theme, shape, radius }: SvgProps) => {
  const svgWidth = `${size ? size : width ? width : '100%'}`;
  const svgHeight = `${size ? size : height ? height : '100%'}`;

  return (
    <svg width={svgWidth} height={svgHeight} className={className} viewBox="0 0 101 101" fill="none">
  <rect x="0.787109" y="0.015625" width="100" height="100" rx={radius} fill="#677EEB"/>
  <path fillRule="evenodd" clipRule="evenodd" d="M21.3567 63.7355C20.6079 62.5543 20.5966 61.0496 21.3276 59.857L48.8512 14.9608C50.3821 12.4637 54.0785 12.682 55.3047 15.342L80.4489 69.8852C81.3817 71.909 80.3078 74.2902 78.1731 74.9309L39.0598 86.6648C37.486 87.1367 35.7904 86.5043 34.9107 85.1164L21.3567 63.7355ZM52.0266 28.0881C52.2918 26.7674 54.1016 26.5769 54.636 27.8135L71.9801 67.9465C72.3067 68.7023 71.9004 69.5738 71.1114 69.809L44.0871 77.8762C43.0938 78.1727 42.1422 77.3047 42.3465 76.2883L52.0266 28.0881Z" fill="#F7FAFC"/>
</svg>
  )
}

export default Prisma