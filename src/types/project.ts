export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tech: string[];
  features: string[];
  githubUrl?: string;
  demoUrl?: string;
  imageUrl: string;
}
