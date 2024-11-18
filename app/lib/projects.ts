import { Language } from "../types"

interface Project {
  title: string
  description: string
  link: string
}

export const projects: Record<Language, Project[]> = {
  en: [
    {
      title: "Tic-tac-toe",
      description: "A simple tic-tac-toe game built with Swift.",
      link: "https://github.com/Luffy-lulu/Tic-tac-toe"
    },
    {
      title: "Task Management App",
      description: "A responsive web app for task management built with Next.js and PostgreSQL.",
      link: "https://github.com/Luffy-lulu/-Gestion-des-T-ches"
    },
    {
      title: "Real-time Chat Application",
      description: "A real-time chat app using Socket.io, Express, and Redis for caching.",
      link: "https://github.com/Luffy-lulu"
    }
  ],
  fr: [
    {
      title: "Morpion",
      description: "Un simple jeu de morpion en Swift.",
      link: "https://github.com/Luffy-lulu/Tic-tac-toe"
    },
    {
      title: "Application de Gestion des Tâches",
      description: "Une application web responsive pour la gestion des tâches construite avec Next.js et PostgreSQL.",
      link: "https://github.com/Luffy-lulu/-Gestion-des-T-ches"
    },

    {
      title: "Application de Chat en Temps Réel",
      description: "Une application de chat en temps réel utilisant Socket.io, Express et Redis pour le cache.",
      link: "https://github.com/Luffy-lulu"
    }
  ]
}