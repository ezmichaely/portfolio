import {
  Facebook, Github, Gmail, LinkedIn,
  Telegram, TwitterX, Discord, Skype,
  Slack, Whatsapp
} from "@/assets/svg"
import { SocialLinkProps } from "@/types"

export const socialLinks: SocialLinkProps[] = [
  {
    title: "github",
    path: "https://github.com/ezmichaely/",
    icon: Github({ size: 42, stroke: true}),
  },
  {
    title: "linkedin",
    path: "https://www.linkedin.com/in/ezmichaely",
    icon: LinkedIn({ size: 42, stroke: true }),
  },
  {
    title: "facebook",
    path: "https://www.facebook.com/ezmichaely/",
    icon: Facebook({ height: 42, stroke: true })
  },
  {
    title: "gmail",
    path: "mailto:ezmichaely@gmail.com",
    icon: Gmail({ height: 42, stroke: true })
  },
  // {
  //   title: "skype",
  //   path: "https://join.skype.com/invite/vhwQYX4SmGPu",
  //   icon: Skype({ height: 42, stroke: true })
  // },
  // {
  //   title: "discord",
  //   path: "https://discordapp.com/users/840139271791968266",
  //   icon: Discord({ height: 42, stroke: true })
  // },
  // {
  //   title: "slack",
  //   path: "",
  //   icon: Slack({ height: 42, stroke: true })
  // },
  // {
  //   title: "telegram",
  //   path: "https://t.me/ezmichaely",
  //   icon: Telegram({ height: 42, stroke: true })
  // },
  // {
  //   title: "twitter",
  //   path: "https://twitter.com/EzMichaely",
  //   icon: TwitterX({ height: 42, stroke: true })
  // },
  // {
  //   title: "whatsapp",
  //   path: "https://wa.me/+639268311909",
  //   icon: Whatsapp({ height: 42, stroke: true })
  // },
]