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
      "I build beautiful and scalable SPA using <b> HTML</b>,<b>CSS</b>,  <b>jQuery</b>, <b>React.js</b> & <b>Next.js</b>.  ",
  },
  {
    Icon: FaServer,
    title: "Backend  Development",
    about:
      "I write server side scripts using <b>NodeJs</b>, <b>FastApi (Python)</b>   & <b>Django</b>, and database using <b> MongoDB </b>, & <b> MYSQL</b>.",
  },
  {
    Icon: AiOutlineApi,
    title: "API Development",
    about:
      "I develop REST API and GraphQL API using <b>django-rest-api</b>  & <b>Node API</b>. ",
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
      "I create rich and good contents for different fields like blockchain, education, & marketing.",
  },
];

export const languages: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "HTML5",
    level: "90",
  },
  {
    Icon: BsCircleFill,
    name: "CSS3",
    level: "90",
  },
  {
    Icon: BsCircleFill,
    name: "Bootstrap",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "JQUERY",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "Java Script",
    level: "90",
  },
 
  {
    Icon: BsCircleFill,
    name: "MaterialUI",
    level: "85",
  },
  {
    Icon: BsCircleFill,
    name: "Python",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "C#",
    level: "70",
  },
  {
    Icon: BsCircleFill,
    name: "React",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "Vue",
    level: "65",
  },
  {
    Icon: BsCircleFill,
    name: "Next",
    level: "65",
  },
  {
    Icon: BsCircleFill,
    name: "Node Js",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "Django",
    level: "60",
  },
  {
    Icon: BsCircleFill,
    name: "API INTEGRATION",
    level: "80",
  },
 
  {
    Icon: BsCircleFill,
    name: "React-Native",
    level: "60",
  },
  {
    Icon: BsCircleFill,
    name: "Flutter",
    level: "50",
  },
];

export const tools: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "Figma",
    level: "85",
  },
  {
    Icon: BsCircleFill,
    name: "Photoshop",
    level: "45",
  },
  {
    Icon: BsCircleFill,
    name: "Corel Draw",
    level: "75",
  },
  {
    Icon: BsCircleFill,
    name: "GraphQL",
    level: "70",
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
    name: "Social Media App",
    image_path: "/images/color.jpg",
    deployed_url: "!#",
    github_url: "https://github.com/brisstone/socialMediaAppReact",
    category: ["React"],
    description:
      "JS :) | Social Media App",
    key_techs: ["API", "Node js", "React js"],
  },
  {
    name: "React sidecart",
    image_path: "/images/color.jpg",
    deployed_url: "https://react-side-cart.herokuapp.com/",
    github_url: "https://github.com/brisstone/React-Shop-Side-Cart-currencyApi",
    category: ["React"],
    description:
      "JS :) | A simple shopping side cart with real-time currency price update",
    key_techs: ["GrapQL API", "React js"],
  },
  {
    name: "React Website",
    image_path: "/images/color.jpg",
    deployed_url: "https://material-ui-react-app.herokuapp.com/",
    github_url: "https://github.com/brisstone/material-ui-react-website",
    category: ["React"],
    description:
      "JS :) | A complete website design",
    key_techs: ["Material UI", "React js"],
  },
  {
    name: "My Portfolio",
    image_path: "/images/color.jpg",
    deployed_url: "https://johnson-portfl.herokuapp.com/",
    github_url: "!#",
    category: ["React"],
    description:
      "JS :) | My personal portfolio",
    key_techs: ["Next js", "React js", "Tailwind CSS"],
  },
 
  {
    name: "Crypto Dashboard using React.js",
    image_path: "/images/color.jpg",
    deployed_url: "https://briscryptodashboard.herokuapp.com/",
    github_url: "https://github.com/brisstone/cryptoDashboard",
    category: ["React"],
    description:
      "JS :) | Cyrptocurrency Dashboard",
    key_techs: ["API", "Axios", "React js"],
  },

  {
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
    name: "Full Shopping Cart using node.js",
    image_path: "/images/color.jpg",
    deployed_url: "https://nodeshoppingcartapi.herokuapp.com/",
    github_url: "https://github.com/brisstone/fullReactNodeShoppingCart",
    category: ["Node"],
    description:
      "JS :) |Full shopping cart with bot payment and functionality",
    key_techs: ["React",
        "Redux",
        "Node",
        "Express",
        "Mongo",
        "REST API",
        "Bootstrap",
      "Stripe", 
      "Paypal"]
      
  },
  {
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
    name: "HealthDC WebPages",
    image_path: "/images/color.jpg",
    deployed_url: "https://brisstone.github.io/HealTechDC/",
    github_url: "https://github.com/brisstone/HealTechDC",
    category: ["Html/Css"],
    description:
      "-- :) | FULL RESPONSIVE WEBPAGES",
    key_techs: ["HTML", "CSS"],
  },
  {
    name: "Natours WebPage",
    image_path: "/images/color.jpg",
    deployed_url: "https://brisstone.github.io/natours/",
    github_url: "https://github.com/brisstone/natours",
    category: ["Html/Css"],
    description:
      "-- :) | RESPONSIVE WEBPAGE",
    key_techs: ["HTML", "CSS"],
  },
  {
    name: "Book_hotel WebPages",
    image_path: "/images/color.jpg",
    deployed_url: "https://brisstone.github.io/book_hotel/",
    github_url: "https://github.com/brisstone/book_hotel",
    category: ["Html/Css"],
    description:
      "-- :) | RESPONSIVE WEBPAGE",
    key_techs: ["HTML", "CSS"],
  },
    {
    name: "Smart Contract Solidity React",
    image_path: "/images/color.jpg",
    deployed_url: "https://624dd94456d999008bc6120f--blockchain-smart.netlify.app/",
    github_url: "https://github.com/brisstone/web3.0_blockchain",
    category: ["React"],
    description:
      "-- :) | ETHEREUM SMART CONTRACT",
    key_techs: ["TailwinsCSS", "Solidity", "BlockChain", "React", "Vite"],
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
