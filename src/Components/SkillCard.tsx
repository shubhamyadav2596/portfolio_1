import { Avatar } from "@mantine/core";
import bootstrap from "../assets/Icons/Bootstrap.png"
import css from "../assets/Icons/CSS.png"
import expressjs from "../assets/Icons/Express JS.png"
import git from "../assets/Icons/Git.png"
import github from "../assets/Icons/Github.png"
import html from "../assets/Icons/HTML.png"
import js from "../assets/Icons/JavaScript.png"
import mongodb from "../assets/Icons/MongoDB.png"
import mysql from "../assets/Icons/MySQL.png"
import nodejs from "../assets/Icons/Node JS.png"
import react from "../assets/Icons/React JS.png"
import redux from "../assets/Icons/Redux.png"
import ts from "../assets/Icons/TypeScript.png"
import sass from "../assets/Icons/SASS.png"
import tailwindCss from "../assets/Icons/Tailwind CSS.png"
import materialUI from "../assets/Icons/Material UI.png"
import expressJs from  "../assets/Icons/Express JS.png"
import fireBase from "../assets/Icons/Firebase.png"
import vsCode from "../assets/Icons/VS Code.png"
import postman from "../assets/Icons/Postman.png"
import mongoDB from "../assets/Icons/MongoDB.png"

const skillImages: { [key: string]: string } = {
    "Bootstrap": bootstrap,
    "HTML": html,
    "CSS": css,
    "SASS": sass,
    "JavaScript": js,
    "TypeScript": ts,
    "React JS": react,
    "Redux": redux,
    "Node JS": nodejs,
    "ExpressJS": expressjs,
    "MongoDB": mongodb,
    "MySQL": mysql,
    "Git": git,
    "Github": github,
    "Tailwind CSS": tailwindCss,
    "Material UI": materialUI,
    "Express JS": expressJs,
    "Firebase": fireBase,
    "VS Code": vsCode,
    "Postman": postman,
    "MongoDB Compass": mongoDB
    // Add more skills here as needed
}

const SkillBadge=(skills:[])=>{
    return skills.map((skill:any, index:number)=><div key={index} className="flex gap-2 border border-textColor rounded-2xl items-center py-2 px-3 bs-mx:py-0 bs-mx:px-1.5 bs-mx:gap-1 mb-1">
         <img className="w-[48px] bs-mx:w-[36px] xsm-mx:w-[28px] !p-1"  src={skillImages[skill]} alt="skillImg"/>
         <div className="text-textColor text-xl font-medium sm-mx:text-lg xs-mx:text-sm ">{skill}</div>
    </div>)
}

const SkillCard =(props:any)=>{
    return <div data-aos="fade-up"   data-aos-duration="800" data-aos-easing="ease-in-sine" className="w-[47%] shadow-[0_0_10px_0_#64FFDA50] rounded-3xl  mb-3 border border-primaryColor p-5 bs-mx:p-3 sm-mx:w-full ">
        <div className="text-3xl mb-4 text-white text-center sm-mx:text-2xl xs-mx:text-xal font-bold ">{props.title}</div>
        <div className="flex gap-3 bs-mx:gap-2 justify-center flex-wrap">
            {SkillBadge(props.skills)}
        </div>
    </div>
}
export default SkillCard;