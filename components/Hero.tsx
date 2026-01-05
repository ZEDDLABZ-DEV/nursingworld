'use client';

import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Users, Award } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-36 bg-gradient-to-br from-blue-50 via-cyan-50 to-purple-50">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-blue-200 to-cyan-200 rounded-full filter blur-3xl opacity-40 animate-float"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full filter blur-3xl opacity-40 animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/2 w-96 h-96 bg-gradient-to-br from-cyan-200 to-teal-200 rounded-full filter blur-3xl opacity-40 animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 w-full pt-4"
          >
            <h1 className="text-center text-5xl font-bold mb-6 leading-tight">
              <span className="text-gray-800">Inspiring Aspirations,</span><br />
              <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-purple-600 bg-clip-text text-transparent">Shaping Bright Futures</span><br />
              <span className="text-gray-800">in Nursing</span>
            </h1>

            <p className=" text-center text-md text-gray-600 mb-8 leading-relaxed max-w-2xl">
              Start your rewarding nursing journey with The Nursing World., where commitment and expertise drive success in NCLEX, DHA, and international nursing exams. Led by our esteemed founder, Ramandeep Kaur, our team is dedicated to helping you reach your goals.
            </p>

            <div className="flex justify-center flex-wrap gap-4 mb-12">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group text-sm lg:text-base">
                Get Started Today
                <ArrowRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </button>
              <button className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold border-2 border-blue-600 hover:bg-blue-50 hover:scale-105 transition-all duration-300 shadow-lg text-sm lg:text-base">
                Learn More
              </button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-4 lg:gap-6 max-w-2xl">
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 lg:p-5 shadow-lg flex-1 min-w-[140px]">
                <div className="flex items-center gap-2 mb-1">
                  <Users className="text-blue-600" size={22} />
                  <h3 className="text-xl lg:text-3xl font-bold text-gray-800">50K+</h3>
                </div>
                <p className="text-gray-600 text-xs lg:text-sm">Students</p>
              </div>
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 lg:p-5 shadow-lg flex-1 min-w-[140px]">
                <div className="flex items-center gap-2 mb-1">
                  <BookOpen className="text-purple-600" size={22} />
                  <h3 className="text-xl lg:text-3xl font-bold text-gray-800">200+</h3>
                </div>
                <p className="text-gray-600 text-xs lg:text-sm">Courses</p>
              </div>
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 lg:p-5 shadow-lg flex-1 min-w-[140px]">
                <div className="flex items-center gap-2 mb-1">
                  <Award className="text-cyan-600" size={22} />
                  <h3 className="text-xl lg:text-3xl font-bold text-gray-800">98%</h3>
                </div>
                <p className="text-gray-600 text-xs lg:text-sm">Success Rate</p>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Image/Illustration */}
          {/* <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:flex items-center justify-center flex-1 w-full"
          >
            <div className="relative z-10 w-full max-w-lg">
              <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl p-12 border border-blue-100">
                <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl p-16 flex flex-col items-center justify-center shadow-xl">
                  <div className="w-32 h-32 mb-6 bg-white rounded-full flex items-center justify-center shadow-2xl">
                    <BookOpen size={64} className="text-blue-600" />
                  </div>
                  <h3 className="text-3xl font-bold mb-3 text-white">Learn & Grow</h3>
                  <p className="text-blue-50 text-center text-lg">Your nursing journey starts here</p>
                </div>
              </div>
            </div>
          </motion.div> */}
        </div>
      </div>
    </section>
  );
}

