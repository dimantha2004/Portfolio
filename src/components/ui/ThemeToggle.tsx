import React from 'react';
import { motion } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none"
      whileTap={{ scale: 0.9 }}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <motion.div
        initial={{ rotate: 0 }}
        animate={{ rotate: theme === 'dark' ? 180 : 0 }}
        transition={{ duration: 0.5 }}
      >
        {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;