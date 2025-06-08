'use client'

import { motion } from 'framer-motion'
import { useReducedMotion } from '@/hooks/useReducedMotion'

const Hero: React.FC = () => {
  const prefersReducedMotion = useReducedMotion()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: prefersReducedMotion ? 0 : 1,
        staggerChildren: prefersReducedMotion ? 0 : 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: prefersReducedMotion ? 0 : 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: prefersReducedMotion ? 0 : 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  const floatingVariants = {
    initial: { y: 0 },
    animate: {
      y: prefersReducedMotion ? 0 : [-10, 10, -10],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-6">
      <motion.div
        className="text-center max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={floatingVariants} initial="initial" animate="animate">
          <motion.h1
            className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight mb-4"
            variants={itemVariants}
          >
            <span className="text-gradient">huzidev</span>
          </motion.h1>
        </motion.div>

        <motion.p
          className="text-xl md:text-2xl lg:text-3xl text-gray-400 mb-8 font-light tracking-wide"
          variants={itemVariants}
        >
          Software Engineer
        </motion.p>

        <motion.p
          className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto font-light leading-relaxed"
          variants={itemVariants}
        >
          A passionate full-stack software developer with over 2+ years of experience and problem solver
        </motion.p>
      </motion.div>
    </section>
  )
}

export default Hero
