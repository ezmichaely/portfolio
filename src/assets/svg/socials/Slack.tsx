import { SvgProps } from "@/types"

const Slack = (
  { width, height, size, color, className, stroke, theme, shape, radius }: SvgProps) => {
  const svgWidth = `${size ? size : width ? width : '100%'}`;
  const svgHeight = `${size ? size : height ? height : '100%'}`;


  return (

    <>
      {stroke ?
        <svg width={svgWidth} height={svgHeight} className={className} viewBox="0 0 32 32" fill="none">
          {radius ?
            <rect x="1" y="1" width="30" height="30" rx={radius} fill="#3F0F3F" stroke="white" />
            :
            <rect x="1" y="1" width="30" height="30" fill="#3F0F3F" stroke="white" />
          }
          <path fillRule="evenodd" clipRule="evenodd" d="M11 18.7956C11 17.6425 11.9557 16.7143 13.1429 16.7143C14.33 16.7143 15.2857 17.6425 15.2857 18.7956V23.9187C15.2857 25.0717 14.33 26 13.1429 26C11.9557 26 11 25.0717 11 23.9187V18.7956Z" fill="#E01E5A" />
          <path fillRule="evenodd" clipRule="evenodd" d="M18.7955 21C17.6425 21 16.7143 20.0443 16.7143 18.8571C16.7143 17.67 17.6425 16.7143 18.7955 16.7143H23.9188C25.0718 16.7143 26 17.67 26 18.8571C26 20.0443 25.0718 21 23.9188 21H18.7955Z" fill="#ECB22D" />
          <path fillRule="evenodd" clipRule="evenodd" d="M16.7143 8.08125C16.7143 6.92821 17.67 6 18.8572 6C20.0443 6 21 6.92821 21 8.08125V13.2045C21 14.3575 20.0443 15.2857 18.8572 15.2857C17.67 15.2857 16.7143 14.3575 16.7143 13.2044V8.08125Z" fill="#2FB67C" />
          <path fillRule="evenodd" clipRule="evenodd" d="M8.08125 15.2857C6.92821 15.2857 6 14.33 6 13.1429C6 11.9557 6.92821 11 8.08125 11H13.2045C14.3575 11 15.2857 11.9557 15.2857 13.1429C15.2857 14.33 14.3575 15.2857 13.2044 15.2857H8.08125Z" fill="#36C5F1" />
          <path fillRule="evenodd" clipRule="evenodd" d="M16.7143 23.8571C16.7143 25.0443 17.67 26 18.8572 26C20.0443 26 21 25.0443 21 23.8571C21 22.67 20.0443 21.7143 18.8572 21.7143H16.7143V23.8571Z" fill="#ECB22D" />
          <path fillRule="evenodd" clipRule="evenodd" d="M15.2857 8.14286V10.2857H13.1429C11.9557 10.2857 11 9.33 11 8.14286C11 6.95571 11.9557 6 13.1429 6C14.33 6 15.2857 6.95571 15.2857 8.14286Z" fill="#36C5F1" />
          <path fillRule="evenodd" clipRule="evenodd" d="M23.8572 15.2857H21.7143V13.1429C21.7143 11.9557 22.67 11 23.8572 11C25.0443 11 26 11.9557 26 13.1429C26 14.33 25.0443 15.2857 23.8572 15.2857Z" fill="#2FB67C" />
          <path fillRule="evenodd" clipRule="evenodd" d="M8.14286 16.7143H10.2857V18.8571C10.2857 20.0443 9.33 21 8.14286 21C6.95571 21 6 20.0443 6 18.8571C6 17.67 6.95571 16.7143 8.14286 16.7143Z" fill="#E01E5A" />
        </svg>
        :
        <svg width={svgWidth} height={svgHeight} className={className} viewBox="0 0 30 30" fill="none">
          {radius ?
            <rect width="30" height="30" rx={radius} fill="#3F0F3F" />
            :
            <rect width="30" height="30" fill="#3F0F3F" />
          }
          <path fillRule="evenodd" clipRule="evenodd" d="M10 17.7956C10 16.6425 10.9557 15.7143 12.1429 15.7143C13.33 15.7143 14.2857 16.6425 14.2857 17.7956V22.9187C14.2857 24.0717 13.33 25 12.1429 25C10.9557 25 10 24.0717 10 22.9187V17.7956Z" fill="#E01E5A" />
          <path fillRule="evenodd" clipRule="evenodd" d="M17.7955 20C16.6425 20 15.7143 19.0443 15.7143 17.8571C15.7143 16.67 16.6425 15.7143 17.7955 15.7143H22.9188C24.0718 15.7143 25 16.67 25 17.8571C25 19.0443 24.0718 20 22.9188 20H17.7955Z" fill="#ECB22D" />
          <path fillRule="evenodd" clipRule="evenodd" d="M15.7143 7.08125C15.7143 5.92821 16.67 5 17.8572 5C19.0443 5 20 5.92821 20 7.08125V12.2045C20 13.3575 19.0443 14.2857 17.8572 14.2857C16.67 14.2857 15.7143 13.3575 15.7143 12.2044V7.08125Z" fill="#2FB67C" />
          <path fillRule="evenodd" clipRule="evenodd" d="M7.08125 14.2857C5.92821 14.2857 5 13.33 5 12.1429C5 10.9557 5.92821 10 7.08125 10H12.2045C13.3575 10 14.2857 10.9557 14.2857 12.1429C14.2857 13.33 13.3575 14.2857 12.2044 14.2857H7.08125Z" fill="#36C5F1" />
          <path fillRule="evenodd" clipRule="evenodd" d="M15.7143 22.8571C15.7143 24.0443 16.67 25 17.8572 25C19.0443 25 20 24.0443 20 22.8571C20 21.67 19.0443 20.7143 17.8572 20.7143H15.7143V22.8571Z" fill="#ECB22D" />
          <path fillRule="evenodd" clipRule="evenodd" d="M14.2857 7.14286V9.28571H12.1429C10.9557 9.28571 10 8.33 10 7.14286C10 5.95571 10.9557 5 12.1429 5C13.33 5 14.2857 5.95571 14.2857 7.14286Z" fill="#36C5F1" />
          <path fillRule="evenodd" clipRule="evenodd" d="M22.8572 14.2857H20.7143V12.1429C20.7143 10.9557 21.67 10 22.8572 10C24.0443 10 25 10.9557 25 12.1429C25 13.33 24.0443 14.2857 22.8572 14.2857Z" fill="#2FB67C" />
          <path fillRule="evenodd" clipRule="evenodd" d="M7.14286 15.7143H9.28571V17.8571C9.28571 19.0443 8.33 20 7.14286 20C5.95571 20 5 19.0443 5 17.8571C5 16.67 5.95571 15.7143 7.14286 15.7143Z" fill="#E01E5A" />
        </svg>
      }
    </>
  )
}

export default Slack