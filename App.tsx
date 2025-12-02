import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Benefits } from './components/Benefits';
import { ProductList } from './components/ProductList';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-jamu-base/90 backdrop-blur-[2px]">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Benefits />
        <ProductList />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

export default App;