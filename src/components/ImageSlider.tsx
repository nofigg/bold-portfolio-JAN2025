import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Image {
  url: string;
  alt: string;
}

interface ImageSliderProps {
  images: Image[];
  aspectRatio?: 'video' | 'square' | 'wide';
}

export default function ImageSlider({ images, aspectRatio = 'video' }: ImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Minimum swipe distance (in px)
  const minSwipeDistance = 50;

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe) {
      goToNext();
    } else if (isRightSwipe) {
      goToPrevious();
    }
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        goToPrevious();
      } else if (e.key === 'ArrowRight') {
        goToNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const aspectRatioClasses = {
    video: 'aspect-video',
    square: 'aspect-square',
    wide: 'aspect-[2/1]'
  };

  return (
    <div className="relative group touch-pan-y w-full">
      <div 
        className={`${aspectRatioClasses[aspectRatio]} w-full overflow-hidden rounded-xl border-2 border-black neubrutalism-shadow relative bg-gray-100`}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {/* Image Container */}
        <div className="absolute inset-0">
          <img 
            src={images[currentIndex].url}
            alt={images[currentIndex].alt}
            className="w-full h-full object-cover transition-transform duration-500"
            loading="lazy"
          />
        </div>
        
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        
        {/* Navigation Buttons - Hidden on mobile, visible on desktop */}
        {images.length > 1 && (
          <>
            <button
              onClick={goToPrevious}
              className="hidden sm:flex absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white border-2 border-black rounded-lg 
                items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity 
                hover:bg-black/5 active:translate-y-[calc(-50%+2px)] active:translate-x-[2px] 
                active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] neubrutalism-shadow"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={goToNext}
              className="hidden sm:flex absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white border-2 border-black rounded-lg 
                items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity 
                hover:bg-black/5 active:translate-y-[calc(-50%+2px)] active:translate-x-[2px] 
                active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] neubrutalism-shadow"
              aria-label="Next image"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </>
        )}
        
        {/* Image Counter - Always visible on mobile, hover on desktop */}
        {images.length > 1 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1 bg-white border-2 border-black rounded-md 
            text-sm font-medium sm:opacity-0 group-hover:opacity-100 transition-opacity neubrutalism-shadow">
            {currentIndex + 1} / {images.length}
          </div>
        )}

        {/* Mobile Swipe Indicator - Only visible on touch devices */}
        {images.length > 1 && (
          <div className="absolute inset-x-4 bottom-16 sm:hidden">
            <div className="flex justify-center gap-1.5">
              {images.map((_, index) => (
                <div
                  key={index}
                  className={`w-1.5 h-1.5 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-white' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}