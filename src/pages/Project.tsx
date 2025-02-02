import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Layout from '../components/Layout';
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
    <Layout>
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

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 mt-16">
        <article className="prose prose-lg max-w-none">
          <header className="not-prose space-y-8 mb-16">
            <div className="space-y-8">
              <div className="flex items-center gap-3">
                <time className="text-sm text-gray-500">{project.date}</time>
                <div className={`px-3 py-1 rounded-md text-sm font-medium neubrutalism-shadow ${getCategoryColor(project.category)}`}>
                  {project.category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                </div>
              </div>
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl font-bold !mt-0">
                  <ScrambleText text={project.title} />
                </h1>
                <p className="text-xl text-gray-600 !mt-4">
                  {project.description}
                </p>
              </div>
            </div>

            {project.images && project.images.length > 0 && (
              <div className="w-full !mt-12">
                <ImageSlider images={project.images} aspectRatio="video" />
              </div>
            )}

            {project.gridImages && project.gridImages.length > 0 && (
              <div className="w-full !mt-12">
                <ImageGrid 
                  images={project.gridImages} 
                  variant={project.gridImages.length > 2 ? 'trio' : 'duo'} 
                />
              </div>
            )}

            {project.technologies && (
              <div className="space-y-3 !mt-12">
                <h2 className="text-sm font-medium text-gray-500 !mt-0">Technologies</h2>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm bg-black/5 rounded-lg"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {project.links && (
              <div className="flex flex-wrap gap-4 !mt-12">
                {project.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-white border-2 border-black 
                      rounded-lg hover:bg-black/5 transition neubrutalism-shadow"
                  >
                    <span className="font-medium">{link.label}</span>
                    <span>→</span>
                  </a>
                ))}
              </div>
            )}
          </header>

          <div className="[&>h1]:text-4xl [&>h1]:font-bold [&>h1]:mb-8 [&>h1]:mt-0
            [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:mb-6 [&>h2]:mt-12
            [&>h3]:text-xl [&>h3]:font-bold [&>h3]:mb-4 [&>h3]:mt-8
            [&>p]:leading-relaxed [&>p]:mb-6
            [&>ul]:mb-6 [&>ul>li]:mb-2
            [&>pre]:my-8 [&>pre]:bg-gray-50 [&>pre]:p-4 [&>pre]:rounded-lg [&>pre]:overflow-auto
            [&>blockquote]:border-l-4 [&>blockquote]:border-gray-300 [&>blockquote]:pl-4 [&>blockquote]:italic
            [&>*:last-child]:mb-0">
            <ReactMarkdown>{project.content}</ReactMarkdown>
          </div>
        </article>
      </div>
    </Layout>
  );
}