import {
  Facebook, Github, Gmail, LinkedIn,
  Telegram, TwitterX, Discord, Skype,
  Slack, Whatsapp,
  HTML5,
  CSS3,
  Javascript,
  Typescript,
  JQuery,
  Bootstrap,
  TailwindCSS,
  Sass,
  ReactJS,
  SvelteJS,
  VueJS,
  AngularJS,
  NextJS,
  NuxtJS,
  PHP,
  Laravel,
  Java,
  JavaSpringBoot,
  Python,
  Cplusplus,
  ExpressJS,
  NodeJS,
  ViteJS,
  NestJS,
  MongoDB,
  MySQL,
  PostgresSQL,
  SQLite,
  Firebase,
  Redux,
  AdobeIllustrator,
  AdobePhotoshop,
  AdobeXD,
  Figma,
  Git,
  GithubDesktop,
  VSCode
} from "@/assets/svg"
import { SkillsAndTechProps, SocialLinkProps } from "@/types"

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
];


export const frontEnd: SkillsAndTechProps[] = [
  {
    icon: HTML5({height: 50, radius: 20}),
    title: 'HTML5',
  },
  {
    icon: CSS3({ height: 50, radius: 20 }),
    title: 'CSS3',
  },
  {
    icon: Javascript({ height: 50, radius: 20 }),
    title: 'Javascript',
  },
  {
    icon: Typescript({ height: 50, radius: 20 }),
    title: 'Typescript',
  },
  {
    icon: Bootstrap({ height: 50, radius: 20 }),
    title: 'Bootstrap',
  },
  {
    icon: TailwindCSS({ height: 50, radius: 20 }),
    title: 'TailwindCSS',
  },
  {
    icon: Sass({ height: 50, radius: 20 }),
    title: 'Sass',
  },
  {
    icon: JQuery({ height: 50, radius: 20 }),
    title: 'JQuery',
  },
  {
    icon: ReactJS({ height: 50, radius: 20 }),
    title: 'ReactJS',
  },
  // {
  //   icon: SvelteJS({ height: 50, radius: 20 }),
  //   title: 'SvelteJS',
  // },
  // {
  //   icon: VueJS({ height: 50, radius: 20 }),
  //   title: 'VueJS',
  // },
  // {
  //   icon: AngularJS({ height: 50, radius: 20 }),
  //   title: 'AngularJS',
  // },
  {
    icon: NextJS({ height: 50, radius: 20 }),
    title: 'NextJS',
  },
  // {
  //   icon: NuxtJS({ height: 50, radius: 20 }),
  //   title: 'NuxtJS',
  // },
  // {
  //   icon: NestJS({ height: 50, radius: 20 }),
  //   title: 'NestJS',
  // },
  {
    icon: Redux({ height: 50, radius: 20 }),
    title: 'Redux',
  },
  {
    icon: ViteJS({ height: 50, radius: 20 }),
    title: 'ViteJS',
  },
]


export const backEnd: SkillsAndTechProps[] = [
  {
    icon: PHP({ height: 50, radius: 20 }),
    title: 'PHP',
  },
  {
    icon: Laravel({ height: 50, radius: 20 }),
    title: 'Laravel',
  },
  // {
  //   icon: Java({ height: 50, radius: 20 }),
  //   title: 'Java',
  // },
  // {
  //   icon: JavaSpringBoot({ height: 50, radius: 20 }),
  //   title: 'Java Spring Boot',
  // },
  // {
  //   icon: Python({ height: 50, radius: 20 }),
  //   title: 'Python',
  // },
  // {
  //   icon: Cplusplus({ height: 50, radius: 20 }),
  //   title: 'Cplusplus',
  // },
  {
    icon: NodeJS({ height: 50, radius: 20 }),
    title: 'NodeJS',
  },
  {
    icon: ExpressJS({ height: 50, radius: 20 }),
    title: 'ExpressJS',
  },
  {
    icon: MongoDB({ height: 50, radius: 20 }),
    title: 'MongoDB',
  },
  {
    icon: MySQL({ height: 50, radius: 20 }),
    title: 'MySQL',
  },
  {
    icon: PostgresSQL({ height: 50, radius: 20 }),
    title: 'PostgresSQL',
  },
  {
    icon: SQLite({ height: 50, radius: 20 }),
    title: 'SQLite',
  },
]


export const graphics: SkillsAndTechProps[] = [
  {
    icon: AdobeIllustrator({ height: 50, radius: 20 }),
    title: 'Illustrator',
  },
  {
    icon: AdobePhotoshop({ height: 50, radius: 20 }),
    title: 'Photoshop',
  },
  {
    icon: AdobeXD({ height: 50, radius: 20 }),
    title: 'Adobe XD',
  },
  {
    icon: Figma({ height: 50, radius: 20 }),
    title: 'Figma',
  },

]


export const toolsTech: SkillsAndTechProps[] = [
  {
    icon: Firebase({ height: 50, radius: 20 }),
    title: 'Firebase',
  },
  {
    icon: Git({ height: 50, radius: 20 }),
    title: 'Git',
  },
  {
    icon: GithubDesktop({ height: 50, radius: 20 }),
    title: 'Github Desktop',
  },
  {
    icon: VSCode({ height: 50, radius: 20 }),
    title: 'VSCode',
  },
]