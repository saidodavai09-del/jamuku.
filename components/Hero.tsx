import React from 'react';
import { ArrowRight } from 'lucide-react';
import { generateWhatsAppLink } from '../constants';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative py-16 md:py-24 overflow-hidden">
      {/* Background Decorative Elements - Simulating Batik Pattern */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-jamu-secondary/10 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 rounded-full bg-jamu-primary/10 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div className="text-center md:text-left space-y-6">
            <span className="inline-block px-4 py-1.5 rounded-full bg-jamu-accent/20 text-jamu-accent font-semibold text-sm tracking-wider uppercase border border-jamu-accent/30">
              100% Alami & Tradisional
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-jamu-dark leading-tight">
              Kembalikan Keseimbangan Tubuh dengan <span className="text-jamu-primary italic">Jamu Warisan.</span>
            </h1>
            <p className="text-lg text-jamu-dark/80 max-w-xl mx-auto md:mx-0 leading-relaxed">
              Resep leluhur yang diracik dengan penuh cinta. Tanpa bahan pengawet, hanya rempah pilihan untuk kesehatan Anda yang berharga.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
              <a
                href="#products"
                className="inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-full text-white bg-jamu-primary hover:bg-jamu-secondary transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 duration-200"
              >
                Pesan Sekarang
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href={generateWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-full text-jamu-primary bg-transparent border-2 border-jamu-primary hover:bg-jamu-primary/5 transition-all"
              >
                Konsultasi Dulu
              </a>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform rotate-2 hover:rotate-0 transition-transform duration-500">
               <img 
                 src="https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/4d9d290b-ff83-461f-bf9d-66119ee99b57_Go-Biz_20210726_234700.jpeg?auto=format" 
                 alt="Wanita minum jamu tradisional Indonesia" 
                 className="w-full h-full object-cover"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 bg-jamu-base p-4 rounded-xl shadow-xl border border-jamu-primary/20 hidden md:block">
              <p className="font-serif text-jamu-primary text-3xl font-bold">50+</p>
              <p className="text-sm text-jamu-dark/70">Tahun Resep<br/>Keluarga</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};