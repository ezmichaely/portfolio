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



export const aboutParagraph = [
  `👋 Greetings! I'm <span>EZ Michael Yucor</span>, a passionate <span>web developer</span> hailing from the <span>Philippines</span>. My journey began as a graduate with a <span>Bachelor of Science in Information Technology</span>, marking the inception of my love for crafting remarkable digital experiences.`,

  `🎨 My passion for <span>manhwa, manga, and anime</span> serves as a wellspring for creativity, inspiring my expertise in <span>design and web interactions</span>. Specializing in <span>crafting visually captivating and highly functional websites</span>, I proficiently utilize <span>HTML, CSS, and JavaScript</span> to breathe life into designs and elevate user experiences with frameworks like <span>React</span>. Beyond the front end, I seamlessly navigate back-end technologies such as <span>Node.js and MongoDB</span>, providing <span>end-to-end solutions</span> for a seamless development experience.`,

  `✉️ Feel free to explore my work, and <span>don't</span> hesitate to reach out. I'm always eager to discuss how we might bring your <span>web development visions</span> to reality! Whether it's refining <span>user interactions</span>, implementing <span>cutting-edge design elements</span>, or creating a <span>robust web presence</span>, I'm here to turn your ideas into <span>digital masterpieces</span>.`
]