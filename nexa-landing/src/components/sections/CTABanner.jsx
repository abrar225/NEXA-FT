import React from 'react';
import { Button } from '../ui/Button';

const CTABanner = () => {
  return (
    <section className="w-full py-16 md:py-24 bg-primary">
      <div className="max-w-[1280px] mx-auto px-8 md:px-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Left: Heading */}
          <div className="text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight text-surface">
              CREATE & SHARE
              <br />
              YOUR WORK NOW
            </h2>
          </div>

          {/* Right: CTA Button */}
          <div className="flex-shrink-0">
            <Button size="lg" className="bg-surface text-primary hover:bg-muted-surface hover:opacity-90 min-w-[200px]">
              Start Creating
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
