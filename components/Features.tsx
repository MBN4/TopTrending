
import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Rocket, Zap, Target } from 'lucide-react';
import { FEATURES } from '../data/features';

const iconMap: Record<string, any> = {
  TrendingUp,
  Rocket,
  Zap,
  Target,
};

const Features: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white dark:bg-zinc-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-red-600 font-bold tracking-widest text-sm uppercase mb-4"
          >
            What We Do
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight mb-16"
          >
            Empowering Your Business <br />with <span className="text-red-600 underline decoration-red-600/20">Market Authority</span>
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURES.map((feature, idx) => {
            const Icon = iconMap[feature.icon];
            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-gray-100 dark:border-zinc-800 hover:border-red-100 dark:hover:border-red-600/30 hover:shadow-2xl transition-all group"
              >
                <div className="w-14 h-14 bg-red-50 dark:bg-red-900/20 text-red-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-red-600 group-hover:text-white transition-all">
                  <Icon size={30} />
                </div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{feature.title}</h4>
                <p className="text-gray-500 dark:text-zinc-400 font-medium leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
