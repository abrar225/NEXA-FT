import React from 'react';
import { Button } from '../ui/Button';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const MeetTheArtist = () => {
  return (
    <section id="artists" className="w-full py-16 md:py-24 bg-muted-surface">
      <div className="max-w-[1280px] mx-auto px-8 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">
          {/* Left: Title and Navigation */}
          <div className="lg:col-span-3 flex flex-col justify-between">
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
                MEET THE
                <br />
                ARTIST
              </h2>
              <div className="w-24 h-[1px] bg-primary mt-6 mb-8" />
              
              <div className="flex flex-col space-y-4">
                <Button variant="outline" size="icon" className="rounded-full w-12 h-12">
                  <ArrowLeft className="w-5 h-5" />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full w-12 h-12">
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>

          {/* Center: Main Artwork */}
          <div className="lg:col-span-6">
            <div className="relative group overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1578301978693-85ea9ce2a244?w=800&h=900&fit=crop"
                alt="Featured artist artwork - Contemporary digital art"
                className="w-full h-[500px] md:h-[600px] object-cover transition-transform duration-300 group-hover:scale-102"
              />
            </div>
          </div>

          {/* Right: Secondary Content */}
          <div className="lg:col-span-3 flex flex-col">
            <div className="mb-6">
              <span className="text-xs uppercase tracking-widest text-secondary font-medium">
                Featured Artist
              </span>
              <p className="text-base text-secondary mt-3 leading-relaxed">
                Discover the visionaries behind the algorithms. Our featured artists 
                push the boundaries of what's possible with AI-assisted creation.
              </p>
            </div>
            
            <div className="flex-1 relative group overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1549490349-8643362247b5?w=400&h=500&fit=crop"
                alt="Secondary artwork - Abstract composition"
                className="w-full h-[300px] md:h-[400px] object-cover transition-transform duration-300 group-hover:scale-102"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetTheArtist;
