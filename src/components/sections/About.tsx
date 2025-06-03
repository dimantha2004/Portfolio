import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../../data/skills';
import * as LucideIcons from 'lucide-react';

const About: React.FC = () => {
  const renderIcon = (iconName: string) => {
    const Icon = (LucideIcons as any)[iconName];
    return Icon ? <Icon size={24} /> : null;
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
  };

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">About Me</h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto mb-6 rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-6">
  <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">Who I Am</h3>
  
  <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed text-lg">
    I'm <span className="font-semibold text-blue-600 dark:text-blue-400">Dimantha</span>, a passionate and versatile 
    <span className="font-medium"> Full-Stack Developer</span> with a deep love for creating digital experiences that matter. 
    With expertise spanning from robust backend architectures to immersive frontend interfaces, I bring ideas to life 
    through clean, scalable code and thoughtful design.
  </p>

  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 p-6 rounded-lg border-l-4 border-blue-500">
    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
      My journey in software development is driven by <span className="font-medium text-blue-600 dark:text-blue-400">curiosity and innovation</span>. 
      I specialize in building scalable web and desktop applications using cutting-edge technologies like 
      <span className="font-medium"> Java, Spring Boot, React, Angular, AWS, and Three.js</span>. Whether it's architecting 
      microservices, crafting responsive UIs, or creating immersive 3D experiences, I approach each project with precision and creativity.
    </p>
  </div>

  <div className="grid md:grid-cols-2 gap-6">
    <div className="space-y-4">
      <h4 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center">
        <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
        What I Do
      </h4>
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
        I transform complex business requirements into elegant digital solutions. From developing full-stack 
        E-Commerce platforms with secure payment gateways to creating interactive 3D gaming experiences, 
        I bridge the gap between technical possibility and user experience.
      </p>
    </div>
    
    <div className="space-y-4">
      <h4 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center">
        <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
        Real-World Impact
      </h4>
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
        My work extends beyond personal projects. I've contributed to banking interfaces—ATM/CDM flow UIs 
        and customer feedback systems—that are actively serving customers at BOC Bank, Monaragala Branch, 
        demonstrating my ability to deliver production-ready solutions.
      </p>
    </div>
  </div>

  <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Featured Projects & Expertise</h4>
    <div className="grid md:grid-cols-3 gap-4 text-sm">
      <div className="flex items-center space-x-2">
        <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
        <span className="text-gray-700 dark:text-gray-300">3D Squid Game (Three.js)</span>
      </div>
      <div className="flex items-center space-x-2">
        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
        <span className="text-gray-700 dark:text-gray-300">E-Commerce Platform</span>
      </div>
      <div className="flex items-center space-x-2">
        <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
        <span className="text-gray-700 dark:text-gray-300">Banking UI Systems</span>
      </div>
      <div className="flex items-center space-x-2">
        <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
        <span className="text-gray-700 dark:text-gray-300">Library Management (JavaFX)</span>
      </div>
      <div className="flex items-center space-x-2">
        <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
        <span className="text-gray-700 dark:text-gray-300">Cloud Solutions (AWS)</span>
      </div>
      <div className="flex items-center space-x-2">
        <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span>
        <span className="text-gray-700 dark:text-gray-300">Modern Web Apps</span>
      </div>
    </div>
  </div>

  <div className="border-l-4 border-blue-500 pl-6">
    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">My Development Philosophy</h4>
    <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
      I believe in writing <span className="font-medium text-blue-600 dark:text-blue-400">clean, maintainable code</span> 
      that stands the test of time. My approach combines technical excellence with user-centered design, ensuring that 
      every application I build is not just functional, but delightful to use.
    </p>
    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
      I'm constantly evolving with the tech landscape—whether it's exploring new frameworks, optimizing performance, 
      or implementing the latest design patterns. I thrive on challenges that push me to learn and grow as a developer.
    </p>
  </div>

  <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 p-6 rounded-lg">
    <p className="text-gray-700 dark:text-gray-300 leading-relaxed font-medium">
      <span className="text-green-600 dark:text-green-400">Ready to collaborate?</span> I'm always excited to work on 
      projects that challenge conventions and create meaningful impact. Let's build something amazing together.
    </p>
  </div>
</div>
          </motion.div>

          <div>
            <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">My Skills</h3>
            <motion.div 
              className="grid grid-cols-2 sm:grid-cols-3 gap-4"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {skills.map((skill) => (
                <motion.div
                  key={skill.name}
                  className="flex items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm"
                  variants={item}
                >
                  <div className="text-primary-500 dark:text-primary-400 mr-3">
                    {renderIcon(skill.icon)}
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">{skill.name}</h4>
                    <div className="mt-1 flex">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className={`w-2 h-2 rounded-full mr-1 ${
                            i < skill.level
                              ? 'bg-primary-500 dark:bg-primary-400'
                              : 'bg-gray-300 dark:bg-gray-600'
                          }`}
                        ></div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;