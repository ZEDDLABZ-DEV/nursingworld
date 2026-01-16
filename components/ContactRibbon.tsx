'use client';

import { Mail, MessageCircle } from 'lucide-react';

export default function ContactRibbon() {
  return (
    <div className="fixed top-0 w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2.5 px-4 z-50 shadow-md">
      <div className="max-w-[1400px] mx-auto px-8 sm:px-6 lg:px-24 flex flex-wrap items-center lg:justify-end gap-4 md:gap-6 text-sm">
        <a 
          href="mailto:support@thenursingworld.com" 
          className="flex items-center gap-2 hover:opacity-80 transition-opacity"
        >
          <Mail size={16} />
          <span className="hidden sm:inline">support@thenursingworld.com</span>
        </a>
        <a 
          href="https://wa.me/919478642094" 
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:opacity-80 transition-opacity"
        >
          <MessageCircle size={16} />
          <span>+91-9478642094</span>
        </a>
      </div>
    </div>
  );
}

