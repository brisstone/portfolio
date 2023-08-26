import { RiComputerLine } from "react-icons/ri";
import { FaServer } from "react-icons/fa";
import { AiOutlineAntDesign, AiOutlineApi } from "react-icons/ai";
import { MdDeveloperMode } from "react-icons/md";
import { IProject, Service, Skill } from "./types";

import { BsCircleFill } from "react-icons/bs";

export const services: Service[] = [
  {
    Icon: RiComputerLine,
    title: "Frontend Development",
    about:
      "I specialize in creating captivating and scalable Single Page Applications (SPAs) through the artful use of <b>HTML</b>, <b>CSS</b>, <b>jQuery</b>, <b>React.js</b>, <b>Vue.js</b>, and <b>Next.js</b>.",
  },
  {
    Icon: FaServer,
    title: "Backend  Development",
    about:
      "My proficiency extends to crafting server-side scripts with <b>Node.js</b>, <b>FastAPI</b> (Python), <b>Django</b>, and <b>Golang</b>. I adeptly manage diverse databases including <b>PostgreSQL</b>, <b>MongoDB</b>, and <b>MySQL</b>. My skillset also encompasses designing robust applications following <b>microservices architecture</b> principles, and employing a <b>test-driven approach</b> to ensure the highest quality code.",
  },
  {
    Icon: AiOutlineAntDesign,
    title: "Dev Ops",
    about: "Proficient in the realm of DevOps and deployment, I possess a strong command over strategies that bring applications to life. My skills encompass <b>Docker</b> for consistent deployments, alongside mastery of cloud platforms including <b>AWS</b> and <b>DigitalOcean</b>. I champion <b>CI/CD</b> pipelines, ensuring streamlined code changes from development to production. Moreover, I am well-versed in Git, Terraform, and monitoring tools such as <b>Prometheus</b> and <b>Grafana</b>, rounding out a dynamic skill set that spans the software development lifecycle."  },
  {
    Icon: AiOutlineApi,
    title: "Blockchain Technology",
    about:
      "With a profound interest in blockchain technology, I'm driven by the decentralized and transparent possibilities it offers. From its foundational role in cryptocurrencies to its potential across various sectors, I'm captivated by the innovative solutions it can provide. I actively engage in discussions, stay current with emerging trends, and am well-versed in fundamental concepts like blockchain architecture, consensus mechanisms, and smart contracts. My dedication lies in harnessing the decentralized power of blockchain to drive transformative and forward-looking solutions.",
  },

  {
    Icon: MdDeveloperMode,
    title: "Machine Learning and Data Science Enthusiast",
    about:
      "I create intelligent systems using <b>tensorflow/python</b>, which are capable of image recognition and text processing. ",
  },
  {
    Icon: RiComputerLine,
    title: "Embedded Systems Design",
    about:
      "I design IoT based embedded systems, AI robots using <b>arduino</b> and <b>PIC</b> microcontrollers. ",
  },
  {
    Icon: AiOutlineAntDesign,
    title: "Content Writing",
    about:
      "I specialize in curating compelling and impactful content across diverse domains, seamlessly weaving together the worlds of blockchain, education, and marketing. By harnessing my expertise, I not only create rich and engaging narratives but also strategically tailor each piece to resonate with target audiences, ensuring a seamless fusion of content and selling strategy.",
  },
];

export const languages: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "HTML5",
    level: "95",
  },
  {
    Icon: BsCircleFill,
    name: "CSS3",
    level: "90",
  },
  {
    Icon: BsCircleFill,
    name: "Bootstrap",
    level: "95",
  },
  {
    Icon: BsCircleFill,
    name: "JQUERY",
    level: "90",
  },
  {
    Icon: BsCircleFill,
    name: "Java Script",
    level: "95",
  },

  {
    Icon: BsCircleFill,
    name: "MaterialUI",
    level: "95",
  },
  {
    Icon: BsCircleFill,
    name: "Python",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "C#",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "React",
    level: "97",
  },
  {
    Icon: BsCircleFill,
    name: "Vue",
    level: "90",
  },
  {
    Icon: BsCircleFill,
    name: "Next",
    level: "95",
  },
  {
    Icon: BsCircleFill,
    name: "Node Js",
    level: "95",
  },
  {
    Icon: BsCircleFill,
    name: "Nest",
    level: "90",
  },
  {
    Icon: BsCircleFill,
    name: "Django",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "API INTEGRATION",
    level: "90",
  },

  {
    Icon: BsCircleFill,
    name: "React-Native",
    level: "95",
  },
  {
    Icon: BsCircleFill,
    name: "Flutter",
    level: "90",
  },
];

export const tools: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "Test Driven Tools",
    level: "90",
  },
  {
    Icon: BsCircleFill,
    name: "Linux",
    level: "90",
  },
  {
    Icon: BsCircleFill,
    name: "CI/CD",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "AWS",
    level: "86",
  },
  {
    Icon: BsCircleFill,
    name: "GraphQL",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "Git",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "Proteus",
    level: "90",
  },
];

export const projects: IProject[] = [
  // {
  //   name: "COVID Tracker",
  //   description:
  //     "This app shows a statistical view about corona virus over the world",
  //   image_path: "/images/covid.jpg",
  //   deployed_url: "https://covid-19-tracker-by-sumit.web.app/",
  //   github_url: "https://github.com/Dey-Sumit/covid-19-tracker",
  //   category: ["react"],
  //   key_techs: ["React", "Chart.js", "Material UI"],
  // },
  // {
  //   name: "Algorithm Visualizer",
  //   image_path: "/images/algoVisual.png",
  //   deployed_url: "https://visual-algorithm.web.app/",
  //   github_url: "https://github.com/Dey-Sumit/algorithm-visualizer",
  //   category: ["react"],
  //   description:
  //     "An web app which shows how an algorithm (path finding or sorting) works with cool animation",
  //   key_techs: ["React", "firebase", "Framer Motion"],
  // },

  // {
  //   name: "Dev Talks",
  //   image_path: "/images/dev.jpg",
  //   deployed_url: "https://dev-talks.herokuapp.com/",
  //   github_url: "https://github.com/Dey-Sumit/Dev-talks",
  //   category: ["node", "mongo", "react"],
  //   description:
  //     "Social Media app for developers who can share project,create posts,etc...",
  //   key_techs: [
  //     "React",
  //     "Redux",
  //     "Node",
  //     "Express",
  //     "Mongo",
  //     "REST API",
  //     "Bootstrap",
  //   ],
  // },

  // {
  //   name: "Realtime Chat App",
  //   image_path: "/images/chatapp.jpg",
  //   deployed_url: "https://sumit-chat.netlify.app/",
  //   github_url: "https://github.com/Dey-Sumit/chat-app-socket.io-react-node",
  //   category: ["node", "react"],
  //   description:
  //     "Basic Realtime Chat App where one can create a room can talk to each other",
  //   key_techs: ["React", "Node", "Express", "Socket", "Bootstrap"],
  // },

  // {
  //   name: "Tweeter Clone",
  //   image_path: "/images/tweetme.jpg",
  //   deployed_url: "http://sumaxtweetme.pythonanywhere.com/",
  //   github_url: "https://github.com/Dey-Sumit/tweetme",
  //   category: ["django", "react"],
  //   description:
  //     "First Django Project :) | Typical Social Media App where one can post,like ,comment etc",
  //   key_techs: ["React", "Django", "Django REST API"],
  // },

  {
    id: 1,
    name: "Fragvest",
    image_path: "/images/fragvest.png",
    deployed_url: "https://play.google.com/store/apps/details?id=com.fragvest.fragvest_mobile&pli=1",
    github_url: "!#",
    category: ["Mobile",],
    description: "REAL ESTATE :) | Fragvest store is your online portal to safely interact with the real estate industry in one-click.",
    key_techs: ["API", "Flutter",],
  },
  {
    id: 2,
    name: "VPAY",
    image_path: "/images/vpay.png",
    deployed_url: "https://www.vpay.africa/",
    github_url: "!#",
    category: ["React", "Node",],
    description: "FINTECH :) | VPay is a payment solution that enables cashiers and online shopping carts to increase customer loyalty by accepting payments via bank transfer and instantly confirm these payments without depending on the business owner or accountant.",
    key_techs: ["API", "Node js", "React js","MongoDB", "Cron Jobs", "Bull.js", "Reddis", "Socket.io", "Billings/Utility", "Long Polling", "Payment Systems"],
  },
  {
    id: 3,
    name: "ArtSplit",
    image_path: "/images/artsplit.png",
    deployed_url: "https://artsplit.com/",
    github_url: "!#",
    category: ["React", "Node",],
    description: "ART :) | ARTSPLIT is an art technology platform that enables you to own and earn from fractions of valuable African artworks and music, all with the common goal of raising the global profile of African artists and art.",
    key_techs: ["API", "Node js", "React js","Next.js","MongoDB", "Cron Jobs", "Google Tensor flow", "Bull.js", "Reddis", "Socket.io"],
  },
  {
    id: 4,
    name: "Specnota",
    image_path: "/images/specnota.png",
    deployed_url: "https://specnota.app/",
    github_url: "!#",
    category: ["React", "Node",],
    description: "JS :) | A collaboration tool that brings your project specifications together. Designers, Developer & Stakeholders working in harmony to deliver projects. An easy-to-use cloud-based collaboration tool to quickly generate & manage Functional Specification Documents (FSDs). ",
    key_techs: ["API", "Node js", "React js","Postgres", "Cron Jobs", "Jest", "Adonis.js", "DND", "Socket.io", ],
  },
  {
    id: 5,
    name: "IntaChurch",
    image_path: "/images/intachurch.png",
    deployed_url: "https://www.intachurch.app/",
    github_url: "#",
    category: ["React", "Node"],
    description: "RELIGION :) | Intachurch, the leading cloud-platform and mobile app designed to transform the way churches manage their administration and engage with their congregation.",
    key_techs: ["API", "Node js", "React js", "Adonis.js","Postgres", "Jest.js", "AWS", "Postgres" , "Html/Css", "Google Map", "Paypal"],
  },
  {
    id: 6,
    name: "Smart Contract Solidity React",
    image_path: "/images/crypto.png",
    deployed_url:
      "https://624dd94456d999008bc6120f--blockchain-smart.netlify.app/",
    github_url: "https://github.com/brisstone/web3.0_blockchain",
    category: ["React"],
    description: "CRYPTO :) | ETHEREUM SMART CONTRACT",
    key_techs: ["TailwindCSS", "Solidity", "BlockChain", "React", "Vite"],
  },
  {
    id: 7,
    name: "Social Media App",
    image_path: "/images/color.jpg",
    deployed_url: "!#",
    github_url: "https://github.com/brisstone/socialMediaAppReact",
    category: ["React"],
    description: "SOCIAL :) | Social Media App",
    key_techs: ["API", "Node js", "React js"],
  },
  {
    id: 8,
    name: "React sidecart",
    image_path: "/images/color.jpg",
    deployed_url: "https://react-side-cart.herokuapp.com/",
    github_url: "https://github.com/brisstone/React-Shop-Side-Cart-currencyApi",
    category: ["React"],
    description:
      "SHOPPING :) | A simple shopping side cart with real-time currency price update",
    key_techs: ["GrapQL API", "React js"],
  },
  {
    id: 9,
    name: "React Website",
    image_path: "/images/color.jpg",
    deployed_url: "https://material-ui-react-app.herokuapp.com/",
    github_url: "https://github.com/brisstone/material-ui-react-website",
    category: ["React"],
    description: "JS :) | A complete website design",
    key_techs: ["Material UI", "React js"],
  },
  {
    id: 10,
    name: "My Portfolio",
    image_path: "/images/portfolio.png",
    deployed_url: "https://johnson-portfl.herokuapp.com/",
    github_url: "!#",
    category: ["React"],
    description: "JS :) | My personal portfolio",
    key_techs: ["Next js", "React js", "Tailwind CSS"],
  },

  {
    id: 11,
    name: "Crypto Dashboard using React.js",
    image_path: "/images/color.jpg",
    deployed_url: "https://briscryptodashboard.herokuapp.com/",
    github_url: "https://github.com/brisstone/cryptoDashboard",
    category: ["React"],
    description: "JS :) | Cyrptocurrency Dashboard",
    key_techs: ["API", "Axios", "React js"],
  },

  {
    id: 12,
    name: "IoT stream",
    image_path: "/images/color.jpg",
    deployed_url: "!#",
    github_url: "https://github.com/brisstone/Stream-IoT-",
    category: ["Node"],
    description:
      "Tried ML with JS :) | A node.js API for data streaming from the backend.",
    key_techs: ["Express", "jade"],
  },

  {
    id: 13,
    name: "Color Classification using tf.js",
    image_path: "/images/color.jpg",
    deployed_url: "!#",
    github_url: "https://github.com/brisstone/color-classification",
    category: ["Node"],
    description:
      "Tried ML with JS :) | this app classifies a color using CNN algorithm in browser",
    key_techs: ["Express", "TensorFlow.js", "Vanilla js"],
  },
  {
    id: 14,
    name: "Full Shopping Cart using node.js",
    image_path: "/images/color.jpg",
    deployed_url: "https://nodeshoppingcartapi.herokuapp.com/",
    github_url: "https://github.com/brisstone/fullReactNodeShoppingCart",
    category: ["Node"],
    description: "JS :) |Full shopping cart with bot payment and functionality",
    key_techs: [
      "React",
      "Redux",
      "Node",
      "Express",
      "Mongo",
      "REST API",
      "Bootstrap",
      "Stripe",
      "Paypal",
    ],
  },
  {
    id: 15,
    name: "Nextflix Redesign",
    image_path: "/images/color.jpg",
    deployed_url: "https://brisstone.github.io/netflix-redesign/",
    github_url: "https://github.com/brisstone/netflix-redesign",
    category: ["Html/Css/Js"],
    description:
      "-- :) | a redesign design of a netflix website using HTML, CSS and JS",
    key_techs: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 16,
    name: "HealthDC WebPages",
    image_path: "/images/health.png",
    deployed_url: "https://brisstone.github.io/HealTechDC/",
    github_url: "https://github.com/brisstone/HealTechDC",
    category: ["Html/Css"],
    description: "-- :) | FULL RESPONSIVE WEBPAGES",
    key_techs: ["HTML", "CSS"],
  },
  {

    id: 17,
    name: "Natours WebPage",
    image_path: "/images/natours.png",
    deployed_url: "https://brisstone.github.io/natours/",
    github_url: "https://github.com/brisstone/natours",
    category: ["Html/Css"],
    description: "-- :) | RESPONSIVE WEBPAGE",
    key_techs: ["HTML", "CSS"],
  },
  {
    id: 18,
    name: "Book_hotel WebPages",
    image_path: "/images/hotel.png",
    deployed_url: "https://brisstone.github.io/book_hotel/",
    github_url: "https://github.com/brisstone/book_hotel",
    category: ["Html/Css"],
    description: "-- :) | RESPONSIVE WEBPAGE",
    key_techs: ["HTML", "CSS"],
  },

  {
    id: 19,
    name: "CarrotSuite",
    image_path: "/images/color.jpg",
    deployed_url: "https://play.google.com/store/apps/details?id=com.carrotsuitespacemobile",
    github_url: "!#",
    category: ["Mobile",],
    description: "VISITOR MANAGEMENT :) | With Carrotsuite Space, you can achieve a paperless + safer visitor management experience. Secure your entire space by digitizing your reception. - Make a lasting impression on your visitors: Digitize their welcome & exit experiences. Change the face of your reception",
    key_techs: ["API", "React Native",],
  },
 
  // {
  //   name: "YouTube using YouTube ",
  //   image_path: "/images/youtubeClone.png",
  //   deployed_url: "https://not-utube.web.app/",
  //   github_url: "https://github.com/Dey-Sumit/youtube-clone-tutorial-up",
  //   category: ["express"],
  //   description:
  //     'Full(almost) Functional YouTube replica where one can login with his/her youtube account to enjoy "not-YouTube".User can like a video,comment on a video & Much More ',
  //   key_techs: [
  //     "React",
  //     "Redux",
  //     "Firebase Auth",
  //     "YouTube API",
  //     "Sass",
  //     "Bootstrap",
  //   ],
  // },
  // {
  //   name: "Football App",
  //   image_path: "/images/football.png",
  //   deployed_url: "https://o-my-goal.web.app/",
  //   github_url: "https://github.com/Dey-Sumit/football-app",
  //   category: ["react"],
  //   description:
  //     "o my goal replica where an user can keep an eye on his favorite club.This app will keep providing \n all the statistics of that club.all the fans can also chat ",
  //   key_techs: ["React", "Redux", "Firebase Auth", "API", "Sass", "Bootstrap"],
  // },
];
