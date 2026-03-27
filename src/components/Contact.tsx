import React from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-black text-rich-black mb-6 tracking-tighter">
              GET IN <span className="text-cyan">TOUCH</span>
            </h2>
            <p className="text-rich-black/60 text-lg font-medium mb-12">
              Have a project in mind? Contact us today for a custom quote or visit our studio in Mundka.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-cyan/10 text-cyan rounded-2xl flex items-center justify-center group-hover:bg-cyan group-hover:text-white transition-colors">
                  <Phone size={24} />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-rich-black/40 mb-1">Call Us</div>
                  <div className="text-xl font-bold text-rich-black">{CONTACT_INFO.phone}</div>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-magenta/10 text-magenta rounded-2xl flex items-center justify-center group-hover:bg-magenta group-hover:text-white transition-colors">
                  <Mail size={24} />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-rich-black/40 mb-1">Email Us</div>
                  <div className="text-xl font-bold text-rich-black">{CONTACT_INFO.email}</div>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-yellow/20 text-yellow-600 rounded-2xl flex items-center justify-center group-hover:bg-yellow group-hover:text-rich-black transition-colors">
                  <MapPin size={24} />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-rich-black/40 mb-1">Visit Us</div>
                  <div className="text-xl font-bold text-rich-black">{CONTACT_INFO.location}</div>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <a 
                href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-full font-bold hover:shadow-lg transition-shadow"
              >
                <MessageCircle size={24} />
                Chat on WhatsApp
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-print-grey rounded-[40px] p-8 md:p-12"
          >
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-rich-black/40 ml-1">Full Name</label>
                  <input type="text" className="w-full bg-white border-2 border-transparent focus:border-cyan outline-none rounded-2xl px-6 py-4 font-medium transition-all" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-rich-black/40 ml-1">Email Address</label>
                  <input type="email" className="w-full bg-white border-2 border-transparent focus:border-magenta outline-none rounded-2xl px-6 py-4 font-medium transition-all" placeholder="john@example.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-rich-black/40 ml-1">Service Required</label>
                <select className="w-full bg-white border-2 border-transparent focus:border-yellow outline-none rounded-2xl px-6 py-4 font-medium transition-all appearance-none">
                  <option>Digital Printing</option>
                  <option>Flex Printing</option>
                  <option>Custom T-Shirts</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-rich-black/40 ml-1">Message</label>
                <textarea rows={4} className="w-full bg-white border-2 border-transparent focus:border-rich-black outline-none rounded-2xl px-6 py-4 font-medium transition-all resize-none" placeholder="Tell us about your project..."></textarea>
              </div>
              <button className="w-full bg-rich-black text-white py-5 rounded-2xl font-black text-lg uppercase tracking-widest hover:bg-cyan transition-colors">
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
