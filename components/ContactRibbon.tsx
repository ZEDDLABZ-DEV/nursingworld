'use client';

import { Mail, Phone } from 'lucide-react';

export default function ContactRibbon() {
  return (
    <div className="fixed top-0 w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2.5 px-4 z-50 shadow-md">
      <div className="max-w-[1400px] mx-auto flex flex-wrap items-center justify-center md:justify-end gap-4 md:gap-6 text-sm">
        <a 
          href="mailto:support@thenursingworld.com" 
          className="flex items-center gap-2 hover:opacity-80 transition-opacity"
        >
          <Mail size={16} />
          <span className="hidden sm:inline">support@thenursingworld.com</span>
        </a>
        <a 
          href="tel:+17246078057" 
          className="flex items-center gap-2 hover:opacity-80 transition-opacity"
        >
          <Phone size={16} />
          <span>+1-724-607-8057</span>
        </a>
      </div>
    </div>
  );
}

