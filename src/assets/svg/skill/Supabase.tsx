import { SvgProps } from "@/types"

const Supabase = ({ width, height, size, color, className, stroke, theme, shape, radius }: SvgProps) => {
  const svgWidth = `${size ? size : width ? width : '100%'}`;
  const svgHeight = `${size ? size : height ? height : '100%'}`;

  return (
    <svg width={svgWidth} height={svgHeight} className={className} viewBox="0 0 101 101" fill="none">
        <rect x="0.708984" y="0.138672" width="100" height="100" rx={radius} fill="#1A1F33" />
        <path d="M57.0656 87.5471C55.0887 90.0365 51.0801 88.6725 51.0324 85.4936L50.3359 38.998H81.5996C87.2621 38.998 90.4203 45.5385 86.8992 49.9732L57.0656 87.5471Z" fill="url(#paint0_linear_245_3109)" />
        <path d="M57.0656 87.5471C55.0887 90.0365 51.0801 88.6725 51.0324 85.4936L50.3359 38.998H81.5996C87.2621 38.998 90.4203 45.5385 86.8992 49.9732L57.0656 87.5471Z" fill="url(#paint1_linear_245_3109)" fillOpacity="0.2" />
        <path d="M44.3509 12.7311C46.3278 10.2413 50.3364 11.6056 50.3841 14.7845L50.6896 61.2802H19.817C14.1542 61.2802 10.9959 54.7395 14.5172 50.3048L44.3509 12.7311Z" fill="#3ECF8E" />
        <defs>
          <linearGradient id="paint0_linear_245_3109" x1="50.3359" y1="49.3072" x2="78.1219" y2="60.9607" gradientUnits="userSpaceOnUse">
            <stop stopColor="#249361" />
            <stop offset="1" stopColor="#3ECF8E" />
          </linearGradient>
          <linearGradient id="paint1_linear_245_3109" x1="38.0172" y1="32.4404" x2="50.6891" y2="56.2947" gradientUnits="userSpaceOnUse">
            <stop />
            <stop offset="1" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
  )
}

export default Supabase