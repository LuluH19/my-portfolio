import { motion } from "framer-motion"
import { Card, CardContent } from "./Card"

interface SkillCardProps {
  title: string
  skills: string[]
}

export default function SkillCard({ title, skills }: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="bg-gray-800 border-gray-700 hover:border-purple-500 transition-all duration-300">
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold mb-4 text-purple-400">{title}</h3>
          <ul className="list-disc list-inside">
            {skills.map((skill, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
                className="text-gray-300"
              >
                {skill}
              </motion.li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </motion.div>
  )
}