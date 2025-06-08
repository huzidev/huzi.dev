'use client'

import { motion } from 'framer-motion'
import { useReducedMotion } from '@/hooks/useReducedMotion'

const About: React.FC = () => {
  const prefersReducedMotion = useReducedMotion()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: prefersReducedMotion ? 0 : 0.8,
        staggerChildren: prefersReducedMotion ? 0 : 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: prefersReducedMotion ? 0 : 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: prefersReducedMotion ? 0 : 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center px-6 py-20"
    >
      <motion.div
        className="max-w-4xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.h2
          className="text-4xl md:text-6xl font-bold mb-12 text-gradient"
          variants={itemVariants}
        >
          About
        </motion.h2>

        <motion.div className="space-y-8 text-lg md:text-xl leading-relaxed">
          <motion.p className="text-gray-300" variants={itemVariants}>
            I'm a dedicated full-stack software engineer with 2 years of
            hands-on experience building and scaling modern web applications. I
            enjoy leading projects, collaborating with teams, and delivering
            impactful solutions that make a difference.
          </motion.p>

          <motion.p className="text-gray-300" variants={itemVariants}>
            I've successfully led 4+ full-cycle projects, mastering technologies
            such as <span className="text-white">TypeScript</span>,{" "}
            <span className="text-white">RemixJS</span>,{" "}
            <span className="text-white">Next.js</span>, and{" "}
            <span className="text-white">Node.js</span>
          </motion.p>

          <motion.p className="text-gray-300" variants={itemVariants}>
            Currently pursuing my university degree, I constantly seek
            opportunities to learn, grow, and contribute to real-world
            applications. Beyond coding, I enjoy exploring emerging technologies
            and sharing insights with the developer community.
          </motion.p>
        </motion.div>

        {/* Experience Highlight */}
        <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={itemVariants}
        >
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">2+</div>
            <div className="text-gray-400">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">20+</div>
            <div className="text-gray-400">Projects Delivered</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">4</div>
            <div className="text-gray-400">Core Tech Stacks Mastered</div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default About