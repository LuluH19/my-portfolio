import { Button } from "./Button"
import Link from "next/link"
import { ExternalLink } from "lucide-react"

interface SocialLinkProps {
  href: string
  icon: React.ReactNode
  label: string
}

export default function SocialLink({ href, icon, label }: SocialLinkProps) {
  return (
    <Button asChild variant="outline" className="bg-gray-700 hover:bg-gray-600 transition-all duration-300 ease-in-out transform hover:scale-105">
      <Link href={href} target="_blank" rel="noopener noreferrer" className="flex items-center">
        {icon}
        <span className="ml-2">{label}</span>
        <ExternalLink className="ml-2 h-4 w-4" />
      </Link>
    </Button>
  )
}