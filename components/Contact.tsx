import React, { useState } from 'react';
import { Mail, Phone, Send } from 'lucide-react';
import { motion } from 'framer-motion';
import LiquidButton from './LiquidButton';
import { CONTACT_INFO } from '../data/contact';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // WhatsApp Integration
    const phoneNumber = CONTACT_INFO.whatsapp;
    const whatsappMessage = `*New Lead from TopTreandings*%0A%0A*Name:* ${formData.name}%0A*Email:* ${formData.email}%0A*Message:* ${formData.message}`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;

    // Gmail Integration (To be implemented by the user)
    console.log('Gmail integration should happen here for:', formData.email);
    // Suggestion: Use EmailJS, Formspree, or a custom backend for Gmail.

    // Redirect to WhatsApp
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact" className="py-24 bg-white dark:bg-zinc-950 relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-black text-gray-900 dark:text-white mb-6 tracking-tighter">
              LET'S DEFINE THE <br /><span className="text-red-600">FUTURE TOGETHER.</span>
            </h2>
            <p className="text-xl text-gray-500 dark:text-zinc-400 mb-12 leading-relaxed">
              Have a visionary project in mind? We're ready to help you navigate the next wave of industry trends.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 bg-red-50 dark:bg-zinc-900 text-red-600 rounded-full flex items-center justify-center shrink-0 shadow-sm">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-zinc-300 uppercase text-xs tracking-widest mb-1">Email Us</h4>
                  <p className="text-lg text-gray-600 dark:text-zinc-400 font-medium">{CONTACT_INFO.email}</p>
                </div>
              </div>
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 bg-red-50 dark:bg-zinc-900 text-red-600 rounded-full flex items-center justify-center shrink-0 shadow-sm">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-zinc-300 uppercase text-xs tracking-widest mb-1">Call Us</h4>
                  <p className="text-lg text-gray-600 dark:text-zinc-400 font-medium">{CONTACT_INFO.phone}</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gray-50 dark:bg-zinc-900 p-10 rounded-3xl border border-gray-100 dark:border-zinc-800 shadow-xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 dark:text-zinc-400 uppercase mb-2">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 rounded-xl bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 focus:border-red-600 outline-none transition-all dark:text-white"
                    placeholder="Enter Your Name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 dark:text-zinc-400 uppercase mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 rounded-xl bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 focus:border-red-600 outline-none transition-all dark:text-white"
                    placeholder="Enter Your Email"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 dark:text-zinc-400 uppercase mb-2">Your Message</label>
                <textarea
                  rows={4}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 rounded-xl bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 focus:border-red-600 outline-none transition-all dark:text-white resize-none"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>
              <LiquidButton type="submit" className="w-full bg-red-600 text-white">
                SEND MESSAGE
                <Send size={20} />
              </LiquidButton>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
