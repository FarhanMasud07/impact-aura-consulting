import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Mail, Phone, MapPin, Send, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { toast } from 'react-toastify';
import Map from '../components/Map';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  company: z.string().optional(),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(contactSchema)
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      toast.success('Message sent successfully! We\'ll get back to you soon.');
      reset();
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      details: 'info@impactauraconsulting.com',
      link: 'mailto:info@impactauraconsulting.com'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: '+8801950102446',
      link: 'tel:+8801950102446'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: `Aronnaloy Abason Society, Plot-4, Avenue 2, Block E-1, Chandrima Model Town`,
      link: 'https://www.google.com/maps/place/MATRICHAYA/@23.755495,90.3346116,20z/data=!4m6!3m5!1s0x3755bfe4422007fd:0x93c7f51693220f7d!8m2!3d23.7556375!4d90.3345469!16s%2Fg%2F11l6lgkchw?hl=en&entry=ttu&g_ep=EgoyMDI1MDkxMC4wIKXMDSoASAFQAw%3D%3D'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: 'Sun - Thu: 9:00 AM - 7:00 PM',
      link: '#'
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
                Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-700 to-emerald-500">Touch</span>
              </h1>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                Ready to transform your business? Let's discuss how we can help you achieve your digital goals.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="space-y-8">
                  <div>
                    <h2 className="text-3xl font-bold text-zinc-900 mb-4">Send us a message</h2>
                    <p className="text-slate-600">
                      Fill out the form below and we'll get back to you within 24 hours.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-zinc-900 mb-2">
                          Name *
                        </label>
                        <input
                          {...register('name')}
                          type="text"
                          id="name"
                          className="w-full px-4 py-3 border text-zinc-900 border-slate-300 rounded-lg focus:ring-2 focus:ring-green-700 focus:border-transparent transition-colors duration-200"
                          placeholder="Your full name"
                        />
                        {errors.name && (
                          <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-zinc-900 mb-2">
                          Email *
                        </label>
                        <input
                          {...register('email')}
                          type="email"
                          id="email"
                          className="w-full px-4 py-3 border text-zinc-900 border-slate-300 rounded-lg focus:ring-2 focus:ring-green-700 focus:border-transparent transition-colors duration-200"
                          placeholder="your@email.com"
                        />
                        {errors.email && (
                          <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-zinc-900 mb-2">
                        Company
                      </label>
                      <input
                        {...register('company')}
                        type="text"
                        id="company"
                        className="w-full px-4 py-3 border text-zinc-900 border-slate-300 rounded-lg focus:ring-2 focus:ring-green-700 focus:border-transparent transition-colors duration-200"
                        placeholder="Your company name"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-zinc-900 mb-2">
                        Subject *
                      </label>
                      <input
                        {...register('subject')}
                        type="text"
                        id="subject"
                        className="w-full px-4 py-3 border text-zinc-900 border-slate-300 rounded-lg focus:ring-2 focus:ring-green-700 focus:border-transparent transition-colors duration-200"
                        placeholder="What's this about?"
                      />
                      {errors.subject && (
                        <p className="mt-1 text-sm text-red-600">{errors.subject.message}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-zinc-900 mb-2">
                        Message *
                      </label>
                      <textarea
                        {...register('message')}
                        id="message"
                        rows={6}
                        className="w-full px-4 py-3 border text-zinc-900 border-slate-300 rounded-lg focus:ring-2 focus:ring-green-700 focus:border-transparent transition-colors duration-200 resize-none"
                        placeholder="Tell us about your project or inquiry..."
                      />
                      {errors.message && (
                        <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                      )}
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center px-8 py-4 bg-green-700 text-white font-semibold rounded-lg hover:bg-green-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-700 focus:ring-offset-2"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2 h-5 w-5" aria-hidden="true" />
                        </>
                      )}
                    </button>
                  </form>
                </div>
              </motion.div>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="space-y-8">
                  <div>
                    <h2 className="text-3xl font-bold text-zinc-900 mb-4">Contact Information</h2>
                    <p className="text-slate-600">
                      Reach out to us through any of these channels. We're here to help!
                    </p>
                  </div>

                  <div className="space-y-6">
                    {contactInfo.map((info, index) => {
                      const IconComponent = info.icon;
                      return (
                        <div key={info.title} className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-green-700 to-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0">
                            <IconComponent className="h-6 w-6 text-white" aria-hidden="true" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-zinc-900 mb-1">
                              {info.title}
                            </h3>
                            {info.link !== '#' ? (
                              <a
                                href={info.link}
                                className="text-slate-600 hover:text-green-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-700 focus:ring-offset-2 rounded"
                              >
                                {info.details}
                              </a>
                            ) : (
                              <p className="text-slate-600">{info.details}</p>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Map  */}
                  <Map />
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}