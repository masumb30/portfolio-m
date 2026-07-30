export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  image: string;
  techStack: string[];
  fullDescription: string;
  liveLink: string;
  githubLink: string;
  challenges: string[];
  futureImprovements: string[];
}

export interface SkillCategory {
  category: string;
  skills: { name: string; level: number; iconName?: string }[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  grade?: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string[];
  technologies: string[];
}