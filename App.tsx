/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import HowItWorks from './components/HowItWorks';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import { motion } from 'motion/react';

export default function App() {
  return (
    <div className="relative min-h-screen bg-white selection:bg-cyan selection:text-white">
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Services />
        <WhyChooseUs />
        <HowItWorks />
        
        {/* Mid-page CTA */}
        <section className="py-20 bg-magenta relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter">
                TURN YOUR IDEAS INTO <br />IMPRESSIVE PRINTS
              </h2>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block bg-white text-magenta px-10 py-5 rounded-full font-black text-xl uppercase tracking-widest hover:bg-rich-black hover:text-white transition-all shadow-2xl"
              >
                Contact Vats Printworks
              </motion.a>
            </motion.div>
          </div>
          
          {/* Decorative CMYK shapes */}
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-cyan rounded-full opacity-20 blur-3xl" />
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-yellow rounded-full opacity-20 blur-3xl" />
        </section>

        <Contact />
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
