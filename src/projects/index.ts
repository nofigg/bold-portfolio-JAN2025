import { project as businessCardBots } from './business-card-bots';
import { project as fintechDashboard } from './fintech-dashboard';
import { project as ecoBrand } from './eco-brand';
import { project as aiWriter } from './ai-writer';
import { project as futureWork } from './future-work';
import { project as scrollAnimations } from './scroll-animations';
import { project as ecommerce3d } from './ecommerce-3d';
import { project as gestureNav } from './gesture-nav';
import { Project } from '../types/project';

export const projects: Project[] = [
  businessCardBots,
  fintechDashboard,
  ecoBrand,
  aiWriter,
  futureWork,
  scrollAnimations,
  ecommerce3d,
  gestureNav
];

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find(project => project.slug === slug);
};