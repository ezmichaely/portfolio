import { SvgProps } from "@/types"

const LinkedIn = (
  { width, height, size, color, className, stroke, theme, shape, radius }: SvgProps) => {
  const svgWidth = `${size ? size : width ? width : '100%'}`;
  const svgHeight = `${size ? size : height ? height : '100%'}`;


  return (
    <>
      {stroke ?
        <svg width={svgWidth} height={svgHeight} className={className} viewBox="0 0 32 32" fill="none">
          {radius ?
            <rect x="1" y="1" width="30" height="30" rx={radius} fill="#0A66C2" stroke="white" />
            :
            <rect x="1" y="1" width="30" height="30" fill="#0A66C2" stroke="white" />
          }
          <path d="M9.76641 26V12.5054H5.2646V26H9.76641ZM7.51671 10.6635C9.08619 10.6635 10.0636 9.62706 10.0636 8.33177C10.0346 7.00758 9.08619 6 7.54692 6C6.00644 6 5 7.00758 5 8.33177C5 9.62706 5.97624 10.6635 7.48772 10.6635H7.51671ZM12.2578 26H16.7596V18.4642C16.7596 18.0609 16.7886 17.6576 16.9082 17.3699C17.2332 16.5634 17.9738 15.7291 19.2183 15.7291C20.847 15.7291 21.4982 16.9667 21.4982 18.7808V25.9988H26V18.2619C26 14.1173 23.7793 12.1888 20.818 12.1888C18.3894 12.1888 17.3238 13.5406 16.7306 14.4615H16.7608V12.5054H12.2578C12.317 13.7718 12.2578 26 12.2578 26Z" fill="white" />
        </svg>
      :
        <svg width={svgWidth} height={svgHeight} className={className} viewBox="0 0 30 30" fill="none">
          {radius ?
            <rect width="30" height="30" rx={radius} fill="#0A66C2" />
            :
            <rect width="30" height="30" fill="#0A66C2" />
          }
          <path d="M8.76641 25V11.5054H4.2646V25H8.76641ZM6.51671 9.66354C8.08619 9.66354 9.06363 8.62706 9.06363 7.33177C9.03463 6.00758 8.08619 5 6.54692 5C5.00644 5 4 6.00758 4 7.33177C4 8.62706 4.97624 9.66354 6.48772 9.66354H6.51671ZM11.2578 25H15.7596V17.4642C15.7596 17.0609 15.7886 16.6576 15.9082 16.3699C16.2332 15.5634 16.9738 14.7291 18.2183 14.7291C19.847 14.7291 20.4982 15.9667 20.4982 17.7808V24.9988H25V17.2619C25 13.1173 22.7793 11.1888 19.818 11.1888C17.3894 11.1888 16.3238 12.5406 15.7306 13.4615H15.7608V11.5054H11.2578C11.317 12.7718 11.2578 25 11.2578 25Z" fill="white" />
        </svg>

      }


    </>
  )
}

export default LinkedIn