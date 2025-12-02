import React from 'react';
import { Sprout, ShieldCheck, Heart } from 'lucide-react';

export const Benefits: React.FC = () => {
  const benefits = [
    {
      icon: <Sprout className="w-8 h-8 text-jamu-accent" />,
      title: "Bahan 100% Alami",
      desc: "Dipetik langsung dari petani lokal, tanpa pengawet atau pemanis buatan."
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-jamu-secondary" />,
      title: "Higienis & Aman",
      desc: "Proses pembuatan modern namun tetap menjaga keaslian resep tradisional."
    },
    {
      icon: <Heart className="w-8 h-8 text-jamu-primary" />,
      title: "Dibuat dengan Cinta",
      desc: "Setiap botol diracik dengan ketelitian untuk rasa dan khasiat terbaik."
    }
  ];

  return (
    <section id="benefits" className="py-16 bg-white/60 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold text-jamu-dark mb-4">Mengapa Memilih Jamuku?</h2>
          <div className="w-24 h-1 bg-jamu-secondary mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="p-6 rounded-2xl bg-jamu-base/70 border border-jamu-primary/10 hover:border-jamu-secondary/30 transition-all duration-300 hover:shadow-md">
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-sm mb-4 border border-gray-100">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold text-jamu-dark mb-2">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {benefit.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};