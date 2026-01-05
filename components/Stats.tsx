'use client';

import { motion } from 'framer-motion';
import { BookOpen, Users, Award, Globe } from 'lucide-react';

export default function Stats() {
  const stats = [
    {
      icon: Users,
      value: '50,000+',
      label: 'Active Students',
      gradient: 'from-cyan-500 to-blue-600',
      delay: 0,
    },
    {
      icon: BookOpen,
      value: '200+',
      label: 'Expert Courses',
      gradient: 'from-purple-500 to-pink-600',
      delay: 0.1,
    },
    {
      icon: Award,
      value: '98%',
      label: 'Success Rate',
      gradient: 'from-orange-500 to-red-600',
      delay: 0.2,
    },
    {
      icon: Globe,
      value: '120+',
      label: 'Countries',
      gradient: 'from-emerald-500 to-teal-600',
      delay: 0.3,
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(99,102,241,0.1) 1px, transparent 0)',
          backgroundSize: '48px 48px'
        }}></div>
      </div>
      
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-200 rounded-full filter blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-200 rounded-full filter blur-3xl opacity-30"></div>

      <div className="container-custom relative z-10">
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
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
              Our Impact
            </span>
          </motion.div>
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent">
            Our Impact in Numbers
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join a thriving global community of nursing professionals
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: stat.delay }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${stat.gradient} rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500`}></div>
              <div className="relative bg-white rounded-3xl p-10 text-center border border-gray-100 hover:border-gray-200 hover:shadow-2xl transition-all duration-500 hover:scale-105">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-br ${stat.gradient} rounded-2xl flex items-center justify-center shadow-lg`}
                >
                  <stat.icon size={36} className="text-white" />
                </motion.div>
                <motion.h3
                  initial={{ scale: 1 }}
                  whileInView={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 0.5, delay: stat.delay + 0.3 }}
                  viewport={{ once: true }}
                  className="text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-3"
                >
                  {stat.value}
                </motion.h3>
                <p className="text-gray-600 text-lg font-medium">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

