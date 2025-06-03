import React from 'react';
import { motion } from 'framer-motion';
import { Star, GitFork, ExternalLink } from 'lucide-react';
import Card from '../ui/Card';
import { useGitHubData } from '../../hooks/useGitHubData';

const GitHub: React.FC = () => {
  const { repos, isLoading, error } = useGitHubData('dimantha2004');

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
    <section id="github" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">My GitHub</h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Here are my latest repositories on GitHub. These represent my ongoing work and contributions.
          </p>
        </motion.div>

        {isLoading && (
          <div className="flex justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-500"></div>
          </div>
        )}

        {error && (
          <div className="text-center p-6 bg-red-50 dark:bg-red-900/20 rounded-lg">
            <p className="text-red-600 dark:text-red-400">{error}</p>
            <p className="mt-2 text-gray-700 dark:text-gray-300">
              In the meantime, you can visit my{' '}
              <a 
                href="https://github.com/dimantha2004" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary-600 dark:text-primary-400 hover:underline"
              >
                GitHub profile
              </a>{' '}
              directly.
            </p>
          </div>
        )}

        {!isLoading && !error && (
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {repos.length > 0 ? (
              repos.map((repo) => (
                <motion.div key={repo.id} variants={item}>
                  <Card className="h-full flex flex-col">
                    <div className="p-6">
                      <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                        {repo.name}
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm line-clamp-2">
                        {repo.description || 'No description available'}
                      </p>
                      {repo.language && (
                        <div className="mb-4">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">
                            {repo.language}
                          </span>
                        </div>
                      )}
                      <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mt-auto">
                        <div className="flex items-center mr-4">
                          <Star size={16} className="mr-1" />
                          <span>{repo.stargazers_count}</span>
                        </div>
                        <div className="flex items-center">
                          <GitFork size={16} className="mr-1" />
                          <span>{repo.forks_count}</span>
                        </div>
                      </div>
                    </div>
                    <div className="px-6 pb-6 mt-auto">
                      <a
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
                      >
                        <span>View Repository</span>
                        <ExternalLink size={16} className="ml-1" />
                      </a>
                    </div>
                  </Card>
                </motion.div>
              ))
            ) : (
              <div className="col-span-full text-center p-6">
                <p className="text-gray-700 dark:text-gray-300">
                  No repositories found. Please visit my{' '}
                  <a 
                    href="https://github.com/dimantha2004" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary-600 dark:text-primary-400 hover:underline"
                  >
                    GitHub profile
                  </a>{' '}
                  to see my work.
                </p>
              </div>
            )}
          </motion.div>
        )}

        <div className="text-center mt-10">
          <a
            href="https://github.com/dimantha2004"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-gray-800 dark:bg-gray-700 text-white rounded-lg transition-colors hover:bg-gray-700 dark:hover:bg-gray-600"
          >
            <span>View All Repositories</span>
            <ExternalLink size={18} className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default GitHub;