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

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-950 dark:via-gray-900 dark:to-slate-900 overflow-hidden">
      {/* Enhanced Background with Multiple Layers */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="w-full h-full"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-cyan-600/10 animate-gradient-x"></div>
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-400/20 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-20 w-72 h-72 bg-pink-400/20 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-4 h-4 bg-primary-400/30 rounded-full"
          animate={{ y: [-20, 20, -20], x: [-10, 10, -10] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/3 right-1/3 w-6 h-6 bg-accent-400/30 rounded-full"
          animate={{ y: [20, -20, 20], x: [10, -10, 10] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-success-400/30 rounded-full"
          animate={{ y: [-15, 15, -15], x: [15, -15, 15] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
      <div className="relative z-10 container mx-auto px-4 md:px-6 flex flex-col lg:flex-row items-center gap-16">
        <div className="flex-1 text-center lg:text-left max-w-2xl">
          {/* Enhanced Introduction Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 mb-8 shadow-sm"
          >
            <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
            Available for new opportunities
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 text-gray-900 dark:text-white font-display leading-tight"
            variants={textVariants}
            initial="hidden"
            animate="visible"
          >
            <span className="block">Hi, I'm</span>
            <span className="block bg-gradient-to-r from-primary-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Dimantha
            </span>
          </motion.h1>
          
          <motion.div
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="space-y-4 mb-12"
          >
            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 font-medium">
              Full-Stack Developer & UI/UX Enthusiast
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-xl">
              Crafting digital experiences with <span className="font-semibold text-primary-600 dark:text-primary-400">Java</span>, 
              <span className="font-semibold text-primary-600 dark:text-primary-400"> React</span>, and 
              <span className="font-semibold text-primary-600 dark:text-primary-400"> modern cloud solutions</span>. 
              Passionate about building scalable applications that make a difference.
            </p>
          </motion.div>
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6"
            variants={textVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={buttonVariants} whileHover="hover" className="group">
              <Button 
                href="#projects" 
                size="lg"
                className="relative overflow-hidden bg-gradient-to-r from-primary-600 to-blue-600 hover:from-primary-700 hover:to-blue-700 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transform transition-all duration-300"
              >
                <span className="relative z-10">View My Work</span>
                <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
              </Button>
            </motion.div>
            <motion.div variants={buttonVariants} whileHover="hover">
              <Button 
                href="#contact" 
                variant="outline" 
                size="lg"
                className="border-2 border-gray-300 dark:border-gray-600 hover:border-primary-500 dark:hover:border-primary-400 px-8 py-4 rounded-xl font-semibold transition-all duration-300"
              >
                Let's Connect
              </Button>
            </motion.div>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotateY: 20 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1, delay: 0.5, type: "spring", stiffness: 100 }}
          className="relative flex-shrink-0"
        >
          {/* Enhanced Profile Image Container */}
          <div className="relative w-80 h-80 lg:w-96 lg:h-96">
            {/* Animated Border Rings */}
            <div className="absolute inset-0 rounded-full border-4 border-gradient-to-tr from-primary-400 via-blue-500 to-cyan-400 animate-spin-slow"></div>
            <div className="absolute inset-2 rounded-full border-2 border-gradient-to-bl from-purple-400 via-pink-500 to-rose-400 animate-spin-reverse"></div>
            
            {/* Profile Image */}
            <div className="absolute inset-4 overflow-hidden rounded-full bg-gradient-to-tr from-primary-100 to-blue-100 dark:from-gray-800 dark:to-gray-700 shadow-2xl">
              <img
                src="/WhatsApp Image 2025-05-20 at 12.13.33_4e6e3509.jpg"
                alt="Dimantha - Full Stack Developer"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
              />
              {/* Overlay for better contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
            </div>

            {/* Floating Tech Icons */}
            <motion.div
              className="absolute -top-4 -right-4 w-16 h-16 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center"
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="text-2xl">⚛️</span>
            </motion.div>
            <motion.div
              className="absolute -bottom-4 -left-4 w-16 h-16 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center"
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="text-2xl">☕</span>
            </motion.div>
            <motion.div
              className="absolute top-1/2 -right-8 w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center"
              animate={{ x: [-5, 5, -5] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="text-lg">🚀</span>
            </motion.div>
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