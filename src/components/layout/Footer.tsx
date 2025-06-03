import React from 'react';
import { Github as GitHub, Linkedin, Facebook, Mail } from 'lucide-react';
import { socialLinks } from '../../data/social';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'GitHub':
        return <GitHub size={20} />;
      case 'Linkedin':
        return <Linkedin size={20} />;
      case 'Facebook':
        return <Facebook size={20} />;
      case 'Mail':
        return <Mail size={20} />;
      default:
        return null;
    }
  };

  return (
    <footer className="bg-gray-100 dark:bg-gray-800 py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold text-primary-600 dark:text-primary-400 mb-2">Dimantha</h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-md">
              Full-Stack Developer specializing in Java, Spring Boot, React, JavaScript, and UI/UX design.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              {socialLinks.map((link) => (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors"
                  aria-label={link.platform}
                >
                  {renderIcon(link.icon)}
                </a>
              ))}
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              &copy; {currentYear} Dimantha. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;