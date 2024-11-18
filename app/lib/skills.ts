import { Language } from "../types"

export const skills: Record<Language, Record<string, string[]>> = {
  en: {
    Databases: ["MySQL", "PostgreSQL", "MongoDB"],
    "Web Languages": ["HTML", "CSS", "JavaScript", "TypeScript"],
    Frameworks: ["React", "Next.js", "Express.js", "Bootstrap"],
    Tools: ["Git", "Docker", "Visual Studio Code", "Webpack"],
  },
  fr: {
    "Bases de données": ["MySQL", "PostgreSQL", "MongoDB"],
    "Langages Web": ["HTML", "CSS", "JavaScript", "TypeScript"],
    Frameworks: ["React", "Next.js", "Express.js", "Bootstrap"],
    Outils: ["Git", "Docker", "Visual Studio Code", "Webpack"],
  }
}