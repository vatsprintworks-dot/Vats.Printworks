import React from 'react';
import { motion } from 'motion/react';
import { SERVICES } from '../constants';

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-black text-rich-black mb-4 tracking-tighter">
              OUR <span className="text-cyan">SERVICES</span>
            </h2>
            <div className="h-1.5 w-24 bg-magenta mx-auto mb-6" />
            <p className="text-rich-black/60 max-w-2xl mx-auto font-medium text-lg">
              We offer a comprehensive range of printing solutions tailored to meet the needs of students, professionals, and businesses.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -10 }}
              className="group relative bg-print-grey rounded-3xl p-8 transition-all duration-300 hover:shadow-2xl hover:bg-white border border-transparent hover:border-rich-black/5"
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-300 
                ${service.color === 'cyan' ? 'bg-cyan/10 text-cyan group-hover:bg-cyan group-hover:text-white' : 
                  service.color === 'magenta' ? 'bg-magenta/10 text-magenta group-hover:bg-magenta group-hover:text-white' : 
                  service.color === 'yellow' ? 'bg-yellow/20 text-yellow-600 group-hover:bg-yellow group-hover:text-rich-black' : 
                  'bg-rich-black/10 text-rich-black group-hover:bg-rich-black group-hover:text-white'}`}
              >
                <service.icon size={28} />
              </div>
              
              <h3 className="text-xl font-black mb-3 text-rich-black group-hover:text-rich-black">
                {service.title}
              </h3>
              
              <p className="text-sm text-rich-black/50 font-medium leading-relaxed mb-6">
                {service.description}
              </p>

              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                <span>Learn More</span>
                <div className={`w-4 h-0.5 ${
                  service.color === 'cyan' ? 'bg-cyan' : 
                  service.color === 'magenta' ? 'bg-magenta' : 
                  service.color === 'yellow' ? 'bg-yellow' : 'bg-rich-black'
                }`} />
              </div>

              {/* CMYK Corner Accent */}
              <div className={`absolute top-0 right-0 w-12 h-12 rounded-tr-3xl rounded-bl-3xl opacity-0 group-hover:opacity-10 transition-opacity ${
                service.color === 'cyan' ? 'bg-cyan' : 
                service.color === 'magenta' ? 'bg-magenta' : 
                service.color === 'yellow' ? 'bg-yellow' : 'bg-rich-black'
              }`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
