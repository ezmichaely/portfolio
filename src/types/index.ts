

export interface SvgProps {
  width?: number,
  height?: number,
  size?: number,
  color?: string,
  className?: string,
  stroke?: boolean,
  theme?: 'dark' | 'light',
  shape?: 'square' | 'rectangle',
  radius?: number,
  style?: React.CSSProperties
}

// export interface ExtendedSvgProps extends React.SVGProps<SVGSVGElement>, SvgProps { }

export interface ResumeBtnProps {
  classnames?: string;
}

export interface SocialLinkProps {
  title?: string,
  path?: string,
  icon?: React.ReactNode
}

export interface SkillsAndTechProps {
  icon?: React.ReactNode
  title?: string,
}