import React from 'react';
import { motion } from 'motion/react';
import { WHY_CHOOSE_US } from '../constants';

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-24 bg-rich-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Background Accents */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-cyan/10 blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-magenta/10 blur-[100px]" />

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter">
              WHY <span className="text-magenta">CHOOSE</span> US?
            </h2>
            <p className="text-white/60 text-lg font-medium mb-12 max-w-xl">
              We combine creative design expertise with industrial-grade printing technology to deliver results that exceed expectations.
            </p>

            <div className="space-y-8">
              {WHY_CHOOSE_US.map((item, index) => (
                <motion.div 
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-6 group"
                >
                  <div className={`flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110 ${
                    item.color === 'cyan' ? 'bg-cyan/20 text-cyan' : 
                    item.color === 'magenta' ? 'bg-magenta/20 text-magenta' : 
                    item.color === 'yellow' ? 'bg-yellow/20 text-yellow' : 
                    'bg-white/10 text-white'
                  }`}>
                    <item.icon size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-white/40 text-sm font-medium leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square bg-white/5 rounded-[40px] border border-white/10 p-12 flex flex-col justify-center relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan via-magenta to-yellow" />
              
              <div className="space-y-8 relative z-10">
                <div className="flex items-end gap-4">
                  <div className="text-7xl font-black text-cyan">10+</div>
                  <div className="text-sm font-bold uppercase tracking-widest mb-3 text-white/60">Years of<br />Experience</div>
                </div>
                <div className="flex items-end gap-4">
                  <div className="text-7xl font-black text-magenta">5k+</div>
                  <div className="text-sm font-bold uppercase tracking-widest mb-3 text-white/60">Happy<br />Clients</div>
                </div>
                <div className="flex items-end gap-4">
                  <div className="text-7xl font-black text-yellow">1M+</div>
                  <div className="text-sm font-bold uppercase tracking-widest mb-3 text-white/60">Prints<br />Delivered</div>
                </div>
              </div>

              {/* CMYK Circles */}
              <div className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-cyan/20 blur-3xl" />
              <div className="absolute -bottom-10 -right-10 w-48 h-48 rounded-full bg-magenta/20 blur-2xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
