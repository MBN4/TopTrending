import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    Palette, Target, BookOpen, Package, ShoppingBag, Printer,
    FileText, Layout, Maximize, Calendar, Users, Settings,
    ShoppingCart, Zap, Truck, Code, Database, FastForward,
    Camera, Video, Wind, Mic, Search, Share2, PenTool, Globe,
    MessageSquare, ArrowLeft, Smartphone, Cpu
} from 'lucide-react';
import { SERVICES_DATA } from '../data/services';
import LiquidButton from './LiquidButton';

const iconMap: { [key: string]: any } = {
    Palette, Target, BookOpen, Package, ShoppingBag, Printer,
    FileText, Layout, Maximize, Calendar, Users, Settings,
    ShoppingCart, Zap, Truck, Code, Database, FastForward,
    Camera, Video, Wind, Mic, Search, Share2, PenTool, Globe,
    MessageSquare, Smartphone, Cpu
};

const ServicePage: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const service = SERVICES_DATA.find(s => s.slug === slug);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [slug]);

    if (!service) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-white pt-24">
                <div className="text-center p-8 bg-zinc-50 rounded-[2.5rem] border border-zinc-100 shadow-xl max-w-md mx-4">
                    <h1 className="text-3xl font-black text-gray-900 mb-6 uppercase tracking-tight">Service Not Found</h1>
                    <p className="text-gray-500 mb-8 font-medium">The service page you are looking for doesn't exist or has been moved.</p>
                    <Link to="/" className="text-red-600 font-bold hover:text-red-700 flex items-center justify-center gap-2 transition-colors uppercase tracking-widest text-sm">
                        <ArrowLeft size={18} /> Back to Homepage
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-white">
            <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src={service.bannerImage}
                        alt={service.title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px]"></div>
                </div>

                <div className="relative z-10 max-w-5xl mx-auto px-4 text-center mt-20">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-block px-4 py-1.5 rounded-full bg-red-600 text-white text-[10px] font-black tracking-[0.3em] uppercase mb-8 shadow-lg shadow-red-600/20">
                            Professional Solutions
                        </span>
                        <h1 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter uppercase leading-[0.9]">
                            {service.title}
                        </h1>
                        <p className="text-lg md:text-xl text-gray-200 font-bold max-w-3xl mx-auto leading-relaxed uppercase tracking-wide opacity-90">
                            {service.tagline}
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="py-32 px-4 bg-zinc-50">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="lg:sticky lg:top-32"
                        >
                            <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-10 leading-[1.1] uppercase tracking-tighter">
                                Redefining the <br /> <span className="text-red-600">Standard</span> of Success.
                            </h2>
                            <p className="text-lg text-gray-600 mb-12 leading-loose font-medium">
                                {service.description}
                            </p>
                            <LiquidButton 
                                onClick={() => {
                                    const elem = document.getElementById('contact');
                                    if(elem) window.scrollTo({ top: elem.offsetTop - 100, behavior: 'smooth'});
                                }}
                                className="!bg-red-600 !text-white !px-10 !py-4 !text-sm !font-black !tracking-widest"
                            >
                                START YOUR PROJECT
                            </LiquidButton>
                        </motion.div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            {service.features.map((feature, idx) => {
                                const Icon = iconMap[feature.icon] || Settings;
                                return (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                                        className="p-10 bg-white rounded-[2.5rem] shadow-xl hover:shadow-2xl transition-all border border-zinc-100 group"
                                    >
                                        <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-red-600 group-hover:scale-110 transition-all duration-300">
                                            <Icon className="text-red-600 group-hover:text-white transition-colors" size={26} />
                                        </div>
                                        <h3 className="text-xl font-black text-gray-900 mb-4 uppercase tracking-tight">{feature.title}</h3>
                                        <p className="text-gray-500 font-medium text-sm leading-relaxed">{feature.desc}</p>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {service.sections.map((section, idx) => (
                <section key={idx} className="py-32 px-4 bg-white">
                    <div className="max-w-5xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-10 uppercase tracking-tighter leading-none">
                                {section.title}
                            </h2>
                            <div className="w-24 h-2 bg-red-600 mx-auto mb-14 rounded-full"></div>
                            <p className="text-2xl md:text-4xl text-gray-400 leading-tight italic font-black uppercase tracking-tight">
                                "{section.content}"
                            </p>
                        </motion.div>
                    </div>
                </section>
            ))}

            <section className="py-32 bg-zinc-900 text-white text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-red-600/10 opacity-50"></div>
                <div className="max-w-4xl mx-auto px-4 relative z-10">
                    <h2 className="text-5xl md:text-7xl font-black mb-12 leading-[1.1] tracking-tighter uppercase">
                        Ready to take the <br /> <span className="text-red-600 italic">Next Step?</span>
                    </h2>
                    <LiquidButton 
                         onClick={() => {
                            const elem = document.getElementById('contact');
                            if(elem) window.scrollTo({ top: elem.offsetTop - 100, behavior: 'smooth'});
                        }}
                        className="!bg-red-600 !text-white !px-16 !py-6 uppercase font-black tracking-widest text-lg shadow-2xl hover:scale-105"
                    >
                        Let's Collaborate
                    </LiquidButton>
                </div>
            </section>
        </div>
    );
};

export default ServicePage;