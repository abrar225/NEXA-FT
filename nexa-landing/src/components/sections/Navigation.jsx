import React from 'react';
import { Button } from '../ui/Button';
import { Separator } from '../ui/Separator';

const Navigation = () => {
  return (
    <header className="w-full">
      <nav className="max-w-[1280px] mx-auto px-8 md:px-16 py-6">
        <div className="flex items-center justify-between">
          {/* Left Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#featured" className="text-xs uppercase tracking-widest text-secondary hover:opacity-70 transition-opacity duration-200">
              Featured
            </a>
            <a href="#artists" className="text-xs uppercase tracking-widest text-secondary hover:opacity-70 transition-opacity duration-200">
              Artists
            </a>
          </div>

          {/* Logo */}
          <div className="flex-1 flex justify-center">
            <h1 className="text-2xl font-extrabold tracking-tight text-primary">
              NEXA
            </h1>
          </div>

          {/* Right Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#create" className="text-xs uppercase tracking-widest text-secondary hover:opacity-70 transition-opacity duration-200">
              Create
            </a>
            <a href="#faq" className="text-xs uppercase tracking-widest text-secondary hover:opacity-70 transition-opacity duration-200">
              FAQ
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </Button>
          </div>
        </div>
      </nav>
      <Separator className="max-w-[1280px] mx-auto" />
    </header>
  );
};

export default Navigation;
