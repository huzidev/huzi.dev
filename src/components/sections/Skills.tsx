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
          className="text-4xl md:text-6xl font-bold text-center mb-16 text-gradient"
          variants={cardVariants}
        >
          Tech & Skills
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              className="relative group"
              variants={cardVariants}
            >
              <div className="bg-[#121212] border border-gray-800 rounded-xl p-6 h-full shadow-md hover:shadow-lg hover:border-gray-600 transition-all duration-300">
                {/* Category Header */}
                <div className="text-center mb-4">
                  <h3 className="text-2xl font-semibold text-white mb-1">
                    {category.title}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {category.description}
                  </p>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 gap-3 mt-6">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      className="flex items-center justify-center"
                      variants={skillVariants}
                      custom={skillIndex}
                    >
                      <div className="bg-gray-800 text-gray-200 px-4 py-2 rounded-full text-sm font-medium w-full text-center hover:bg-gray-700 transition-colors duration-200">
                        {skill}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Glow effect */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-transparent via-transparent to-blue-800 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Extra Note */}
        <motion.div className="text-center mt-20" variants={cardVariants}>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            I continuously evolve my tech stack to match modern standards,
            ensuring high-quality and maintainable code across every project.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
  
}

export default Skills