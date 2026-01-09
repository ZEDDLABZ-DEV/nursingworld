'use client';

import { motion } from 'framer-motion';
import { 
  CheckCircle, 
  Clock, 
  Globe, 
  HeadphonesIcon, 
  Users, 
  BookOpen, 
  Award, 
  Target,
  Calendar,
  Video,
  MessageCircle,
  Languages,
  TrendingUp,
  Shield,
  ArrowRight
} from 'lucide-react';
import Link from 'next/link';

export default function NCLEXRNCoursePage() {
  const courseHighlights = [
    {
      icon: Video,
      title: 'Flexible Learning',
      description: 'Choose between online and offline classes based on your convenience',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: HeadphonesIcon,
      title: '24/7 Student Support',
      description: 'Round-the-clock assistance for all your queries and doubts',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: Users,
      title: 'Multiple Instructors',
      description: 'Select from a pool of expert instructors based on your preference',
      gradient: 'from-orange-500 to-red-500',
    },
    {
      icon: Languages,
      title: 'Multi-language Support',
      description: 'Learn in English, Punjabi-to-English, or English-to-Hindi',
      gradient: 'from-emerald-500 to-teal-500',
    },
  ];

  const courseDuration = [
    {
      phase: 'Phase 1: Coaching Classes',
      duration: '3 Months',
      description: 'Comprehensive coverage of all NCLEX-RN topics with expert guidance',
      icon: BookOpen,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      phase: 'Phase 2: Test Series',
      duration: '1 Month',
      description: '21 comprehensive competitive tests to ensure exam readiness',
      icon: Target,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
    },
  ];

  const languageOptions = [
    {
      language: 'English',
      description: 'Complete course in English with native-level fluency',
      flag: '🇺🇸',
    },
    {
      language: 'Punjabi ↔ English',
      description: 'Bilingual instruction in Punjabi and English',
      flag: '🇮🇳',
    },
    {
      language: 'English → Hindi',
      description: 'English course with Hindi explanations for better understanding',
      flag: '🇮🇳',
    },
  ];

  const successCommitment = [
    {
      title: '21 Comprehensive Tests',
      description: 'Rigorous test series covering all NCLEX-RN domains',
      icon: Award,
    },
    {
      title: '70% Success Benchmark',
      description: 'Achieve 70% or above in all 21 tests',
      icon: TrendingUp,
    },
    {
      title: 'First Attempt Success',
      description: 'Our commitment: Clear NCLEX-RN on your first attempt',
      icon: Shield,
    },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-cyan-50 to-purple-50 pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-blue-200 to-cyan-200 rounded-full filter blur-3xl opacity-40"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full filter blur-3xl opacity-40"></div>
        </div>

        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-6"
            >
              <span className="bg-gradient-to-r from-teal-600 to-teal-700 text-white px-6 py-2 rounded-full text-sm font-semibold">
                Premium Course
              </span>
            </motion.div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent">
              NCLEX-RN Preparation Course
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Comprehensive 4-month program designed to help you pass the NCLEX-RN on your first attempt with expert guidance, personalized support, and proven strategies.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="https://thenursingworld.com/signup/" target="_blank" rel="noopener noreferrer">
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-2">
                  Enroll Now
                  <ArrowRight size={20} />
                </button>
              </a>
              <Link href="/#contact">
                <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold border-2 border-blue-600 hover:bg-blue-50 hover:scale-105 transition-all duration-300 shadow-lg">
                  Contact Us
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Course Highlights */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent">
              Course Highlights
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to succeed in your NCLEX-RN journey
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {courseHighlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${highlight.gradient} rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500`}></div>
                <div className="relative bg-gray-50 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 h-full">
                  <div className={`w-16 h-16 bg-gradient-to-r ${highlight.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                    <highlight.icon className="text-white" size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{highlight.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{highlight.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Duration */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent">
              Course Structure
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              4-month comprehensive program divided into two strategic phases
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {courseDuration.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100 h-full">
                  <div className={`${phase.bgColor} w-20 h-20 rounded-2xl flex items-center justify-center mb-6`}>
                    <phase.icon className={phase.color} size={40} />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">{phase.phase}</h3>
                  <div className="flex items-center gap-2 mb-4">
                    <Clock className={phase.color} size={20} />
                    <span className={`${phase.color} font-bold text-lg`}>{phase.duration}</span>
                  </div>
                  <p className="text-gray-600 text-lg leading-relaxed">{phase.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Language Options */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent">
              Multi-Language Support
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Learn in your preferred language with instructors fluent in multiple languages
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {languageOptions.map((option, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className="text-6xl mb-4">{option.flag}</div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">{option.language}</h3>
                <p className="text-gray-600 leading-relaxed">{option.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Commitment */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Our Success Commitment
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              We stand by our promise: Achieve 70% or above in all 21 tests, and you'll clear NCLEX-RN on your first attempt
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {successCommitment.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-xl border border-white/20 text-center hover:bg-white/20 transition-all duration-300"
              >
                <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 mx-auto">
                  <item.icon className="text-white" size={40} />
                </div>
                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                <p className="text-white/90 text-lg leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <div className="bg-white/20 backdrop-blur-lg rounded-3xl p-8 max-w-3xl mx-auto border border-white/30">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Shield size={32} />
                <h3 className="text-3xl font-bold">100% First Attempt Success Rate</h3>
              </div>
              <p className="text-xl text-white/90">
                Our students who achieve the 70% benchmark have a proven track record of clearing NCLEX-RN on their first attempt. Join our success story!
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 lg:p-16 text-center shadow-2xl"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Start Your NCLEX-RN Journey?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join thousands of successful nurses who achieved their dreams with our proven methodology
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="https://thenursingworld.com/signup/" target="_blank" rel="noopener noreferrer">
                <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold hover:bg-gray-50 hover:scale-105 transition-all duration-300 shadow-lg text-lg flex items-center gap-2">
                  Enroll Now
                  <ArrowRight size={20} />
                </button>
              </a>
              <Link href="/#contact">
                <button className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full font-bold border-2 border-white hover:bg-white/30 hover:scale-105 transition-all duration-300 text-lg">
                  Talk to Our Team
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
