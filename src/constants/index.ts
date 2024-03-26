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
    icon: Github({ size: 50, radius: 6}),
  },
  {
    title: "linkedin",
    path: "https://www.linkedin.com/in/ezmichaely",
    icon: LinkedIn({ size: 50, radius: 6 }),
  },
  {
    title: "facebook",
    path: "https://www.facebook.com/ezmichaely/",
    icon: Facebook({ height: 50, radius: 6 })
  },
  {
    title: "gmail",
    path: "mailto:ezmichaely@gmail.com",
    icon: Gmail({ height: 50, radius: 6 })
  },
  // {
  //   title: "skype",
  //   path: "https://join.skype.com/invite/vhwQYX4SmGPu",
  //   icon: Skype({ height: 50, radius: 6})
  // },
  // {
  //   title: "discord",
  //   path: "https://discordapp.com/users/840139271791968266",
  //   icon: Discord({ height: 50, radius: 6})
  // },
  // {
  //   title: "slack",
  //   path: "",
  //   icon: Slack({ height: 50, radius: 6})
  // },
  // {
  //   title: "telegram",
  //   path: "https://t.me/ezmichaely",
  //   icon: Telegram({ height: 50, radius: 6})
  // },
  // {
  //   title: "twitter",
  //   path: "https://twitter.com/EzMichaely",
  //   icon: TwitterX({ height: 50, radius: 6})
  // },
  // {
  //   title: "whatsapp",
  //   path: "https://wa.me/+639268311909",
  //   icon: Whatsapp({ height: 50, radius: 6})
  // },
]



export const aboutParagraph = [
  `👋 Greetings! I'm <span>EZ Michael Yucor</span>, a passionate <span>web developer</span> hailing from the <span>Philippines</span>. My journey began as a graduate with a <span>Bachelor of Science in Information Technology</span>, marking the inception of my love for crafting remarkable digital experiences.`,

  `🎨 My passion for <span>manhwa, manga, and anime</span> serves as a wellspring for creativity, inspiring my expertise in <span>design and web interactions</span>. Specializing in <span>crafting visually captivating and highly functional websites</span>, I proficiently utilize <span>HTML, CSS, and JavaScript</span> to breathe life into designs and elevate user experiences with frameworks like <span>React</span>. Beyond the front end, I seamlessly navigate back-end technologies such as <span>Node.js and MongoDB</span>, providing <span>end-to-end solutions</span> for a seamless development experience.`,

  `✉️ Feel free to explore my work, and <span>don't</span> hesitate to reach out. I'm always eager to discuss how we might bring your <span>web development visions</span> to reality! Whether it's refining <span>user interactions</span>, implementing <span>cutting-edge design elements</span>, or creating a <span>robust web presence</span>, I'm here to turn your ideas into <span>digital masterpieces</span>.`
];


// export const about = [
//   {
//     title: "intro",
//     content:
//       "👋 Hello! I'm EZ Michael Yucor, a web developer passionate about creating captivating and functional websites. Proficient in HTML, CSS, JavaScript, React, Node.js, and MongoDB, I offer end-to-end web solutions.",
//     content2:
//       "👋 Greetings! I'm EZ Michael Yucor, an enthusiastic web developer dedicated to crafting remarkable digital experiences. Proficient in HTML, CSS, and JavaScript, I specialize in designing visually captivating and highly functional websites. Whether it's harnessing the power of front-end frameworks like React or leveraging back-end tools such as Node.js and MongoDB, I possess the skills to provide end-to-end solutions.",
//   },
//   {
//     title: "design",
//     content:
//       "🎨 With a focus on design, I create projects that function seamlessly and visually captivate users. My diverse portfolio highlights my commitment to collaboration, communication, and delivering exceptional results. Explore my work and let's discuss bringing your web development ideas to life!",
//     content2:
//       "🎨 Placing a strong emphasis on design, I ensure that each project not only operates seamlessly but also captivates users aesthetically. My portfolio showcases a diverse array of projects, underscoring my commitment to collaborative work, effective communication, and consistently delivering exceptional outcomes. Feel free to explore my work, and don't hesitate to reach out so we can discuss how we might bring your web development visions to reality!",
//   },
// ];



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
  // {
  //   icon: PostgresSQL({ height: 50, radius: 20 }),
  //   title: 'PostgresSQL',
  // },
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



// export const projectsData = [
//   {
//     key: "lodong",
//     name: "Lodong Co. Ltd.",
//     img: lodong,
//     desc: "A landing page for a tech company where they show case there finished projects.",
//     url: "https://lodongsite.vercel.app",
//     stack: ["HTML5", "NEXT.JS", "Tailwind CSS"],
//     github: "",
//   },
//   {
//     key: "jungnanum",
//     name: "Jungnanum",
//     img: jungnanum,
//     desc: "A landing page with complete an admin management system. This facilitated the addition of products and incorporated a personality test questionnaire.",
//     url: "http://210.99.223.38:20004/",
//     stack: ["HTML5", "CSS3", "BOOTSTRAP", "JAVASCRIPT"],
//     github: "",
//   },
//   {
//     key: "supermandiary",
//     name: "Superman Diary",
//     img: supermanDairy,
//     desc: "This system encompassed communication management, constructor and technician team oversight, order and contract management, technician scheduling, and a content management system. It even featured a raffle management system to award prizes to various tenants.",
//     url: "https://godofhouse.co.kr/",
//     // stack: ["REACT.JS", "EXPRESS.S", "NODE.JS", "FIREBASE", "SOCKET.IO"],
//     stack: [
//       "HTML5",
//       "CSS3",
//       "BOOTSTRAP",
//       "JAVASCRIPT",
//       "JQUERY",
//       "FIREBASE",
//       "SOCK.JS",
//       "SPRING BOOT",
//     ],
//     github: "",
//   },
//   // {
//   //   key: 'garbagecollection',
//   //   name: 'Garbage Collection',
//   //   img: lodong,
//   //   desc: '',
//   //   url: 'http://210.99.223.38:20004/',
//   //   stack: ['HTML5', 'CSS3', 'BOOTSTRAP', 'JAVASCRIPT', 'PHP', 'MYSQL'],
//   //   github: ''
//   // },
//   // {
//   //   key: 'bhcm',
//   //   name: 'Brgy. Health Center Management',
//   //   img: lodong,
//   //   desc: '',
//   //   url: 'http://210.99.223.38:20004/',
//   //   stack: ['HTML5', 'CSS3', 'BOOTSTRAP', 'JAVASCRIPT', 'PHP', 'MYSQL'],
//   //   github: ''
//   // },
//   {
//     key: "norsuelcms",
//     name: "NORSU-eLCMS",
//     img: norsuElcms,
//     desc: "This project was created as our capstone project in my college. It comprises a messaging system, content management, class management, and more.",
//     url: "",
//     stack: ["HTML5", "CSS3", "BOOTSTRAP", "JAVASCRIPT", "PHP", "MYSQL"],
//     github: "https://github.com/ezmichaely/norsu_elcms",
//   },
// ];

// export const galleryDesigns = [
//   { src: bvp, key: "bvp" },
//   { src: desFiesta, key: "desFiesta" },
//   { src: desXmas1, key: "desXmas1" },
//   { src: desXmas2, key: "desXmas2" },
//   { src: dwightTarp, key: "dwightTarp" },
//   { src: dwightTshirt, key: "dwightTshirt" },
//   { src: infoSteamos, key: "infoSteamos" },
//   { src: infoWin10, key: "infoWin10" },
//   { src: logo_ducking, key: "logo_ducking" },
//   { src: logo_farmigs, key: "logo_farmigs" },
//   { src: logo_francyn, key: "logo_francyn" },
//   { src: logo_rems, key: "logo_rems" },
//   // { src: logo_tayoktok, key: 'logo_tayoktok' },
//   // { src: tarpBday, key: "tarpBday" },
//   // { src: tarpFiesta, key: "tarpFiesta" },
//   // { src: tayok_drinks, key: 'tayok_drinks' },
//   { src: tayok_menu, key: "tayok_menu" },
//   { src: tayok_opening, key: "tayok_opening" },
//   // { src: tayok_tshirt, key: 'tayok_tshirt' },
//   // { src: tayok_sessionistas, key: 'tayok_sessionistas' },
//   { src: tayok_vibes, key: "tayok_vibes" },
// ];


// export const footerDetails = [
//   {
//     title: "Name",
//     content: "EZ MICHAEL YUCOR",
//   },
//   {
//     title: "Contact",
//     content: "+6392 6831 1909",
//   },
//   {
//     title: "Email",
//     content: "ezmichaely@gmail.com",
//   },
// ];

// export const copyRights = "Copyright ⓒ 2023 | EZY. All Rights Reserved";



// export const projectsData = [
//   {
//     key: "lodong",
//     name: "Lodong Co. Ltd.",
//     img: lodong,
//     desc: "A landing page for a tech company where they show case there finished projects.",
//     url: "https://lodongsite.vercel.app",
//     stack: ["HTML5", "NEXT.JS", "Tailwind CSS"],
//     github: "",
//   },
//   {
//     key: "jungnanum",
//     name: "Jungnanum",
//     img: jungnanum,
//     desc: "A landing page with complete an admin management system. This facilitated the addition of products and incorporated a personality test questionnaire.",
//     url: "http://210.99.223.38:20004/",
//     stack: ["HTML5", "CSS3", "BOOTSTRAP", "JAVASCRIPT"],
//     github: "",
//   },
//   {
//     key: "supermandiary",
//     name: "Superman Diary",
//     img: supermanDairy,
//     desc: "This system encompassed communication management, constructor and technician team oversight, order and contract management, technician scheduling, and a content management system. It even featured a raffle management system to award prizes to various tenants.",
//     url: "https://godofhouse.co.kr/",
//     // stack: ["REACT.JS", "EXPRESS.S", "NODE.JS", "FIREBASE", "SOCKET.IO"],
//     stack: [
//       "HTML5",
//       "CSS3",
//       "BOOTSTRAP",
//       "JAVASCRIPT",
//       "JQUERY",
//       "FIREBASE",
//       "SOCK.JS",
//       "SPRING BOOT",
//     ],
//     github: "",
//   },
//   // {
//   //   key: 'garbagecollection',
//   //   name: 'Garbage Collection',
//   //   img: lodong,
//   //   desc: '',
//   //   url: 'http://210.99.223.38:20004/',
//   //   stack: ['HTML5', 'CSS3', 'BOOTSTRAP', 'JAVASCRIPT', 'PHP', 'MYSQL'],
//   //   github: ''
//   // },
//   // {
//   //   key: 'bhcm',
//   //   name: 'Brgy. Health Center Management',
//   //   img: lodong,
//   //   desc: '',
//   //   url: 'http://210.99.223.38:20004/',
//   //   stack: ['HTML5', 'CSS3', 'BOOTSTRAP', 'JAVASCRIPT', 'PHP', 'MYSQL'],
//   //   github: ''
//   // },
//   {
//     key: "norsuelcms",
//     name: "NORSU-eLCMS",
//     img: norsuElcms,
//     desc: "This project was created as our capstone project in my college. It comprises a messaging system, content management, class management, and more.",
//     url: "",
//     stack: ["HTML5", "CSS3", "BOOTSTRAP", "JAVASCRIPT", "PHP", "MYSQL"],
//     github: "https://github.com/ezmichaely/norsu_elcms",
//   },
// ];
