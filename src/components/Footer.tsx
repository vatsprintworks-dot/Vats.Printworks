import React from 'react';
import { CONTACT_INFO, SERVICES } from '../constants';
import logo from '../Logo.png';

export default function Footer() {
  return (
    <footer className="bg-rich-black text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 lg:col-span-1">
            <img src={logo} alt="ATS Printworks Logo" className="h-12 w-auto object-contain mb-6" />
            <p className="text-white/40 text-sm font-medium leading-relaxed mb-8">
              Vats Printworks is your premier destination for high-quality printing and creative design solutions. We bring precision and professionalism to every print.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-cyan uppercase tracking-widest">Quick Links</h4>
            <ul className="space-y-4 text-sm font-medium text-white/60">
              <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#why-us" className="hover:text-white transition-colors">Why Choose Us</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-magenta uppercase tracking-widest">Our Services</h4>
            <ul className="space-y-4 text-sm font-medium text-white/60">
              {SERVICES.slice(0, 5).map(service => (
                <li key={service.id}><a href="#services" className="hover:text-white transition-colors">{service.title}</a></li>
              ))}
              <li><a href="#services" className="hover:text-white transition-colors font-bold text-white">View All Services →</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-yellow uppercase tracking-widest">Contact Info</h4>
            <ul className="space-y-4 text-sm font-medium text-white/60">
              <li className="flex items-start gap-3">
                <span className="text-white">P:</span>
                {CONTACT_INFO.phone}
              </li>
              <li className="flex items-start gap-3">
                <span className="text-white">E:</span>
                {CONTACT_INFO.email}
              </li>
              <li className="flex items-start gap-3">
                <span className="text-white">A:</span>
                {CONTACT_INFO.location}
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/20 text-xs font-bold uppercase tracking-widest">
            © {new Date().getFullYear()} VATS PRINTWORKS. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-6 text-white/20 text-xs font-bold uppercase tracking-widest">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
