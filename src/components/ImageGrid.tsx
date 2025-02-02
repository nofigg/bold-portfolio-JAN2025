import React from 'react';

interface Image {
  url: string;
  alt: string;
}

interface ImageGridProps {
  images: Image[];
  variant?: 'duo' | 'trio' | 'quad';
  className?: string;
}

export default function ImageGrid({ images, variant = 'duo', className = '' }: ImageGridProps) {
  const gridVariants = {
    duo: 'grid-cols-1 xs:grid-cols-2',
    trio: 'grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 [&>*:first-child]:xs:col-span-2 lg:[&>*:first-child]:col-span-1',
    quad: 'grid-cols-1 xs:grid-cols-2'
  };

  // Limit the number of images based on the variant
  const maxImages = {
    duo: 2,
    trio: 3,
    quad: 4
  };

  const displayImages = images.slice(0, maxImages[variant]);

  return (
    <div className={`grid gap-3 xs:gap-4 sm:gap-6 ${gridVariants[variant]} ${className}`}>
      {displayImages.map((image, index) => (
        <div 
          key={index}
          className="group relative aspect-[4/3] xs:aspect-square overflow-hidden rounded-xl border-2 border-black neubrutalism-shadow bg-gray-100"
        >
          {/* Image */}
          <img 
            src={image.url}
            alt={image.alt}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          
          {/* Image Caption - Always visible on mobile, hover on desktop */}
          <div className="absolute bottom-3 left-3 right-3 px-3 py-2 bg-white border-2 border-black rounded-lg 
            text-sm font-medium xs:opacity-0 group-hover:opacity-100 transition-all transform xs:translate-y-2 
            group-hover:translate-y-0 neubrutalism-shadow">
            {image.alt}
          </div>
        </div>
      ))}
    </div>
  );
}