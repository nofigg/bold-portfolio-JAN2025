import React, { useState } from 'react';
import Layout from '../components/Layout';
import ScrambleText from '../components/ScrambleText';
import ProjectCard from '../templates/ProjectCard';
import { projects } from '../projects';
import { Project } from '../types/project';

type Category = 'all' | 'in-progress' | 'branding' | 'landing-pages' | 'explorations' | 'interactions';

const categoryColors = {
  'all': 'bg-[#8338ec]',
  'in-progress': 'bg-[#FF6B6B]',
  'branding': 'bg-[#4ECDC4]',
  'landing-pages': 'bg-[#FFD93D]',
  'explorations': 'bg-[#95A5A6]',
  'interactions': 'bg-[#FF69B4]'
};

const categoryTextColors = {
  'all': 'text-white',
  'in-progress': 'text-white',
  'branding': 'text-white',
  'landing-pages': 'text-black',
  'explorations': 'text-white',
  'interactions': 'text-white'
};

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<Category>('all');

  const filteredProjects = projects.filter(project => 
    selectedCategory === 'all' || project.category === selectedCategory
  );

  const categories: { value: Category; label: string }[] = [
    { value: 'all', label: 'All' },
    { value: 'in-progress', label: 'In Progress' },
    { value: 'branding', label: 'Branding' },
    { value: 'landing-pages', label: 'Landing Pages' },
    { value: 'explorations', label: 'Explorations' },
    { value: 'interactions', label: 'Interactions' }
  ];

  return (
    <Layout>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="space-y-8 sm:space-y-12 mb-12 sm:mb-16">
          <div className="max-w-3xl space-y-6">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-black leading-[1.15]">
              <ScrambleText text="Designing with Purpose, Building with Curiosity" />
            </h1>
            <p className="text-base sm:text-lg text-black/80 leading-relaxed">
              This is my corner of the web where I share thoughts, experiments, and projects at the intersection of design and development. It's all about exploring ideas, learning new things, and creating digital experiences that feel just right.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            {categories.map(category => (
              <button
                key={category.value}
                onClick={() => setSelectedCategory(category.value)}
                className={`px-3 sm:px-4 py-1.5 sm:py-2 text-sm font-medium rounded-lg transition-all
                  ${selectedCategory === category.value
                    ? `${categoryColors[category.value]} ${categoryTextColors[category.value]} neubrutalism-shadow`
                    : 'bg-white text-black hover:bg-black/5 border-2 border-black'
                  }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </Layout>
  );
}