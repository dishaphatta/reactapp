// import { Github, Instagram, Linkedin, Mail } from 'lucide-react';

// Importing all the types from the types folder
import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
  TStudy,
  TSocialLink,
} from "../types";

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
  // redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  // meta,
  // starbucks,
  // tesla,
  // shopify,
  // vpt,
  // ws,
  cybersec,
  techsup,
  webdev,
  project,
  // study,
  // socialLink,
  snehi,
  carrent,
  jobit,
  tripguide,
  threejs,
  github,
  instagram,
  linkedin,
  // mail,
  email,
  stevens,
  apsit,
  call,
  janhavi,
  kanan,
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "Cybersecurity Intern",
    icon: mobile,
  },
  {
    title: "IT Junior Technician",
    icon: backend,
  },
  {
    title: "Project Engineer Intern",
    icon: creator,
  },
  {
    title: "Web Developer",
    icon: web,
  },
];

const technologies: TTechnology[] = [
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
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
    name: "docker",
    icon: docker,
  },
];

const experiences: TExperience[] = [
  {
    title: "Cybersecurity Intern",
    companyName: "Drona Pay Private Limited",
    icon: cybersec,
    iconBg: "#383E56",
    date: "August 2023 - July 2024",
    points: [
      "Conducted weekly security operations for phishing alerts, Security Operations Center(SOC) alerts, and 40 + other security events.",
      "Performed technical evaluation and penetration testing of 30 + commercially - developed web applications and mobile systems.",
      "Developed a monthly education plan to improve the IT security - related skills and technologies of 50 + staff members.",
      "Created a virtual desktop environment that enables 2400 + users to access applications remotely within organization’s network via the cloud.",
    ],
  },
  {
    title: "IT Junior Technician",
    companyName: "Balaji Cyber Cell",
    icon: techsup,
    iconBg: "#E6DEDD",
    date: "April 2022 - March 2023",
    points: [
      "Enhanced data security by designing a multi-factor authentication system, which decreased password breaches by 75%",
      "Increased system uptime from 95 % to 99 % by improving disaster recovery processes",
      "Prevented potential security incidences by conducting weekly vulnerability assessments and audits covering over 250 servers",
      "Managed and secured firewall access across the organization, reducing unauthorized access by 55%",
    ],
  },
  {
    title: "Project Engineer Intern",
    companyName: "Welpo India Private Limited",
    icon: project,
    iconBg: "#E6DEDD",
    date: "July 2021 - December 2021",
    points: [
      "Delivered 10 high-value projects with 4 projects worth over ₹4.5L individually.",
      "Partnered with 20 + contractors and successfully executed 6 projects within strict quarterly deadlines and 29 % under budget compared to competitors.",
      "Supervised a team of 23 engineers by inspiring them to work diligently, improving overall productivity by 20 %, and saving 45 man - hours per month.",
      "Collaborated with 5 project managers, and 3 cross-functional team members by giving technical support and assistance.",
    ],
  },
  {
    title: "Web Developer",
    companyName: "Saral Infosoft",
    icon: webdev,
    iconBg: "#383E56",
    date: "October 2020 - March 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Disha proved me wrong.",
    name: "Snehi Ratani",
    designation: "ASE",
    company: "Finoux Solution",
    image: snehi,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their client's success like Disha does.",
    name: "Janhavi Shinde",
    designation: "Est. Intern",
    company: "Stacy Witbeck",
    image: janhavi,
  },
  {
    testimonial:
      "After Disha optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Kanan Sananse",
    designation: "Cybersecurity Intern",
    company: "Prodigy InfoTech",
    image: kanan,
  },
];

const projects: TProject[] = [
  {
    name: "Visual Packet Tracer",
    description:
      "Visual Packet Tracer visualizes Wireshark - captured network traffic on Google Maps by processing IP addresses with Python and generating KML files for easy visualization, helping users track the geographic flow of network data.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "wireshark",
        color: "green-text-gradient",
      },
      // {
      //   name: "tailwind",
      //   color: "pink-text-gradient",
      // },
    ],
    image: carrent,
    sourceCodeLink: "https://github.com/dishaphatta",
  },
  {
    name: "Secure File",
    description:
      "Secure File is a file encryption and decryption app built with TypeScript and React to ensure the confidentiality and integrity of sensitive data. This project demonstrates expertise in security protocols and interfaces.",
    tags: [
      // {
      //   name: "nextjs",
      //   color: "blue-text-gradient",
      // },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "react",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    sourceCodeLink: "https://github.com/dishaphatta",
  },
  {
    name: "Web-Sculptor",
    description:
      "Web-Sculptor is an AI-driven framework that simplifies creating 3D-animated web interfaces. It uses HTML, CSS, JS, and AI templates to boost design efficiency, speed up code generation & enhance ReactJS development for user interfaces.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    sourceCodeLink: "https://github.com/dishaphatta",
  },
];

const education: TStudy[] = [
  {
    name: "Stevens Institute of Technology",
    icon: stevens,
    iconBg: "#E6DEDD",
    date: "September 2024 - May 2026",
    description:
      "Master of Science in Cybersecurity",
    tags: [
      // {
      //   name: "python",
      //   color: "blue-text-gradient",
      // },
      // {
      //   name: "wireshark",
      //   color: "green-text-gradient",
      // },
      // {
      //   name: "tailwind",
      //   color: "pink-text-gradient",
      // },
    ],
    image: carrent,
    sourceCodeLink: "https://www.stevens.edu/",
  },
  {
    name: "A.P Shah Institute of Technology",
    icon: apsit,
    iconBg: "#E6DEDD",
    date: "September 2020 - May 2024",
    description:
      "Bachelor of Engineering in Information Technology | CGPA: 8.64",
    tags: [
      // {
      //   name: "python",
      //   color: "blue-text-gradient",
      // },
      // {
      //   name: "wireshark",
      //   color: "green-text-gradient",
      // },
      // {
      //   name: "tailwind",
      //   color: "pink-text-gradient",
      // },
    ],
    image: carrent,
    sourceCodeLink: "https://www.apsit.edu.in/",
  },
];

const socialLink: TSocialLink[] = [
  {
    name: "Github",
    href: "https://github.com/dishaphatta",
    image: github,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/disha-phatta-390003228",
    image: linkedin,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/dishaphatta_",
    image: instagram,
  },
  {
    name: "Email",
    href: "mailto:dishaphatta@gmail.com",
    image: email,
  },
  {
    name: "Phone",
    href: "tel:+16464571164",
    image: call,
  },
];


export { services, technologies, experiences, testimonials, projects, education, socialLink };
