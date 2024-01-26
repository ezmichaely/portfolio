

export interface SvgProps {
  width?: number,
  height?: number,
  size?: number,
  color?: string,
  className?: string,
  stroke?: boolean,
  theme?: 'dark' | 'light',
  shape?: 'square' | 'rectangle',
  radius?: number
}

export interface ResumeBtnProps {
  classnames?: string;
}

export interface SocialLinkProps {
  title?: string,
  path?: string,
  icon?: React.ReactNode
}

export interface SkillProps {
  title?: string,
  icon?: React.ReactNode
}