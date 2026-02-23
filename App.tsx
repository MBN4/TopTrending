import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import InfiniteMarquee from './components/InfiniteMarquee';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import About from './components/About';
import ServicePage from './components/ServicePage';

import LiquidButton from './components/LiquidButton';
import { CTA_CONTENT } from './data/cta';

const Home: React.FC = () => (
  <>
    <Hero />
    <About />
    <InfiniteMarquee />
    <Gallery />

    {/* Dynamic CTA Section */}
    <section className="py-24 bg-red-600 dark:bg-red-700 text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight tracking-tighter uppercase leading-none">
          {CTA_CONTENT.title.main} <span className="underline decoration-white/30 italic">{CTA_CONTENT.title.highlight}</span>
        </h2>
        <p className="text-xl md:text-2xl text-red-100 max-w-2xl mx-auto mb-10 font-medium">
          {CTA_CONTENT.description}
        </p>
        <LiquidButton
          href={CTA_CONTENT.button.href}
          className="!bg-white !text-red-600 hover:scale-105 shadow-2xl uppercase tracking-widest font-bold"
        >
          {CTA_CONTENT.button.text}
        </LiquidButton>
      </div>
    </section>

    <Contact />
  </>
);

const App: React.FC = () => {
  const { pathname, hash } = useLocation();

  React.useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    } else {
      const targetId = hash.replace('#', '');
      setTimeout(() => {
        const elem = document.getElementById(targetId);
        if (elem) {
          window.scrollTo({
            top: elem.offsetTop - 100,
            behavior: 'smooth'
          });
        }
      }, 100);
    }
  }, [pathname, hash]);

  return (
    <div className="min-h-screen bg-white transition-colors duration-300 font-sans selection:bg-red-600 selection:text-white">
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services/:slug" element={<ServicePage />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
};

export default App;
