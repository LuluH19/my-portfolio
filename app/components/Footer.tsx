import { content } from "../lib/content"
import { Language } from "../types"

interface FooterProps {
  language: Language
}

export default function Footer({ language }: FooterProps) {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-6 text-center">
        <p>{content[language].copyright(new Date().getFullYear())}</p>
      </div>
    </footer>
  )
}