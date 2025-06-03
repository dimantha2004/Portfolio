export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  demoUrl?: string;
  imageUrl: string;
  featured: boolean;
}

export interface Skill {
  name: string;
  icon: string;
  level: number; // 1-5
}

export interface GitHubRepo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  homepage: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}