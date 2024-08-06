import {
  FaBootstrap,
  FaCss3,
  FaHtml5,
  FaJs,
  FaReact
} from "react-icons/fa";
import { FaVuejs } from "react-icons/fa6";
import {
  SiBabel,
  SiJest,
  SiMui,
  SiNetlify,
  SiNextdotjs,
  SiRedux,
  SiTailwindcss,
  SiTestinglibrary,
  SiVercel,
  SiVisualstudiocode,
  SiWebpack
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

export const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "FrontEnd",
        icons: [
          { Icon: FaHtml5, name: "HTML" },
          { Icon: FaCss3, name: "CSS" },
          { Icon: FaJs, name: "JavaScript" },
          { Icon: FaReact, name: "React" },
          { Icon: TbBrandReactNative, name: "React Native" },
          { Icon: SiNextdotjs, name: "Next.js" },
          { Icon: FaVuejs, name: "Vue.js" },
        ],
      },
      {
        title: "State Management",
        icons: [
          { Icon: SiRedux, name: "Redux" },
          { Icon: "/vuex.png", name: "VueX" },
        ],
      },
      {
        title: "Responsive Design",
        icons: [
          { Icon: FaBootstrap, name: "Bootstrap" },
          { Icon: SiMui, name: "Material-UI" },
          { Icon: SiTailwindcss, name: "Tailwind CSS" },
          
        ],
      },
      {
        title: "Testing",
        icons: [
          { Icon: SiJest, name: "Jest" },
          { Icon: SiTestinglibrary, name: "Testing Library" },
        ],
      },
      {
        title: "Development Tools",
        icons: [{ Icon: SiVisualstudiocode, name: "VS Code" }],
      },
      {
        title: "Build and deployment",
        icons: [
          { Icon: SiWebpack, name: "Webpack" },
          { Icon: SiNetlify, name: "Netlify" },
          { Icon: SiBabel, name: "Babel" },
          { Icon: SiVercel, name: "Vercel" },
        ],
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "Front End Engineer (React/Vue)",
        company: "Ezlo Innovations",
        stage: "04/2022 - Present",
        location: "Remote, USA",
        description:
          "Connecting, automating, and visualizing smart homes seamlessly. Contributed to connecting multiple apps such as Stripe, Mailchimp, Google Calendar through Meshbots. Worked on triggers and actions in Meshbots for users to automate their home devices based on customized set of rules. Wrote unit tests for multiple components.",
      },
      {
        title: "Front End Engineer (React)",
        company: "eSpark Consulting Group",
        stage: "04/2022 - Present",
        location: "Karachi, Pakistan",
        description:
          "Awarded for exemplary performance on August 2022. Designing and developing web applications. Guiding and helping junior developers with programming.",
      },
      {
        title: "Front End Engineer (React)",
        company: "Seazen Group",
        stage: "04/2024 - Present",
        location: "Kuwait",
        description:
          "Seazen innovates Italian dining experiences globally, delivering exceptional hospitality and unique flavors. Successful project delivery and coordination. Pitched ideas for improving user experience and proposing solutions to problems. Brought extraordinary business in Ramadan & Eid after integrating delivery flow.",
      },
    ],
  },
  {
    title: "Certification",
    info: [
      {
        title: "Testing React with Jest and React Testing Library",
        stage: "04/2023 - 06/2023",
        company: "Udemy course by Bonnie Schulkin",
      },
      {
        title: " The Complete Guide (MVC, REST APIs, GraphQL, Deno)",
        stage: "01/2023 - Present)",
        company: "Udemy course by Maximilian Schwarzmuller",
      },
      {
        title: "Docker & Kubernetes: The Practical Guide (2023 Edition)",
        stage: "12/2023 - Present",
        company: "Udemy course by Maximilian Schwarzmuller",
      },
    ],
  },
];
