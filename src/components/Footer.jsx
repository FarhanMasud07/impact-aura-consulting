import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-zinc-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-green-700 to-emerald-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">IA</span>
              </div>
              <span className="text-xl font-bold">ImpactAura</span>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              Digital research and consulting firm driving evidence-based decisions and sustainable impact.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <nav className="space-y-2">
              <Link to="/" className="block text-slate-300 hover:text-emerald-500 transition-colors duration-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-zinc-900 rounded">
                Home
              </Link>
              <Link to="/about" className="block text-slate-300 hover:text-emerald-500 transition-colors duration-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-zinc-900 rounded">
                About Us
              </Link>
              <Link to="/contact" className="block text-slate-300 hover:text-emerald-500 transition-colors duration-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-zinc-900 rounded">
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-emerald-500 flex-shrink-0" aria-hidden="true" />
                <a href="mailto:info@impactauraconsulting.com" className="text-slate-300 hover:text-emerald-500 transition-colors duration-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-zinc-900 rounded">
                  info@impactauraconsulting.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-emerald-500 flex-shrink-0" aria-hidden="true" />
                <a href="tel:+8801950102446" className="text-slate-300 hover:text-emerald-500 transition-colors duration-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-zinc-900 rounded">
                  +8801950102446
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <p className="text-slate-400 text-sm">
            © 2025 ImpactAura Consulting. All rights reserved.
          </p>
          <p className="text-slate-400 text-sm">
            Built with ❤️ by <a rel="nofollow" target="_blank" href="/" className="text-emerald-500 hover:text-emerald-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-zinc-900 rounded">Impact Aura</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;