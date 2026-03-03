'use client';

import { useEffect, useState } from 'react';
import { Megaphone } from 'lucide-react';

interface MarqueeItem {
  id: number;
  text: string;
  highlight?: boolean;
}

export default function AdMarquee() {
  const [advertisements, setAdvertisements] = useState<MarqueeItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMarquee = async () => {
      try {
        const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || '';
        const response = await fetch(`${baseUrl}/api/marquee/active`);
        const data = await response.json();
        
        if (data.data && data.data.length > 0) {
          setAdvertisements(data.data);
        }
      } catch (error) {
        console.error('Failed to fetch marquee:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMarquee();
  }, []);

  // Don't render if no data or still loading
  if (loading || advertisements.length === 0) {
    return null;
  }

  return (
    <div className="fixed w-full bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 py-2.5 overflow-hidden z-30" style={{ top: '122px' }}>
      {/* Gradient overlays for smooth edges */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-blue-600 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-purple-600 to-transparent z-10 pointer-events-none" />
      
      <div className="marquee-container">
        {/* First track */}
        <div className="marquee-track">
          {advertisements.map((ad, index) => (
            <div key={`a-${index}`} className="marquee-item">
              <Megaphone className="w-4 h-4 text-yellow-300 flex-shrink-0" />
              <span className={`text-sm font-medium whitespace-nowrap ${ad.highlight ? 'text-yellow-300' : 'text-white'}`}>
                {ad.text}
              </span>
              <span className="text-white/40 mx-6">•</span>
            </div>
          ))}
        </div>
        {/* Second track (duplicate for seamless loop) */}
        <div className="marquee-track">
          {advertisements.map((ad, index) => (
            <div key={`b-${index}`} className="marquee-item">
              <Megaphone className="w-4 h-4 text-yellow-300 flex-shrink-0" />
              <span className={`text-sm font-medium whitespace-nowrap ${ad.highlight ? 'text-yellow-300' : 'text-white'}`}>
                {ad.text}
              </span>
              <span className="text-white/40 mx-6">•</span>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .marquee-container {
          display: flex;
          width: 100%;
          overflow: hidden;
        }
        
        .marquee-track {
          display: flex;
          flex-shrink: 0;
          animation: marquee-scroll 20s linear infinite;
        }
        
        .marquee-item {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 0 12px;
          flex-shrink: 0;
        }
        
        @keyframes marquee-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        
        .marquee-container:hover .marquee-track {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
