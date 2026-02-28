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
    <section
      id="home"
      className="relative min-h-screen flex items-start pt-40 pb-12 md:pt-48 lg:pt-56 overflow-hidden bg-white"
    >
      <div className="absolute top-0 right-0 w-1/4 h-full bg-red-50 -skew-x-12 transform translate-x-1/3 z-0 hidden lg:block"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[58px] font-black text-[#0f172a] leading-[1.1] tracking-tight mb-6 uppercase">
            {HERO_CONTENT.title.main} <br />
            <span className="text-[#e11d48]">{HERO_CONTENT.title.highlight}</span> <br />
            {HERO_CONTENT.title.suffix}
          </h1>

          <p className="text-base md:text-lg text-gray-600 mb-10 max-w-lg font-medium leading-relaxed">
            {HERO_CONTENT.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <LiquidButton
              onClick={() => scrollToSection('#services')}
              className="bg-[#0f172a] text-white px-8 py-4 flex items-center justify-center gap-3 group"
            >
              DISCOVER SERVICES
              <motion.span
                animate={{ x: [0, 6, 0] }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 1.2, 
                  ease: "easeInOut" 
                }}
              >
                <ArrowRight size={20} />
              </motion.span>
            </LiquidButton>
            
            <LiquidButton
              onClick={() => scrollToSection('#about')}
              className="bg-white border-2 border-gray-200 text-[#0f172a] px-8 py-4 flex items-center justify-center"
            >
              OUR PROCESS
            </LiquidButton>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative mt-12 lg:mt-0"
        >
          <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={HERO_CONTENT.image}
              alt="Team collaboration"
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="absolute -bottom-6 -left-4 sm:-bottom-8 sm:-left-6 bg-white p-4 sm:p-6 rounded-xl shadow-2xl z-20 border-l-[5px] border-[#e11d48]">
            <div className="text-3xl sm:text-4xl font-black text-[#e11d48] leading-none mb-1">
              {HERO_CONTENT.stats.value}
            </div>
            <div className="text-[9px] sm:text-[10px] font-bold text-gray-500 uppercase tracking-widest">
              {HERO_CONTENT.stats.label}
            </div>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-12 left-8 hidden xl:block">
        <div className="rotate-90 origin-left text-[11px] font-black tracking-[0.6em] text-gray-200 uppercase whitespace-nowrap">
          {HERO_CONTENT.tagline}
        </div>
      </div>
    </section>
  );
};

export default Hero;