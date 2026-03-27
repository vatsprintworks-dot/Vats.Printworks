import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Printer, Palette, Zap } from 'lucide-react';
import logo from '../Logo.png';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-print-grey">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-cyan/5 -skew-x-12 transform translate-x-20" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-magenta/5 skew-x-12 transform -translate-x-20" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-cyan/20 text-cyan text-xs font-bold uppercase tracking-widest mb-6">
              <Zap size={14} />
              Premium Printing Studio
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black text-rich-black leading-[0.9] mb-6 tracking-tighter">
              DESIGN.<br />
              <span className="text-cyan">PRINT.</span><br />
              <span className="text-magenta">IMPRESS.</span>
            </h1>
            
            <p className="text-xl text-rich-black/60 max-w-lg mb-10 font-medium leading-relaxed">
              High-quality printing solutions for students, professionals & businesses. We turn your creative ideas into impressive physical prints.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <motion.a
                href="#services"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-rich-black text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-cyan transition-colors"
              >
                View Our Services
                <ArrowRight size={20} />
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-rich-black border-2 border-rich-black px-8 py-4 rounded-full font-bold hover:bg-print-grey transition-colors"
              >
                Get Instant Quote
              </motion.a>
            </div>

            <div className="mt-12 flex items-center gap-8 grayscale opacity-50">
              <div className="flex items-center gap-2">
                <Printer size={20} />
                <span className="text-xs font-bold uppercase tracking-wider">Modern Tech</span>
              </div>
              <div className="flex items-center gap-2">
                <Palette size={20} />
                <span className="text-xs font-bold uppercase tracking-wider">CMYK Precision</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            {/* Visual representation of printing layers */}
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <motion.div 
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 bg-yellow rounded-3xl rotate-6 shadow-2xl"
              />
              <motion.div 
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute inset-0 bg-magenta rounded-3xl -rotate-3 shadow-2xl"
              />
              <motion.div 
                animate={{ x: [0, 20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute inset-0 bg-cyan rounded-3xl rotate-1 shadow-2xl"
              />
              <div className="absolute inset-0 bg-white rounded-3xl shadow-2xl flex items-center justify-center p-8 border-4 border-rich-black">
                <div className="text-center">
                  <img src={logo} alt="ATS Printworks Logo" className="h-32 w-auto object-contain mx-auto mb-4" />
                  <h2 className="text-3xl font-black tracking-tighter mb-2">VATS PRINTWORKS</h2>
                  <div className="h-1 w-20 bg-magenta mx-auto mb-4" />
                  <p className="text-sm font-bold text-rich-black/40 uppercase tracking-widest">Est. Quality Printing</p>
                </div>
              </div>
            </div>

            {/* Floating badges */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-4 -right-4 bg-white p-4 rounded-2xl shadow-xl border border-print-grey"
            >
              <div className="text-cyan font-black text-2xl">100%</div>
              <div className="text-[10px] font-bold uppercase tracking-wider text-rich-black/50">Quality Guarantee</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
