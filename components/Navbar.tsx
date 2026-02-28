import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { NAV_ITEMS, NavItem } from '../data/navbar';
import LiquidButton from './LiquidButton';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent, href: string) => {
    if (href.startsWith('#') || href.startsWith('/#')) {
      e.preventDefault();
      const targetId = href.includes('#') ? href.split('#')[1] : href;
      const elem = document.getElementById(targetId);
      if (elem) {
        window.scrollTo({ top: elem.offsetTop - 100, behavior: 'smooth' });
      } else if (pathname !== '/') {
        navigate('/' + (href.startsWith('/') ? href.substring(1) : href));
      }
      setIsOpen(false);
      setActiveDropdown(null);
    }
  };

  return (
    <div className="fixed top-6 inset-x-0 mx-auto w-[92%] md:w-[95%] max-w-6xl z-50">
      {/* Main Navbar Pill */}
      <nav className={`glass-dark relative rounded-full px-5 md:px-8 py-3 transition-all duration-300 shadow-xl border border-white/10 ${scrolled ? 'scale-[0.98]' : 'scale-100'}`}>
        <div className="flex justify-between items-center w-full">
          
          <div className="flex items-center shrink-0">
            <Link to="/" onClick={(e) => handleLinkClick(e, '#home')}>
              <img src="/assets/images/logo.png" alt="Logo" className="h-8 md:h-10 w-auto" />
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-1">
            {NAV_ITEMS.map((item: NavItem) => (
              <div
                key={item.label}
                onMouseEnter={() => item.isMega && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
                className="py-2"
              >
                <Link
                  to={item.href}
                  onClick={(e) => handleLinkClick(e, item.href)}
                  className={`flex items-center gap-1 px-3 py-1 text-[10px] lg:text-xs font-bold uppercase tracking-widest transition-colors ${
                    activeDropdown === item.label ? 'text-red-500' : 'text-zinc-400 hover:text-red-500'
                  }`}
                >
                  {item.label}
                  {item.isMega && (
                    <ChevronDown 
                      size={14} 
                      className={`transition-transform duration-300 ${activeDropdown === item.label ? 'rotate-180' : ''}`} 
                    />
                  )}
                </Link>
              </div>
            ))}
          </div>

          <div className="flex items-center space-x-2">
            <LiquidButton
              onClick={() => {
                const elem = document.getElementById('contact');
                if (elem) window.scrollTo({ top: elem.offsetTop - 100, behavior: 'smooth' });
              }}
              className="hidden md:flex !bg-red-600 !text-white !px-5 !py-2 !text-[10px]"
            >
              HIRE US
            </LiquidButton>

            <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white p-2">
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* MEGA MENU - Positioned absolute to the main nav pill for perfect centering */}
        <AnimatePresence>
          {activeDropdown && (
            <div 
              className="absolute left-0 right-0 top-full pt-4 hidden md:block"
              onMouseEnter={() => setActiveDropdown(activeDropdown)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              {NAV_ITEMS.filter(n => n.label === activeDropdown && n.isMega).map((item) => (
                <motion.div
                  key="mega-menu"
                  initial={{ opacity: 0, y: 10, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.98 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="mx-auto w-[98%] max-w-5xl bg-zinc-900/95 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] p-10 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] grid grid-cols-3 gap-10"
                >
                  {item.columns?.map((col, idx) => (
                    <div key={idx} className="flex flex-col space-y-5">
                      <h4 className="text-[11px] font-black text-red-500 uppercase tracking-[0.25em] border-b border-white/5 pb-4">
                        {col.title}
                      </h4>
                      <div className="space-y-3">
                        {col.items.map((sub) => (
                          <Link 
                            key={sub.label} 
                            to={sub.href}
                            className="group flex items-center gap-4 hover:bg-white/[0.03] p-3 -ml-3 rounded-2xl transition-all"
                            onClick={() => setActiveDropdown(null)}
                          >
                            <div className="p-2.5 bg-white/5 border border-white/10 rounded-xl group-hover:bg-red-600/10 group-hover:border-red-600/40 transition-all shadow-inner">
                              <sub.icon size={20} className="text-red-500 group-hover:scale-110 transition-transform" />
                            </div>
                            <div className="flex flex-col">
                              <div className="text-[11px] font-black text-white group-hover:text-red-500 transition-colors uppercase tracking-widest leading-tight">
                                {sub.label}
                              </div>
                              <div className="text-[9px] text-zinc-500 font-bold uppercase tracking-tighter mt-1 opacity-80 group-hover:opacity-100">
                                {sub.desc}
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </motion.div>
              ))}
            </div>
          )}
        </AnimatePresence>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-16 left-0 right-0 glass-dark rounded-[2rem] p-4 shadow-2xl md:hidden border border-white/10"
          >
            <div className="flex flex-col space-y-1 max-h-[70vh] overflow-y-auto no-scrollbar">
              {NAV_ITEMS.map((item) => (
                <div key={item.label}>
                  {item.isMega ? (
                    <>
                      <button 
                        onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)}
                        className="flex justify-between items-center w-full text-zinc-300 px-5 py-4 text-xs font-bold uppercase tracking-[0.2em] border-b border-white/5"
                      >
                        {item.label}
                        <ChevronDown size={16} className={mobileExpanded === item.label ? 'rotate-180' : ''} />
                      </button>
                      <AnimatePresence>
                        {mobileExpanded === item.label && (
                          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden bg-white/5 rounded-2xl mx-2 my-2">
                            {item.columns?.map(col => col.items.map(sub => (
                              <Link key={sub.label} to={sub.href} className="block px-6 py-3 text-[10px] font-bold text-zinc-400 uppercase tracking-widest" onClick={() => setIsOpen(false)}>
                                {sub.label}
                              </Link>
                            )))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link to={item.href} className="text-zinc-300 block px-5 py-4 text-xs font-bold uppercase tracking-[0.2em] border-b border-white/5 last:border-0" onClick={(e) => handleLinkClick(e, item.href)}>
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;