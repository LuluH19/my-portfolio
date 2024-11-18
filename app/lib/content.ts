import { Language } from "../types"

export const content: Record<Language, {
  name: string
  welcome: string
  portfolio: string
  intro: string
  skills: string
  projects: string
  contact: string
  getInTouch: string
  openToOpportunities: string
  viewOnGithub: string
  copyright: (year: number) => string
}> = {
  en: {
    name: "Luca DELARUE",
    welcome: "Welcome to",
    portfolio: "My Portfolio",
    intro: "I'm a passionate developer specializing in web technologies and database management.",
    skills: "Skills",
    projects: "Projects",
    contact: "Contact",
    getInTouch: "Get in Touch",
    openToOpportunities: "I'm always open to new opportunities and collaborations.",
    viewOnGithub: "View on GitHub",
    copyright: (year: number) => `© ${year} Luca DELARUE. All rights reserved.`,
  },
  fr: {
    name: "Luca DELARUE",
    welcome: "Bienvenue sur",
    portfolio: "Mon Portfolio",
    intro: "Je suis un développeur passionné spécialisé dans les technologies web et la gestion de bases de données.",
    skills: "Compétences",
    projects: "Projets",
    contact: "Contact",
    getInTouch: "Contactez-moi",
    openToOpportunities: "Je suis toujours ouvert à de nouvelles opportunités et collaborations.",
    viewOnGithub: "Voir sur GitHub",
    copyright: (year: number) => `© ${year} Luca DELARUE. Tous droits réservés.`,
  }
}