import { motion } from "framer-motion"
import { Card, CardContent } from "./Card"
import { Button } from "./Button"
import Link from "next/link"
import { Github } from "lucide-react"

interface ProjectCardProps {
  title: string
  description: string
  link: string
  viewOnGithub: string
}

export default function ProjectCard({ title, description, link, viewOnGithub }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="bg-gray-800 border-gray-700 hover:border-purple-500 transition-all duration-300">
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold mb-2 text-purple-400">{title}</h3>
          <p className="text-gray-300 mb-4">{description}</p>
          <Button asChild variant="outline" className="transition-all duration-300 ease-in-out transform hover:scale-105">
            <Link href={link} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" /> {viewOnGithub}
            </Link>
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  )
}