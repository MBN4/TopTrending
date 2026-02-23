import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    Palette, Target, BookOpen, Package, ShoppingBag, Printer,
    FileText, Layout, Maximize, Calendar, Users, Settings,
    ShoppingCart, Zap, Truck, Code, Database, FastForward,
    Camera, Video, Wind, Mic, Search, Share2, PenTool, Globe,
    MessageSquare, ArrowLeft
} from 'lucide-react';
import { SERVICES_DATA } from '../data/services';
import LiquidButton from './LiquidButton';

const iconMap: { [key: string]: any } = {
    Palette, Target, BookOpen, Package, ShoppingBag, Printer,
    FileText, Layout, Maximize, Calendar, Users, Settings,
    ShoppingCart, Zap, Truck, Code, Database, FastForward,
    Camera, Video, Wind, Mic, Search, Share2, PenTool, Globe,
    MessageSquare
};

const ServicePage: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const service = SERVICES_DATA.find(s => s.slug === slug);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    if (!service) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-white">
                <div className="text-center">
                    <h1 className="text-4xl font-black text-gray-900 mb-4">Service Not Found</h1>
                    <Link to="/" className="text-red-600 font-bold hover:underline flex items-center justify-center gap-2">
                        <ArrowLeft size={20} /> Back to Home
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-white">
            {/* Huge Hero Banner */}
            <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src={service.bannerImage}
                        alt={service.title}
                        className="w-full h-full object-cover scale-105"
                    />
                    <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"></div>
                </div>

                <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-block px-4 py-1 rounded-full bg-red-600 text-white text-xs font-bold tracking-widest uppercase mb-6">
                            Our Expertise
                        </span>
                        <h1 className="text-5xl md:text-8xl font-black text-white mb-6 tracking-tighter uppercase leading-none">
                            {service.title}
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-200 font-medium max-w-3xl mx-auto leading-relaxed">
                            {service.tagline}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Intro & Features */}
            <section className="py-24 px-4 bg-zinc-50">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-8 leading-tight uppercase">
                                Redefining the standard of <span className="text-red-600">Excellence.</span>
                            </h2>
                            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                                {service.description}
                            </p>
                            <LiquidButton href="#contact" className="!bg-red-600 !text-white !px-8">
                                Start Your Project
                            </LiquidButton>
                        </motion.div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {service.features.map((feature, idx) => {
                                const Icon = iconMap[feature.icon] || Settings;
                                return (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                                        className="p-8 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all border border-zinc-100 group"
                                    >
                                        <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-red-600 transition-colors">
                                            <Icon className="text-red-600 group-hover:text-white transition-colors" size={24} />
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                                        <p className="text-gray-500 text-sm leading-relaxed">{feature.desc}</p>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* Dynamic Sections */}
            {service.sections.map((section, idx) => (
                <section key={idx} className={`py-24 px-4 ${idx % 2 === 0 ? 'bg-white' : 'bg-white'}`}>
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-8 uppercase tracking-tighter">
                                {section.title}
                            </h2>
                            <div className="w-20 h-1.5 bg-red-600 mx-auto mb-10 rounded-full"></div>
                            <p className="text-xl text-gray-600 leading-loose italic font-medium">
                                "{section.content}"
                            </p>
                        </motion.div>
                    </div>
                </section>
            ))}

            {/* CTA Section */}
            <section className="py-24 bg-red-600 text-white text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 to-transparent"></div>
                <div className="max-w-4xl mx-auto px-4 relative z-10">
                    <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight tracking-tighter uppercase">
                        Ready to take the <br /> <span className="underline decoration-white/30 italic">Next Step?</span>
                    </h2>
                    <LiquidButton href="/#contact" className="!bg-white !text-red-600 !px-12 !py-5 uppercase font-black tracking-widest text-lg">
                        Let's Collaborate
                    </LiquidButton>
                </div>
            </section>
        </div>
    );
};

export default ServicePage;
