export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  benefits: string[];
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  text: string;
}

export interface NavItem {
  label: string;
  href: string;
}