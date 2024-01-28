import { SvgProps } from "@/types"

const Bootstrap = ({ width, height, size, color, className, stroke, theme, shape, radius }: SvgProps) => {
  const svgWidth = `${size ? size : width ? width : '100%'}`;
  const svgHeight = `${size ? size : height ? height : '100%'}`;

  return (
    <>
      <svg width={svgWidth} height={svgHeight} className={className} viewBox="0 0 126 101" fill="none">
        <g clipPath="url(#clip0_244_2516)">
          <path d="M14.1344 13.7581C13.8976 6.95906 19.1949 0.689453 26.3552 0.689453H99.7261C106.886 0.689453 112.184 6.95906 111.947 13.7581C111.719 20.2892 112.015 28.7495 114.144 35.6478C116.28 42.5674 119.882 46.9412 125.781 47.5032V53.8757C119.882 54.4377 116.28 58.8115 114.144 65.7311C112.015 72.6294 111.719 81.0897 111.947 87.6211C112.184 94.4198 106.886 100.689 99.7261 100.689H26.3552C19.1949 100.689 13.8976 94.4198 14.1346 87.6211C14.3618 81.0897 14.0665 72.6294 11.9371 65.7311C9.80131 58.8115 6.19053 54.4377 0.291016 53.8757V47.5032C6.19028 46.9412 9.80131 42.5674 11.9371 35.6478C14.0665 28.7495 14.3618 20.2892 14.1344 13.7581Z" fill="url(#paint0_linear_244_2516)" />
          <g filter="url(#filter0_d_244_2516)">
            <path d="M65.7578 77.2722C77.3502 77.2722 84.3357 71.5962 84.3357 62.2342C84.3357 55.1575 79.3514 50.0342 71.9504 49.2232V48.9283C77.3879 48.0438 81.6548 42.9943 81.6548 37.3551C81.6548 29.32 75.3112 24.0859 65.6445 24.0859H43.8945V77.2722H65.7578ZM52.3529 30.831H63.6056C69.7227 30.831 73.1965 33.5585 73.1965 38.4975C73.1965 43.7683 69.1563 46.7168 61.8308 46.7168H52.3529V30.831ZM52.3529 70.5274V53.0198H63.5298C71.535 53.0198 75.6886 55.9683 75.6886 61.7183C75.6886 67.468 71.6485 70.5274 64.0208 70.5274H52.3529Z" fill="url(#paint1_linear_244_2516)" />
            <path d="M65.7578 77.2722C77.3502 77.2722 84.3357 71.5962 84.3357 62.2342C84.3357 55.1575 79.3514 50.0342 71.9504 49.2232V48.9283C77.3879 48.0438 81.6548 42.9943 81.6548 37.3551C81.6548 29.32 75.3112 24.0859 65.6445 24.0859H43.8945V77.2722H65.7578ZM52.3529 30.831H63.6056C69.7227 30.831 73.1965 33.5585 73.1965 38.4975C73.1965 43.7683 69.1563 46.7168 61.8308 46.7168H52.3529V30.831ZM52.3529 70.5274V53.0198H63.5298C71.535 53.0198 75.6886 55.9683 75.6886 61.7183C75.6886 67.468 71.6485 70.5274 64.0208 70.5274H52.3529Z" stroke="white" />
          </g>
        </g>
        <defs>
          <filter id="filter0_d_244_2516" x="27.3945" y="11.5859" width="73.4414" height="86.1855" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="8" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_244_2516" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_244_2516" result="shape" />
          </filter>
          <linearGradient id="paint0_linear_244_2516" x1="18.9378" y1="3.33602" x2="128.595" y2="90.3819" gradientUnits="userSpaceOnUse">
            <stop stopColor="#9013FE" />
            <stop offset="1" stopColor="#6610F2" />
          </linearGradient>
          <linearGradient id="paint1_linear_244_2516" x1="47.7198" y1="27.5867" x2="72.2311" y2="69.0406" gradientUnits="userSpaceOnUse">
            <stop stopColor="white" />
            <stop offset="1" stopColor="#F1E5FC" />
          </linearGradient>
          <clipPath id="clip0_244_2516">
            <rect width="125.49" height="100" fill="white" transform="translate(0.291016 0.689453)" />
          </clipPath>
        </defs>
      </svg>
    </>
  )
}

export default Bootstrap