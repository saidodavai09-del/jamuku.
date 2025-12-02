import { Product, Testimonial, NavItem } from './types';

export const WHATSAPP_NUMBER = "6283866885035";
export const BRAND_NAME = "Jamuku";

export const generateWhatsAppLink = (productName?: string) => {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  const text = productName 
    ? `Halo ${BRAND_NAME}, saya tertarik untuk memesan ${productName}. Bisa dibantu?`
    : `Halo ${BRAND_NAME}, saya ingin bertanya seputar produk jamu.`;
  return `${base}?text=${encodeURIComponent(text)}`;
};

export const NAV_ITEMS: NavItem[] = [
  { label: "Beranda", href: "#hero" },
  { label: "Manfaat", href: "#benefits" },
  { label: "Produk", href: "#products" },
  { label: "Testimoni", href: "#testimonials" },
];

export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'Kunyit Asam Segar',
    description: 'Perpaduan sempurna kunyit pilihan dan asam jawa. Rasanya segar, nikmat diminum dingin maupun hangat.',
    price: 15000,
    benefits: ['Melancarkan haid', 'Detoksifikasi alami', 'Menyegarkan badan'],
    image: 'https://cdn.rri.co.id/berita/Kupang/o/1756480384533-6649627b8ccc8/zxmugh771usa1ax.jpeg'
  },
  {
    id: 'p2',
    name: 'Beras Kencur',
    description: 'Racikan beras organik dan kencur wangi. Tekstur lembut dengan rasa manis dan sedikit pedas yang menghangatkan.',
    price: 18000,
    benefits: ['Meredakan pegal linu', 'Menambah stamina', 'Meredakan batuk'],
    image: 'https://assets-cloudflare.segari-ops.id/recipes/jamu-beras-kencur-lsbcaxdv206k1.jpg'
  },
  {
    id: 'p3',
    name: 'Temulawak',
    description: 'Ekstrak temulawak asli tanpa bahan pengawet. Pahit sedikit namun khasiatnya luar biasa untuk kesehatan organ dalam.',
    price: 16000,
    benefits: ['Menjaga fungsi hati', 'Menambah nafsu makan', 'Memperbaiki pencernaan'],
    image: 'https://cdn.rri.co.id/berita/Palangkaraya/o/1727065715549-Jamu-Temulawak/de095i53822lkan.jpeg'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Sari Wulandari',
    role: 'Ibu Rumah Tangga',
    text: 'Sejak rutin minum Kunyit Asam dari Jamuku, badan rasanya enteng banget. Rasanya pas, nggak terlalu manis.'
  },
  {
    id: 't2',
    name: 'Budi Santoso',
    role: 'Pekerja Kantor',
    text: 'Beras Kencurnya juara! Pegal-pegal hilang setelah seharian duduk di kantor. Pengiriman juga cepat.'
  },
  {
    id: 't3',
    name: 'Ratna Dewi',
    role: 'Mahasiswi',
    text: 'Kemasan botolnya higienis dan estetik. Suka banget bawa buat bekal kuliah biar tetep fit.'
  }
];