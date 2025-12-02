import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-white/60 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-serif font-bold text-center text-jamu-dark mb-16">
          Apa Kata Mereka?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="bg-white/80 p-8 rounded-2xl relative shadow-sm border border-jamu-primary/5">
              <Quote className="absolute top-6 left-6 text-jamu-primary/20 w-10 h-10" />
              <p className="text-jamu-dark/80 italic mb-6 relative z-10 pt-4">
                "{t.text}"
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-jamu-secondary/20 flex items-center justify-center text-jamu-secondary font-bold mr-3">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-jamu-dark text-sm">{t.name}</p>
                  <p className="text-xs text-gray-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};