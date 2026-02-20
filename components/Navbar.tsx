
import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_ITEMS } from '../data/navbar';
import LiquidButton from './LiquidButton';

interface NavbarProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.replace('#', '');
      const elem = document.getElementById(targetId);
      if (elem) {
        window.scrollTo({
          top: elem.offsetTop - 100,
          behavior: 'smooth'
        });
      }
      setIsOpen(false);
    }
  };

  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-6xl z-50">
      <nav className={`glass-dark rounded-full px-4 md:px-8 py-3 transition-all duration-300 shadow-xl ${scrolled ? 'scale-[0.98]' : 'scale-100'}`}>
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center shrink-0">
            <a href="#home" onClick={(e) => handleLinkClick(e, '#home')} className="flex items-center">
              <img
                src="assets/images/logo.png"
                alt="TopTreandings Logo"
                className="h-8 md:h-10 w-auto object-contain"
              />
            </a>
          </div>

          {/* Main Navigation - Visible on MD and up */}
          <div className="hidden md:flex items-center space-x-1 mx-4">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleLinkClick(e, item.href)}
                className="text-zinc-400 hover:text-red-500 px-3 py-2 text-[10px] lg:text-xs font-bold uppercase tracking-widest transition-colors whitespace-nowrap"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center space-x-2 md:space-x-4">
            {/* Theme Toggle - Always Visible */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-zinc-800 transition-colors relative overflow-hidden group"
              aria-label="Toggle Theme"
            >
              <motion.div
                initial={false}
                animate={{ rotate: theme === 'dark' ? 180 : 0 }}
                className="text-zinc-300 group-hover:text-red-600"
              >
                {theme === 'dark' ? <Moon size={18} /> : <Sun size={18} />}
              </motion.div>
            </button>

            {/* CTA Button - Visible on MD and up */}
            <LiquidButton
              onClick={() => {
                const elem = document.getElementById('contact');
                if (elem) window.scrollTo({ top: elem.offsetTop - 100, behavior: 'smooth' });
              }}
              className="hidden md:flex !bg-red-600 !text-white !px-5 !py-2 !text-[10px] lg:!text-xs"
            >
              HIRE US
            </LiquidButton>

            {/* Mobile Hamburger Toggle - ONLY visible on Mobile (< md) */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white p-2 hover:bg-zinc-800 rounded-full transition-colors"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="absolute top-20 left-0 right-0 glass-dark rounded-3xl p-6 shadow-2xl md:hidden overflow-hidden"
          >
            <div className="flex flex-col space-y-2">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-zinc-300 hover:text-red-500 block px-4 py-4 text-sm font-bold uppercase tracking-widest border-b border-zinc-800/50 last:border-0"
                  onClick={(e) => handleLinkClick(e, item.href)}
                >
                  {item.label}
                </a>
              ))}
              <LiquidButton
                onClick={() => {
                  const elem = document.getElementById('contact');
                  if (elem) window.scrollTo({ top: elem.offsetTop - 100, behavior: 'smooth' });
                  setIsOpen(false);
                }}
                className="w-full !bg-red-600 !text-white !py-4"
              >
                GET STARTED
              </LiquidButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
