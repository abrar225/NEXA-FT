import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'What is AI?',
      answer: 'Artificial Intelligence (AI) refers to computer systems capable of performing tasks that typically require human intelligence. In art creation, AI uses machine learning algorithms trained on vast datasets to generate unique visual compositions based on user inputs and creative direction.'
    },
    {
      question: 'How can AI draw?',
      answer: 'AI drawing works through deep learning models, particularly Generative Adversarial Networks (GANs) and diffusion models. These systems learn patterns, styles, and techniques from millions of artworks, then apply this knowledge to create original pieces based on text descriptions, style references, or compositional guidelines provided by users.'
    },
    {
      question: 'Can AI replace artists?',
      answer: 'AI is not designed to replace artists but to augment human creativity. It serves as a powerful tool that expands artistic possibilities, speeds up ideation, and helps artists explore new styles. The creative vision, emotional depth, and intentional storytelling remain uniquely human qualities that AI complements rather than replaces.'
    }
  ];

  return (
    <section id="faq" className="w-full py-16 md:py-24 bg-muted-surface">
      <div className="max-w-[1280px] mx-auto px-8 md:px-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-widest uppercase mb-12 md:mb-16">
          We Know What You Think
        </h2>

        <div className="max-w-3xl">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-border py-6 first:pt-0 last:border-0"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex w-full items-center justify-between py-4 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 rounded"
              >
                <span className="text-xl md:text-2xl font-semibold text-primary pr-8">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-secondary transition-transform duration-200 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-200 ${
                  openIndex === index ? 'max-h-96 pt-2 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-base text-secondary leading-relaxed pr-8">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
