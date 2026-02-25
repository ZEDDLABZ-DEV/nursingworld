'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Mail, Trash2, UserX, Shield, HelpCircle } from 'lucide-react';
import ContactRibbon from '@/components/ContactRibbon';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function AccountDeletionPage() {
  return (
    <>
      <ContactRibbon />
      <Navbar />

      <main className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 pt-32">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,#bfdbfe_0,transparent_25%),radial-gradient(circle_at_80%_0%,#a5f3fc_0,transparent_30%),radial-gradient(circle_at_80%_80%,#c7d2fe_0,transparent_25%)] opacity-60" />
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-10 relative">
            <div className="bg-white/80 backdrop-blur-xl border border-white/60 shadow-2xl rounded-3xl p-8 md:p-10">
              <p className="text-sm uppercase tracking-[0.2em] text-blue-600 mb-2">
                Policy Center
              </p>
              <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
                Account Deletion Policy
              </h1>
              <p className="text-gray-600 max-w-3xl">
                How to delete your account and what happens to your data at The Nursing World.
              </p>

              <div className="mt-6">
                <Link
                  href="/"
                  className="text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                >
                  ← Back to Home
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="pb-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white shadow-2xl rounded-3xl border border-gray-100 overflow-hidden">
              <div className="p-8 md:p-10 space-y-8 text-gray-800 leading-relaxed">
                
                {/* How to Delete */}
                <motion.section
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                      <Trash2 className="w-5 h-5 text-blue-600" />
                    </div>
                    <h2 className="text-xl font-semibold text-gray-900">
                      How to Delete Your Account
                    </h2>
                  </div>
                  <p className="mb-4">
                    You can request deletion of your account in one of the following ways:
                  </p>
                </motion.section>

                {/* Option 1 */}
                <motion.section
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      Option 1 – From Within the App
                    </h3>
                    <ol className="list-decimal pl-5 space-y-2">
                      <li>Open the app</li>
                      <li>Go to <span className="font-medium">Profile</span></li>
                      <li>Tap <span className="font-medium">&quot;Delete Account&quot;</span></li>
                      <li>Confirm deletion</li>
                    </ol>
                  </div>
                </motion.section>

                <div className="flex justify-center">
                  <span className="text-gray-500 font-semibold">OR</span>
                </div>

                {/* Option 2 */}
                <motion.section
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-100">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      Option 2 – Request via Email
                    </h3>
                    <p className="mb-3">Send an email to:</p>
                    <a
                      href="mailto:nclex.globaleducare@gmail.com"
                      className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors text-lg mb-3"
                    >
                      <Mail className="w-5 h-5" />
                      nclex.globaleducare@gmail.com
                    </a>
                    <p className="mt-3">
                      From your <span className="font-medium">registered email ID</span> with subject:
                    </p>
                    <p className="mt-2 bg-white rounded-lg px-4 py-2 inline-block font-medium text-gray-800 border">
                      &quot;Account Deletion Request&quot;
                    </p>
                    <p className="mt-4 text-sm text-gray-600">
                      We will process your request within <span className="font-semibold">7 working days</span>.
                    </p>
                  </div>
                </motion.section>

                {/* What Happens */}
                <motion.section
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center">
                      <UserX className="w-5 h-5 text-red-600" />
                    </div>
                    <h2 className="text-xl font-semibold text-gray-900">
                      What Happens When You Delete Your Account
                    </h2>
                  </div>
                  <p className="mb-4">When your account is deleted:</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Your profile information is <span className="font-medium">permanently deleted</span></li>
                    <li>Your login credentials are <span className="font-medium">removed</span></li>
                    <li>Your associated learning data is <span className="font-medium">deleted</span></li>
                  </ul>
                </motion.section>

                {/* Data Retention */}
                <motion.section
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center">
                      <Shield className="w-5 h-5 text-amber-600" />
                    </div>
                    <h2 className="text-xl font-semibold text-gray-900">
                      Data That May Be Retained
                    </h2>
                  </div>
                  <p className="mb-4">We may retain certain data if required for:</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Legal compliance</li>
                    <li>Fraud prevention</li>
                    <li>Financial record-keeping</li>
                  </ul>
                  <p className="mt-4 text-gray-600 bg-gray-50 rounded-xl p-4 border border-gray-200">
                    Such retained data will <span className="font-semibold">not be used for marketing</span>.
                  </p>
                </motion.section>

                {/* Contact */}
                <motion.section
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                      <HelpCircle className="w-5 h-5 text-green-600" />
                    </div>
                    <h2 className="text-xl font-semibold text-gray-900">Contact</h2>
                  </div>
                  <p>
                    For questions, contact:{' '}
                    <a
                      href="mailto:nclex.globaleducare@gmail.com"
                      className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                      nclex.globaleducare@gmail.com
                    </a>
                  </p>
                </motion.section>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
