'use client';

import { motion } from 'framer-motion';
import { Images, ArrowLeft, X, Loader2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import ContactRibbon from '@/components/ContactRibbon';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { GalleryImage } from '@/components/Gallery';

export default function GalleryPage() {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || '';
        const response = await fetch(`${baseUrl}/api/gallery/public`);
        const data = await response.json();
        if (data.data) {
          setImages(data.data);
        }
      } catch (error) {
        console.error('Failed to fetch gallery:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchGallery();
  }, []);

  return (
    <main className="min-h-screen">
      <ContactRibbon />
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-36 pb-16 bg-gradient-to-br from-blue-50 via-cyan-50 to-purple-50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-blue-200 to-cyan-200 rounded-full filter blur-3xl opacity-40"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full filter blur-3xl opacity-40"></div>
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <Link 
              href="/#gallery" 
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium mb-6 transition-colors"
            >
              <ArrowLeft size={18} />
              Back to Home
            </Link>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-block mb-4"
            >
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold inline-flex items-center gap-2">
                <Images size={16} />
                Photo Gallery
              </span>
            </motion.div>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent">
              Our Complete Gallery
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Browse through our collection of memorable moments, student achievements, 
              and events that showcase the journey of nursing excellence at The Nursing World.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-white relative">
        <div className="container-custom">
          {loading ? (
            <div className="flex justify-center items-center py-20">
              <Loader2 className="w-10 h-10 text-blue-600 animate-spin" />
            </div>
          ) : images.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {images.map((image, index) => (
                <motion.div
                  key={image.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="group relative cursor-pointer"
                  onClick={() => setSelectedImage(image)}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10"></div>
                  <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 aspect-[4/3]">
                    <Image
                      src={image.imageUrl}
                      alt={image.alt}
                      fill
                      className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute bottom-0 left-0 right-0 p-4 overflow-hidden">
                        <h3 className="text-white font-semibold text-sm sm:text-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 truncate">
                          {image.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 text-gray-500">
              <Images className="w-16 h-16 mx-auto mb-4 opacity-50" />
              <p className="text-lg">No gallery images available</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors z-50"
            onClick={() => setSelectedImage(null)}
          >
            <X size={32} />
          </button>
          
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="relative max-w-5xl w-full aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage.imageUrl}
              alt={selectedImage.alt}
              fill
              className="object-contain rounded-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 bg-gradient-to-t from-black/80 to-transparent rounded-b-lg">
              <h3 className="text-white font-semibold text-base sm:text-xl truncate">{selectedImage.title}</h3>
              <p className="text-gray-300 text-xs sm:text-sm mt-1 truncate">{selectedImage.alt}</p>
            </div>
          </motion.div>
        </motion.div>
      )}

      <Footer />
    </main>
  );
}
