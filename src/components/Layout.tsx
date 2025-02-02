import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Heart, Menu, X } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const location = useLocation();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  
  const toggleDrawer = () => setIsDrawerOpen(prev => !prev);
  
  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.href = '/';
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      {/* Mobile Navigation Drawer */}
      <div 
        className={`fixed inset-x-0 top-0 z-50 transform transition-transform duration-300 ease-in-out
          ${isDrawerOpen ? 'translate-y-0' : '-translate-y-full'}`}
      >
        <div className="bg-white border-b-2 border-black">
          <div className="max-w-5xl mx-auto px-4">
            <div className="h-20 flex items-center justify-between">
              <a 
                href="/"
                onClick={handleLogoClick}
                className="font-black text-lg text-black hover:text-[#8338ec] transition"
              >
                N — F
              </a>
              <button
                onClick={toggleDrawer}
                className="p-2 hover:bg-black/5 rounded-lg transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <nav className="flex flex-col py-6">
              <Link 
                to="/blog" 
                className={`font-medium text-black hover:text-[#8338ec] transition py-4
                  ${location.pathname === '/blog' ? 'text-[#8338ec]' : ''}`}
                onClick={() => setIsDrawerOpen(false)}
              >
                About
              </Link>
              <a 
                href="https://x.com/poweredbynolan" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-black hover:text-[#8338ec] font-medium transition py-4"
                onClick={() => setIsDrawerOpen(false)}
              >
                Follow me
              </a>
            </nav>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isDrawerOpen && (
        <div 
          className="fixed inset-0 bg-black/20 z-40 backdrop-blur-sm"
          onClick={toggleDrawer}
        />
      )}

      {/* Main Navigation */}
      <nav className="fixed top-0 w-full bg-white border-b-2 border-black z-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <a 
            href="/"
            onClick={handleLogoClick}
            className="font-black text-lg sm:text-xl text-black hover:text-[#8338ec] transition px-3 sm:px-4 py-1 border-2 border-black rounded-lg neubrutalism-shadow active:translate-y-[2px] active:translate-x-[2px] active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]"
          >
            N — F
          </a>
          {/* Mobile Menu Button */}
          <button
            className="sm:hidden p-2 hover:bg-black/5 rounded-lg transition"
            onClick={toggleDrawer}
          >
            <Menu className="w-5 h-5" />
          </button>
          {/* Desktop Navigation */}
          <div className="hidden sm:flex items-center gap-3 sm:gap-6">
            <Link 
              to="/blog" 
              className={`font-medium text-black hover:text-[#8338ec] transition text-sm sm:text-base
                ${location.pathname === '/blog' ? 'text-[#8338ec]' : ''}`}
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
        <div className="fixed inset-0 grid-pattern" style={{ height: '200vh' }} />
        <div className="fixed inset-0 grid-pattern-overlay" style={{ height: '200vh' }} />
        <main className="pt-20 flex-grow relative">
          {children}
        </main>
        <footer className="relative w-full border-t-2 border-black bg-white mt-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6">
              <div className="text-sm sm:text-base text-gray-600">
                © {new Date().getFullYear()} N — F. All rights reserved.
              </div>
              <div className="flex items-center gap-2 text-sm sm:text-base">
                <span>Made with</span>
                <Heart className="w-4 h-4 text-[#FF6B6B] fill-current animate-pulse" />
                <span>for Levi.</span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}