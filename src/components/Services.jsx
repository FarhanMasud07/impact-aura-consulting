import React, { useState } from 'react';
import { Search, Code, BarChart3, Lightbulb, Smartphone, Shield } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Services = () => {
  const [expandedCards, setExpandedCards] = useState({});

  const toggleExpand = (index) => {
    setExpandedCards((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const services = [
    {
      icon: Search,
      title: 'Applied Research & Evaluation',
      description: 'We conduct comprehensive research and evaluations—including formative, summative, impact, and participatory studies—using mixed-methods approaches to inform adaptive learning, policy design, and context-driven program effectiveness.',
      features: [
        'Formative, Summative, and Thematic Research', 
        'Baseline, Midline, and Endline Studies', 
        'Impact Studies and Evaluation of Program Outcomes',
        'Contextual and Situational Analysis',
        'Needs Assessments for Program and Policy Design',
        'Developmental Evaluation (DE) for Adaptive Learning',
        'After-Action Reviews and Pivot Analysis',
        'Mixed-Methods & Participatory Research'
      ]
    },
    {
      icon: Search,
      title: 'Monitoring, Evaluation, Accountability & Learning (MEAL)',
      description: 'We provide end-to-end MEAL support—framework design, TPM, accountability systems, capacity building, and learning processes—strengthening evidence-based programming, real-time decision-making, and organizational accountability.',
      features: [
        'Results-Based M&E System Development and Support', 
        'Third-Party Monitoring (TPM) Services', 
        'MEAL Framework and Results Framework Design',
        'Accountability Mechanisms including Feedback, Complaint & Response Mechanisms (FCRM)',
        'Strategy and Tools Development for Program Monitoring and Quality Assurance',
        'Capacity-Building Training on Program Quality, M&E, Accountability, and Learning Systems',
        'Process Monitoring and Real-Time Data Use',
        'Process Documentation and Learning Reviews',
        'Facilitation of Lessons Learned Workshops'
      ]
    },
    {
      icon: Code,
      title: 'Data, Analytics & Digital Innovation',
      description: 'We deliver advanced data analytics, digital tools, and machine learning solutions—transforming evidence into insights, enabling predictive modeling, and supporting NGOs and SMEs with visualization, dashboards, and knowledge systems.',
      features: [
        'Advanced Quantitative and Qualitative Data Analysis (SPSS, NVivo, STATA)', 
        'Data Interpretation, Visualization, and Evidence Translation for Decision-Making', 
        'Machine Learning & Python for Predictive Modeling',
        'Database Development and Knowledge Management Systems',
        'Dashboards and Digital Tools (PowerBI, Tableau, Google Data Studio)',
        'Thematic and Gender Studies using Mixed Methods',
        'Web and Digital Solutions for NGOs, SMEs, and Development Campaigns'
      ]
    },
    {
      icon: Smartphone,
      title: 'Software Solutions',
      description: 'We design user-friendly software solutions—databases, dashboards, digital tools, and AI-driven systems—that transform data into actionable insights and strengthen organizational efficiency, accountability, and impact',
      features: [
        'Custom Database Development – Tailored systems for data collection, storage, and analysis.',
        'Dashboard & Visualization Tools – Interactive PowerBI, Tableau, and Google Data Studio dashboards.',
        'Mobile Data Collection Platforms – ODK, KoboToolbox, CommCare, and SurveyCTO setup and integration.',
        'Knowledge Management Systems – Centralized platforms for research, program, and organizational learning.',
        'Web & Digital Solutions – Websites, portals, and apps for NGOs, SMEs, and development campaigns.',
        'Machine Learning & Predictive Analytics – Python and AI-enabled tools for forecasting and trend analysis.',
        'Automation Tools – Workflow and reporting automation to enhance efficiency and accuracy.'
      ]
    },
    {
      icon: BarChart3,
      title: 'Strategic Consulting',
      description: 'We provide strategic consulting that strengthens institutions, informs policy reform, and guides program design—helping organizations adapt, mobilize resources, and achieve sustainable impact in complex development and humanitarian contexts.',
      features: [
        'Program Design & Strategy Development – Evidence-driven strategies for development, humanitarian, and peacebuilding programs.', 
        'Organizational Development – Strengthening governance, management systems, and institutional capacity.', 
        'Policy Analysis & Reform – Advising governments, NGOs, and donors on policy design and implementation.',
        'Change Management – Supporting organizations through transitions, restructuring, and adaptive leadership.',
        'Partnership & Resource Mobilization – Designing fundraising strategies, donor engagement, and consortium development.',
        'Risk & Resilience Planning – Scenario planning and adaptive strategies for fragile and conflict-affected settings.',
        'Monitoring Strategic Goals – Aligning results frameworks with organizational missions and long-term impact.'
      ]
    },
    {
      icon: Lightbulb,
      title: 'Innovation Advisory',
      description: 'We provide innovation advisory services that combine human-centered design, digital transformation, and entrepreneurship support—helping organizations co-create, test, and scale solutions for greater social impact and resilience.',
      features: [
        'Innovation Strategy & Road mapping – Guiding organizations to identify, design, and scale innovative solutions.',
        'Digital Transformation Support – Leveraging technology for program efficiency, accountability, and impact.',
        'Human-Centered Design (HCD) – Applying participatory approaches to co-create solutions with communities.',
        'Social Innovation & Entrepreneurship – Supporting youth, women, and SMEs to develop scalable, sustainable enterprises.',
        'Incubation & Acceleration Support – Mentoring startups and social ventures in fragile and emerging markets.',
        'Technology Scouting – Identifying digital tools, platforms, and partnerships for development programs.',
        'Innovation Labs & Pilots – Designing, testing, and scaling pilots for adaptive learning and impact.',
      ]
    },
    {
      icon: Shield,
      title: 'Developmental Evaluation (DE)',
      description: 'At ImpactAura, we apply Developmental Evaluation (DE) to generate real-time learning and adaptive solutions in complex contexts. Unlike traditional evaluations, DE embeds continuous feedback, enabling programs to pivot, innovate, and remain responsive to dynamic realities while translating evidence into actionable strategies for lasting impact.',
      features: [
        'Adaptive Evaluation Design – Real-time feedback systems tailored for complex and evolving programs.',
        'Innovation Testing & Learning – Tracking pilot projects and new approaches to identify what works.',
        'Utilization-Focused Evaluation – Ensuring findings are actionable for decision-makers and practitioners.',
        'Complex Systems Analysis – Understanding dynamic contexts in fragile and conflict-affected settings.',
        'Embedded Evaluator Support – Providing ongoing advisory within program teams for continuous adaptation.',
        'Participatory Learning Approaches – Engaging stakeholders to co-create solutions and refine interventions.',
        'Evidence-to-Action Pathways – Translating evaluation insights into strategic program pivots and policy reforms.',
      ]
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
            To be a leading research and innovation hub that transforms evidence into
            action—driving adaptive learning, inclusive development, and capacity building for
            program quality standards, while fostering sustainable change for communities
            worldwide.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            const isExpanded = expandedCards[index] || false;
            const featuresToShow = isExpanded ? service.features : service.features.slice(0, 3);

            return (
              <motion.div
                key={service.title}
                className="bg-white border border-slate-200 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300 group flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="space-y-6 flex-1 flex flex-col">
                  {/* Icon */}
                  <div className="w-12 h-12 bg-gradient-to-br from-green-700 to-emerald-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>

                  {/* Content */}
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-zinc-900">{service.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{service.description}</p>
                  </div>

                  {/* Features */}
                  <ul className="space-y-2 flex-1">
                    {featuresToShow.map((feature, idx) => {
                      const isLastVisible = !isExpanded && idx === 2; // 3rd feature when collapsed
                      return (
                        <li key={feature} className="flex items-start text-sm text-slate-600">
                          <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-3 flex-shrink-0 mt-1" aria-hidden="true"></div>
                          <span>
                            {feature}
                            {isLastVisible && (
                              <button
                                onClick={() => toggleExpand(index)}
                                className="ml-2 text-green-700 font-semibold hover:underline"
                              >
                                See more
                              </button>
                            )}
                          </span>
                        </li>
                      );
                    })}
                    {isExpanded && service.features.length > 3 && (
                      <li className="flex justify-start mt-2">
                        <button
                          onClick={() => toggleExpand(index)}
                          className="text-green-700 font-semibold hover:underline"
                        >
                          See less
                        </button>
                      </li>
                    )}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-slate-600 mb-6">Ready to transform your digital presence?</p>
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
