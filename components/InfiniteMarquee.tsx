
import React from 'react';
import { BRANDS } from '../data/brands';

const InfiniteMarquee: React.FC = () => {
  // Duplicate the brands array to create a seamless loop
  const brandsList = [...BRANDS, ...BRANDS, ...BRANDS, ...BRANDS];

  return (
    <section className="py-16 bg-gray-50 dark:bg-zinc-900/50 overflow-hidden border-y border-gray-100 dark:border-zinc-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 mb-10 text-center">
        <h3 className="text-[10px] md:text-xs font-black text-gray-400 dark:text-zinc-500 uppercase tracking-[0.4em]">
          TRUSTED BY GLOBAL INNOVATORS
        </h3>
      </div>

      <div className="relative flex items-center pause-on-hover">
        {/* The Marquee Container */}
        <div className="flex animate-marquee whitespace-nowrap">
          {brandsList.map((brand, idx) => (
            <div
              key={`${brand.id}-${idx}`}
              className="flex-shrink-0 px-10 md:px-20 group transition-all duration-300"
            >
              <div className="relative w-36 md:w-56 h-20 md:h-28 flex items-center justify-center">
                <img
                  src={brand.logo}
                  alt={brand.name}
                  style={brand.scale ? { transform: `scale(${brand.scale})` } : undefined}
                  className="h-full w-auto object-contain transition-all duration-500 
                             filter grayscale opacity-30 group-hover:grayscale-0 group-hover:opacity-100 
                             group-hover:scale-110 dark:invert dark:group-hover:invert-0"
                />

                {/* Visual indicator for color activation */}
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full opacity-0 group-hover:opacity-100"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfiniteMarquee;
