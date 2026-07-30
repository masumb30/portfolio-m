
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
    email: "masum.billah@example.com",
    phone: "+880 1700 000000",
    whatsapp: "+8801700000000",
    location: "Dhaka, Bangladesh"
  },
  socials: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    facebook: "https://facebook.com"
  },
  resumeUrl: "/resume.pdf" // Place your resume.pdf inside public folder
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
      { name: "Docker", level: 72 },
      { name: "Vercel / AWS Basics", level: 80 },
      { name: "Linux / Terminal", level: 85 }
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