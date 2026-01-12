import user_image from './user-image.png';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import firebase from './firebase.png';
import figma from './figma.png';
import git from './git.png';
import mongodb from './mongodb.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile-img.png';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';
import java from './java.png';
import js from './js.png';
import python from './python.png';
import react from './react.png';
import expressjs_white from './expressjs_white.png';
import expressjs_black from './expressjs_black.png';
import flask from './flask.png';
import springboot from './springboot.png';
import github from './github.png';
import oracle from './oracle.png';
import aws_dark from './aws_dark.png'; 
import aws_light from './aws_white.png';
import mysql from './mysql.png';
import instagram from './instagram.png';
import linkedin_dark from './linkedin_dark.png';
import linkedin_light from './linkedin_white.png';
import leetcode from './leetcode.png'
import ts from './ts.png';
import nodejs from './nodejs.png';
import postgres from './postgres.png';
import redis from './redis.png';
import docker from './docker.png';
import postman from './postman.png';
import intellije from './intellije.png';
import cn from './cn.png';

export const assets = {
    user_image,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    firebase,
    figma,
    git,
    mongodb,
    right_arrow_white,
    logo,
    logo_dark,
    mail_icon,
    mail_icon_dark,
    profile_img,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    web_icon,
    mobile_icon,
    ui_icon,
    graphics_icon,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark,
    java,
    js,
    python,
    react,
    expressjs_white,
    expressjs_black,
    flask,
    springboot,
    github,
    oracle,
    aws_light,
    aws_dark,
    mysql,
    instagram,
    linkedin_dark,
    linkedin_light,
    leetcode,
    ts,
    nodejs,
    postgres,
    redis,
    docker,
    cn,
    postman,
    intellije
};

// =======================
// Social Icons
// =======================
export const socialIcon = {
  github: "/github.svg",
  linkedin_light: "/linkedin-light.svg",
  linkedin_dark: "/linkedin-dark.svg",
  instagram: "/instagram.svg",
  leetcode: "/leetcode.svg",
};

// =======================
// Projects Data
// =======================
export const projectsData = [
  {
    id: "1",
    title: "Simple Todo",
    description:
      "Simple Flask-Based To-Do Web App - I built this project while studying Flask as part of my current semester to practice web development fundamentals. ",
    techStack: ["Html", "Bootstrap ", "Flask", "SQLite"],
    liveUrl: "https://todobytanishusingflask.onrender.com/",
    sourceUrl: "https://github.com/tanishjain09/todo-flask",
    featured: false,
  },
  {
    id: "2",
    title: "Extensible Invoice & Tax Engine ",
    description: " Java-based console application for generating customer invoices with an extensible tax engine based on country-specific rules",
    techStack: ["Core Java", "OOPS"],
    sourceUrl: "https://github.com/tanishjain09",
  },
  {
    id: "3",
    title: "BankingManagement JDBC",
    description:
      "A console-based banking system implemented using Java and JDBC.",
    techStack: ["Core Java", "JDBC", "MySql"],
    sourceUrl: "https://github.com/tanishjain09/Java_Projects",
    featured: false,
  },
  {
    id: "4",
    title: "Amazon Homepage Clone",
    description:
      "Clone Amazon Homepage UI while learing HTML, CSS",
    techStack: ["HTML", "CSS", ],
    liveUrl : "https://amazonhomepageclonebytanish.netlify.app/",
    sourceUrl: "https://github.com/tanishjain09/Amazon-homepage-clone-",
  },
  
  {
    id: "5",
    title: "Developing SaaS Backend....",
    description:
      "Developing...",
    techStack: [],
    sourceUrl: "https://github.com/tanishjain09",
  },
  
];

// =======================
// Skills Data
// =======================
export const skillsData = [
  {
    category: "Programming & Frameworks",
    skills: [
      { name: "Java", icon: "java", level: 90, experience: "1+ Years" },
      { name: "JavaScript", icon: "js", level: 70, experience: "<1 Year" },
      { name: "TypeScript", icon: "ts", level: 30, experience: "<1 Year" },
      { name: "React", icon: "Atom", level: 60, experience: "<1 Year" },
      { name: "Python", icon: "python", level: 35, experience: "1+ Year" },
      { name : "SpringBoot", icon : "springboot", level : 75, experience: "1< Year"},
      { name : "Flask", icon : "flask", level : 30, experience : "1+ Year"},
      { name : "Nodejs", icon : "nodejs", level : 10, experience : "Learning..."},
      { name : "Expressjs", icon : "expressjs_white", level : 10, experience : "Learning..."},

      
    ],
  },
  {
    category: "Databases",
    skills: [
      { name: "MongoDB", icon: "mongodb", level: 10, experience: "Learning" },
      // { name: "PostgreSQL", icon: "Database", level: 80, experience: "2+ Years" },
      { name: "MySQL", icon: "mysql", level: 70, experience: "1+ Years" },
      // { name: "Redis", icon: "Zap", level: 70, experience: "1+ Year" },
    ],
  },
  {
    category: "DevOps",
    skills: [
      { name: "Docker", icon: "docker", level: 60, experience: "1< Years" },
      { name: "AWS", icon: "Cloud", level: 50, experience: "<1 Year" },
      // { name: "CI/CD", icon: "GitBranch", level: 80, experience: "2+ Years" },
      // { name: "Nginx", icon: "Server", level: 75, experience: "2+ Years" },
    ],
  },
  {
    category: "Tools",
    skills: [
      { name : "Intellije Idea(Community)", icon : "intellije", level : 85, experience : "2+ Years"},
      { name: "Git", icon: "git", level: 75, experience: "2+ Years" },
      { name: "Postman", icon: "postman", level: 70, experience: "1< Years" },
      { name: "VS Code", icon: "vscode", level: 95, experience: "2+ Years" },
      { name : "Git hub", icon : "github", level : 75, experience : ""}
    ],
  },
  {
    category : "Core Concepts",
    skills : [
      {name : "Data Structure & Algorithm", icon: "", level : 80},
      {name : "OOPs", icon : "", level : 80, experience : ""},
      {name : "DBMS", icon : "Database", level : 75, experience : ""},
      {name : "Computer Networks", icon : "cn", level : 80, experience : ""},
      {name : "Operating System", icon : "os", level : 35, experience : ""}
    ]
  }
];
