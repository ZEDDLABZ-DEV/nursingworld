'use client';

import { motion } from 'framer-motion';
import { Star, CheckCircle, Quote } from 'lucide-react';
import Image from 'next/image';

export default function SuccessStories() {
  const stories = [
    {
      name: 'Harmanpreet Kaur',
      role: 'NCLEX RN Graduate',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=faces',
      rating: 5,
      text: 'Thanks to The Nursing World., I felt fully prepared for my NCLEX RN exam. The personalized guidance and support I received made all the difference in my success!',
    },
    {
      name: 'Mandeep Singh',
      role: 'Nursing Student',
      image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=400&fit=crop&crop=faces',
      rating: 5,
      text: 'The team at The Nursing World. provided exceptional resources and encouragement throughout my nursing journey. I couldn\'t have achieved my goals without their help!',
    },
    {
      name: 'Paras',
      role: 'Nursing Graduate',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=faces',
      rating: 5,
      text: 'The Nursing World. truly cares about their students. Their expert guidance and streamlined application process helped me secure my place in nursing school with ease!',
    },
  ];

  return (
    <section id="success-stories" className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-gradient-to-br from-purple-200 to-cyan-200 rounded-full filter blur-3xl opacity-20"></div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
              Success Stories
            </span>
          </motion.div>
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent">
            Real Students, Real Success
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Hear from our students who have achieved their nursing career goals with our guidance and support
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {stories.map((story, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></div>
              <div className="relative bg-gray-50 rounded-3xl shadow-md hover:shadow-xl transition-all duration-500 p-8 h-full flex flex-col">
                {/* Quote decoration */}
                <div className="absolute top-6 right-6 text-blue-200 opacity-50">
                  <Quote size={48} fill="currentColor" />
                </div>

                {/* Star Rating */}
                <div className="flex gap-1 mb-6">
                  {[...Array(story.rating)].map((_, i) => (
                    <Star key={i} size={20} className="text-yellow-400" fill="currentColor" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-700 leading-relaxed mb-8 flex-grow italic text-base">
                  &ldquo;{story.text}&rdquo;
                </p>

                {/* Profile Section */}
                <div className="flex items-center gap-4 pt-6 border-t border-gray-200">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0 border-2 border-blue-500">
                    <Image
                      src={story.image}
                      alt={story.name}
                      width={64}
                      height={64}
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                      <CheckCircle size={14} className="text-white" fill="currentColor" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-gray-900">{story.name}</h4>
                    <p className="text-gray-600 text-sm">{story.role}</p>
                    <div className="flex items-center gap-1 text-blue-600 text-sm mt-1">
                      <CheckCircle size={14} />
                      <span>Verified Graduate</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
