import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github as GitHub, ExternalLink } from 'lucide-react';
import Card from '../ui/Card';
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
    <section id="projects" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">Featured Projects</h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Here are some of my notable projects. Each one represents different challenges and skills I've developed.
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
            <motion.div key={project.id} variants={item}>
              <Card className="h-full flex flex-col cursor-pointer hover:shadow-2xl transition-shadow duration-300" onClick={() => openModal(project)}>
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.imageUrl || PLACEHOLDER_IMAGE}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    onError={e => { (e.target as HTMLImageElement).src = PLACEHOLDER_IMAGE; }}
                  />
                </div>
                <div className="p-6 flex-grow">
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{project.title}</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 line-clamp-2">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech: string, index: number) => (
                      <span
                        key={index}
                        className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-2 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="p-6 pt-0 mt-auto">
                  <div className="flex gap-4">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400 transition-colors"
                      onClick={e => e.stopPropagation()}
                    >
                      <GitHub size={18} className="mr-1" />
                      <span>GitHub</span>
                    </a>
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400 transition-colors"
                        onClick={e => e.stopPropagation()}
                      >
                        <ExternalLink size={18} className="mr-1" />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Modal for project details */}
        {modalOpen && selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="bg-white dark:bg-gray-900 rounded-lg shadow-2xl max-w-lg w-full p-8 relative"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={e => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-900 dark:hover:text-white text-2xl font-bold"
                onClick={closeModal}
                aria-label="Close"
              >
                &times;
              </button>
              <img
                src={selectedProject.imageUrl || PLACEHOLDER_IMAGE}
                alt={selectedProject.title}
                className="w-full h-48 object-cover rounded mb-6"
                onError={e => { (e.target as HTMLImageElement).src = PLACEHOLDER_IMAGE; }}
              />
              <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">{selectedProject.title}</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">{selectedProject.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {selectedProject.technologies.map((tech: string, index: number) => (
                  <span
                    key={index}
                    className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-2 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              {/* GitHub extra details */}
              <div className="mb-4">
                {githubLoading ? (
                  <div className="text-gray-500 text-sm">Loading GitHub details...</div>
                ) : githubData ? (
                  <div className="flex flex-wrap gap-4 text-sm text-gray-700 dark:text-gray-300">
                    <span>⭐ Stars: {githubData.stars}</span>
                    <span>🍴 Forks: {githubData.forks}</span>
                    <span>💻 Language: {githubData.language}</span>
                    <span>🕒 Updated: {githubData.updatedAt}</span>
                  </div>
                ) : (
                  <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                    <span>⭐ Stars: --</span>
                    <span>🍴 Forks: --</span>
                    <span>💻 Language: --</span>
                    <span>🕒 Updated: --</span>
                  </div>
                )}
              </div>
              <div className="flex gap-4 mt-4">
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400 transition-colors"
                >
                  <GitHub size={18} className="mr-1" />
                  <span>GitHub</span>
                </a>
                {selectedProject.demoUrl && (
                  <a
                    href={selectedProject.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400 transition-colors"
                  >
                    <ExternalLink size={18} className="mr-1" />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
              {/* README section */}
              <div className="mt-8">
                <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Project Details (README)</h4>
                {readmeLoading ? (
                  <div className="text-gray-500 text-sm">Loading project details...</div>
                ) : readme ? (
                  <div className="prose max-w-none dark:prose-invert">
                    <ReactMarkdown>{readme}</ReactMarkdown>
                  </div>
                ) : (
                  <div className="text-gray-400 text-sm">No README found for this project.</div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;