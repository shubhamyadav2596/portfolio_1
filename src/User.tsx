import { IconBrandGithub, IconBrandInstagram, IconBrandLeetcode, IconBrandLinkedin, IconBrandYoutube } from "@tabler/icons-react";
import Globussoft from "./assets/Globussoft.png";
import leadangel from "./assets/leadangel.webp";
import movie from "./assets/movie.png"
import ecom from "./assets/ecom.png"
import ecomMern from "./assets/ecom_mern.png"
import eventbooking from "./assets/eventbooking.png"
import taskmanager from './assets/taskmanager.png'
import shopnest from './assets/shopnest.png'



const Info = {
    name: "Shubham Yadav",
    stack: ["Software Engineer","Full Stack Developer", "Frontend Developer"],
    bio: "Full Stack Developer with 2 years+ of experience as a Frontend Developer. Skilled in React, JavaScript, HTML, and CSS with a focus on performance and accessibility. Familiar with backend development using Node.js, Express.js, and MongoDB. Able to collaborate effectively in cross-functional teams and agile environments. Committed to writing clean, maintainable code and delivering seamless user experiences."
}



const ProjectInfo = [
      
    {
        title: "Event Booking App",
        desc: "Eventora is a full-stack MERN event booking platform that offers seamless native browsing, registration, and manual payment management. Built with a sleek React and Tailwind CSS interface, it ensures robust security through JWT authentication, bcrypt, and mandatory 2FA email OTPs required for account activation and ticket reservations. The system utilizes strict role-based access control, allowing users to securely submit and track booking requests while empowering administrators with a comprehensive dashboard to create events, manage seating capacity to prevent overbooking, track live revenue, and manually process the pending registration queue. Enhanced with polished micro-interactions and automated Nodemailer confirmations, Eventora delivers a highly secure, end-to-end event management experience.",
        image: eventbooking,
        live: true,
        technologies: ["Node", "Express", "React", "Redux","Tailwind", "mongoDB"],
        link: "https://evetbooking.vercel.app/",
        github: "https://github.com/shubhamyadav2596/event-booking"
    },

      
    {
        title: "Task Manager",
        desc: "Task Manager MERN is a full-stack web application built with MongoDB, Express.js, React, and Node.js for organizing and tracking team tasks in one place. It uses JWT-based authentication and role-based access control, with separate dashboards for admin and user roles. Admins can create and assign tasks, manage users, view analytics with charts, and export task reports to Excel; users can view assigned work, update status, and track progress. Each task supports priority levels, due dates, file attachments, a todo checklist, and automatic progress tracking. The frontend is built with React, Redux, Tailwind CSS, and Recharts, while the backend uses Express, Mongoose, and Multer for secure APIs and file uploads. Together, the app delivers a modern, responsive task management experience suited to portfolios, team workflows, or small business use.",
        image: taskmanager,
        live: true,
        technologies: ["React", "Context", "Tailwind", "mongoDB"],
        link: "https://task-manager-sigma-nine-54.vercel.app/",
        github: "https://github.com/shubhamyadav2596/task-manager-app"
    },

      
    {
        title: "Ecommerce MERN",
        desc: "ShopNest is a professionally engineered, full-stack MERN e-commerce platform built with modern standard React, Node.js, Express, and MongoDB. The application ensures seamless state management and secure user sessions by combining Redux Toolkit for cart handling with the AuthContext API for JWT authentication. It features a unified Admin Dashboard for comprehensive platform control and personal user profiles that map directly to individual order histories. Product media is securely managed through Cloudinary integration via Multer for seamless image uploads. Complete with fully implemented Razorpay payment processing, ShopNest delivers a robust, end-to-end online shopping experience.",
        image: shopnest,
        live: true,
        technologies: ["React", "Redux", "Claudinary",, "", "Tailwind", "mongoDB"],
        link: "https://shopnest-liart.vercel.app/",
        github: "https://github.com/shubhamyadav2596/e-commerce_app"
    },
   
    {
        title: "Ecommerce Site frontend",
        desc: "Built a responsive and feature-rich e-commerce frontend using React, React Router DOM, Tailwind CSS, and PostCSS. Designed a dynamic product catalog with real-time filtering and implemented seamless navigation with nested and dynamic routes like /product/:id. Developed a fully functional shopping cart with real-time updates and an intuitive checkout flow. Leveraged Tailwind for a consistent, responsive design across devices. Optimized CSS using PostCSS for better performance in production. Delivered a scalable and visually appealing application, showcasing modern web development practices.",
        image: ecom,
        live: false,
        technologies: ["React", "Redux","Tailwind", "PostCSS"],
        link: "https://ecommerce-site-demo-5cc84b.netlify.app/",
        github: "https://github.com/shubhamyadav2596/Ecommerce-frontend/tree/main"
    },

    {
        title: "Ecommerce MERN",
        desc: "Built a full-stack e-commerce website using React, Redux, Node.js, Express, MongoDB, and Tailwind CSS. Designed responsive product pages, a dynamic cart, and a secure checkout flow with React and Redux for state management. Developed RESTful APIs with Express and Node.js for handling authentication, product management, and orders. Used MongoDB to store user, product, and order data, ensuring scalability. Styled the application with Tailwind CSS, delivering a modern and user-friendly interface. Created a seamless shopping experience with efficient frontend-backend integration",
        image: ecomMern,
        live: false,
        technologies: ["React", "Redux", "Tailwind", "Node.js", "MongoDB", "express"],
        link: "https://mern-ecommerce-1-y0xf.onrender.com",
        github: "https://github.com/shubhamyadav2596/MERN_ECOMMERCE"
    },
     {
        title: "Movie App",
        desc: "This is a basic prototype of a movie search web application built with React.js. It demonstrates the ability to fetch movie data from the TMDB API and display it in a simple, responsive user interface. This is a prototype and may not include all error handling or optimizations that would be present in a production application. The emphasis is on demonstrating the ability to work with React.js and API integration to build a simple web application.",
        image: movie,
        live: true,
        technologies: ["React", "SCSS", "Redux", "RestAPI"],
        link: "https://movie-app-e7afe2.netlify.app/",
        github: "https://github.com/shubhamyadav2596/movie_app"
    },
   
]


const SkillInfo = [
    {
        title: "Frontend",
        skills: ["HTML", "CSS", "SASS", "JavaScript", "React JS", "Redux", "Tailwind CSS", "Material UI", "Bootstrap"
        ]
    },
    {
        title: "Backend",
        skills: ["Node JS", "Express JS", "MySQL", "MongoDB", "Firebase"]
    },
    {
        title: "Languages",
        skills: ["JavaScript", "TypeScript"]
    },
    {
        title: "Tools",
        skills: ["Git", "Github", "VS Code", "Postman", "MongoDB Compass"]
    }
]
const socialLinks = [
    { link: "https://github.com/shubhamyadav2596", icon: IconBrandGithub },
    { link: "https://www.linkedin.com/in/shubh-ydv96/", icon: IconBrandLinkedin },
    { link: "https://www.instagram.com/_s_h_u_b_b_u___/?hl=en", icon: IconBrandInstagram }, 
    { link: "https://www.youtube.com/@ShubhamYadav-ro2hf", icon: IconBrandYoutube },
    { link: "https://leetcode.com/u/shubbu_96/", icon: IconBrandLeetcode }
];


const ExperienceInfo = [
    {
        role: "UI/UX Developer",
        company: "Globussoft Tech. pvt ltd",
        date: "Jan 2023 - Aug 2024",
        desc: "A passionate Frontend Developer from Bhilai, Chhattisgarh, with 1.6 years of experience at Globussoft Technology Pvt Ltd. Skilled in creating intuitive and responsive user interfaces using modern front-end technologies. Enthusiastic about design trends, innovative tools, and crafting impactful digital experiences.",
        skills: ["React JS", "Redux", "javascript", "TailwindCss", "Bootstrap"],
        logo: Globussoft
    },
    {
        role: "UI Developer",
        Company: "Vyakar Tech. pvt ltd",
        date: "Mar 2025 - Oct 2025",
        desc: "Worked as a UI developer at Vyakar Tech Private Limited, contributing to the development of user interfaces for web applications. Collaborated with cross-functional teams to implement design mockups and enhance user experience. Gained hands-on experience with modern frontend technologies and agile development methodologies.",
        skills: ["Angular", "PRIMENG", "javascript", "TailwindCss", "Bootstrap"],
        logo: leadangel
    }
 
]
const Slugs = [
    "typescript",
    "spring",
    "javascript",
    "dart",
    "java",
    "react",
    "angular",
    "flutter",
    "android",
    "html5",
    "css3",
    "springboot",
    "mongodb",
    "selenium",
    "nodedotjs",
    "express",
    "nextdotjs",
    "prisma",
    "mysql",
    "amazonaws",
    "postgresql",
    "firebase",
    "nginx",
    "vercel",
    "testinglibrary",
    "jest",
    "cypress",
    "docker",
    "git",
    "jira",
    "github",
    "gitlab",
    "visualstudiocode",
    "androidstudio",
    "sonarqube",
    "figma",
];
export { Info, ProjectInfo,socialLinks, SkillInfo, ExperienceInfo, Slugs };