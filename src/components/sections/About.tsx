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
            <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Who I Am</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              I'm Dimantha, a passionate and versatile Full-Stack Developer with hands-on experience in building 
              scalable web and desktop applications using technologies like Java, Spring Boot, React, JavaScript, 
              JavaFX, and Three.js.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              I enjoy transforming ideas into real-world solutions, whether it's crafting robust backend systems, 
              designing responsive user interfaces, or creating immersive 3D experiences. Over the years, I've 
              developed a variety of projects including a full-stack E-Commerce platform, a 3D Squid Game using 
              Three.js, a Library Management System built with JavaFX, and more.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              I've also contributed to real-world banking interfaces—ATM/CDM flow UIs and a customer feedback 
              system—that are currently deployed and running at BOC Bank, Monaragala Branch. I'm always learning 
              and committed to clean, maintainable code and practical design.
            </p>
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