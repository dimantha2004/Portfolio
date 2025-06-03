import { useState, useEffect } from 'react';
import { GitHubRepo } from '../types';

export const useGitHubData = (username: string) => {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGitHubData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch GitHub repositories');
        }
        
        const data = await response.json();
        setRepos(data);
        setError(null);
      } catch (err) {
        console.error('Error fetching GitHub data:', err);
        setError('Failed to load GitHub repositories. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchGitHubData();
  }, [username]);

  return { repos, isLoading, error };
};