import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 rounded-[40px] overflow-hidden shadow-2xl border-8 border-print-grey">
              <img 
                src="https://images.unsplash.com/photo-1562654501-a0ccc0fc3fb1?auto=format&fit=crop&q=80&w=1000" 
                alt="Modern Printing Press" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* CMYK Decorative Blocks */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-cyan/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-magenta/10 rounded-full blur-3xl" />
            
            <div className="absolute top-1/2 -right-8 transform -translate-y-1/2 hidden md:block">
              <div className="bg-rich-black text-white p-8 rounded-3xl shadow-2xl">
                <div className="text-4xl font-black mb-1">100%</div>
                <div className="text-xs font-bold uppercase tracking-widest text-white/50">Customer Trust</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-block px-4 py-1 rounded-full bg-magenta/10 text-magenta text-xs font-bold uppercase tracking-widest mb-6">
              About Vats Printworks
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-rich-black mb-8 tracking-tighter leading-tight">
              CREATIVITY MEETS <span className="text-cyan">PRECISION.</span>
            </h2>
            <p className="text-rich-black/60 text-lg font-medium mb-6 leading-relaxed">
              At Vats Printworks, we believe that every print tells a story. Whether it's a student's thesis, a professional's business card, or a company's large-scale flex banner, we bring the same level of dedication and precision to every project.
            </p>
            <p className="text-rich-black/60 text-lg font-medium mb-10 leading-relaxed">
              Equipped with modern machinery and a passion for design, we've established ourselves as a trusted name in the Mundka Industrial Area, serving clients across New Delhi with high-impact printing solutions.
            </p>

            <div className="grid grid-cols-2 gap-8 mb-10">
              <div>
                <div className="text-3xl font-black text-rich-black mb-2">Modern</div>
                <div className="text-sm font-bold text-rich-black/40 uppercase tracking-widest">Machinery</div>
              </div>
              <div>
                <div className="text-3xl font-black text-rich-black mb-2">Expert</div>
                <div className="text-sm font-bold text-rich-black/40 uppercase tracking-widest">Designers</div>
              </div>
            </div>

            <motion.button
              whileHover={{ x: 10 }}
              className="flex items-center gap-3 text-rich-black font-black uppercase tracking-widest group"
            >
              Learn More About Us
              <ArrowRight className="text-magenta group-hover:text-cyan transition-colors" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
