import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Button from '../ui/Button';

const Hero: React.FC = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.07,
        delayChildren: 0.2
      }
    }
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2
      }
    }
  };

  const text = "Hi, I'm Dimantha";
  const letters = Array.from(text);

  return (
    <section id="home" className="relative py-32 md:py-40 bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-full h-full bg-gradient-to-tr from-blue-400/20 via-purple-400/20 to-pink-400/20 animate-gradient-move"
        />
      </div>
      <div className="relative z-10 container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 text-center md:text-left">
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold mb-6 text-gray-900 dark:text-white font-inter drop-shadow-lg"
            variants={textVariants}
          initial="hidden"
          animate="visible"
          >
            {letters.map((letter, i) => (
              <motion.span key={i} variants={letterVariants} className="inline-block">
                {letter === ' ' ? '\u00A0' : letter}
              </motion.span>
            ))}
          </motion.h1>
          <motion.p
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="text-lg md:text-2xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto md:mx-0 mb-10 font-inter"
          >
            A results-driven <span className="font-semibold text-blue-600 dark:text-blue-400">Full-Stack Developer</span> with a passion for building impactful digital products. Experienced in <span className="font-medium">Java, Spring Boot, React, UI/UX, and cloud solutions</span>.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4"
            variants={textVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={buttonVariants} whileHover="hover">
              <Button href="#projects" size="lg">
                View Projects
              </Button>
            </motion.div>
            <motion.div variants={buttonVariants} whileHover="hover">
              <Button href="#contact" variant="outline" size="lg">
                Contact Me
              </Button>
            </motion.div>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative w-full max-w-xs mx-auto md:mx-0"
        >
          <div className="aspect-square overflow-hidden rounded-full border-8 border-gradient-to-tr from-blue-400 via-purple-400 to-pink-400 dark:from-blue-700 dark:via-purple-700 dark:to-pink-700 shadow-2xl animate-border-glow">
            <img
              src="/WhatsApp Image 2025-05-20 at 12.13.33_4e6e3509.jpg"
              alt="Dimantha"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <a 
          href="#about" 
          className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400"
          aria-label="Scroll down"
        >
          <ChevronDown size={30} />
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;