'use client';

import { motion } from 'framer-motion';
import { Video, FileText, HeadphonesIcon, Clock, Award, Smartphone } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: Video,
      title: 'Video Lectures',
      description: 'High-quality video content from experienced nursing professionals and educators.',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: FileText,
      title: 'Study Materials',
      description: 'Comprehensive notes, guides, and resources for every nursing topic.',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: HeadphonesIcon,
      title: '24/7 Support',
      description: 'Get help whenever you need it from our dedicated support team.',
      gradient: 'from-orange-500 to-red-500',
    },
    {
      icon: Clock,
      title: 'Flexible Learning',
      description: 'Learn at your own pace with lifetime access to all course materials.',
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      icon: Award,
      title: 'Certifications',
      description: 'Earn recognized certificates upon course completion to boost your career.',
      gradient: 'from-yellow-500 to-orange-500',
    },
    {
      icon: Smartphone,
      title: 'Mobile Access',
      description: 'Study anywhere with our mobile-friendly platform and offline access.',
      gradient: 'from-indigo-500 to-purple-500',
    },
  ];

  return (
    <section id="features" className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full filter blur-3xl opacity-30 -z-10"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-cyan-100 to-pink-100 rounded-full filter blur-3xl opacity-30 -z-10"></div>

      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
              Features
            </span>
          </motion.div>
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent">
            Why Choose Us
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to succeed in your nursing career, all in one place
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              <div className="relative bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-transparent h-full">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  className={`w-20 h-20 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
                >
                  <feature.icon size={36} className="text-white" />
                </motion.div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                
                {/* Decorative corner */}
                <div className={`absolute top-4 right-4 w-2 h-2 bg-gradient-to-r ${feature.gradient} rounded-full opacity-50`}></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

