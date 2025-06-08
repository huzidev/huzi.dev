'use client'

import { motion } from 'framer-motion'
import { useReducedMotion } from '@/hooks/useReducedMotion'

interface SkillCategory {
  title: string
  skills: string[]
  description: string
}

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    description: "Crafting seamless and responsive interfaces",
    skills: [
      "TypeScript",
      "React.js",
      "Next.js",
      "Remix.js",
      "SCSS",
      "Tailwind CSS",
      "Bootstrap",
      "Material UI",
      "Ant Design",
      "Redux",
    ],
  },
  {
    title: "Backend",
    description: "Designing scalable APIs and robust logic",
    skills: [
      "Node.js",
      "AdonisJS",
      "Express.js",
      "Prisma ORM",
      "Sequelize ORM",
      "PostgreSQL",
      "MySQL",
      "MongoDB",
    ],
  },
  {
    title: "Tools & Platforms",
    description: "Version control, deployment, and collaboration",
    skills: [
      "Git",
      "GitHub",
      "Docker (basic)",
      "Vercel",
      "Netlify",
      "Postman",
      "REST APIs",
      "CI/CD (basic)",
    ],
  },
];


const Skills: React.FC = () => {
  const prefersReducedMotion = useReducedMotion()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: prefersReducedMotion ? 0 : 0.8,
        staggerChildren: prefersReducedMotion ? 0 : 0.2,
      },
    },
  }

  const cardVariants = {
    hidden: { y: prefersReducedMotion ? 0 : 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: prefersReducedMotion ? 0 : 0.6,
        ease: "easeOut",
      },
    },
  }

  const skillVariants = {
    hidden: { scale: prefersReducedMotion ? 1 : 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: prefersReducedMotion ? 0 : 0.4,
        ease: "easeOut",
      },
    },
  }

  return (
    <section
      id="skills"
      className="relative min-h-screen flex items-center justify-center px-6 py-20"
    >
      <motion.div
        className="max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.h2
          className="text-4xl md:text-6xl font-bold text-center mb-12 text-gradient"
          variants={cardVariants}
        >
          Tech & Tools
        </motion.h2>

        <motion.p
          className="text-center text-gray-400 text-lg max-w-3xl mx-auto mb-12"
          variants={cardVariants}
        >
          These are the technologies and tools I’ve mastered and regularly use
          to build scalable, performant, and user-centric applications.
        </motion.p>

        {/* Unified Skills Grid */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
          variants={containerVariants}
        >
          {[
            "TypeScript",
            "RemixJS",
            "NextJS",
            "React",
            "AdonisJS",
            "NodeJS",
            "ExpressJS",
            "Redux",
            "SCSS",
            "Bootstrap",
            "Tailwind CSS",
            "Material UI",
            "Ant Design",
            "Prisma ORM",
            "Sequelize ORM",
            "MongoDB",
            "MySQL",
            "PostgreSQL",
            "Git",
            "GitHub",
          ].map((skill, index) => (
            <motion.div
              key={skill}
              className="flex justify-center"
              variants={skillVariants}
              custom={index}
            >
              <div className="bg-gray-800 text-gray-200 px-6 py-3 rounded-lg text-sm font-medium text-center w-full hover:bg-gray-700 transition-colors duration-200">
                {skill}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div className="text-center mt-20" variants={cardVariants}>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Always learning, always improving — I aim to stay current and build
            with best practices in every stack I work with.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
  
  
}

export default Skills