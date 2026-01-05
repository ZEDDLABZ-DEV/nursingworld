'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Registered Nurse',
      avatar: '👩‍⚕️',
      rating: 5,
      text: 'The Nursing World transformed my career! The courses are comprehensive, and the instructors are truly experts in their field. I passed my NCLEX on the first try!',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      name: 'Michael Chen',
      role: 'ICU Nurse',
      avatar: '👨‍⚕️',
      rating: 5,
      text: 'As a working professional, the flexible learning schedule was perfect for me. The video lectures and study materials are top-notch. Highly recommended!',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Nursing Student',
      avatar: '👩‍🎓',
      rating: 5,
      text: 'The community support and 24/7 help desk made all the difference. I felt supported throughout my entire learning journey. This platform is amazing!',
      gradient: 'from-orange-500 to-red-500',
    },
    {
      name: 'David Thompson',
      role: 'Pediatric Nurse',
      avatar: '👨‍⚕️',
      rating: 5,
      text: 'The pediatric nursing course exceeded my expectations. Real-world scenarios and practical knowledge that I use every day in my practice.',
      gradient: 'from-emerald-500 to-teal-500',
    },
    {
      name: 'Jessica Williams',
      role: 'Nurse Practitioner',
      avatar: '👩‍⚕️',
      rating: 5,
      text: 'Outstanding platform! The advanced courses helped me transition into my NP role with confidence. The certification added great value to my resume.',
      gradient: 'from-indigo-500 to-purple-500',
    },
    {
      name: 'Robert Lee',
      role: 'Emergency Nurse',
      avatar: '👨‍⚕️',
      rating: 5,
      text: 'The critical care course was intense but incredibly rewarding. The skills I learned have been invaluable in my emergency department work.',
      gradient: 'from-pink-500 to-rose-500',
    },
  ];

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-br from-cyan-200 to-pink-200 rounded-full filter blur-3xl opacity-20"></div>

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
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
              Testimonials
            </span>
          </motion.div>
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent">
            What Our Students Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of satisfied nursing professionals who transformed their careers
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${testimonial.gradient} rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500`}></div>
              <div className="relative bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 h-full flex flex-col">
                <div className={`absolute top-6 right-6 w-16 h-16 bg-gradient-to-br ${testimonial.gradient} rounded-2xl flex items-center justify-center opacity-10`}>
                  <Quote size={32} />
                </div>
                
                <div className="flex items-center gap-4 mb-6">
                  {/* <div className="text-5xl">{testimonial.avatar}</div> */}
                  <div>
                    <h4 className="font-bold text-lg text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-500 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={18} className="text-yellow-400" fill="currentColor" />
                  ))}
                </div>
                
                <p className="text-gray-600 leading-relaxed flex-grow">&ldquo;{testimonial.text}&rdquo;</p>
                
                <div className={`mt-6 pt-6 border-t border-gray-100`}>
                  <div className={`h-1 w-16 bg-gradient-to-r ${testimonial.gradient} rounded-full`}></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

