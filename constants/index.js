import GithubIcon from "./../public/assets/icons/github.svg";
import LinkedInIcon from "./../public/assets/icons/linkedin.svg";
import XIcon from "./../public/assets/icons/x.svg";
import InstagramIcon from "./../public/assets/icons/instagram.svg";
import FrontendIcon from "./../public/assets/icons/frontend.svg";
import LeaderShipIcon from "./../public/assets/icons/leadership.svg";
import ProblemSolvingIcon from "./../public/assets/icons/problem-solving.svg";
import FreelancerIcon from "./../public/assets/icons/freelance.svg";
import BackendIcon from "./../public/assets/icons/backend.svg";
import FullStackIcon from "./../public/assets/icons/full-stack.svg";

const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Developer",
    icon: <FullStackIcon />,
  },
  {
    title: "Frontend Developer",
    icon: <FrontendIcon />,
  },
  {
    title: "Backend Developer",
    icon: <BackendIcon />,
  },
  {
    title: "Problem Solving",
    icon: <ProblemSolvingIcon />,
  },
];

const technologies = {
  languages: [
    {
      name: "HTML5",
      icon: "/assets/tech/html5.svg",
      link: "https://html.spec.whatwg.org/multipage/",
    },
    {
      name: "CSS3",
      icon: "/assets/tech/css3.svg",
      link: "https://www.w3.org/Style/CSS/Overview.en.html",
    },
    {
      name: "JavaScript",
      icon: "/assets/tech/javascript.svg",
      link: "https://262.ecma-international.org/",
    },
    {
      name: "TypeScript",
      icon: "/assets/tech/typescript.svg",
      link: "https://www.typescriptlang.org/",
    },
    {
      name: "C",
      icon: "/assets/tech/c.svg",
      link: "https://en.cppreference.com/w/c",
    },
    {
      name: "Java",
      icon: "/assets/tech/java.svg",
      link: "https://www.java.com/en/",
    },
    {
      name: "Python",
      icon: "/assets/tech/python.svg",
      link: "https://www.python.org/",
    },
    {
      name: "PHP",
      icon: "/assets/tech/php.png",
      link: "https://www.php.net/",
    },
  ],
  frameworks: [
    {
      name: "Next.js",
      icon: "/assets/tech/nextjs.svg",
      link: "https://nextjs.org/",
    },
    {
      name: "Angular",
      icon: "/assets/tech/angular.png",
      link: "https://angular.io/",
    },
    {
      name: "TailwindCSS",
      icon: "/assets/tech/tailwindcss.svg",
      link: "https://tailwindcss.com/",
    },
    {
      name: "Bootstrap",
      icon: "/assets/tech/bootstrap.png",
      link: "https://getbootstrap.com/",
    },

    {
      name: "Spring Boot",
      icon: "/assets/tech/springboot.png",
      link: "https://spring.io/projects/spring-boot",
    },
    {
      name: "Spring",
      icon: "/assets/tech/spring.png",
      link: "https://spring.io/",
    },
    {
      name: "Express.js",
      icon: "/assets/tech/expressjs.png",
      link: "https://expressjs.com/",
    },



  ],
  libraries: [
    {
      name: "React",
      icon: "/assets/tech/react.svg",
      link: "https://react.dev/",
    },
,
    {
      name: "Framer-motion",
      icon: "/assets/tech/framer.svg",
      link: "https://www.framer.com/motion/",
    },
    {
      name: "NextAuth.js",
      icon: "/assets/tech/nextauthjs.png",
      link: "https://next-auth.js.org/",
    },
    {
      name: "React Native",
      icon: "/assets/tech/react-native.png",
      link: "https://reactnative.dev/",
    },
  ],
  tools: [
    {
      name: "Git",
      icon: "/assets/tech/git.svg",
      link: "https://git-scm.com/",
    },
    {
      name: "Github",
      icon: "/assets/icons/github.svg",
      link: "https://github.com/",
    },
    {
      name: "Postman",
      icon: "/assets/tech/postman.svg",
      link: "https://www.postman.com/",
    },
    {
      name: "Figma",
      icon: "/assets/tech/figma.svg",
      link: "https://www.figma.com/",
    },
    {
      name: "Docker",
      icon: "/assets/tech/docker.svg",
      link: "https://www.docker.com/",
    },
  ],
  environments: [
    {
      name: "Node.js",
      icon: "/assets/tech/nodejs.svg",
      link: "https://nodejs.org/en",
    },
  ],
  databases: [
    {
      name: "MongoDB",
      icon: "/assets/tech/mongodb.svg",
      link: "https://www.mongodb.com/",
    },

    {
      name: "MySQL",
      icon: "/assets/tech/my-sql.png",
      link: "https://www.mysql.com/",
    },
    {
      name: "Oracle",
      icon: "/assets/tech/oracl.png",
      link: "https://www.oracle.com/database/",
    },
    {
      name: "PostgreSQL",
      icon: "/assets/tech/postgresql.png",
      link: "https://www.postgresql.org/",
    },
  ],
};

const experiences = [
  {
    title: "Software System Architecture Intern",
    company_name: "Fido.ma",
    icon: "/assets/company/fido.png",
    iconBg: "#E6DEDD",
    date: "July 2024 - September 2024",
    points: [
      "Designed the core architecture of a new SaaS platform for a Moroccan startup specializing in online business creation, streamlining the process based on legal frameworks.",
      "Developed web applications using Next.js, Spring Boot, Docker, and AWS, offering additional services such as accounting and business management to support new companies."
    ],
  }
  ,{
    title: "Industrial IT Intern",
    company_name: "Renault Group",
    icon: "/assets/company/renault.png",
    iconBg: "#E6DEDD",
    date: "June 2024 - August 2024",
    points: [
      "Developed an advanced system for detecting employee personal protective equipment (PPE) using computer vision techniques, enhancing safety protocols within the plant.",
      "Contributed to automating the monitoring and control of PPE usage in sensitive production areas, improving safety and compliance."
    ],
  },

];


const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "ParkingProject-Arduino-Computer-Vision",
    description:
      "An Embedded System project utilizing Arduino, Raspberry Pi, Python, C++, and Computer Vision for a smart parking system, combined with a web application developed using Angular.",
    tags: [
      {
        name: "angular",
        color: "blue-text-gradient",
      },
      {
        name: "bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "typescript",
        color: "pink-text-gradient",
      },
      {
        name: "c++",
        color: "orange-text-gradient",
      },
      {
        name: "flask",
        color: "yellow-text-gradient",
      },
    ],
    image: "/assets/projects/Parking.png",
    source_code_link:
      "https://github.com/samir5636/ParkingProject-Arduino-Computer-Vision.git",
  },
  {
    name: "ZOHS Automotive Insurance",
    description:
      "A machine learning-based recommendation system for automotive insurance, integrating real-time streaming, model retraining, and deployment pipelines using Kafka, Airflow, Kubeflow, and Azure Cloud.",
    tags: [
      {
        name: "angular",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "docker",
        color: "pink-text-gradient",
      },
      {
        name: "spring",
        color: "orange-text-gradient",
      },
      {
        name: "flask",
        color: "yellow-text-gradient",
      },
      {
        name: "kafka",
        color: "blue-text-gradient",
      },
      {
        name: "azure",
        color: "green-text-gradient",
      },
    ],
    image: "/assets/projects/zohs.png",
    source_code_link:
      "https://github.com/orgs/ZOHSGroupe/repositories",
  },
  {
    name: "Yema7D",
    description:
      "Yema7D is a platform for generating didactic mini-scenarios for educational games using autoregressive models. It assists educators in crafting engaging and educational gameplay experiences.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "flask",
        color: "green-text-gradient",
      },
      {
        name: "docker",
        color: "pink-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "orange-text-gradient",
      },
    ],
    image: "/assets/projects/yema7d.png",
    source_code_link:
      "https://github.com/Yema7D/RAG-finetuning?tab=readme-ov-file",
  },
];



// const projects = [
//   {
//     name: "FigPro",
//     description:
//       "FigPro is a web-based collaborative design tool similar to Figma, built using Next.js, TypeScript, Tailwind CSS, and LiveBlocks API, Fabric.js. With FigPro, teams can seamlessly collaborate on designing interfaces in real-time with a plethora of features.",
//     tags: [
//       {
//         name: "typescript",
//         color: "blue-text-gradient",
//       },
//       {
//         name: "next.js",
//         color: "green-text-gradient",
//       },
//       {
//         name: "tailwindcss",
//         color: "pink-text-gradient",
//       },
//       {
//         name: "fabricjs",
//         color: "orange-text-gradient",
//       },
//       {
//         name: "liveblocks",
//         color: "yellow-text-gradient",
//       },
//     ],
//     image: "/assets/projects/fig-pro.png",
//     source_code_link: "https://github.com/Shivam-Sharma-1/FigPro",
//     deployed_link: "https://fig-pro-github.vercel.app",
//   },
//   {
//     name: "GDSC Website",
//     description:
//       "Welcome to the official repository for the GDSC MVJCE Website, built with Next.js, Styled Components, and Prisma! This website serves as the central hub for all things tech-related at GDSC MVJCE. From insightful blog posts to incredible community projects, and from exciting tech events to getting to know our team, you'll find it all here.",
//     tags: [
//       {
//         name: "next.js",
//         color: "blue-text-gradient",
//       },
//       {
//         name: "styled-components",
//         color: "green-text-gradient",
//       },
//       {
//         name: "three.js",
//         color: "pink-text-gradient",
//       },
//       {
//         name: "prisma",
//         color: "orange-text-gradient",
//       },
//       {
//         name: "framer-motion",
//         color: "yellow-text-gradient",
//       },
//     ],
//     image: "/assets/projects/gdsc-website.png",
//     source_code_link: "https://github.com/GDSC-MVJCE/gdscmvjce-website.git",
//     deployed_link: "https://gdscmvjce.vercel.app/",
//   },
//   {
//     name: "Facility Management System",
//     description:
//       "The Facility Management System is a comprehensive management solution developed using the MERN (MongoDB, Express.js, React, Node.js) stack. It allows users to book time slots in facilities and provides role-based access control for various functionalities.",
//     tags: [
//       {
//         name: "typescript",
//         color: "blue-text-gradient",
//       },
//       {
//         name: "react",
//         color: "green-text-gradient",
//       },
//       {
//         name: "tailwindcss",
//         color: "pink-text-gradient",
//       },
//       {
//         name: "node.js",
//         color: "orange-text-gradient",
//       },
//       {
//         name: "tanstack/react-query",
//         color: "yellow-text-gradient",
//       },
//     ],
//     image: "/assets/projects/facility-manager.png",
//     source_code_link:
//       "https://github.com/Shivam-Sharma-1/Facility-Management-System",
//     deployed_link:
//       "https://github.com/Shivam-Sharma-1/Facility-Management-System?tab=readme-ov-file#demo",
//   },
// ];

const socials = [
  {
    id: "github",
    icon: <GithubIcon />,
    link: "https://github.com/samir5636",
  },
  {
    id: "linkedin",
    icon: <LinkedInIcon />,
    link: "linkedin.com/in/samir-ziani",
  },
];

const heroTexts = [

  "Full-Stack developer",
  500,
  "Frontend developer",
  500,
  "Backend developer",
  500,
  "software engineer",
  500,
];

export {
  navLinks,
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  socials,
  heroTexts,
};
