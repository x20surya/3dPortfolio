import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    unity,
    web1,
    sql,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Game Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "unity",
      icon : unity,
    },
    {
      name: "sql",
      icon: sql,
    }
  ];
  
  const experiences = [
    {
      title: "Game Developer",
      company_name: "Starbucks",
      icon: unity,
      iconBg: "#383E56",
      date: "2023 - present",
      points: [
        "Developing Game in Unity and C#",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Tesla",
      icon: web1,
      iconBg: "#E6DEDD",
      date: "2023-present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
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
      name: "Jumper",
      description:
        "Simple 2D platformer",
      tags: [
        {
          name: "Unity",
          color: "blue-text-gradient",
        },
        {
          name: "c#",
          color: "green-text-gradient",
        }
      ],
      image: carrent,
      source_code_link: "https://play.unity.com/mg/other/webgl-builds-358521",
    },
    {
      name: "LittleHelp",
      description:
        "Web application that enables users to find and offer help in their local community.",
      tags: [
        {
          name: "GeminiAI",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "firebase",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/x20surya/rkr-gdsc-solution",
    },
    {
      name: "Lego Game",
      description:
        "A simple game made in Unity.",
      tags: [
        {
          name: "unity",
          color: "blue-text-gradient",
        },
        {
          name: "c#",
          color: "green-text-gradient",
        },
       
      ],
      image: tripguide,
      source_code_link: "https://play.unity.com/mg/lego/webgl-builds-355568",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };