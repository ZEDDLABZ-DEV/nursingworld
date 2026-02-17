'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, AlertCircle, User, Mail, Phone, GraduationCap, BookOpen } from 'lucide-react';

export default function RequestDemo() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    qualification: '',
    exam: '',
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: null, message: '' });

    try {
      const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
      const response = await fetch(`${baseUrl}/api/public-demo/request`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({
          type: 'success',
          message: 'Thank you! Your demo request has been submitted successfully. We will contact you soon.',
        });
        setFormData({
          name: '',
          email: '',
          phone: '',
          qualification: '',
          exam: '',
        });
      } else {
        setStatus({
          type: 'error',
          message: data.error || 'Failed to submit request. Please try again.',
        });
      }
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'An error occurred. Please try again later.',
      });
    } finally {
      setLoading(false);
    }
  };

  const exams = [
    { value: '', label: 'Select Exam' },
    { value: 'NCLEX-RN', label: 'NCLEX-RN' },
    { value: 'DHA', label: 'DHA' },
    // { value: 'MOH', label: 'MOH' },
    // { value: 'HAAD', label: 'HAAD' },
    // { value: 'REx-PN', label: 'REx-PN' },
    // { value: 'NORCET', label: 'NORCET' },
    // { value: 'Other', label: 'Other' },
  ];

  return (
    <section id="request-demo" className="py-24 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-700 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white rounded-full filter blur-3xl opacity-5"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-white"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="inline-block mb-6"
            >
              <span className="bg-white/20 backdrop-blur-sm text-white px-6 py-2 rounded-full text-sm font-semibold border border-white/30">
                Get Started Today
              </span>
            </motion.div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Request a Free Demo
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Experience our world-class nursing education platform firsthand. Get a personalized demo and see how we can help you achieve your nursing career goals.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3 flex-shrink-0">
                  <CheckCircle className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Personalized Guidance</h4>
                  <p className="text-white/80">Get a customized learning path based on your goals</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3 flex-shrink-0">
                  <CheckCircle className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Expert Consultation</h4>
                  <p className="text-white/80">Speak with our experienced nursing educators</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3 flex-shrink-0">
                  <CheckCircle className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">No Obligation</h4>
                  <p className="text-white/80">Free demo with no commitment required</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Fill in your details</h3>
              
              <form className="space-y-5" onSubmit={handleSubmit}>
                {/* Status Message */}
                {status.type && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-4 rounded-xl flex items-start gap-3 ${
                      status.type === 'success'
                        ? 'bg-green-50 text-green-800 border border-green-200'
                        : 'bg-red-50 text-red-800 border border-red-200'
                    }`}
                  >
                    {status.type === 'success' ? (
                      <CheckCircle size={20} className="flex-shrink-0 mt-0.5" />
                    ) : (
                      <AlertCircle size={20} className="flex-shrink-0 mt-0.5" />
                    )}
                    <p className="text-sm font-medium">{status.message}</p>
                  </motion.div>
                )}

                {/* Name */}
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-700" htmlFor="name">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      disabled={loading}
                      className="w-full pl-12 pr-4 py-3.5 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all disabled:bg-gray-100 disabled:cursor-not-allowed"
                      placeholder="John Doe"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-700" htmlFor="email">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      disabled={loading}
                      className="w-full pl-12 pr-4 py-3.5 rounded-xl border-2 border-gray-200 focus:border-purple-500 focus:ring-4 focus:ring-purple-100 outline-none transition-all disabled:bg-gray-100 disabled:cursor-not-allowed"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-700" htmlFor="phone">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      disabled={loading}
                      className="w-full pl-12 pr-4 py-3.5 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all disabled:bg-gray-100 disabled:cursor-not-allowed"
                      placeholder="+91 9876543210"
                    />
                  </div>
                </div>

                {/* Qualification & Exam Row */}
                <div className="grid sm:grid-cols-2 gap-5">
                  {/* Qualification */}
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-gray-700" htmlFor="qualification">
                      Qualification *
                    </label>
                    <div className="relative">
                      <GraduationCap className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                      <input
                        type="text"
                        id="qualification"
                        name="qualification"
                        value={formData.qualification}
                        onChange={handleChange}
                        required
                        disabled={loading}
                        className="w-full pl-12 pr-4 py-3.5 rounded-xl border-2 border-gray-200 focus:border-purple-500 focus:ring-4 focus:ring-purple-100 outline-none transition-all disabled:bg-gray-100 disabled:cursor-not-allowed"
                        placeholder="B.Sc Nursing, GNM, etc."
                      />
                    </div>
                  </div>

                  {/* Exam */}
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-gray-700" htmlFor="exam">
                      Preparing For *
                    </label>
                    <div className="relative">
                      <BookOpen className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                      <select
                        id="exam"
                        name="exam"
                        value={formData.exam}
                        onChange={handleChange}
                        required
                        disabled={loading}
                        className="w-full pl-12 pr-4 py-3.5 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all disabled:bg-gray-100 disabled:cursor-not-allowed appearance-none bg-white"
                      >
                        {exams.map((exam) => (
                          <option key={exam.value} value={exam.value}>
                            {exam.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl font-bold hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {loading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Submitting...
                    </>
                  ) : (
                    <>
                      Request Demo
                      <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>

                <p className="text-xs text-gray-500 text-center">
                  By submitting this form, you agree to our{' '}
                  <a href="/privacy-policy" className="text-blue-600 hover:underline">Privacy Policy</a>
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
