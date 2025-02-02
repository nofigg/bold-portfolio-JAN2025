export interface Project {
  title: string;
  description: string;
  date: string;
  category: 'in-progress' | 'branding' | 'landing-pages' | 'explorations' | 'interactions';
  slug: string;
  content: string;
  images?: {
    url: string;
    alt: string;
  }[];
  gridImages?: {
    url: string;
    alt: string;
  }[];
  technologies?: string[];
  links?: {
    label: string;
    url: string;
  }[];
}