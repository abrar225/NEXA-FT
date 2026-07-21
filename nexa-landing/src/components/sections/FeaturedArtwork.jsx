import React from 'react';
import { Separator } from '../ui/Separator';

const FeaturedArtwork = () => {
  return (
    <section id="featured" className="w-full py-16 md:py-24">
      <div className="max-w-[1280px] mx-auto px-8 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          {/* Left: Large Artwork Image */}
          <div className="relative group">
            <div className="overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=800&h=600&fit=crop"
                alt="Featured AI artwork - Abstract digital painting"
                className="w-full h-[400px] md:h-[500px] object-cover transition-transform duration-300 group-hover:scale-102"
              />
            </div>
          </div>

          {/* Right: Content */}
          <div className="flex flex-col justify-center space-y-6 md:space-y-8">
            <div>
              <span className="text-xs uppercase tracking-widest text-secondary font-medium">
                Featured Collection
              </span>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3 md:mt-4 leading-tight">
                Digital Renaissance
              </h3>
              <p className="text-base md:text-lg text-secondary mt-4 md:mt-6 leading-relaxed max-w-md">
                Explore the intersection of classical art techniques and modern AI technology. 
                Our curated collection showcases the future of digital creativity.
              </p>
            </div>

            <Separator />

            {/* Statistics */}
            <div className="grid grid-cols-2 gap-8 pt-4">
              <div>
                <div className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-primary leading-none">
                  120K
                </div>
                <div className="text-sm uppercase tracking-widest text-secondary mt-2">
                  Artworks Created
                </div>
              </div>
              <div>
                <div className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-primary leading-none">
                  140+
                </div>
                <div className="text-sm uppercase tracking-widest text-secondary mt-2">
                  Featured Artists
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedArtwork;
