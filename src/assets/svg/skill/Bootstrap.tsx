import { SvgProps } from "@/types"

const Bootstrap = ({ width, height, size, color, stroke, className, theme }: SvgProps) => {
  const svgWidth = `${size ? size : width ? width : '100%'}`;
  const svgHeight = `${size ? size : height ? height : '100%'}`;

  return (
    <svg width={svgWidth} height={svgHeight} className={className} viewBox="0 0 89 71" fill="none">
      <g clip-path="url(#clip0_69_186)">
        <path d="M10.185 9.58896C10.0193 4.82964 13.7274 0.440918 18.7396 0.440918H70.0992C75.1114 0.440918 78.8195 4.82964 78.6537 9.58896C78.4945 14.1607 78.7013 20.083 80.1917 24.9118C81.6869 29.7555 84.2083 32.8171 88.3378 33.2105V37.6713C84.2083 38.0647 81.6869 41.1264 80.1917 45.9701C78.7013 50.7989 78.4945 56.7211 78.6537 61.2931C78.8195 66.0522 75.1114 70.4409 70.0992 70.4409H18.7396C13.7274 70.4409 10.0193 66.0522 10.1852 61.2931C10.3442 56.7211 10.1375 50.7989 8.64688 45.9701C7.15183 41.1264 4.62429 38.0647 0.494629 37.6713V33.2105C4.62411 32.8171 7.15183 29.7555 8.64688 24.9118C10.1375 20.083 10.3442 14.1607 10.185 9.58896Z" fill="url(#paint0_linear_69_186)" />
        <g filter="url(#filter0_d_69_186)">
          <path d="M46.3211 54.0488C54.4358 54.0488 59.3257 50.0756 59.3257 43.5222C59.3257 38.5685 55.8366 34.9822 50.656 34.4144V34.208C54.4622 33.5888 57.4491 30.0542 57.4491 26.1067C57.4491 20.4822 53.0085 16.8184 46.2418 16.8184H31.0168V54.0488H46.3211ZM36.9377 21.5399H44.8146C49.0966 21.5399 51.5282 23.4491 51.5282 26.9064C51.5282 30.596 48.7001 32.66 43.5722 32.66H36.9377V21.5399ZM36.9377 49.3274V37.072H44.7616C50.3652 37.072 53.2727 39.136 53.2727 43.161C53.2727 47.1858 50.4446 49.3274 45.1052 49.3274H36.9377Z" fill="url(#paint1_linear_69_186)" />
          <path d="M46.3211 54.0488C54.4358 54.0488 59.3257 50.0756 59.3257 43.5222C59.3257 38.5685 55.8366 34.9822 50.656 34.4144V34.208C54.4622 33.5888 57.4491 30.0542 57.4491 26.1067C57.4491 20.4822 53.0085 16.8184 46.2418 16.8184H31.0168V54.0488H46.3211ZM36.9377 21.5399H44.8146C49.0966 21.5399 51.5282 23.4491 51.5282 26.9064C51.5282 30.596 48.7001 32.66 43.5722 32.66H36.9377V21.5399ZM36.9377 49.3274V37.072H44.7616C50.3652 37.072 53.2727 39.136 53.2727 43.161C53.2727 47.1858 50.4446 49.3274 45.1052 49.3274H36.9377Z" stroke="white" />
        </g>
      </g>
      <defs>
        <filter id="filter0_d_69_186" x="14.5168" y="4.31836" width="61.3088" height="70.2305" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="8" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_69_186" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_69_186" result="shape" />
        </filter>
        <linearGradient id="paint0_linear_69_186" x1="13.5474" y1="2.29352" x2="90.3074" y2="63.2256" gradientUnits="userSpaceOnUse">
          <stop stopColor="#9013FE" />
          <stop offset="1" stopColor="#6610F2" />
        </linearGradient>
        <linearGradient id="paint1_linear_69_186" x1="33.6945" y1="19.2689" x2="50.8524" y2="48.2866" gradientUnits="userSpaceOnUse">
          <stop stopColor="white" />
          <stop offset="1" stopColor="#F1E5FC" />
        </linearGradient>
        <clipPath id="clip0_69_186">
          <rect width="87.8431" height="70" fill="white" transform="translate(0.494629 0.440918)" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default Bootstrap