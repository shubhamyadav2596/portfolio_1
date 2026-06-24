import { IconBrandGithub, IconBrandInstagram, IconBrandLeetcode, IconBrandLinkedin, IconBrandYoutube } from "@tabler/icons-react";
import Globussoft from "./assets/Globussoft.png";
import leadangel from "./assets/leadangel.webp";
import netflix from "./assets/Netflix.png"
import movie from "./assets/movie.png"
import youtube from "./assets/yt.png"
import spotyfy from "./assets/spotify.png"
import ecom from "./assets/ecom.png"
import ecomMern from "./assets/ecom_mern.png"



const Info = {
    name: "Shubham Yadav",
    stack: ["Software Engineer","Full Stack Developer", "Frontend Developer"],
    bio: "Full Stack Developer with 2 years+ of experience as a Frontend Developer. Skilled in React, JavaScript, HTML, and CSS with a focus on performance and accessibility. Familiar with backend development using Node.js, Express.js, and MongoDB. Able to collaborate effectively in cross-functional teams and agile environments. Committed to writing clean, maintainable code and delivering seamless user experiences."
}



const ProjectInfo = [
    {
        title: "Movie App",
        desc: "This is a basic prototype of a movie search web application built with React.js. It demonstrates the ability to fetch movie data from the TMDB API and display it in a simple, responsive user interface. This is a prototype and may not include all error handling or optimizations that would be present in a production application. The emphasis is on demonstrating the ability to work with React.js and API integration to build a simple web application.",
        image: movie,
        live: true,
        technologies: ["React", "SCSS", "Redux", "RestAPI"],
        link: "https://movie-app-e7afe2.netlify.app/",
        github: "https://github.com/shubhamyadav2596/movie_app"
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
        title: "Spotify Clone",
        desc: "Developed a visually appealing Spotify-inspired user interface using React and Tailwind CSS. Built reusable components like Sidebar, Header, Player, and Playlist for a modular and maintainable design. Implemented a responsive layout using Tailwind’s grid and flex utilities, ensuring seamless adaptation across devices. Created dynamic playlist sections with hover effects, transitions, and a sticky player bar for an immersive user experience. Leveraged React's state management to handle UI interactions, such as toggling menus and playlist selections. Delivered a pixel-perfect, modern music streaming interface that mimics Spotify's aesthetic and usability.",
        image: spotyfy,
        live: false,
        technologies: ["React", "Tailwind", "React-Router-DOM"],
        link: "https://verdant-madeleine-4835c0.netlify.app/",
        github: "https://github.com/shubhamyadav2596/spotify-clone-UI/tree/main"
    },
    {
        title: "Youtube Clone UI",
        desc: "Created a responsive YouTube-inspired user interface using React, Bootstrap, and a REST API. Designed key components like Navbar, Sidebar, VideoCard, and VideoPlayer to mimic YouTube’s layout and functionality. Integrated a REST API to dynamically fetch and display video data, including thumbnails, titles, and channel details. Leveraged Bootstrap for consistent styling and a responsive grid system to ensure seamless performance across devices. Implemented features like a search bar, video categories, and a dynamic video player page using React’s component-based architecture. Delivered a modern, scalable interface replicating YouTube’s core design principles and user experience",
        image: youtube,
        live: false,
        technologies: ["React", "RestAPI", "Bootstrap"],
        link: "https://stellular-pegasus-71b3c4.netlify.app/",
        github: "https://github.com/shubhamyadav2596/yt-clone"
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
        title: "Netflix Clone",
        desc: "Built a responsive Netflix-inspired application using React, TMDB API, Firebase, and Tailwind CSS. Integrated TMDB API to dynamically fetch and display trending movies, TV shows, and detailed content. Used Firebase for secure user authentication, enabling login and registration features. Styled the UI with Tailwind CSS, implementing carousels, hover effects, and a modern layout. Designed key sections like a hero banner, row sliders, and a user dashboard. Delivered an interactive, real-world streaming platform with dynamic data and a secure backend.",
        image: netflix,
        live: false,
        technologies: ["React", "Tailwind", "Firebase"],
        link: "https://moonlit-starlight-63b2b9.netlify.app/",
        github: "https://github.com/shubhamyadav2596/netflix_clone/tree/main"
    }
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