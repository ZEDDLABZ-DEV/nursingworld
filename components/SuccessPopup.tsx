'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Star, CheckCircle, Award } from 'lucide-react';
import Image from 'next/image';

interface SuccessStory {
  id: number;
  name: string;
  examType: string;
  photoUrl: string;
  location: string;
}

// Confetti piece component
const ConfettiPiece = ({ delay, left }: { delay: number; left: number }) => {
  const colors = ['#3B82F6', '#8B5CF6', '#EC4899', '#F59E0B', '#10B981', '#06B6D4', '#FFD700'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  
  return (
    <motion.div
      initial={{ y: -20, x: 0, rotate: 0, opacity: 1 }}
      animate={{
        y: [0, 700],
        x: [0, (Math.random() - 0.5) * 150],
        rotate: [0, Math.random() * 720],
        opacity: [1, 1, 0],
      }}
      transition={{
        duration: 3 + Math.random() * 2,
        delay: delay,
        ease: 'easeOut',
      }}
      className="absolute w-3 h-3 rounded-sm"
      style={{
        left: `${left}%`,
        backgroundColor: randomColor,
        top: -10,
      }}
    />
  );
};

export default function SuccessPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [confetti, setConfetti] = useState<Array<{ id: number; delay: number; left: number }>>([]);
  const [mounted, setMounted] = useState(false);
  const [student, setStudent] = useState<SuccessStory | null>(null);

  const generateConfetti = useCallback(() => {
    const pieces = Array.from({ length: 150 }, (_, i) => ({
      id: i,
      delay: Math.random() * 1,
      left: Math.random() * 100,
    }));
    setConfetti(pieces);
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const fetchAndShowPopup = async () => {
      try {
        const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || '';
        const response = await fetch(`${baseUrl}/api/success-stories/popup/public`);
        const data = await response.json();
        
        if (data.data) {
          // Get the first (latest) success story
          setStudent(data.data);
          
          // Show popup after data is loaded
          setTimeout(() => {
            setIsOpen(true);
            generateConfetti();
          }, 500);
        }
      } catch (error) {
        console.error('Failed to fetch success stories:', error);
      }
    };

    // Delay before fetching
    const timer = setTimeout(fetchAndShowPopup, 1000);

    return () => clearTimeout(timer);
  }, [mounted, generateConfetti]);

  const closePopup = () => {
    setIsOpen(false);
  };

  // Don't render anything on server or if no student data
  if (!mounted || !student) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          onClick={closePopup}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

          {/* Confetti */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {confetti.map((piece) => (
              <ConfettiPiece key={piece.id} delay={piece.delay} left={piece.left} />
            ))}
          </div>

          {/* Popup Content */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.5, opacity: 0, y: 50 }}
            transition={{ type: 'spring', damping: 15, stiffness: 300 }}
            className="relative bg-gradient-to-b from-white to-blue-50 rounded-3xl shadow-2xl max-w-md w-full overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closePopup}
              className="absolute top-4 right-4 z-20 w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center transition-colors shadow-lg"
            >
              <X className="w-5 h-5 text-gray-600" />
            </button>

            {/* Animated stars background */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute top-8 left-8"
              >
                <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
              </motion.div>
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                className="absolute top-20 right-6"
              >
                <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              </motion.div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                className="absolute bottom-32 left-6"
              >
                <Star className="w-5 h-5 text-purple-400 fill-purple-400" />
              </motion.div>
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
                className="absolute bottom-40 right-10"
              >
                <Star className="w-4 h-4 text-blue-400 fill-blue-400" />
              </motion.div>
            </div>

            {/* Content */}
            <div className="relative z-10 p-8 text-center">
              {/* Big Profile Image */}
              <motion.div
                initial={{ scale: 0, rotate: -10 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                className="relative inline-block mb-6"
              >
                <div className="w-36 h-36 mx-auto rounded-full overflow-hidden border-4 border-white shadow-2xl ring-4 ring-green-400 ring-offset-4">
                  <Image
                    src={student.photoUrl}
                    alt={student.name}
                    width={144}
                    height={144}
                    className="object-cover w-full h-full"
                  />
                </div>
                {/* Verified Badge */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5, type: 'spring' }}
                  className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-green-500 text-white px-4 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg"
                >
                  <CheckCircle className="w-4 h-4" />
                  <span className="text-sm font-bold">PASSED</span>
                </motion.div>
              </motion.div>

              {/* Congrats Text */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                  🎉 Congratulations! 🎉
                </h2>
                <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                  {student.name}
                </h3>
              </motion.div>

              {/* Pass Tags */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-wrap justify-center gap-3 mb-6"
              >
                <span className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-5 py-2 rounded-full font-bold shadow-lg">
                  <Award className="w-5 h-5" />
                  {student.examType}
                </span>
                <span className="inline-flex items-center gap-1 bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-semibold">
                  📍 {student.location}
                </span>
              </motion.div>

              {/* Message */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="text-gray-600 mb-6"
              >
                Another success story from The Nursing World! 🌟
              </motion.p>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
              >
                <a
                  href="/#courses"
                  onClick={closePopup}
                  className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3.5 rounded-full font-bold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
                >
                  Start Your Journey Today
                </a>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
