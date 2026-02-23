
import React from 'react';
import { motion, useSpring, useTransform, useInView } from 'framer-motion';
import { Target, Lightbulb, Users, Award } from 'lucide-react';
import LiquidButton from './LiquidButton';
import { ABOUT_CONTENT } from '../data/about';

const iconMap: Record<string, any> = {
    Award,
    Users,
    Target,
    Lightbulb,
};

const AnimatedCounter: React.FC<{ value: number; suffix?: string }> = ({ value, suffix = '' }) => {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const spring = useSpring(0, {
        mass: 1,
        stiffness: 100,
        damping: 30,
    });

    const displayValue = useTransform(spring, (current) =>
        Math.round(current).toLocaleString()
    );

    React.useEffect(() => {
        if (isInView) {
            spring.set(value);
        }
    }, [isInView, value, spring]);

    return (
        <span ref={ref}>
            <motion.span>{displayValue}</motion.span>
            {suffix}
        </span>
    );
};

const About: React.FC = () => {
    return (
        <section id="about" className="py-24 relative overflow-hidden bg-white transition-colors duration-300">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
                <div className="absolute top-20 left-10 w-64 h-64 bg-red-600 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-20 right-10 w-64 h-64 bg-blue-600 rounded-full blur-[120px]"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left Column: Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-block py-1 px-3 rounded-full bg-red-100 text-red-600 text-xs font-bold uppercase tracking-widest mb-4">
                            {ABOUT_CONTENT.badge}
                        </span>
                        <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight tracking-tighter text-gray-900 uppercase">
                            {ABOUT_CONTENT.title.main} <span className="text-red-600">{ABOUT_CONTENT.title.highlight}</span>{ABOUT_CONTENT.title.suffix}
                        </h2>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            {ABOUT_CONTENT.description}
                        </p>

                        <div className="grid grid-cols-2 gap-8 mb-10">
                            {ABOUT_CONTENT.stats.map((stat, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="flex flex-col"
                                >
                                    <span className="text-3xl md:text-5xl font-black text-red-600 mb-1">
                                        <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                                    </span>
                                    <span className="text-[10px] md:text-xs font-black text-gray-500 uppercase tracking-[0.2em] leading-tight max-w-[120px]">
                                        {stat.label}
                                    </span>
                                </motion.div>
                            ))}
                        </div>

                        <LiquidButton
                            className="bg-gray-900 !text-white"
                        >
                            Learn More About Us
                        </LiquidButton>
                    </motion.div>

                    {/* Right Column: Interactive Visuals */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="relative z-10 grid grid-cols-2 gap-4">
                            <div className="space-y-4">
                                {ABOUT_CONTENT.images.slice(0, 2).map((img, idx) => (
                                    <motion.div
                                        key={idx}
                                        whileHover={{ y: -10 }}
                                        className={`${img.class} rounded-3xl overflow-hidden shadow-2xl grayscale hover:grayscale-0 transition-all duration-500`}
                                    >
                                        <img src={img.url} alt={img.alt} className="w-full h-full object-cover" />
                                    </motion.div>
                                ))}
                            </div>
                            <div className="space-y-4 pt-8">
                                {ABOUT_CONTENT.images.slice(2, 4).map((img, idx) => (
                                    <motion.div
                                        key={idx}
                                        whileHover={{ y: -10 }}
                                        className={`${img.class} rounded-3xl overflow-hidden shadow-2xl grayscale hover:grayscale-0 transition-all duration-500`}
                                    >
                                        <img src={img.url} alt={img.alt} className="w-full h-full object-cover" />
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Floating Badge */}
                        <motion.div
                            animate={{ y: [0, -20, 0] }}
                            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                            className="absolute -top-10 -right-10 bg-red-600 text-white p-8 rounded-full shadow-2xl z-20 hidden md:block"
                        >
                            <div className="text-center">
                                <p className="text-4xl font-black">{ABOUT_CONTENT.floatingBadge.value}</p>
                                <p className="text-[10px] font-bold uppercase tracking-tighter">{ABOUT_CONTENT.floatingBadge.label}</p>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Vision & Mission Row */}
            <div className="max-w-7xl mx-auto px-4 mt-24">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {ABOUT_CONTENT.pillars.map((item, i) => {
                        const Icon = iconMap[item.icon];
                        return (
                            <motion.div
                                key={i}
                                whileHover={{ y: -10, backgroundColor: 'rgba(239, 68, 68, 0.05)' }}
                                className="p-8 rounded-3xl border border-gray-100 shadow-lg hover:shadow-2xl transition-all"
                            >
                                <Icon className="w-10 h-10 text-red-600 mb-6" />
                                <h3 className="text-xl font-black mb-4 text-gray-900 uppercase tracking-tight">{item.title}</h3>
                                <p className="text-gray-600 font-medium">{item.desc}</p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default About;
