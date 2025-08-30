import React from 'react';
import { motion } from 'framer-motion';
import { Star, GitFork, ExternalLink } from 'lucide-react';
import { useGitHubData } from '../../hooks/useGitHubData';

// Fallback repositories when API fails
const fallbackRepos = [
  {
    id: 1,
    name: "Squid-Game-3D",
    description: "Interactive 3D Squid Game experience built with Three.js, featuring immersive gameplay and modern web technologies.",
    language: "JavaScript",
    stargazers_count: 8,
    forks_count: 2,
    html_url: "https://github.com/dimantha2004/Squid-Game-3D"
  },
  {
    id: 2,
    name: "E-Commerce-Platform",
    description: "Full-stack e-commerce solution with React frontend, Spring Boot backend, and secure payment integration.",
    language: "Java",
    stargazers_count: 12,
    forks_count: 4,
    html_url: "https://github.com/dimantha2004/E-Commerce-Platform"
  },
  {
    id: 3,
    name: "Library-Management-System",
    description: "Desktop application built with JavaFX for efficient library operations and book management.",
    language: "Java",
    stargazers_count: 6,
    forks_count: 1,
    html_url: "https://github.com/dimantha2004/Library-Management-System"
  },
  {
    id: 4,
    name: "Portfolio",
    description: "Personal portfolio website showcasing projects and skills with modern React and TypeScript.",
    language: "TypeScript",
    stargazers_count: 3,
    forks_count: 1,
    html_url: "https://github.com/dimantha2004/Portfolio"
  },
  {
    id: 5,
    name: "Banking-UI-System",
    description: "Professional banking interface system for ATM/CDM operations and customer feedback management.",
    language: "JavaScript",
    stargazers_count: 5,
    forks_count: 2,
    html_url: "https://github.com/dimantha2004/Banking-UI-System"
  },
  {
    id: 6,
    name: "Weather-App",
    description: "Modern weather application with real-time data, beautiful UI, and location-based forecasts.",
    language: "React",
    stargazers_count: 4,
    forks_count: 1,
    html_url: "https://github.com/dimantha2004/Weather-App"
  }
];

const GitHub: React.FC = () => {
  const { repos, isLoading, error } = useGitHubData('dimantha2004');
  
  // Use fallback repos if API fails or returns empty
  const displayRepos = (!isLoading && (error || repos.length === 0)) ? fallbackRepos : repos;

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
    <section id="github" className="py-24 bg-gradient-to-br from-gray-50 via-white to-slate-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-300 text-sm font-medium mb-4">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
            Open Source Contributions
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white bg-gradient-to-r from-gray-900 via-slate-800 to-gray-900 dark:from-white dark:via-gray-100 dark:to-white bg-clip-text text-transparent">
            GitHub Repositories
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-gray-400 to-slate-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Explore my latest projects and contributions. Each repository represents a unique challenge 
            and showcases different aspects of my development expertise.
          </p>
        </motion.div>

                {isLoading && (
          <div className="flex justify-center">
            <div className="flex items-center space-x-2">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-500"></div>
              <span className="text-gray-600 dark:text-gray-400">Loading repositories...</span>
            </div>
          </div>
        )}

        {!isLoading && (
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {displayRepos.map((repo) => (
              <motion.div 
                key={repo.id} 
                variants={item}
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="group relative h-full bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 dark:border-gray-700 hover:border-gray-200 dark:hover:border-gray-600">
                  {/* Header */}
                  <div className="p-6 pb-4">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                        {repo.name}
                      </h3>
                      <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                        <div className="flex items-center">
                          <Star size={16} className="mr-1" />
                          <span>{repo.stargazers_count}</span>
                        </div>
                        <div className="flex items-center">
                          <GitFork size={16} className="mr-1" />
                          <span>{repo.forks_count}</span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3 leading-relaxed">
                      {repo.description || 'No description available'}
                    </p>
                    
                    {repo.language && (
                      <div className="mb-4">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-primary-100 text-primary-800 dark:bg-primary-900/30 dark:text-primary-300">
                          <span className="w-2 h-2 bg-current rounded-full mr-2"></span>
                          {repo.language}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Footer */}
                  <div className="px-6 pb-6">
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-full px-4 py-2.5 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300 font-medium group"
                    >
                      <span>View Repository</span>
                      <ExternalLink size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary-400/10 via-blue-500/10 to-cyan-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        <div className="text-center mt-12">
          <a
            href="https://github.com/dimantha2004?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-gray-900 dark:bg-gray-700 text-white rounded-xl hover:bg-gray-800 dark:hover:bg-gray-600 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <span>View All Repositories</span>
            <ExternalLink size={20} className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default GitHub;