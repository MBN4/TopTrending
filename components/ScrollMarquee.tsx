import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const ScrollMarquee: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Smooth out the scroll progress
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Row 1: Left to Right
  const xLeft = useTransform(smoothProgress, [0, 2], [-900, 900]);
  // Row 2: Right to Left
  const xRight = useTransform(smoothProgress, [0, 2], [900, -900]);

  const outlineStyle = {
    WebkitTextStroke: '1px #e5e7eb',
    color: 'transparent'
  };

  return (
    <section ref={containerRef} className="py-20 bg-white overflow-hidden select-none">
      <div className="flex flex-col gap-4 md:gap-8">
        
        {/* Row 1: Moves Left to Right */}
        <motion.div style={{ x: xLeft }} className="flex whitespace-nowrap gap-10">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex gap-10 items-center">
              <span className="text-6xl md:text-9xl font-black text-red-600 uppercase">
                Web Development
              </span>
              <span style={outlineStyle} className="text-6xl md:text-9xl font-black uppercase">
                Photography
              </span>
            </div>
          ))}
        </motion.div>

        {/* Row 2: Moves Right to Left */}
        <motion.div style={{ x: xRight }} className="flex whitespace-nowrap gap-10">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex gap-10 items-center">
              <span style={outlineStyle} className="text-6xl md:text-9xl font-black uppercase">
                Content Writing
              </span>
              <span className="text-6xl md:text-9xl font-black text-red-600 uppercase">
                SEO Services
              </span>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default ScrollMarquee;