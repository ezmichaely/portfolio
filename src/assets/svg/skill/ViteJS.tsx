import { SvgProps } from "@/types"

const ViteJS = ({ width, height, size, color, className, stroke, theme, shape, radius }: SvgProps) => {
  const svgWidth = `${size ? size : width ? width : '100%'}`;
  const svgHeight = `${size ? size : height ? height : '100%'}`;

  return (
    <svg width={svgWidth} height={svgHeight} className={className} viewBox="0 0 101 101" fill="none">
        <rect x="0.958984" y="0.0820312" width="100" height="100" rx={radius} fill="#1A1F33" />
        <path d="M89.7141 22.5817L53.0609 88.1237C52.3039 89.4772 50.3598 89.485 49.5918 88.1385L12.2118 22.588C11.375 21.1206 12.6298 19.343 14.2928 19.6403L50.9852 26.1988C51.2191 26.2407 51.459 26.2403 51.693 26.1976L87.618 19.6497C89.2754 19.3476 90.5359 21.1114 89.7141 22.5817Z" fill="url(#paint0_linear_244_2404)" />
        <path d="M68.4627 11.0388L41.3385 16.3537C40.8924 16.441 40.5623 16.8188 40.5357 17.2723L38.867 45.4524C38.8278 46.116 39.4373 46.6313 40.085 46.4816L47.6369 44.7391C48.3436 44.5762 48.9818 45.1984 48.8369 45.909L46.5932 56.8957C46.442 57.6352 47.1365 58.2672 47.8584 58.0481L52.5229 56.6309C53.2459 56.4113 53.9408 57.0453 53.7877 57.7856L50.2221 75.043C49.999 76.1227 51.435 76.7113 52.0338 75.7856L52.4338 75.1676L74.5361 31.0583C74.9065 30.3197 74.2682 29.4776 73.4568 29.6341L65.6838 31.1344C64.9533 31.2752 64.3318 30.5949 64.5377 29.8802L69.6115 12.2923C69.8178 11.5764 69.1939 10.8955 68.4627 11.0388Z" fill="url(#paint1_linear_244_2404)" />
        <defs>
          <linearGradient id="paint0_linear_244_2404" x1="11.2992" y1="17.2979" x2="56.9168" y2="79.2503" gradientUnits="userSpaceOnUse">
            <stop stopColor="#41D1FF" />
            <stop offset="1" stopColor="#BD34FE" />
          </linearGradient>
          <linearGradient id="paint1_linear_244_2404" x1="48.8783" y1="12.4818" x2="57.1303" y2="69.0899" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFEA83" />
            <stop offset="0.0833333" stopColor="#FFDD35" />
            <stop offset="1" stopColor="#FFA800" />
          </linearGradient>
        </defs>
      </svg>
  )
}

export default ViteJS