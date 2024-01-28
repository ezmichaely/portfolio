import { SvgProps } from "@/types"

const Python = ({ width, height, size, color, className, stroke, theme, shape, radius }: SvgProps) => {
  const svgWidth = `${size ? size : width ? width : '100%'}`;
  const svgHeight = `${size ? size : height ? height : '100%'}`;

  return (
    <svg width={svgWidth} height={svgHeight} className={className} viewBox="0 0 101 101" fill="none">
        <rect x="0.287109" y="0.015625" width="100" height="100" rx={radius} fill="#1A1F33" />
        <path d="M50.0055 11.1562C30.1725 11.1562 31.411 19.757 31.411 19.757L31.4331 28.6673H50.3594V31.3427H23.9157C23.9157 31.3427 11.2246 29.9034 11.2246 49.9148C11.2246 69.9266 22.3017 69.2172 22.3017 69.2172H28.9126V59.9309C28.9126 59.9309 28.5562 48.8539 39.8129 48.8539H58.584C58.584 48.8539 69.1305 49.0242 69.1305 38.6611V21.5258C69.1305 21.5258 70.7316 11.1562 50.0055 11.1562ZM39.5695 17.148C41.4527 17.148 42.9746 18.67 42.9746 20.553C42.9746 22.436 41.4527 23.9579 39.5695 23.9579C37.6866 23.9579 36.1646 22.436 36.1646 20.553C36.1646 18.67 37.6866 17.148 39.5695 17.148Z" fill="url(#paint0_linear_244_2289)" />
        <path d="M50.5679 88.8742C70.4007 88.8742 69.1624 80.2738 69.1624 80.2738L69.1401 71.3633H50.214V68.6879H76.6577C76.6577 68.6879 89.3487 70.1273 89.3487 50.1156C89.3487 30.104 78.2718 30.8137 78.2718 30.8137H71.6608V40.1C71.6608 40.1 72.0171 51.1769 60.7604 51.1769H41.9893C41.9893 51.1769 31.4427 51.0062 31.4427 61.3695V78.5047C31.4427 78.5047 29.8415 88.8742 50.5679 88.8742ZM61.0038 82.8824C59.1206 82.8824 57.5987 81.3605 57.5987 79.4777C57.5987 77.5945 59.1206 76.0726 61.0038 76.0726C62.8866 76.0726 64.4089 77.5945 64.4089 79.4777C64.4089 81.3605 62.8866 82.8824 61.0038 82.8824Z" fill="url(#paint1_linear_244_2289)" />
        <defs>
          <linearGradient id="paint0_linear_244_2289" x1="18.7324" y1="18.1469" x2="57.4484" y2="56.4766" gradientUnits="userSpaceOnUse">
            <stop stopColor="#387EB8" />
            <stop offset="1" stopColor="#366994" />
          </linearGradient>
          <linearGradient id="paint1_linear_244_2289" x1="42.4956" y1="42.7598" x2="84.0722" y2="82.0633" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFE052" />
            <stop offset="1" stopColor="#FFC331" />
          </linearGradient>
        </defs>
      </svg>
  )
}

export default Python