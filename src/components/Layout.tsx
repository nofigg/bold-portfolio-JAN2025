import React, { useState, useEffect, useCallback, memo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Heart, Menu, X } from 'lucide-react';
import SkipLink from './SkipLink';

interface LayoutProps {
  children: React.ReactNode;
}

const MobileNav = memo(({ isOpen, onClose, currentPath }: { 
  isOpen: boolean; 
  onClose: () => void;
  currentPath: string;
}) => (
  <div 
    role="dialog"
    aria-modal="true"
    aria-label="Mobile navigation menu"
    className={`fixed inset-x-0 top-0 z-50 transform transition-transform duration-300 ease-in-out
      ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}
  >
    <div className="bg-white border-b-2 border-black">
      <div className="max-w-5xl mx-auto px-4">
        <div className="h-20 flex items-center justify-between">
          <Link 
            to="/"
            className="font-black text-lg text-black hover:text-[#8338ec] transition"
            aria-label="Home"
          >
            N — F
          </Link>
          <button
            onClick={onClose}
            className="p-2 hover:bg-black/5 rounded-lg transition"
            aria-expanded={isOpen}
            aria-label="Close navigation menu"
          >
            <X className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>
        <nav aria-label="Mobile navigation" className="flex flex-col py-6">
          <Link 
            to="/blog" 
            className={`font-medium text-black hover:text-[#8338ec] transition py-4
              ${currentPath === '/blog' ? 'text-[#8338ec]' : ''}`}
            onClick={onClose}
            aria-current={currentPath === '/blog' ? 'page' : undefined}
          >
            About
          </Link>
        </nav>
      </div>
    </div>
  </div>
));

MobileNav.displayName = 'MobileNav';

const Footer = memo(() => (
  <footer className="relative w-full border-t-2 border-black bg-white mt-16" role="contentinfo">
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6">
        <div className="text-sm sm:text-base text-gray-600">
          &copy; {new Date().getFullYear()} N — F. All rights reserved.
        </div>
        <div className="flex items-center gap-2 text-sm sm:text-base">
          <span>Made with</span>
          <Heart className="w-4 h-4 text-[#FF6B6B] fill-current animate-pulse" aria-label="love" />
          <span>for Levi.</span>
        </div>
      </div>
    </div>
  </footer>
));

Footer.displayName = 'Footer';

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  
  const toggleDrawer = useCallback(() => {
    setIsDrawerOpen(prev => !prev);
  }, []);

  // Close drawer on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsDrawerOpen(false);
      }
    };
    
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  // Handle body scroll when drawer is open
  useEffect(() => {
    if (isDrawerOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isDrawerOpen]);
  
  return (
    <div className="min-h-screen flex flex-col">
      <SkipLink />
      
      <MobileNav 
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        currentPath={location.pathname}
      />

      {/* Main Navigation */}
      <nav className="fixed top-0 w-full bg-white border-b-2 border-black z-50" aria-label="Main navigation">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <Link 
            to="/"
            className="font-black text-lg sm:text-xl text-black hover:text-[#8338ec] transition px-3 sm:px-4 py-1 border-2 border-black rounded-lg neubrutalism-shadow active:translate-y-[2px] active:translate-x-[2px] active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]"
            aria-label="Home"
          >
            N — F
          </Link>
          {/* Mobile Menu Button */}
          <button
            className="sm:hidden p-2 hover:bg-black/5 rounded-lg transition"
            onClick={toggleDrawer}
            aria-expanded={isDrawerOpen}
            aria-label="Open navigation menu"
          >
            <Menu className="w-5 h-5" aria-hidden="true" />
          </button>
          {/* Desktop Navigation */}
          <div className="hidden sm:flex items-center gap-3 sm:gap-6">
            <Link 
              to="/blog" 
              className={`font-medium text-black hover:text-[#8338ec] transition text-sm sm:text-base
                ${location.pathname === '/blog' ? 'text-[#8338ec]' : ''}`}
              aria-current={location.pathname === '/blog' ? 'page' : undefined}
            >
              About
            </Link>
            <a 
              href="https://x.com/poweredbynolan" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-black hover:text-[#8338ec] font-medium transition text-sm sm:text-base"
            >
              Follow Me
            </a>
          </div>
        </div>
      </nav>

      <div className="flex-grow flex flex-col relative">
        <div className="fixed inset-0 grid-pattern" style={{ height: '200vh' }} aria-hidden="true" />
        <div className="fixed inset-0 grid-pattern-overlay" style={{ height: '200vh' }} aria-hidden="true" />
        
        {/* Main Content */}
        <main id="main-content" className="pt-20 flex-grow relative" role="main">
          {children}
        </main>

        <Footer />
      </div>

      {/* Drawer Backdrop */}
      {isDrawerOpen && (
        <div 
          className="fixed inset-0 bg-black/20 z-40 backdrop-blur-sm"
          aria-hidden="true"
          onClick={toggleDrawer}
        />
      )}
    </div>
  );
};

export default memo(Layout);