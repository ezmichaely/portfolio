import { Facebook, Github, Gmail, LinkedIn } from "@/assets/svg"
import { SocialLinkProps } from "@/types"

export const socialLinks: SocialLinkProps[] = [
  {
    title: "github",
    path: "https://github.com/ezmichaely/",
    icon: Github({ size: 40, }),
  },
  {
    title: "linkedin",
    path: "https://www.linkedin.com/in/ezmichaely",
    icon: LinkedIn({ size: 40, }),
  },
  {
    title: "facebook",
    path: "https://www.facebook.com/ezmichaely/",
    icon: Facebook({ height: 40, })
  },
  {
    title: "gmail",
    path: "mailto:ezmichaely@gmail.com",
    icon: Gmail({ height: 40, })
  },
]