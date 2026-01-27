'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import ContactRibbon from '@/components/ContactRibbon';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function PrivacyPolicyPage() {
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
                Privacy Policy
              </h1>
              <p className="text-gray-600 max-w-3xl">
                How The Nursing World collects, uses, and protects your information.
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
                <motion.section
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-xl font-semibold mb-3 text-gray-900">
                    1. Information We Collect
                  </h2>
                  <p>
                    We collect information you provide directly (such as name, email, phone, and account
                    details) and information gathered automatically when you use our platform (including
                    device info, usage data, and cookies for essential functionality and analytics).
                  </p>
                </motion.section>

                <motion.section
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-xl font-semibold mb-3 text-gray-900">
                    2. How We Use Your Information
                  </h2>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>To provide, personalize, and improve our courses and services.</li>
                    <li>To communicate with you about updates, reminders, and support.</li>
                    <li>To maintain security, prevent fraud, and comply with legal obligations.</li>
                  </ul>
                </motion.section>

                <motion.section
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-xl font-semibold mb-3 text-gray-900">
                    3. Sharing and Disclosure
                  </h2>
                  <p>
                    We do not sell your personal data. We share information only with trusted service
                    providers (e.g., hosting, analytics, payment, and communication tools) bound by
                    confidentiality, or when required by law or to protect our legal rights.
                  </p>
                </motion.section>

                <motion.section
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-xl font-semibold mb-3 text-gray-900">
                    4. Data Security and Retention
                  </h2>
                  <p>
                    We use reasonable technical and organizational safeguards to protect your data. We
                    retain information only as long as necessary for the purposes described or as required
                    by law, after which it is securely deleted or anonymized.
                  </p>
                </motion.section>

                <motion.section
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-xl font-semibold mb-3 text-gray-900">5. Your Choices</h2>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Update or correct your account information in your profile.</li>
                    <li>Opt out of non-essential communications via provided unsubscribe options.</li>
                    <li>
                      Manage cookies via your browser settings (essential cookies may be required).
                    </li>
                  </ul>
                </motion.section>

                <motion.section
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-xl font-semibold mb-3 text-gray-900">
                    6. Children&apos;s Privacy
                  </h2>
                  <p>
                    Our services are intended for users 18+ or the age of majority in your jurisdiction.
                    If we learn we have collected data from a child without consent, we will delete it.
                  </p>
                </motion.section>

                <motion.section
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-xl font-semibold mb-3 text-gray-900">
                    7. Changes to This Policy
                  </h2>
                  <p>
                    We may update this policy periodically. Material changes will be communicated via our
                    site or email. Continued use after updates means you accept the revised policy.
                  </p>
                </motion.section>

                <motion.section
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-xl font-semibold mb-3 text-gray-900">8. Contact Us</h2>
                  <p>
                    For questions or requests about your data, contact us at{' '}
                    <a
                      href="mailto:nclex.globaleducare@gmail.com"
                      className="text-blue-600 font-semibold hover:text-blue-700"
                    >
                      nclex.globaleducare@gmail.com
                    </a>
                    .
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

