
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LiquidButtonProps {
    children: React.ReactNode;
    onClick?: (e: React.MouseEvent) => void;
    className?: string;
    type?: 'button' | 'submit';
    href?: string;
}

const LiquidButton: React.FC<LiquidButtonProps> = ({ children, onClick, className = '', type = 'button', href }) => {
    const [isHovered, setIsHovered] = useState(false);

    const buttonContent = (
        <motion.button
            type={type}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={onClick}
            className={`relative overflow-hidden px-8 py-4 rounded-full font-black text-sm uppercase tracking-widest transition-all duration-300 group shadow-lg hover:shadow-red-600/30 ${className}`}
        >
            {/* Background and Liquid Effect */}
            <span className="absolute inset-0 bg-gray-900 transition-colors duration-300 group-hover:bg-red-700"></span>

            <AnimatePresence>
                {isHovered && (
                    <motion.span
                        initial={{ y: '100%' }}
                        animate={{ y: '-10%' }}
                        exit={{ y: '100%' }}
                        transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
                        className="absolute inset-0 bg-red-600 pointer-events-none"
                        style={{ borderRadius: '40% 40% 0 0' }}
                    >
                        {/* Wave Animation SVG Placeholder or CSS Wave */}
                        <svg className="absolute -top-10 left-0 w-[200%] h-20 fill-red-600 animate-wave opacity-50" viewBox="0 0 100 20">
                            <path d="M0 10 Q 25 20 50 10 T 100 10 V 20 H 0 Z" />
                        </svg>
                    </motion.span>
                )}
            </AnimatePresence>

            {/* Button Text */}
            <span className="relative z-10 flex items-center justify-center gap-2 group-hover:text-white text-white">
                {children}
            </span>
        </motion.button>
    );

    if (href) {
        return (
            <a href={href} className="inline-block">
                {buttonContent}
            </a>
        );
    }

    return buttonContent;
};

export default LiquidButton;
