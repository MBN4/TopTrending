
import React from 'react';
import { Facebook, Instagram, Linkedin, ArrowUp } from 'lucide-react';
import { FOOTER_CONTENT } from '../data/footer';

const iconMap: Record<string, any> = {
  Facebook,
  Instagram,
  Linkedin,
  ArrowUp,
};
const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <a href="#" className="flex items-center mb-6">
              <img
                src="assets/images/logo.png"
                alt="TopTreandings Logo"
                className="h-10 w-auto object-contain brightness-0 invert"
              />
            </a>
            <p className="text-gray-400 font-medium mb-8 leading-relaxed">
              {FOOTER_CONTENT.description}
            </p>
            <div className="flex gap-4">
              {FOOTER_CONTENT.socialLinks.map((link, idx) => {
                const Icon = iconMap[link.icon];
                return (
                  <a key={idx} target="_blank" href={link.url} className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-red-600 hover:border-red-600 transition-all">
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-white uppercase tracking-widest">Navigation</h4>
            <ul className="space-y-4">
              {FOOTER_CONTENT.navigation.map((item, idx) => (
                <li key={idx}><a href={item.href} className="text-gray-400 hover:text-red-500 transition-colors">{item.label}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-white uppercase tracking-widest">Industry</h4>
            <ul className="space-y-4">
              {FOOTER_CONTENT.industryLinks.map((item, idx) => (
                <li key={idx}><a href={item.href} className="text-gray-400 hover:text-red-500 transition-colors">{item.label}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-white uppercase tracking-widest">Newsletter</h4>
            <p className="text-gray-400 mb-6 font-medium">{FOOTER_CONTENT.newsletter.text}</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Email address"
                className="bg-gray-800 border-none rounded-lg px-4 py-3 flex-grow text-sm focus:ring-1 focus:ring-red-500"
              />
              <button className="bg-red-600 p-3 rounded-lg hover:bg-red-700 transition-all">
                <ArrowUp size={20} className="rotate-45" />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-sm font-medium">
            {FOOTER_CONTENT.copyright}
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-gray-500 text-sm hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 text-sm hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
