import React from 'react';
import { Instagram, MessageCircle, Heart } from 'lucide-react';
import { BRAND_NAME, WHATSAPP_NUMBER } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-jamu-dark text-jamu-base py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Brand Info */}
          <div>
            <h3 className="text-2xl font-serif font-bold mb-4">{BRAND_NAME}</h3>
            <p className="text-jamu-base/70 mb-6 text-sm leading-relaxed">
              Menghadirkan kebaikan alam Nusantara dalam setiap tetesnya. 
              Melestarikan budaya minum jamu untuk generasi masa kini.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-jamu-base/60 hover:text-white transition-colors">
                <Instagram size={24} />
                <span className="sr-only">Instagram</span>
              </a>
              <a href={`https://wa.me/${WHATSAPP_NUMBER}`} className="text-jamu-base/60 hover:text-white transition-colors">
                <MessageCircle size={24} />
                <span className="sr-only">WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-jamu-secondary">Menu</h4>
            <ul className="space-y-2 text-sm text-jamu-base/70">
              <li><a href="#hero" className="hover:text-white transition-colors">Beranda</a></li>
              <li><a href="#benefits" className="hover:text-white transition-colors">Manfaat</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">Produk</a></li>
              <li><a href="#testimonials" className="hover:text-white transition-colors">Testimoni</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-jamu-secondary">Hubungi Kami</h4>
            <ul className="space-y-3 text-sm text-jamu-base/70">
              <li className="flex items-start">
                <span className="font-medium mr-2">WhatsApp:</span>
                <a href={`https://wa.me/${WHATSAPP_NUMBER}`} className="hover:text-white">
                  +62 838-6688-5035
                </a>
              </li>
              <li>
                <span className="font-medium">Lokasi:</span><br/>
                Tangerang Selatan, Indonesia
              </li>
              <li>
                <span className="font-medium">Jam Operasional:</span><br/>
                Senin - Sabtu (08.00 - 17.00)
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-jamu-base/10 mt-12 pt-8 text-center text-xs text-jamu-base/40">
          <p className="flex items-center justify-center gap-1">
            &copy; {new Date().getFullYear()} {BRAND_NAME}. Dibuat dengan <Heart size={12} className="text-red-500 fill-current" /> di Indonesia.
          </p>
        </div>
      </div>
    </footer>
  );
};