import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import LiquidButton from './LiquidButton';
import { HERO_CONTENT } from '../data/hero';

const Hero: React.FC = () => {
  const scrollToSection = (href: string) => {
    const targetId = href.replace('#', '');
    const elem = document.getElementById(targetId);
    if (elem) {
      window.scrollTo({
        top: elem.offsetTop - 100,
        behavior: 'smooth'
      });
    }
  };

  return (
    // FIX: Increased padding-top (pt-32) so the fixed navbar doesn't cover the heading
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-32 pb-12 md:pt-40 lg:pt-32 overflow-hidden bg-white"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-red-50 -skew-x-12 transform translate-x-1/2 z-0 hidden lg:block"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Headline - Adjusted leading for better readability on mobile */}
          <h1 className="text-5xl md:text-8xl font-black text-gray-900 leading-[1.1] md:leading-[0.9] tracking-tighter mb-6 uppercase">
            {HERO_CONTENT.title.main} <br />
            <span className="text-red-600">{HERO_CONTENT.title.highlight}</span> <br />
            {HERO_CONTENT.title.suffix}
          </h1>

          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg font-medium leading-relaxed">
            {HERO_CONTENT.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <LiquidButton
              onClick={() => scrollToSection('#services')}
              className="bg-red-600 text-white"
            >
              Discover Services
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </LiquidButton>
            <LiquidButton
              onClick={() => scrollToSection('#about')}
              className="bg-white border-2 border-gray-200 !text-gray-900"
            >
              Our Process
            </LiquidButton>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Hero Image Container */}
          <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
            <img
              src={HERO_CONTENT.image}
              alt="TopTrending Team Working"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Stats Badge - Hidden on very small screens to avoid clutter */}
          <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-2xl z-20 hidden md:block border-l-4 border-red-600">
            <div className="text-4xl font-black text-red-600">{HERO_CONTENT.stats.value}</div>
            <div className="text-sm font-bold text-gray-500 uppercase tracking-widest">{HERO_CONTENT.stats.label}</div>
          </div>
        </motion.div>
      </div>

      {/* Vertical Tagline */}
      <div className="absolute bottom-10 left-10 hidden xl:block">
        <div className="rotate-90 origin-left text-[10px] font-bold tracking-[0.5em] text-gray-300 uppercase">
          {HERO_CONTENT.tagline}
        </div>
      </div>
    </section>
  );
};

export default Hero;