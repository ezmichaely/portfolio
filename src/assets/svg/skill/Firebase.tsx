import { SvgProps } from "@/types"

const Firebase = ({ width, height, size, color, className, stroke, theme, shape, radius }: SvgProps) => {
  const svgWidth = `${size ? size : width ? width : '100%'}`;
  const svgHeight = `${size ? size : height ? height : '100%'}`;

  return (
    <svg width={svgWidth} height={svgHeight} className={className} viewBox="0 0 101 101" fill="none">
      <rect x="0.119141" y="0.800781" width="100" height="100" rx={radius} fill="#1A1F33" />
      <path d="M59.1821 39.6975L51.1658 47.1468L43.7246 32.1606L47.5687 23.5437C48.5403 21.8249 50.1292 21.8022 51.1008 23.5437L59.1821 39.6975Z" fill="#FFA000" />
      <path d="M51.1693 47.1431L21.1836 74.9784L43.7281 32.1602L51.1693 47.1431Z" fill="#F57F17" />
      <path d="M67.9721 28.3044C69.4084 26.9391 70.8869 27.3996 71.2606 29.339L79.0559 74.6025L53.2002 90.0946C52.2936 90.6005 49.8891 90.7984 49.8891 90.7984C49.8891 90.7984 47.7022 90.5324 46.8638 90.0719L21.1836 74.9787L67.9721 28.3044Z" fill="#FFCA28" />
      <path d="M43.7281 32.1599L21.1836 74.9782L31.2308 12.3934C31.6078 10.4541 32.7093 10.2563 33.7036 11.9751L43.7281 32.1599Z" fill="#FFA000" />
    </svg>
  )
}

export default Firebase