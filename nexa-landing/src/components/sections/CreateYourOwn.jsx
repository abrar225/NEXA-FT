import React from 'react';
import { Check } from 'lucide-react';

const CreateYourOwn = () => {
  const steps = [
    'Describe your art',
    'Add sample image',
    'Add more details',
    'Save & share',
  ];

  return (
    <section id="create" className="w-full py-16 md:py-24">
      <div className="max-w-[1280px] mx-auto px-8 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 md:mb-8">
              CREATE YOUR
              <br />
              OWN ART
            </h2>
            
            <p className="text-lg text-secondary leading-relaxed mb-8 max-w-md">
              Unleash your creativity with our intuitive AI-powered tools. 
              From concept to masterpiece in minutes.
            </p>

            {/* Checklist */}
            <ul className="space-y-4 mb-8 md:mb-12">
              {steps.map((step, index) => (
                <li key={index} className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                    <Check className="w-4 h-4 text-surface" />
                  </div>
                  <span className="text-base md:text-lg text-primary">{step}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Vertical Artwork */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative group overflow-hidden rounded-lg border border-border">
              <img
                src="https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?w=500&h=700&fit=crop"
                alt="Create your own AI art - Vertical composition"
                className="w-[300px] md:w-[400px] h-[450px] md:h-[600px] object-cover transition-transform duration-300 group-hover:scale-102"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreateYourOwn;
