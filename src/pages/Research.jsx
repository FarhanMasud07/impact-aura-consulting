import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Users, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import Map from '../components/Map';

export default function Research() {
  const expertise = [
    {
      title: 'Research, Monitoring, Evaluation & Learning (MEAL)',
      items: [
        'Specialists in qualitative, quantitative, and mixed-methods evaluation',
        'Developmental evaluation and results-based management'
      ]
    },
    {
      title: 'Program Management & Quality',
      items: [
        'Expertise in design, implementation, and adaptive quality assurance of development and humanitarian programs'
      ]
    },
    {
      title: 'Health, Hygiene & Nutrition',
      items: [
        'Professionals with deep experience in public health, WASH, and integrated nutrition programming'
      ]
    },
    {
      title: 'Community Development & Livelihood Security',
      items: [
        'Proven approaches in participatory methods, skills training, market linkages, and resilience-building'
      ]
    },
    {
      title: 'Food Security & Natural Resource Management (NRM)',
      items: [
        'Expertise in climate-smart agriculture, food systems, and sustainable resource governance'
      ]
    },
    {
      title: 'Peace & Reconciliation',
      items: [
        'Skilled in dialogue facilitation, conflict transformation, and peacebuilding'
      ]
    },
    {
      title: 'Youth Development',
      items: [
        'Innovative strategies for employability, civic engagement, and leadership'
      ]
    },
    {
      title: 'Finance & Partnership Development',
      items: [
        'Strong track record in donor compliance, resource mobilization, and sustainable financing'
      ]
    },
    {
      title: 'Capacity Building',
      items: [
        'Professional trainers offering high-quality training on program quality, MEAL, accountability, and adaptive learning for NGOs, governments, and community actors worldwide'
      ]
    },
    {
      title: 'Digital Solutions & Web Development',
      items: [
        'In-house developers and IT experts building digital platforms, dashboards, and web-based tools to strengthen research and analytics'
      ]
    },
    {
      title: 'Qualitative & Quantitative Research',
      items: [
        'In-house specialists highly experienced in both traditional and participatory methods',
        'Strong expertise in digital platforms such as ODK, CommCare, KoboToolbox, PowerBI, R, SPSS, Python for data collection and analysis',
        'Qualitative tools like ALYZA, NVivo for advanced thematic analysis'
      ]
    }
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
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-700 to-emerald-500">Research</span>
              </h1>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                Discover ImpactAura Research & Consulting Ltd.'s multidisciplinary expertise and commitment to delivering context-driven, evidence-based solutions.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center space-y-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-center space-x-3">
                <Users className="h-8 w-8 text-green-700" aria-hidden="true" />
                <h2 className="text-3xl font-bold text-zinc-900">Our Resources & Capacities</h2>
              </div>
              <p className="text-lg text-slate-600 max-w-4xl mx-auto leading-relaxed">
                ImpactAura Research & Consulting Ltd. brings together a diverse and multidisciplinary team of directors, senior advisors, and technical experts with extensive national and international experience. Our collective capacity ensures delivery of context-driven, evidence-based, and sustainable solutions across a wide range of development and humanitarian sectors.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Core Team Expertise */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900">Our Core Team Expertise Includes:</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {expertise.map((exp, index) => (
                <motion.div
                  key={exp.title}
                  className="bg-white rounded-xl p-8 shadow-sm border border-slate-200 hover:shadow-lg transition-shadow duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-zinc-900">{exp.title}</h3>
                    <ul className="space-y-2">
                      {exp.items.map((item, idx) => (
                        <li key={idx} className="flex items-start text-slate-600">
                          <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0" aria-hidden="true"></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Extended Roster */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center space-y-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-center space-x-3">
                <Globe className="h-8 w-8 text-emerald-500" aria-hidden="true" />
                <h2 className="text-3xl font-bold text-zinc-900">Extended Roster & Global Collaboration</h2>
              </div>
              <p className="text-lg text-slate-600 max-w-4xl mx-auto leading-relaxed">
                In addition to our in-house expertise, ImpactAura maintains a roster of international subject-matter experts in education reform, humanitarian response, governance, digital innovation, and advanced statistical modeling. We actively collaborate with global research consortia and international M&E platforms, ensuring our work remains at the cutting edge of practice while grounded in local realities.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Map Section */}
        <Map />
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
                Partner with Us
              </h2>
              <p className="text-xl text-green-100 max-w-2xl mx-auto">
                Let's collaborate to drive impactful, sustainable solutions in your sector.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-green-700 font-semibold rounded-lg hover:bg-slate-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-green-700"
              >
                Get In Touch
              </a>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}