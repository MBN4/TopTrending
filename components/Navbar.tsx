import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { NAV_ITEMS } from '../data/navbar';
import LiquidButton from './LiquidButton';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('/#') || (href.startsWith('#') && pathname === '/')) {
      e.preventDefault();
      const targetId = href.split('#')[1];

      if (pathname !== '/') {
        navigate('/#' + targetId);
      } else {
        const elem = document.getElementById(targetId);
        if (elem) {
          window.scrollTo({
            top: elem.offsetTop - 100,
            behavior: 'smooth'
          });
        }
      }
      setIsOpen(false);
      setActiveDropdown(null);
    }
  };

  return (
    <div className="fixed top-6 inset-x-0 mx-auto w-[92%] md:w-[95%] max-w-6xl z-50">
      <nav className={`glass-dark rounded-full px-5 md:px-8 py-3 transition-all duration-300 shadow-xl border border-white/10 ${scrolled ? 'scale-[0.98]' : 'scale-100'}`}>
        <div className="flex justify-between items-center w-full">

          <div className="flex items-center shrink-0">
            <Link to="/" onClick={(e) => handleLinkClick(e, '#home')} className="flex items-center">
              <img
                src="/assets/images/logo.png"
                alt="TopTrending Logo"
                className="h-8 md:h-10 w-auto object-contain"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 mx-4">
            {NAV_ITEMS.map((item) => (
              <div
                key={item.label}
                className="relative group"
                onMouseEnter={() => item.children && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {item.children ? (
                  <button className="flex items-center gap-1 text-zinc-400 hover:text-red-500 px-3 py-2 text-[10px] lg:text-xs font-bold uppercase tracking-widest transition-colors">
                    {item.label}
                    <ChevronDown size={14} className={`transition-transform duration-300 ${activeDropdown === item.label ? 'rotate-180' : ''}`} />
                  </button>
                ) : (
                  <Link
                    to={item.href}
                    onClick={(e) => handleLinkClick(e, item.href)}
                    className="text-zinc-400 hover:text-red-500 px-3 py-2 text-[10px] lg:text-xs font-bold uppercase tracking-widest transition-colors"
                  >
                    {item.label}
                  </Link>
                )}

                {/* Dropdown Menu */}
                {item.children && (
                  <AnimatePresence>
                    {activeDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-64 bg-zinc-900/95 backdrop-blur-xl border border-white/10 rounded-2xl p-2 shadow-2xl"
                      >
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            to={child.href}
                            className="block px-4 py-3 text-[10px] font-bold text-zinc-400 hover:text-white hover:bg-white/5 rounded-xl transition-all uppercase tracking-widest"
                            onClick={() => {
                              setActiveDropdown(null);
                              setIsOpen(false);
                            }}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>

          <div className="flex items-center space-x-2 md:space-x-4">
            <LiquidButton
              onClick={() => {
                if (pathname !== '/') {
                  navigate('/#contact');
                } else {
                  const elem = document.getElementById('contact');
                  if (elem) window.scrollTo({ top: elem.offsetTop - 100, behavior: 'smooth' });
                }
              }}
              className="hidden md:flex !bg-red-600 !text-white !px-5 !py-2 !text-[10px] lg:!text-xs"
            >
              HIRE US
            </LiquidButton>

            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white p-2 hover:bg-zinc-800/50 rounded-full transition-colors"
                aria-label="Toggle Menu"
              >
                {isOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-16 left-0 right-0 glass-dark rounded-[2rem] p-4 shadow-2xl md:hidden border border-white/10 overflow-y-auto max-h-[80vh]"
          >
            <div className="flex flex-col space-y-1">
              {NAV_ITEMS.map((item) => (
                <div key={item.label} className="flex flex-col">
                  {item.children ? (
                    <>
                      <div className="text-zinc-500 px-5 py-4 text-[10px] font-black uppercase tracking-[0.2em] border-b border-zinc-800/50">
                        {item.label}
                      </div>
                      <div className="pl-4 flex flex-col">
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            to={child.href}
                            className="text-zinc-300 hover:text-red-500 block px-5 py-3 text-[10px] font-bold uppercase tracking-[0.1em] border-b border-zinc-800/30 last:border-0"
                            onClick={() => setIsOpen(false)}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </>
                  ) : (
                    <Link
                      to={item.href}
                      className="text-zinc-300 hover:text-red-500 block px-5 py-4 text-xs font-bold uppercase tracking-[0.2em] border-b border-zinc-800/50 last:border-0"
                      onClick={(e) => handleLinkClick(e, item.href)}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-2">
                <LiquidButton
                  onClick={() => {
                    if (pathname !== '/') {
                      navigate('/#contact');
                    } else {
                      const elem = document.getElementById('contact');
                      if (elem) window.scrollTo({ top: elem.offsetTop - 100, behavior: 'smooth' });
                    }
                    setIsOpen(false);
                  }}
                  className="w-full !bg-red-600 !text-white !py-4 !text-xs !tracking-widest"
                >
                  GET STARTED
                </LiquidButton>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;