import { ReactComponentElement } from "react";


export interface SvgProps {
  width?: number,
  height?: number,
  size?: number, 
  color?: string,
  className?: string,
}

export interface ResumeBtnProps {
  classnames?: string;
}

export interface SocialLinkProps {
  title?: string,
  path?: string,
  icon?: React.ReactNode
}