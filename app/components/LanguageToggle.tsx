import { Button } from "./Button"
import { Globe } from "lucide-react"
import { Language } from "../types"

interface LanguageToggleProps {
  language: Language
  toggleLanguage: () => void
}

export default function LanguageToggle({ language, toggleLanguage }: LanguageToggleProps) {
  return (
    <Button
      variant="outline"
      onClick={toggleLanguage}
      className="transition-all duration-300 ease-in-out transform hover:scale-110"
    >
      <Globe className="mr-2 h-4 w-4" />
      {language === 'en' ? 'FR' : 'EN'}
    </Button>
  )
}