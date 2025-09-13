import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Target, Eye, Heart, Users, Award, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function About() {
  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'We strive for excellence in every project, delivering solutions that exceed expectations.'
    },
    {
      icon: Heart,
      title: 'Integrity',
      description: 'Honest, transparent communication and ethical business practices guide everything we do.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We work closely with our clients as partners to achieve shared success.'
    },
    {
      icon: Globe,
      title: 'Innovation',
      description: 'Embracing cutting-edge technologies and creative solutions to solve complex challenges.'
    }
  ];

  const stats = [
    { number: '50+', label: 'Projects Completed' },
    { number: '25+', label: 'Happy Clients' },
    { number: '5+', label: 'Years Experience' },
    { number: '98%', label: 'Success Rate' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-green-50 via-white to-emerald-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl sm:text-5xl font-bold text-zinc-900">
                About <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-700 to-emerald-500">ImpactAura</span>
              </h1>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                We are a forward-thinking digital research and consulting firm dedicated to helping businesses navigate the complexities of digital transformation.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div 
                className="space-y-8"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="space-y-6">
                  <div className="flex items-center space-x-3">
                    <Target className="h-8 w-8 text-green-700" aria-hidden="true" />
                    <h2 className="text-3xl font-bold text-zinc-900">Our Mission</h2>
                  </div>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    To empower businesses with innovative digital solutions and strategic insights that drive sustainable growth and competitive advantage in an ever-evolving digital landscape.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center space-x-3">
                    <Eye className="h-8 w-8 text-emerald-500" aria-hidden="true" />
                    <h2 className="text-3xl font-bold text-zinc-900">Our Vision</h2>
                  </div>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    To be the leading global partner for digital transformation, recognized for our expertise, innovation, and commitment to delivering exceptional value to our clients worldwide.
                  </p>
                </div>
              </motion.div>

              <motion.div 
                className="relative"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Team collaboration in modern office environment"
                  className="rounded-2xl shadow-xl w-full h-96 object-cover"
                  loading="lazy"
                  width="600"
                  height="400"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900">Our Values</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                The principles that guide our work and define our commitment to excellence.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <motion.div
                    key={value.title}
                    className="bg-white rounded-xl p-8 shadow-sm border border-slate-200 text-center space-y-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-green-700 to-emerald-500 rounded-lg flex items-center justify-center mx-auto">
                      <IconComponent className="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                    <h3 className="text-xl font-semibold text-zinc-900">{value.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{value.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900">Our Impact</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Numbers that reflect our commitment to delivering exceptional results.
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center space-y-2"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-700 to-emerald-500">
                    {stat.number}
                  </div>
                  <div className="text-slate-600 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-green-700 to-emerald-500">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-white">
                Ready to Start Your Digital Journey?
              </h2>
              <p className="text-xl text-green-100 max-w-2xl mx-auto">
                Let's work together to transform your business with innovative digital solutions.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-green-700 font-semibold rounded-lg hover:bg-slate-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-green-700"
              >
                Get In Touch
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}