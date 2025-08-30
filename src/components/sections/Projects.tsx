import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github as GitHub, ExternalLink, X } from 'lucide-react';
import { projects } from '../../data/projects';
import type { Project } from '../../types';
import ReactMarkdown from 'react-markdown';

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [githubData, setGithubData] = useState<any>(null);
  const [githubLoading, setGithubLoading] = useState(false);
  const [readme, setReadme] = useState<string | null>(null);
  const [readmeLoading, setReadmeLoading] = useState(false);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedProject(null);
  };

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

  const PLACEHOLDER_IMAGE = 'https://via.placeholder.com/600x400?text=No+Image';

  useEffect(() => {
    if (selectedProject && selectedProject.githubUrl) {
      setGithubLoading(true);
      setGithubData(null);
      setReadme(null);
      setReadmeLoading(true);
      // Extract owner and repo from githubUrl
      const match = selectedProject.githubUrl.match(/github.com\/(.+?)\/(.+?)(?:$|\/)/);
      if (match) {
        const owner = match[1];
        const repo = match[2];
        // Fetch repo details
        fetch(`https://api.github.com/repos/${owner}/${repo}`)
          .then(res => res.json())
          .then(data => {
            setGithubData({
              stars: data.stargazers_count,
              forks: data.forks_count,
              language: data.language,
              updatedAt: data.updated_at ? new Date(data.updated_at).toLocaleDateString() : '--',
            });
            setGithubLoading(false);
          })
          .catch(() => setGithubLoading(false));
        // Try to fetch README from main, then master, and try both README.md and readme.md
        const tryReadme = async () => {
          const branches = ['main', 'master'];
          const filenames = ['README.md', 'readme.md'];
          let found = false;
          for (const branch of branches) {
            for (const filename of filenames) {
              const url = `https://raw.githubusercontent.com/${owner}/${repo}/${branch}/${filename}`;
              try {
                const res = await fetch(url);
                if (res.ok) {
                  const text = await res.text();
                  setReadme(text);
                  found = true;
                  break;
                }
              } catch {}
            }
            if (found) break;
          }
          setReadmeLoading(false);
        };
        tryReadme();
      } else {
        setGithubLoading(false);
        setReadmeLoading(false);
      }
    }
  }, [selectedProject]);

  return (
    <section id="projects" className="py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-primary-100 dark:bg-primary-900/30 rounded-full text-primary-700 dark:text-primary-300 text-sm font-medium mb-4">
            <span className="w-2 h-2 bg-primary-500 rounded-full mr-2 animate-pulse"></span>
            Portfolio Showcase
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 dark:from-white dark:via-blue-100 dark:to-white bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary-400 to-blue-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Discover the projects that showcase my expertise in full-stack development, 
            UI/UX design, and modern web technologies.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {projects.filter(project => project.featured).map((project: Project) => (
            <motion.div 
              key={project.id} 
              variants={item}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div 
                className="group relative h-full bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden border border-gray-100 dark:border-gray-700 hover:border-primary-200 dark:hover:border-primary-700"
                onClick={() => openModal(project)}
              >
                {/* Project Image with Overlay */}
                <div className="relative h-56 overflow-hidden rounded-t-2xl">
                  <img
                    src={project.imageUrl || PLACEHOLDER_IMAGE}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    onError={e => { (e.target as HTMLImageElement).src = PLACEHOLDER_IMAGE; }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Floating Action Buttons */}
                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-10 h-10 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                      <ExternalLink size={16} className="text-gray-700 dark:text-gray-300" />
                    </div>
                    <div className="w-10 h-10 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                      <GitHub size={16} className="text-gray-700 dark:text-gray-300" />
                    </div>
                  </div>

                  {/* Project Type Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-primary-500/90 text-white text-xs font-semibold rounded-full backdrop-blur-sm">
                      Web App
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6 flex flex-col h-full">
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3 leading-relaxed">
                      {project.description}
                    </p>
                    
                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.slice(0, 4).map((tech: string, index: number) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs font-medium rounded-full hover:bg-primary-100 dark:hover:bg-primary-900/30 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 text-xs font-medium rounded-full">
                          +{project.technologies.length - 4}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 mt-auto">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors font-medium text-sm"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <GitHub size={16} />
                      Code
                    </a>
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-primary-500 hover:bg-primary-600 text-white rounded-lg transition-colors font-medium text-sm"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink size={16} />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary-400 via-blue-500 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Modal for project details */}
        {modalOpen && selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden"
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              onClick={e => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="relative">
                <img
                  src={selectedProject.imageUrl || PLACEHOLDER_IMAGE}
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover"
                  onError={e => { (e.target as HTMLImageElement).src = PLACEHOLDER_IMAGE; }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <button
                  className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm text-white rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                  onClick={closeModal}
                  aria-label="Close"
                >
                  <X size={20} />
                </button>
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-3xl font-bold text-white mb-2">{selectedProject.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech: string, index: number) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-sm font-medium rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-8 max-h-96 overflow-y-auto">
                <p className="text-gray-700 dark:text-gray-300 mb-6 text-lg leading-relaxed">
                  {selectedProject.description}
                </p>

                {/* GitHub Stats */}
                {githubData && !githubLoading && (
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">{githubData.stars}</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Stars</div>
                    </div>
                    <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">{githubData.forks}</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Forks</div>
                    </div>
                    <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">{githubData.language}</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Language</div>
                    </div>
                    <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">{githubData.updatedAt}</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Updated</div>
                    </div>
                  </div>
                )}

                {/* README Content */}
                {readme && !readmeLoading && (
                  <div className="prose dark:prose-invert max-w-none">
                    <ReactMarkdown>{readme.slice(0, 1000) + '...'}</ReactMarkdown>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex gap-4 mt-8">
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors font-medium"
                  >
                    <GitHub size={20} />
                    View Code
                  </a>
                  {selectedProject.demoUrl && (
                    <a
                      href={selectedProject.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-medium"
                    >
                      <ExternalLink size={20} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;