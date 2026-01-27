'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import ContactRibbon from '@/components/ContactRibbon';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function DataSafetyPage() {
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
                Safety &amp; Security
              </p>
              <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
                Data Safety
              </h1>
              <p className="text-gray-600 max-w-3xl">
                How The Nursing World safeguards your data across storage, access, and operations.
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
                    1. Security by Design
                  </h2>
                  <p>
                    We follow secure development practices, code reviews, dependency monitoring, and environment
                    separation to reduce risk and keep student and teacher data protected.
                  </p>
                </motion.section>

                <motion.section
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-xl font-semibold mb-3 text-gray-900">2. Encryption</h2>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Transport: All traffic uses HTTPS/TLS.</li>
                    <li>Storage: Sensitive data is stored with provider-managed encryption at rest.</li>
                    <li>Secrets: Keys and tokens are stored in secured env configs, not in code.</li>
                  </ul>
                </motion.section>

                <motion.section
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-xl font-semibold mb-3 text-gray-900">3. Access Control</h2>
                  <p>
                    Role-based access ensures only authorized users see the data they should. Administrative access
                    is limited to trained personnel and protected by strong authentication.
                  </p>
                </motion.section>

                <motion.section
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-xl font-semibold mb-3 text-gray-900">
                    4. Data Storage &amp; Retention
                  </h2>
                  <p>
                    Data is stored with reputable cloud providers. We retain data only as long as needed for learning
                    services, operations, and compliance, after which it is deleted or anonymized.
                  </p>
                </motion.section>

                <motion.section
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-xl font-semibold mb-3 text-gray-900">5. Backups &amp; Recovery</h2>
                  <p>
                    Regular backups and disaster-recovery procedures help protect against data loss. We periodically
                    review restore readiness to minimize downtime.
                  </p>
                </motion.section>

                <motion.section
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-xl font-semibold mb-3 text-gray-900">6. Incident Response</h2>
                  <p>
                    We monitor for anomalies and have processes to investigate, contain, and remediate security events.
                    Affected users are notified when required by law or best practice.
                  </p>
                </motion.section>

                <motion.section
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-xl font-semibold mb-3 text-gray-900">7. Third-Party Processors</h2>
                  <p>
                    We work with vetted providers (hosting, analytics, messaging, payments) bound by data protection
                    agreements and restricted to the minimum necessary data.
                  </p>
                </motion.section>

                <motion.section
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-xl font-semibold mb-3 text-gray-900">8. Your Controls</h2>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Update your profile information within your account.</li>
                    <li>Reach out for access, correction, or deletion requests where applicable.</li>
                    <li>Manage device/browser security, including password managers and MFA where available.</li>
                  </ul>
                </motion.section>

                <motion.section
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-xl font-semibold mb-3 text-gray-900">9. Contact</h2>
                  <p>
                    For security or data safety questions, contact{' '}
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

