'use client';

import { Heart, Facebook, Twitter, Instagram, Linkedin, Youtube, GraduationCap, Mail, MessageCircle } from 'lucide-react';

export default function Footer() {
  const footerLinks = {
    courses: [
      'Fundamentals of Nursing',
      'Medical-Surgical',
      'Pediatric Nursing',
      'Critical Care',
      'Mental Health',
      'Community Health',
    ],
    resources: [
      'Study Guides',
      'Practice Tests',
      'Video Library',
      'Blog Articles',
      'NCLEX Prep',
      'Career Center',
    ],
    company: [
      'About Us',
      'Our Team',
      'Careers',
      'Contact',
      'Privacy Policy',
      'Terms of Service',
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook', color: 'hover:bg-blue-600' },
    { icon: Twitter, href: '#', label: 'Twitter', color: 'hover:bg-blue-400' },
    { icon: Instagram, href: '#', label: 'Instagram', color: 'hover:bg-pink-600' },
    { icon: Linkedin, href: '#', label: 'LinkedIn', color: 'hover:bg-blue-700' },
    { icon: Youtube, href: '#', label: 'YouTube', color: 'hover:bg-red-600' },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 text-gray-800 relative overflow-hidden border-t border-gray-200">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200 rounded-full filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-200 rounded-full filter blur-3xl opacity-20"></div>

      <div className="container-custom py-20 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2.5 rounded-xl shadow-lg">
                <GraduationCap className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                The Nursing World
              </h3>
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Empowering nurses worldwide with quality education and comprehensive resources for professional excellence.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <a href="mailto:support@thenursingworld.com" className="flex items-center gap-3 text-gray-600 hover:text-blue-600 transition-colors group">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                  <Mail size={18} className="text-blue-600" />
                </div>
                <span className="text-sm font-medium">support@thenursingworld.com</span>
              </a>
              <a href="https://wa.me/919478642094" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-600 hover:text-green-600 transition-colors group">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-green-200 transition-colors">
                  <MessageCircle size={18} className="text-green-600" />
                </div>
                <span className="text-sm font-medium">+91-9478642094</span>
              </a>
            </div>

            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className={`w-11 h-11 bg-white rounded-xl flex items-center justify-center ${social.color} transition-all duration-300 hover:scale-110 shadow-md hover:shadow-lg border border-gray-200`}
                >
                  <social.icon size={20} className="text-gray-700" />
                </a>
              ))}
            </div>
          </div>

          {/* Popular Courses */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-blue-600">Popular Courses</h4>
            <ul className="space-y-3">
              {footerLinks.courses.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-600 hover:text-blue-600 hover:translate-x-1 inline-block transition-all duration-200">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-purple-600">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-600 hover:text-purple-600 hover:translate-x-1 inline-block transition-all duration-200">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-pink-600">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-600 hover:text-pink-600 hover:translate-x-1 inline-block transition-all duration-200">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 text-center md:text-left">
              Copyright © 2026 GE Academy Ltd, All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

