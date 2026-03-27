import React from 'react';
import { motion } from 'motion/react';
import { HOW_IT_WORKS } from '../constants';

export default function HowItWorks() {
  return (
    <section className="py-24 bg-print-grey">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-black text-rich-black mb-4 tracking-tighter">
              HOW IT <span className="text-yellow-600">WORKS</span>
            </h2>
            <div className="h-1.5 w-24 bg-cyan mx-auto mb-6" />
            <p className="text-rich-black/60 max-w-2xl mx-auto font-medium text-lg">
              Our streamlined process ensures your printing projects are handled with care from start to finish.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-12 relative">
          {/* Connector Line */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-dashed bg-rich-black/10 -translate-y-1/2 z-0" />
          
          {HOW_IT_WORKS.map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative z-10 text-center group"
            >
              <div className="w-24 h-24 bg-white rounded-full mx-auto mb-8 flex items-center justify-center shadow-xl border-4 border-print-grey group-hover:border-cyan transition-colors duration-500">
                <span className={`text-3xl font-black ${index === 0 ? 'text-cyan' : index === 1 ? 'text-magenta' : 'text-yellow-600'}`}>
                  {item.step}
                </span>
              </div>
              <h3 className="text-2xl font-black mb-4 text-rich-black">{item.title}</h3>
              <p className="text-rich-black/50 font-medium leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
