import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Globe, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-green-50 via-white to-emerald-50 py-10 lg:py-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" aria-hidden="true"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-zinc-900 leading-tight">
                Data With A 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-700 to-emerald-500"> Human Pulse</span>
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed max-w-2xl">
                Impact Aura Research & Consulting Ltd. is a capacity building, research, and digital innovation consulting firm dedicated to delivering strategic inputs that reflect both statistical truth and adaptive evaluation in developmental and humanitarian sectors.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-green-700 text-white font-semibold rounded-lg hover:bg-green-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-700 focus:ring-offset-2 group"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" aria-hidden="true" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-slate-300 text-zinc-900 font-semibold rounded-lg hover:border-green-700 hover:text-green-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-700 focus:ring-offset-2"
              >
                Learn More
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-slate-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-700">50+</div>
                <div className="text-sm text-slate-600">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-700">98%</div>
                <div className="text-sm text-slate-600">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-700">24/7</div>
                <div className="text-sm text-slate-600">Support Available</div>
              </div>
            </div>
          </motion.div>

          {/* Visual */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Modern office workspace with laptops and digital tools"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
                loading="lazy"
                width="600"
                height="400"
              />
              
              {/* Floating cards */}
              <div className="absolute -top-4 -left-4 bg-white rounded-lg shadow-lg p-4 border border-slate-200">
                <div className="flex items-center space-x-2">
                  <Zap className="h-5 w-5 text-emerald-500" aria-hidden="true" />
                  <span className="text-sm font-medium text-zinc-900">Fast Research</span>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -right-4 bg-white rounded-lg shadow-lg p-4 border border-slate-200">
                <div className="flex items-center space-x-2">
                  <Globe className="h-5 w-5 text-green-700" aria-hidden="true" />
                  <span className="text-sm font-medium text-zinc-900">Global Reach</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;