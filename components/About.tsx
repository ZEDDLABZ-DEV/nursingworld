'use client';

import { motion } from 'framer-motion';
import { Heart, Target, Lightbulb, Users, GraduationCap, Smartphone, BookOpen, Award } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: GraduationCap,
      title: 'Expert Faculty',
      description: 'Instructors with Master&apos;s degrees in Nursing and post-doctoral studies, bringing extensive clinical and theoretical experience.',
      gradient: 'from-blue-500 to-cyan-600',
      iconBg: 'bg-gradient-to-br from-blue-500/10 to-cyan-600/10',
    },
    {
      icon: BookOpen,
      title: 'Advanced LMS',
      description: 'Comprehensive Learning Management System with study materials for NCLEX-RN and various international nursing exams.',
      gradient: 'from-purple-500 to-pink-600',
      iconBg: 'bg-gradient-to-br from-purple-500/10 to-pink-600/10',
    },
    {
      icon: Smartphone,
      title: 'Mobile Learning',
      description: 'User-friendly mobile app for studying on the go - practice questions, review materials, and stay engaged anywhere.',
      gradient: 'from-emerald-500 to-teal-600',
      iconBg: 'bg-gradient-to-br from-emerald-500/10 to-teal-600/10',
    },
    {
      icon: Award,
      title: 'High Standards',
      description: 'Ensuring excellence in academic standards with practical relevance for real-world nursing practice.',
      gradient: 'from-orange-500 to-red-600',
      iconBg: 'bg-gradient-to-br from-orange-500/10 to-red-600/10',
    },
  ];

  const values = [
    {
      icon: Heart,
      title: 'Compassionate Care',
      description: 'We prioritize patient-centered learning and empathy in nursing education.',
      gradient: 'from-rose-500 to-pink-600',
      iconBg: 'bg-gradient-to-br from-rose-500/10 to-pink-600/10',
    },
    {
      icon: Target,
      title: 'Excellence',
      description: 'Committed to the highest standards in nursing education and practice.',
      gradient: 'from-blue-500 to-indigo-600',
      iconBg: 'bg-gradient-to-br from-blue-500/10 to-indigo-600/10',
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Embracing cutting-edge teaching methods and healthcare technologies.',
      gradient: 'from-amber-500 to-orange-600',
      iconBg: 'bg-gradient-to-br from-amber-500/10 to-orange-600/10',
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Building a supportive network of nursing professionals worldwide.',
      gradient: 'from-emerald-500 to-teal-600',
      iconBg: 'bg-gradient-to-br from-emerald-500/10 to-teal-600/10',
    },
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-white to-gray-50">
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
              About Us
            </span>
          </motion.div>
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent">
            About The Nursing World
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-4">
            The Nursing World is a comprehensive and trusted learning platform dedicated to empowering internationally educated nurses. Our mission is to educate and support nurses through advanced digital learning solutions, including a robust Learning Management System (LMS), making high-quality nursing education accessible anytime, anywhere.
          </p>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            This platform has been developed by highly experienced and qualified instructors who hold Master&apos;s degrees in Nursing, with several faculty members having completed post-doctoral studies. Our faculty brings extensive experience in both clinical practice and theoretical education, ensuring high academic standards and practical relevance.
          </p>
        </motion.div>

        {/* Key Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500`}></div>
                <div className="relative bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 h-full">
                  <div className={`${feature.iconBg} w-20 h-20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                    <div className={`bg-gradient-to-r ${feature.gradient} p-3 rounded-xl`}>
                      <feature.icon className="text-white" size={32} />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Learning Platform Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 lg:p-16 shadow-2xl mb-20"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h3 className="text-3xl lg:text-4xl font-bold mb-6">
                Learn Anytime, Anywhere
              </h3>
              <p className="text-xl text-white/90 mb-6 leading-relaxed">
                The Nursing World LMS offers a user-friendly mobile application, enabling students to study conveniently while commuting. Through the app, students can practice exam questions, review materials, and stay engaged with their coursework on the go.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 flex-shrink-0">
                    <Smartphone className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Mobile App Access</h4>
                    <p className="text-white/90">Study while commuting with our intuitive mobile application</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 flex-shrink-0">
                    <BookOpen className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Comprehensive Materials</h4>
                    <p className="text-white/90">Complete notes and study materials for NCLEX-RN and various international exams</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 flex-shrink-0">
                    <Target className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Practice Questions</h4>
                    <p className="text-white/90">Access thousands of practice questions anytime, anywhere</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden lg:flex items-center justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-white/20 rounded-3xl blur-2xl"></div>
                <div className="relative bg-white/10 backdrop-blur-lg rounded-3xl p-12 border border-white/20">
                  <div className="bg-white rounded-3xl p-8 shadow-2xl">
                    <Smartphone size={120} className="text-blue-600 mx-auto mb-4" />
                    <h4 className="text-2xl font-bold text-gray-900 text-center mb-2">Available Now</h4>
                    <p className="text-gray-600 text-center">iOS & Android</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Our Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent">
            Our Core Values
          </h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            The principles that guide everything we do
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></div>
              <div className="relative bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 h-full">
                <div className={`${value.iconBg} w-20 h-20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                  <div className={`bg-gradient-to-r ${value.gradient} p-3 rounded-xl`}>
                    <value.icon className="text-white" size={32} />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

