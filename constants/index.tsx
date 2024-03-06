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
  carrent,
  jobit,
  tripguide,
  landmarkgroup,
  nineleaps,
} from "../public/assets";

export const navLinks = [
  {
    id: "home",
    title: "Home",
    linkUrl: "/",
  },
  {
    id: "blog",
    title: "Blog",
    linkUrl: "/blog",
  },
  {
    id: "practice",
    title: "Practice",
    linkUrl: "/practice",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  { id: 1, name: "HTML 5", icon: html },
  {
    id: 2,
    name: "CSS 3",
    icon: css,
  },
  {
    id: 3,
    name: "JavaScript",
    icon: javascript,
  },
  {
    id: 4,
    name: "TypeScript",
    icon: typescript,
  },
  {
    id: 5,
    name: "React JS",
    icon: reactjs,
  },
  {
    id: 6,
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    id: 7,
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    id: 8,
    name: "Node JS",
    icon: nodejs,
  },
  {
    id: 9,
    name: "MongoDB",
    icon: mongodb,
  },
  {
    id: 10,
    name: "git",
    icon: git,
  },
  {
    id: 11,
    name: "figma",
    icon: figma,
  },
  {
    id: 12,
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    id: 1,
    title: "Sr. Frontend Engineer",
    company_name: "LandmarkGroup",
    icon: landmarkgroup,
    date: "Oct 21 - present",
    points: [
      "Led front-end activities for Landmark groups (HomeCentre, LifeStyle, MaxFashion), boosting user engagement by 30%.",
      "Managed Shukran Delivery Project, achieving 25% increase in on-time deliveries through store integration.",
      "Optimized search capabilities in Hybris Java backend for 20% decrease in bounce rate using Algolia APIs and performance optimization techniques.",
    ],
  },
  {
    id: 2,
    title: "MTS-3",
    company_name: "Nineleaps",
    icon: nineleaps,
    date: "Jun 2019 - Oct 2021",
    points: [
      "Developed a React.js and Redux-based shuttle service app with ride-sharing and seat allocation.",
      "Enhanced operational efficiency by implementing admin dashboard features for cab bookings and allocations.",
      "Created KYC-dashboard for Stanza Living and role-based routing for Narayan Edtech, improving management and user experience.",
    ],
  },
];

const education = [
  {
    id: 1,
    title: "B.Tech in Computer Science",
    institution: "Your University Name",
    date: "2015-2019",
    grade: "7 Pointer",
  },
  {
    id: 2,
    title: "Senior Secondary (12th Grade) - Non-Medical",
    institution: "Your School Name",
    date: "2014-2015",
    grade: "86%",
  },
  {
    id: 3,
    title: "Secondary (10th Grade)",
    institution: "Your School Name",
    date: "2012-2013",
    grade: "92%",
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
const socialLinks = [
  {
    id: 1,
    platform: "Instagram",
    link: "https://www.instagram.com/your_username/",
    iconUrl: creator,
  },
  {
    id: 2,
    platform: "GitHub",
    link: "https://github.com/your_username",
    iconUrl: web,
  },
  {
    id: 3,
    platform: "Stack Overflow",
    link: "https://stackoverflow.com/users/your_user_id",
    iconUrl: javascript,
  },
  {
    id: 4,
    platform: "Gmail",
    link: "mailto:your_email@example.com",
    iconUrl: mongodb,
  },
];

const certifications = [
  {
    id: 1,
    name: "JavaScript Certification",
    link: "https://www.example.com/javascript-cert",
    description:
      "Certification in JavaScript programming language covering advanced concepts such as closures, prototypes, and asynchronous programming.",
  },
  {
    id: 2,
    name: "Python for Data Science",
    link: "https://www.example.com/python-data-science-cert",
    description:
      "Certification course covering Python programming language for data science applications including data manipulation, visualization, and analysis.",
  },

  {
    id: 3,
    name: "AWS Certified Solutions Architect",
    link: "https://www.example.com/aws-certified-solutions-architect",
    description:
      "Certification demonstrating proficiency in designing distributed systems and applications on the Amazon Web Services (AWS) platform.",
  },
  {
    id: 4,
    name: "AWS Certified Solutions Architect",
    link: "https://www.example.com/aws-certified-solutions-architect",
    description:
      "Certification demonstrating proficiency in designing distributed systems and applications on the Amazon Web Services (AWS) platform.",
  },
  // Add more certifications as needed
];

const projects = [
  {
    id: 1,
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    id: 2,
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    id: 3,
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  education,
  socialLinks,
  certifications,
};
