
import { Education, Experience, SkillCategory } from "../types/portfolio";

export const personalInfo = {
  name: "Masum Billah",
  title: "Full Stack Developer",
  tagline: "Building resilient, scalable web applications with high-craft interfaces.",
  bio: "I am a passionate Full Stack Developer with a strong focus on modern JavaScript frameworks, performant backend architectures, and clean UI engineering. My journey started with curiosity about how the web works, which quickly evolved into an obsessive craft for building production-ready applications.",
  hobbies: [
    "Digital art and painting",
    "Tech blogging"
  ],
  contact: {
    email: "masum30.b@gmail.com",
    phone: "+880 18 56756904",
    whatsapp: "+880 18 56756904",
    location: "Jashore, Khulna, Bangladesh"
  },
  socials: {
    github: "https://github.com/masumb30",
    linkedin: "https://www.linkedin.com/in/masumbm/",
    
    facebook: "https://web.facebook.com/masum.mim.685364/"
  },
  resumeUrl: "https://drive.google.com/file/d/1NZf5_Ar8BlI0mVqwPy-EJJrswewIY7JP/view?usp=sharing" ,// Place your resume.pdf inside public folder
  resumeId: "1NZf5_Ar8BlI0mVqwPy-EJJrswewIY7JP"
};

export const skillsData: SkillCategory[] = [
  {
    category: "Frontend Architecture",
    skills: [
      { name: "React / Next.js", level: 92 },
      { name: "TypeScript", level: 88 },
      { name: "Tailwind CSS", level: 95 },
      { name: "Redux / Zustand", level: 85 }
    ]
  },
  {
    category: "Backend & Database",
    skills: [
      { name: "Node.js / Express", level: 86 },
      { name: "PostgreSQL / Prisma", level: 80 },
      { name: "REST API & GraphQL", level: 88 },
      { name: "MongoDB", level: 82 }
    ]
  },
  {
    category: "DevOps & Tools",
    skills: [
      { name: "Git / GitHub", level: 90 },
      {name: 'Postman', level: 80},
      { name: "Vercel / Deployment", level: 80 },
      {name:'Antigravity IDE', level: 80},
    ]
  }
];

export const educationData: Education[] = [
  {
    degree: "Masters degree in English Literature",
    institution: "National University of Bangladesh",
    period: "2020 - 2024",
    grade: "CGPA: 3.00 / 4.00"
  }
];

export const experienceData: Experience[] = [
  {
    role: "Full Stack Developer",
    company: "Tech Solutions Inc.",
    period: "2024 - Present",
    description: [
      "Engineered responsive client dashboards using Next.js 14 App Router and Tailwind CSS.",
      "Optimized API query performance by 35% through Redis caching and PostgreSQL query indexing.",
      "Collaborated with cross-functional teams to integrate secure OAuth2 and Stripe payment flows."
    ],
    technologies: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS"]
  },
  {
    role: "Junior Web Developer",
    company: "Digital Edge Agency",
    period: "2023 - 2024",
    description: [
      "Developed high-conversion landing pages and interactive web platforms for global clients.",
      "Maintained legacy React applications and converted them into modular TypeScript components."
    ],
    technologies: ["React", "JavaScript", "Tailwind CSS", "REST API"]
  }
];