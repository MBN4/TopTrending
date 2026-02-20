
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import InfiniteMarquee from './components/InfiniteMarquee';
import Features from './components/Features';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import About from './components/About';

import LiquidButton from './components/LiquidButton';
import { CTA_CONTENT } from './data/cta';

const App: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 transition-colors duration-300 font-sans selection:bg-red-600 selection:text-white">
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      <main>
        <Hero />
        <About />
        <InfiniteMarquee />
        <Features />
        <Gallery />

        {/* Dynamic CTA Section */}
        <section className="py-24 bg-red-600 dark:bg-red-700 text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight tracking-tighter">
              {CTA_CONTENT.title.main} <span className="underline decoration-white/30 italic">{CTA_CONTENT.title.highlight}</span>
            </h2>
            <p className="text-xl md:text-2xl text-red-100 max-w-2xl mx-auto mb-10 font-medium">
              {CTA_CONTENT.description}
            </p>
            <LiquidButton
              href={CTA_CONTENT.button.href}
              className="!bg-white !text-red-600 hover:scale-105 shadow-2xl"
            >
              {CTA_CONTENT.button.text}
            </LiquidButton>
          </div>
        </section>

        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default App;
