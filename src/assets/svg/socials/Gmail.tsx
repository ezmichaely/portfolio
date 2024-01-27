import { SvgProps } from "@/types"

const Gmail = (
  { width, height, size, color, className, stroke, theme, shape, radius }: SvgProps) => {
  const svgWidth = `${size ? size : width ? width : '100%'}`;
  const svgHeight = `${size ? size : height ? height : '100%'}`;


  return (

    <>
      {stroke ?
        <svg width={svgWidth} height={svgHeight} className={className} viewBox="0 0 32 32" fill="none">
          {radius ?
            <rect x="1" y="1" width="30" height="30" rx={radius} fill="white" stroke="white" />
            :
            <rect x="1" y="1" width="30" height="30" fill="white" stroke="white" />
          }
          <path d="M22.0525 8.52306L16.0651 13.1957L9.94092 8.52306V8.52432L9.94832 8.53064V15.0736L15.9961 19.8472L22.0525 15.2579V8.52306Z" fill="#EA4335" />
          <path d="M23.6241 7.3864L22.0517 8.52298V15.2578L26.9994 11.4592V9.17082C26.9994 9.17082 26.3989 5.90253 23.6241 7.3864Z" fill="#FBBC05" />
          <path d="M22.0517 15.2578V23.9931H25.8438C25.8438 23.9931 26.923 23.882 27.0006 22.6519V11.4592L22.0517 15.2578Z" fill="#34A853" />
          <path d="M9.9486 24.0009V15.0736L9.94092 15.0673L9.9486 24.0009Z" fill="#C5221F" />
          <path d="M9.94034 8.52411L8.3766 7.39384C5.60181 5.90997 5 9.17701 5 9.17701V11.4653L9.94034 15.067V8.52411Z" fill="#C5221F" />
          <path d="M9.94092 8.52442V15.0674L9.9486 15.0737V8.53074L9.94092 8.52442Z" fill="#C5221F" />
          <path d="M5 11.467V22.6597C5.07646 23.8911 6.15678 24.001 6.15678 24.001H9.94897L9.94034 15.0674L5 11.467Z" fill="#4285F4" />
        </svg>
      :
        <svg width={svgWidth} height={svgHeight} className={className} viewBox="0 0 37 30" fill="none">
          {radius ?
            <rect width="30" height="30" rx={radius} fill="white" />
            :
            <rect width="30" height="30" fill="white" />
          }
          <path d="M21.0525 7.52306L15.0651 12.1957L8.94092 7.52306V7.52432L8.94832 7.53064V14.0736L14.9961 18.8472L21.0525 14.2579V7.52306Z" fill="#EA4335" />
          <path d="M22.6241 6.3864L21.0517 7.52298V14.2578L25.9994 10.4592V8.17082C25.9994 8.17082 25.3989 4.90253 22.6241 6.3864Z" fill="#FBBC05" />
          <path d="M21.0517 14.2578V22.9931H24.8438C24.8438 22.9931 25.923 22.882 26.0006 21.6519V10.4592L21.0517 14.2578Z" fill="#34A853" />
          <path d="M8.9486 23.0009V14.0736L8.94092 14.0673L8.9486 23.0009Z" fill="#C5221F" />
          <path d="M8.94034 7.52411L7.3766 6.39384C4.60181 4.90997 4 8.17701 4 8.17701V10.4653L8.94034 14.067V7.52411Z" fill="#C5221F" />
          <path d="M8.94092 7.52442V14.0674L8.9486 14.0737V7.53074L8.94092 7.52442Z" fill="#C5221F" />
          <path d="M4 10.467V21.6597C4.07646 22.8911 5.15678 23.001 5.15678 23.001H8.94897L8.94034 14.0674L4 10.467Z" fill="#4285F4" />
        </svg>
      }
    </>
  )
}

export default Gmail