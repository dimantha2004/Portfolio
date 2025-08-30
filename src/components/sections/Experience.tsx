import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Building, Users, TrendingUp } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      id: 1,
      title: "Software Engineer Trainee",
      company: "SYIGEN Pvt (Ltd)",
      location: "Full-time Position",
      duration: "July 2025 - Present",
      type: "Current Position",
      achievements: [
        "Developed enterprise-level applications using Java, Next.js, MySQL, and RESTful APIs in collaborative team environment",
        "Implemented comprehensive testing, code reviews, and version control using Git with full-stack feature development",
        "Collaborated with cross-functional teams using Agile methodologies, improving sprint delivery by 25%"
      ],
      technologies: ["Java", "Next.js", "MySQL", "REST APIs", "Git", "Agile"],
      highlight: true
    },
    {
      id: 2,
      title: "Trainee Developer Student",
      company: "Institute of Computer Engineering Technology (iCET)",
      location: "Training Program",
      duration: "August 2024 - June 2025",
      type: "Education & Training",
      achievements: [
        "Developed 10+ full-stack applications using Java, JavaScript, TypeScript, Spring Boot, React, and Angular",
        "Implemented layered architecture and design patterns in 75% of projects, ensuring scalable and maintainable code",
        "Gained expertise in database design, API development, and frontend optimization"
      ],
      technologies: ["Java", "JavaScript", "TypeScript", "Spring Boot", "React", "Angular"],
      highlight: false
    },
    {
      id: 3,
      title: "Frontend Developer",
      company: "BOC Bank Digital Assistance & Feedback System",
      location: "Team Project",
      duration: "Project Duration",
      type: "Banking Project",
      achievements: [
        "Led development of 3 responsive web applications deployed at BOC Bank Monaragala Branch",
        "Created QR-based guidance system reducing customer service inquiries by 60%",
        "Developed real-time feedback application with analytics dashboard using Chart.js and Supabase",
        "Built secure admin dashboard with role-based access control for bank managers"
      ],
      technologies: ["JavaScript", "Chart.js", "Supabase", "QR Technology", "Admin Dashboard"],
      highlight: false
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
  };

  return (
    <section id="experience" className="py-24 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-primary-100 dark:bg-primary-900/30 rounded-full text-primary-700 dark:text-primary-300 text-sm font-medium mb-4">
            <Building size={16} className="mr-2" />
            Career Journey
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white bg-gradient-to-r from-gray-900 via-primary-800 to-gray-900 dark:from-white dark:via-primary-100 dark:to-white bg-clip-text text-transparent">
            Professional Experience
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary-400 to-blue-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            My professional journey showcasing growth, achievements, and impact across different roles and projects.
          </p>
        </motion.div>

        <motion.div
          className="max-w-4xl mx-auto"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              variants={item}
              className={`relative pl-8 pb-12 ${index !== experiences.length - 1 ? 'border-l-2 border-gray-200 dark:border-gray-700' : ''}`}
            >
              {/* Timeline dot */}
              <div className={`absolute left-0 top-0 transform -translate-x-1/2 w-4 h-4 rounded-full border-4 ${
                exp.highlight 
                  ? 'bg-primary-500 border-primary-200 dark:border-primary-800' 
                  : 'bg-gray-300 dark:bg-gray-600 border-gray-100 dark:border-gray-800'
              }`} />

              {/* Experience card */}
              <div className={`bg-gradient-to-br ${
                exp.highlight 
                  ? 'from-primary-50 to-blue-50 dark:from-primary-900/20 dark:to-blue-900/20 border-primary-200 dark:border-primary-800' 
                  : 'from-gray-50 to-white dark:from-gray-800 dark:to-gray-700 border-gray-200 dark:border-gray-600'
              } border rounded-2xl p-6 ml-4 shadow-lg hover:shadow-xl transition-all duration-300`}>
                
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-1">
                      {exp.title}
                    </h3>
                    <div className="flex items-center text-primary-600 dark:text-primary-400 font-semibold mb-2">
                      <Building size={18} className="mr-2" />
                      {exp.company}
                    </div>
                  </div>
                  <div className="flex flex-col md:items-end space-y-1">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                      exp.highlight 
                        ? 'bg-primary-100 text-primary-800 dark:bg-primary-900/40 dark:text-primary-300' 
                        : 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300'
                    }`}>
                      {exp.type}
                    </span>
                  </div>
                </div>

                {/* Details */}
                <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-gray-600 dark:text-gray-400">
                  <div className="flex items-center">
                    <Calendar size={16} className="mr-1" />
                    {exp.duration}
                  </div>
                  <div className="flex items-center">
                    <MapPin size={16} className="mr-1" />
                    {exp.location}
                  </div>
                </div>

                {/* Achievements */}
                <div className="space-y-3 mb-6">
                  {exp.achievements.map((achievement, idx) => (
                    <div key={idx} className="flex items-start">
                      <TrendingUp size={16} className="text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        {achievement}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300 text-xs font-medium rounded-full hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <div className="bg-gradient-to-r from-primary-50 to-blue-50 dark:from-primary-900/20 dark:to-blue-900/20 rounded-2xl p-8 border border-primary-200 dark:border-primary-800">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              Ready for New Challenges
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Always open to exciting opportunities and collaborative projects that push the boundaries of technology.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-semibold transition-colors"
            >
              <Users size={18} className="mr-2" />
              Let's Collaborate
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
