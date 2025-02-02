import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ScrambleText from '../components/ScrambleText';
import { Project } from '../types/project';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const getCategoryLabel = (category: string): string => {
    switch (category) {
      case 'in-progress':
        return 'In Progress';
      case 'branding':
        return 'Branding';
      case 'landing-pages':
        return 'Landing Pages';
      case 'explorations':
        return 'Explorations';
      case 'interactions':
        return 'Interactions';
      default:
        return 'All';
    }
  };

  const getCategoryColors = (category: string) => {
    const colors = {
      'in-progress': 'bg-[#FF6B6B] text-white',
      'branding': 'bg-[#4ECDC4] text-white',
      'landing-pages': 'bg-[#FFD93D] text-black',
      'explorations': 'bg-[#95A5A6] text-white',
      'interactions': 'bg-[#FF69B4] text-white'
    };
    return colors[category as keyof typeof colors] || 'bg-[#8338ec] text-white';
  };

  return (
    <Link to={`/project/${project.slug}`} className="group">
      <article className="h-full bg-white p-4 sm:p-5 rounded-xl border-2 border-black 
        hover:translate-y-[-2px] transition-all">
        <div className="flex items-start justify-between gap-3">
          <div className="space-y-1.5">
            <h2 className="text-lg sm:text-xl font-bold text-black group-hover:text-[#8338ec] 
              transition-colors line-clamp-2 leading-tight">
              <ScrambleText text={project.title} delay={Math.random() * 500} />
            </h2>
            <p className="text-sm sm:text-base text-black/70 line-clamp-2">
              {project.description}
            </p>
          </div>
          <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 
            text-black/30 group-hover:text-[#8338ec] transition-colors" />
        </div>
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mt-4">
          <span className={`text-xs sm:text-sm font-medium px-2 sm:px-3 py-1 rounded-md 
            ${getCategoryColors(project.category)} neubrutalism-shadow`}>
            {getCategoryLabel(project.category)}
          </span>
          <time className="text-xs sm:text-sm text-black/50">
            {project.date}
          </time>
        </div>
      </article>
    </Link>
  );
}