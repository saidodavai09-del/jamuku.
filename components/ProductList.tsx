import React from 'react';
import { PRODUCTS, generateWhatsAppLink } from '../constants';
import { Check, ShoppingBag } from 'lucide-react';

export const ProductList: React.FC = () => {
  return (
    <section id="products" className="py-20 relative bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-jamu-secondary font-semibold uppercase tracking-widest text-sm">Varian Favorit</span>
          <h2 className="text-4xl font-serif font-bold text-jamu-dark mt-2 mb-4">Pilihan Sehat Keluarga</h2>
          <p className="text-jamu-dark/80 font-medium">
            Tiga varian andalan kami yang siap menemani aktivitas harian Anda. 
            Dikemas praktis, siap minum.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {PRODUCTS.map((product) => (
            <div key={product.id} className="group bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg border border-jamu-primary/5 hover:border-jamu-secondary/50 transition-all duration-300 flex flex-col">
              
              {/* Product Image */}
              <div className="relative h-64 overflow-hidden bg-gray-100">
                <img 
                  src={product.image} 
                  alt={`Botol jamu ${product.name}`}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur text-jamu-primary font-bold px-3 py-1 rounded-full shadow-sm text-sm">
                  Rp {product.price.toLocaleString('id-ID')}
                </div>
              </div>

              {/* Product Content */}
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-2xl font-serif font-bold text-jamu-dark mb-2 group-hover:text-jamu-secondary transition-colors">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {product.description}
                </p>

                <div className="space-y-2 mb-6 flex-grow">
                  {product.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-500">
                      <Check className="w-4 h-4 text-jamu-accent mr-2 flex-shrink-0" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>

                <a 
                  href={generateWhatsAppLink(product.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full mt-auto flex items-center justify-center space-x-2 bg-jamu-dark text-white py-3 rounded-xl hover:bg-jamu-primary transition-colors duration-300 shadow-md hover:shadow-lg font-medium"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Order via WhatsApp</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};