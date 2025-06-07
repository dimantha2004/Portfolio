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
        ease: "easeOut"
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
    <section id="home" className="relative min-h-screen flex items-center justify-center py-20 px-4">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-white dark:from-gray-900 dark:to-gray-800 z-0" />
      
      <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center relative z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          className="text-center md:text-left"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-6 inline-block"
          >
            <div className="inline-block px-4 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-300 rounded-full text-sm font-medium mb-4">
              Full-Stack Developer
            </div>
          </motion.div>

          <div className="flex flex-wrap justify-center md:justify-start mb-6">
            {letters.map((letter, index) => (
              <motion.span
                key={index}
                variants={letterVariants}
                initial="hidden"
                animate="visible"
                transition={{
                  duration: 0.5,
                  delay: 0.3 + index * 0.1
                }}
                className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary-600 to-accent-500 dark:from-primary-400 dark:to-accent-400 text-transparent bg-clip-text"
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </div>

          <motion.p
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto md:mx-0 mb-10"
          >
            A passionate and versatile Full-Stack Developer with experience in building scalable web 
            and desktop applications using Java, Spring Boot, React, JavaScript, and more.
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
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative w-full max-w-md mx-auto"
        >
          <div className="aspect-square overflow-hidden rounded-full border-4 border-primary-200 dark:border-primary-700 shadow-xl">
            <img
              src="/WhatsAp Image 2025-05-20 at 12.13.33_4e6e3509.jpg"
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