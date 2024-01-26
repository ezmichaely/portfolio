import { SvgProps } from "@/types"

const CSS3 = ({ width, height, size, color, stroke, className, theme }: SvgProps) => {
  const svgWidth = `${size ? size : width ? width : '100%'}`;
  const svgHeight = `${size ? size : height ? height : '100%'}`;

  return (
    <svg width={svgWidth} height={svgHeight} className={className} viewBox="0 0 71 71" fill="none">
      <path d="M10.6267 62.7688L5.12842 1.09717H65.5472L60.0434 62.7595L35.3012 69.619L10.6267 62.7688Z" fill="#1572B6" />
      <path d="M35.3384 64.3764L55.3316 58.8332L60.0353 6.13965H35.3384V64.3764Z" fill="#33A9DC" />
      <path d="M35.3384 28.483H45.3473L46.0385 20.7377H35.3384V13.1738H54.3051L54.1235 15.2033L52.2642 36.0469H35.3384V28.483Z" fill="white" />
      <path d="M35.3832 48.1268L35.3498 48.1366L26.9263 45.8622L26.3876 39.8296H18.7959L19.8552 51.7061L35.3487 56.0062L35.3832 55.9963V48.1268Z" fill="#EBEBEB" />
      <path d="M44.7041 35.7271L43.793 45.8563L35.3569 48.1335V56.003L50.863 51.7056L50.9768 50.4276L52.2926 35.7271H44.7041Z" fill="white" />
      <path d="M35.364 13.1738V20.7377H17.094L16.9425 19.038L16.598 15.2033L16.417 13.1738H35.364ZM35.3383 28.4841V36.048H27.0209L26.8694 34.3483L26.5243 30.5136L26.3439 28.4841H35.3383Z" fill="#EBEBEB" />
    </svg>
  )
}

export default CSS3