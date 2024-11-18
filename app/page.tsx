'use client'

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Header from "./components/Header"
import Footer from "./components/Footer"
import SkillCard from "./components/SkillCard"
import ProjectCard from "./components/ProjectCard"
import SocialLink from "./components/SocialLink"
import { Button } from "./components/Button"
import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import { content } from "./lib/content"
import { skills } from "./lib/skills"
import { projects } from "./lib/projects"
import { Language } from "./types"

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("skills")
  const [language, setLanguage] = useState<Language>('en')

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    transition: { duration: 0.5 }
  }

  const heroTextVariants = {
    initial: { opacity: 0, y: 50 },
    animate: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  }

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'fr' : 'en')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      <Header 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        language={language} 
        toggleLanguage={toggleLanguage}
      />

      <main className="container mx-auto px-6 py-12">
        <motion.section 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-8">
            {[content[language].welcome, content[language].portfolio].map((text, index) => (
              <motion.h2
                key={index}
                custom={index}
                variants={heroTextVariants}
                initial="initial"
                animate="animate"
                className="text-5xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
              >
                {text}
              </motion.h2>
            ))}
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-xl text-gray-300 mb-8"
          >
            {content[language].intro}
          </motion.p>
          <motion.div
            className="flex justify-center space-x-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            <SocialLink href="https://www.linkedin.com/in/luca-delarue-474a67220/" icon={<Linkedin />} label="LinkedIn" />
            <SocialLink href="https://github.com/Luffy-lulu" icon={<Github />} label="GitHub" />
          </motion.div>
        </motion.section>

        <AnimatePresence mode="wait">
          {activeTab === "skills" && (
            <motion.section
              key="skills"
              {...fadeIn}
            >
              <h2 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                {content[language].skills}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {Object.entries(skills[language]).map(([title, skillList]) => (
                  <SkillCard key={title} title={title} skills={skillList} />
                ))}
              </div>
            </motion.section>
          )}

          {activeTab === "projects" && (
            <motion.section
              key="projects"
              {...fadeIn}
            >
              <h2 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                {content[language].projects}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects[language].map((project, index) => (
                  <ProjectCard 
                    key={index}
                    title={project.title}
                    description={project.description}
                    link={project.link}
                    viewOnGithub={content[language].viewOnGithub}
                  />
                ))}
              </div>
            </motion.section>
          )}

          {activeTab === "contact" && (
            <motion.section
              key="contact"
              {...fadeIn}
            >
              <h2 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                {content[language].getInTouch}
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                {content[language].openToOpportunities}
              </p>
              <div className="flex justify-center space-x-4">
                <Button asChild variant="outline" className="bg-gray-700 hover:bg-gray-600 transition-all duration-300 ease-in-out transform hover:scale-105">
                  <Link href="mailto:lucadelarue19@gmail.com">
                    <Mail className="mr-2 h-4 w-4" /> Email
                  </Link>
                </Button>
                <SocialLink href="https://www.linkedin.com/in/luca-delarue-474a67220/" icon={<Linkedin />} label="LinkedIn" />
                <SocialLink href="https://github.com/Luffy-lulu" icon={<Github />} label="GitHub" />
              </div>
            </motion.section>
          )}
        </AnimatePresence>
      </main>

      <Footer language={language} />
    </div>
  )
}