import React from 'react';
import { Button } from '../ui/Button';
import { Separator } from '../ui/Separator';

const Hero = () => {
  const logos = [
    { name: 'OpenCircle', width: 120 },
    { name: 'Rain', width: 80 },
    { name: 'Loop', width: 90 },
    { name: 'Vertex', width: 100 },
    { name: 'Prism', width: 85 },
  ];

  return (
    <section className="w-full py-12 md:py-20">
      <div className="max-w-[1280px] mx-auto px-8 md:px-16">
        {/* Hero Headline */}
        <div className="mb-12 md:mb-16">
          <h2 className="text-5xl md:text-7xl lg:text-[88px] font-extrabold leading-[0.9] tracking-tight text-primary mb-6 md:mb-8">
            AI-POWERED
            <br />
            ARTISTIC
            <br />
            EXPRESSION
          </h2>
          
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 md:gap-0">
            <p className="text-lg md:text-xl text-secondary max-w-md leading-relaxed">
              Transform your creative vision into stunning artwork with our advanced AI platform. 
              Where technology meets artistic excellence.
            </p>
            
            <Button size="lg" className="self-start md:self-auto">
              Get Started
            </Button>
          </div>
        </div>

        <Separator className="mb-12 md:mb-16" />

        {/* Company Logos */}
        <div className="flex flex-wrap items-center justify-center md:justify-between gap-8 md:gap-12 opacity-60 grayscale">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center"
              style={{ width: `${logo.width}px` }}
            >
              <div className="h-8 md:h-10 bg-secondary/30 rounded flex items-center justify-center">
                <span className="text-xs uppercase tracking-widest text-secondary font-medium">
                  {logo.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
