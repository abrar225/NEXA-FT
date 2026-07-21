import React from 'react';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { Separator } from '../ui/Separator';

const Footer = () => {
  const companyLinks = ['About', 'Careers', 'Press', 'Blog'];
  const resourceLinks = ['Help Center', 'Guidelines', 'API', 'Status'];

  return (
    <footer className="w-full bg-muted-surface">
      <Separator />
      
      <div className="max-w-[1280px] mx-auto px-8 md:px-16 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Logo Column */}
          <div>
            <h3 className="text-xl font-extrabold tracking-tight text-primary mb-4">
              NEXA
            </h3>
            <p className="text-sm text-secondary leading-relaxed">
              Pioneering the future of AI-assisted artistic creation.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-secondary font-medium mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-base text-secondary hover:text-primary transition-colors duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-secondary font-medium mb-4">
              Resources
            </h4>
            <ul className="space-y-3">
              {resourceLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-base text-secondary hover:text-primary transition-colors duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-secondary font-medium mb-4">
              Newsletter
            </h4>
            <p className="text-sm text-secondary mb-4 leading-relaxed">
              Stay updated with our latest features and artwork.
            </p>
            <div className="flex space-x-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1"
              />
              <Button size="sm" className="flex-shrink-0">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-secondary">
              © 2025 NEXA. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-xs text-secondary hover:text-primary transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-xs text-secondary hover:text-primary transition-colors duration-200">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
