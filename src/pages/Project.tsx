import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import ScrambleText from '../components/ScrambleText';
import ImageSlider from '../components/ImageSlider';
import ImageGrid from '../components/ImageGrid';
import { getProjectBySlug } from '../projects';
import ReactMarkdown from 'react-markdown';

export default function Project() {
  const { slug } = useParams();
  const project = slug ? getProjectBySlug(slug) : null;

  if (!project) {
    return <Navigate to="/" replace />;
  }

  const getCategoryColor = (category: string) => {
    const colors = {
      'in-progress': 'bg-[#FF6B6B] text-white',
      'branding': 'bg-[#4ECDC4] text-white',
      'landing-pages': 'bg-[#FFD93D] text-black',
      'explorations': 'bg-[#95A5A6] text-white',
      'interactions': 'bg-[#FF69B4] text-white'
    };
    return colors[category as keyof typeof colors] || '';
  };

  return (
    <div className="min-h-screen pt-20">
      <div className="fixed top-20 left-0 right-0 bg-white border-b-2 border-black z-40">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center">
          <div className="flex items-center gap-4">
            <Link
              to="/"
              className="inline-flex items-center justify-center w-8 h-8 bg-white border-2 border-black 
                rounded-lg hover:bg-black/5 transition-colors active:translate-y-[2px] active:translate-x-[2px] 
                active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] neubrutalism-shadow"
            >
              <ArrowLeft className="w-4 h-4" />
            </Link>
            <span className="font-oswald text-lg font-medium">Back to Home</span>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 mt-16 mb-16">
        <article className="prose prose-lg max-w-none">
          <header className="not-prose space-y-8 mb-16">
            <div className="space-y-8">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-black leading-[1.15]">
                <ScrambleText text={project.title} />
              </h1>

              <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                <span 
                  className={`text-sm sm:text-base font-medium px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg 
                    ${getCategoryColor(project.category)} neubrutalism-shadow`}
                >
                  {project.category.split('-').map(word => 
                    word.charAt(0).toUpperCase() + word.slice(1)
                  ).join(' ')}
                </span>
                <time className="text-sm sm:text-base text-black/50">
                  {project.date}
                </time>
              </div>
            </div>

            {project.coverImage && (
              <div className="aspect-[16/9] overflow-hidden rounded-xl border-2 border-black neubrutalism-shadow">
                <img
                  src={project.coverImage}
                  alt={`Cover image for ${project.title}`}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
          </header>

          {project.content && (
            <div className="prose-headings:font-bold prose-headings:tracking-tight prose-p:text-black/80 
              prose-a:text-[#8338ec] prose-a:no-underline hover:prose-a:underline">
              <ReactMarkdown>{project.content}</ReactMarkdown>
            </div>
          )}

          {project.images && project.images.length > 0 && (
            <div className="mt-16">
              {project.images.length === 1 ? (
                <ImageSlider images={project.images} />
              ) : (
                <ImageGrid images={project.images} />
              )}
            </div>
          )}
        </article>
      </div>
    </div>
  );
}