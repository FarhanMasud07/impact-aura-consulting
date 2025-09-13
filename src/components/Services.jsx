import React from 'react';
import { Search, Code, BarChart3, Lightbulb, Smartphone, Shield } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      icon: Search,
      title: 'Applied Research & Evaluation',
      description: 'Comprehensive market analysis and digital trend research to inform strategic decisions.',
      features: ['Baseline, Midline, Final Evaluations', 'Mixed Methods & Participatory Research', 'Developmental Evaluation (DE) for adaplative learnin']
    },
    {
      icon: Code,
      title: 'Data, Analytics & Digital Innovation',
      description: 'Custom websites and web applications built with modern technologies and best practices.',
      features: ['SPSS, NVivo, STATA based analysis', 'Machine Learning & Python for predictive modeling', 'Web Design for NGOs, SMEs & Development Campaigns']
    },
    {
      icon: Smartphone,
      title: 'Software Solutions',
      description: 'Tailored software development for desktop and mobile platforms to meet your unique needs.',
      features: ['Custom Applications', 'Mobile Apps', 'System Integration']
    },
    {
      icon: BarChart3,
      title: 'Strategic Consulting',
      description: 'Expert guidance on digital transformation and business strategy optimization.',
      features: ['Digital Strategy', 'Process Optimization', 'Growth Planning']
    },
    {
      icon: Lightbulb,
      title: 'Innovation Advisory',
      description: 'Identify opportunities for innovation and implement cutting-edge solutions.',
      features: ['Technology Assessment', 'Innovation Roadmaps', 'Future Planning']
    },
    {
      icon: Shield,
      title: 'Developmental Evaluation (DE)',
      description: 'Expert guidance on digital transformation and business strategy optimization.',
      features: ['SPSS, NVivo, STATA based analysis', 'Machine Learning & Python for predictive modeling', 'Power BI & Tableau Dashoards']
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900">
            Our Services
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Comprehensive digital solutions designed to accelerate your business growth and digital transformation journey.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.title}
                className="bg-white border border-slate-200 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300 group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="space-y-6">
                  {/* Icon */}
                  <div className="w-12 h-12 bg-gradient-to-br from-green-700 to-emerald-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>

                  {/* Content */}
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-zinc-900">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Features */}
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-slate-600">
                        <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-3 flex-shrink-0" aria-hidden="true"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-slate-600 mb-6">
            Ready to transform your digital presence?
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-green-700 text-white font-semibold rounded-lg hover:bg-green-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-700 focus:ring-offset-2"
          >
            Start Your Project
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;