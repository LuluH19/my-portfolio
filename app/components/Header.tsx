import { motion } from "framer-motion"
import { Button } from "./Button"
import  LanguageToggle from "./LanguageToggle"
import { content } from "../lib/content"
import { Language } from "../types"

interface HeaderProps {
  activeTab: string
  setActiveTab: (tab: string) => void
  language: Language
  toggleLanguage: () => void
}

export default function Header({ activeTab, setActiveTab, language, toggleLanguage }: HeaderProps) {
  return (
    <header className="p-6 bg-gray-800 shadow-lg sticky top-0 z-10">
      <nav className="container mx-auto flex justify-between items-center">
        <motion.h1 
          className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          {content[language].name}
        </motion.h1>
        <div className="flex items-center space-x-4">
          {["skills", "projects", "contact"].map((tab) => (
            <Button
              key={tab}
              variant={activeTab === tab ? "default" : "ghost"}
              onClick={() => setActiveTab(tab)}
              className="transition-all duration-300 ease-in-out transform hover:scale-110"
            >
              {content[language][tab as keyof typeof content[Language]]}
            </Button>
          ))}
          <LanguageToggle language={language} toggleLanguage={toggleLanguage} />
        </div>
      </nav>
    </header>
  )
}