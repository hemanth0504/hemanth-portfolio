import { IconBrandGithub, IconBrandInstagram, IconBrandLeetcode, IconBrandLinkedin, IconMail } from "@tabler/icons-react";
const Info = {
    name: "Hemanth Reddy Theegala",
    stack: ["Software Engineer", "Full Stack Developer", "Gamer", "Freelancer"],
bio: (
  <>
   I’m a Software Engineer who loves turning coffee ☕ and ideas 💡 into code that makes an impact. I enjoy building systems that don’t just run — they scale, blending creativity and performance to bring digital experiences to life. Always curious, always creating, and always chasing the next big challenge. 🚀
  </>
)



}



const ProjectInfo = [
     {
        title: "Tradeit- Crypto Trading platform",
        desc: "Built a full-stack trading platform that integrates live market data, AI-powered chat, secure authentication, and payment systems. Designed with scalability and production-grade deployment in mind, leveraging AWS ECS Fargate, API Gateway, and CloudFront",
        image: "Tradeit.png",
        live: false,
        technologies: ["React", "Springboot", "MySQL"],
        link: "https://d9tpl2eurukj.cloudfront.net/signup",
        github: "https://github.com/hemanth0504/Trading-Application-SpringBoot-React-AWS-"
    },{
        title: "PathFinder - Learning Management System",
        desc: "Developed a responsive Learning Management System with Next.js, Tailwind CSS (frontend) and Node.js,Express.js (backend), deployed on AWS cloud infrastructure to support secure operations for 1,000+ users Containerized the application using Docker for streamlined deployment in a scalable microservices architecture,integrating AWS Lambda, DynamoDB, and API Gateway for a serverless design, and AWS S3 for storage",
        image: "PathFinder.png",
        live: true,
        technologies: ["Node.js","Express.js","AWS","React"],
        link: "https://path-finder-amber.vercel.app/",
        github: "https://github.com/Code-Mars/Ekart/"
    },
    {
        title: "Project360X",
        desc: "Architected a Project Management Dashboard with Next.js, Tailwind CSS, and MUI Data Grid for advanced data views, using Redux Toolkit, RTK Query, and React DnD for state, data fetching, and drag-and-drop UX. Deployed backend services with Node.js, Express, and PostgreSQL, using AWS Cognito for user authentication,Lambda for serverless logic, RDS for storage, API Gateway for routing, and S3 for static asset hosting",
        image: "Project360X.png",
        live: false,
        technologies: ["React", "Tailwind"],
        link: "https://github.com/hemanth0504/Project-360X",
        github: "https://github.com/hemanth0504/Project-360X"
    },
    {
        title: "Resume-Pilot",
        desc: " Created an AI-powered SaaS platform utilizing Next.js, integrating ChatGPT API for intelligent resume auto-fill,dynamic multi-step forms with React Hook Form, driving a 20% enhancement in user engagement Constructed a robust backend with PostgreSQL and Prisma ORM, integrating Stripe Checkout for subscriptions",
        image: "ResumePilot.png",
        live: false,
        technologies: ["React", "Springboot", "Tailwind", "Tabler-Icons", "MongoDB"],
        link: "https://github.com/Code-Mars/Spotify-Clone",
        github: "https://github.com/Code-Mars/Spotify-Clone"
    },
    {
        title: "Connectly",
        desc: "Travel Tracker is a full-stack web application that allows users to track their travel experiences and share them with others. The front end is built with React, Bootstrap, while the back end uses Node.js, Express, and PostgresSQL. Users can create an account, log in, add new trips, and view their past trips on a map. The app features a clean, modern design with interactive maps and a user-friendly interface. Travel Tracker combines functionality with style, making it easy and enjoyable to record and share travel memories.",
        image: "Connectly.png",
        live: false,
        technologies: ["React", "Node.js", "PostgresSQL", "Express", "Bootstrap"],
        link: "https://nextjs-resume-pilot.vercel.app",
        github: "https://github.com/hemanth0504/Resume-Pilot"
    },
    {
        title: "Event-Portfolio",
        desc: "Designed a decor rental platform with React and Tailwind CSS for responsive design, achieving 2× faster bookings Used Zustand for state management, JWT authentication for secure sessions, and integrated Stripe for payments Built RESTful APIs with Node.js, Express, and MongoDB, and an admin dashboard with full CRUD functionality",
        image: "EventPortfolio.png",
        live: false,
        technologies: ["React", "Tailwind", "Ace Editor"],
        link: "https://aadhya-signature-events.onrender.com/",
        github: "https://github.com/hemanth0504/Event-Portfolio"
    }
]

const SkillInfo = [
  {
    title: "Frontend",
    skills: [
      "HTML",
      "CSS",
      "SASS",
      "JavaScript",
      "React JS",
      "Redux",
      "Next.js",
      "Tailwind CSS",
      "Material UI",
    ],
  },
  {
    title: "Backend",
    skills: [
      "Springboot",
      "Node JS",
      "Express JS",
      "REST API",
      "MySQL",
      "MongoDB",
      "PostgreSQL",
      "NoSQL",
    ],
  },
  {
    title: "Languages",
    skills: [
      "C",
      "C++",
      "Java",
      "Python",
      "JavaScript",
      "TypeScript",
      "SQL",
      "R",
    ],
  },
  {
    title: "Cloud & DevOps",
    skills: [
      "AWS",
      "GCP",
      "Docker",
      "Kubernetes",
      "CI/CD",
    ],
  },
  {
    title: "Tools",
    skills: [
      "Git",
      "Github",
      "VS Code",
      "Postman",
      "MongoDB Compass",
      "Spring Tool Suite",
      "GraphQL",
    ],
  },
];




const socialLinks = [
    { link: "https://github.com/hemanth0504", icon: IconBrandGithub },
    { link: "https://www.linkedin.com/in/hemanth-theegala/", icon: IconBrandLinkedin },
    { link: "https://www.instagram.com/_hemanth._/", icon: IconBrandInstagram }, 
    { 
  link: "mailto:hemanth.teegala5@gmail.com", 
  icon: IconMail 
}
,
    { link: "https://leetcode.com/u/Heman55th/", icon: IconBrandLeetcode }
];


const ExperienceInfo = [
   {
  role: "Software Engineer",
  company: "Medisprout",
  date: "July 2025 – Present",
  desc: "Redesigned reporting architecture by replacing Google Sheets + Data Studio with a secure, scalable reporting pipeline. Updated AWS Lambda Reports Service to write into an Aurora MySQL reporting database, designed fact and summary tables for visits and billing, and implemented APIs with provider-level filtering. Integrated Amazon QuickSight for internal developer dashboards and researched embedding options (anonymous vs registered) for provider-facing dashboards. Managed access control using IAM roles, dashboard ACLs, and Row-Level Security (RLS).",
  skills: ["AWS Lambda", "Aurora MySQL", "Spring Boot", "React.js", "QuickSight", "APIs", "IAM", "Row-Level Security (RLS)"]
}
,
       {
        role: "Full Stack Developer",
        company: "Aadhya Signature Events",
        date: "June 2025 – July 2025",
        desc: "Designed a decor rental platform with React and Tailwind CSS for responsive design, achieving 2× faster bookings, Used Zustand for state management, JWT authentication for secure sessions, and integrated Stripe for payments,Built RESTful APIs with Node.js, Express, and MongoDB, and an admin dashboard with full CRUD functionality",
        skills: ["Springboot", "React JS", "Angular", "Node JS", "MySQL", "MongoDB", "Microservices"]
    },
       {
        role: "Full Stack Developer",
        company: "FundNJ",
        date: "Jan. 2025 – May 2025",
        desc: "Collaborated in an agile environment with a cross-functional team to build an AI-driven discussion platform using Node.js, Express, and Redis, integrating Canvas LMS data and supporting 500+ concurrent sessions, Implemented responsive React components and a PostgreSQL schema with relationships and optimized indexing,Integrated Google Gemini AI for real-time content categorization across discussions, supporting 1,000+ users,Performed unit and validation testing with Jest for backend APIs, maintaining 90% coverage of core endpoints",
        skills: ["Springboot", "React JS", "Angular", "Node JS", "MySQL", "MongoDB", "Microservices"]
    },
    {
        role: "Teaching Assistant",
        company: "New Jersey Institute of Technology ",
        date: "Oct. 2023 – Apr. 2025",
        desc: "Led Data Structures and Algorithms labs for 40+ students, mentoring in coding best practices and problem-solving, Created Python visualizations to simplify algorithms, boosting student engagement and coding accuracy by 50%",
        skills: ["Springboot", "React JS", "Angular", "Node JS", "MySQL", "MongoDB", "Microservices"]
    },
    {
        role: "Software Engineer Intern",
        company: "Suntek Corp Solutions Pvt Ltd.",
        date: "Sep. 2022 – Dec. 2022",
        desc: "Built an automated assessment tool using Spring Boot and React, reducing grading time by 40% for 200+ students Designed RESTful backend services with MongoDB to handle user data and support secure API endpoints Projects.",
        skills: ["Java", "MySQL", "Hibernate", "Selenium", "Jenkins", "JIRA", "Automation Testing"]
    }
]
const Slugs = [
    "typescript",
    "springboot",
    "javascript",
    "java",
    "react",
    "nextdotjs",
    "html5",
    "css3",
    "tailwindcss",
    "materialui",
    "nodejs",
    "express",
    "mongodb",
    "postgresql",
    "mysql",
    "firebase",
    "aws",
    "gcp",
    "docker",
    "kubernetes",
    "git",
    "github",
    "visualstudiocode",
    "postman",
    "mongodbc compass",
    "springtoolsuite",
    "prisma",
    "rest",
    "graphql",
    "c",
    "c++",
    "python",
    "r",
    "ci-cd"
];

export { Info, ProjectInfo,socialLinks, SkillInfo, ExperienceInfo, Slugs };