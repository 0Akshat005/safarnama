// SafarNama Application Root Component
import React, { useState, useEffect, useRef } from 'react';
import Lenis from 'lenis';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { PopularGetaways } from './components/PopularGetaways';
import { InMotionSection } from './components/InMotionSection';
import { DreamDestinations } from './components/DreamDestinations';
import { WhyTravelWithUs } from './components/WhyTravelWithUs';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { DestinationModal } from './components/DestinationModal';
import { TripPlannerModal } from './components/TripPlannerModal';
import { Getaway, Destination, BookingFormData } from './types';
import { GETAWAYS_DATA, DESTINATIONS_DATA } from './data/mockData';

const MOBILE_BREAKPOINT = 768;

/** Detect mobile viewport — checked once on mount, updated on resize */
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' ? window.innerWidth < MOBILE_BREAKPOINT : false
  );
  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    const onChange = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener('change', onChange);
    setIsMobile(mq.matches);
    return () => mq.removeEventListener('change', onChange);
  }, []);
  return isMobile;
}

export default function App() {
  const isMobile = useIsMobile();

  // State for webpage UI
  const [activeTab, setActiveTab] = useState('home');
  const [selectedGetaway, setSelectedGetaway] = useState<Getaway | null>(null);
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);
  const [plannerOpen, setPlannerOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Video & Lenis Animation Refs
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const lenisRef = useRef<Lenis | null>(null);

  // Initialize Lenis Smooth Scroll & Video Scrubbing Engine
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play().catch(() => {});
    }

    const handleScrollProgress = (progress: number) => {
      if (video && video.duration && !isNaN(video.duration)) {
        const targetTime = progress * video.duration;
        if (Math.abs(video.currentTime - targetTime) > 0.08) {
          video.currentTime = targetTime;
        }
      }
    };

    if (!isMobile) {
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        touchMultiplier: 2,
        infinite: false,
      });

      lenisRef.current = lenis;

      lenis.on('scroll', ({ scroll, limit }: { scroll: number; limit: number }) => {
        if (limit > 0) {
          const progress = Math.max(0, Math.min(1, scroll / limit));
          handleScrollProgress(progress);
        }
      });

      function raf(time: number) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
      const lenisRafId = requestAnimationFrame(raf);

      return () => {
        cancelAnimationFrame(lenisRafId);
        lenis.destroy();
        lenisRef.current = null;
      };
    } else {
      const onNativeScroll = () => {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
        if (maxScroll > 0) {
          const progress = Math.max(0, Math.min(1, scrollTop / maxScroll));
          handleScrollProgress(progress);
        }
      };

      window.addEventListener('scroll', onNativeScroll, { passive: true });
      return () => window.removeEventListener('scroll', onNativeScroll);
    }
  }, [isMobile]);

  // Lock Lenis & body scroll when any modal is open
  const isModalOpen = Boolean(selectedDestination || selectedGetaway || plannerOpen);

  useEffect(() => {
    if (isModalOpen) {
      lenisRef.current?.stop();
      document.body.style.overflow = 'hidden';
    } else {
      lenisRef.current?.start();
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      lenisRef.current?.start();
    };
  }, [isModalOpen]);

  // Handlers for webpage modals and interactions
  const handleStartAdventure = () => {
    setPlannerOpen(true);
  };

  const handleSelectGetaway = (getaway: Getaway) => {
    setSelectedGetaway(getaway);
  };

  const handleSelectDestination = (dest: Destination | string) => {
    if (typeof dest === 'string') {
      const found = DESTINATIONS_DATA.find((d) => 
        d.name.toLowerCase() === dest.toLowerCase() || d.id.toLowerCase() === dest.toLowerCase()
      );
      if (found) {
        setSelectedDestination(found);
      }
    } else {
      setSelectedDestination(dest);
    }
  };

  const handleOpenBookingForDestination = (destName: string) => {
    const clean = destName.toLowerCase().trim();
    const destObj = DESTINATIONS_DATA.find(
      (d) => d.name.toLowerCase() === clean || d.id.toLowerCase() === clean
    );

    let matched = GETAWAYS_DATA.find((g) => {
      const gTitle = g.title.toLowerCase();
      const gId = g.id.toLowerCase();
      return gTitle.includes(clean) || clean.includes(gTitle.split(' ')[0]) || gId.includes(clean);
    });

    if (!matched) {
      const destImg = destObj?.image || 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=1000&q=80';
      matched = {
        id: `${clean.replace(/\s+/g, '-')}-escape`,
        title: `${destName} Escape`,
        duration: '5 Days / 4 Nights',
        stayType: 'Luxury Curated Stay',
        meals: 'Breakfast & Dinner Included',
        price: destObj?.startingPrice || 499,
        image: destImg,
        rating: destObj?.rating || 4.9,
        reviewsCount: destObj?.reviewsCount || 180,
        description: destObj?.description || `Immerse yourself in the breathtaking beauty, luxury stays, and curated adventures in ${destName}.`,
        highlights: destObj?.highlights || [
          `Luxury 5-star resort stay in ${destName}`,
          'Private airport & scenic sightseeing transfers',
          'Personalized daily guided excursions',
          '24/7 dedicated travel concierge assistance'
        ],
        itinerary: destObj?.sampleItinerary || [
          { day: 1, title: `Arrival in ${destName}`, description: 'Private transfer and welcome luxury dinner.' },
          { day: 2, title: 'Guided Sightseeing', description: 'Explore top landmarks and scenic view points.' },
          { day: 3, title: 'Cultural Experience', description: 'Immersive guided heritage & local culinary tour.' },
          { day: 4, title: 'Departure', description: 'Breakfast and private return airport drop-off.' }
        ]
      };
    }

    setSelectedDestination(null);
    setSelectedGetaway(matched);
  };

  const handleConfirmBooking = (formData: BookingFormData) => {
    setToastMessage(`Reservation confirmed for ${formData.getawayTitle}! Confirmation sent to ${formData.email}.`);
    setTimeout(() => {
      setToastMessage(null);
    }, 6000);
  };

  return (
    <div className="relative min-h-screen bg-[#0a0f0b] text-slate-800 font-sans-body selection:bg-[#2e6343] selection:text-white overflow-x-hidden">
      
      {/* Fullscreen Background Cinematic Travel Video (Vercel Ready) */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <video
          ref={videoRef}
          src="/hero-video.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover scale-105 transition-transform duration-300"
        />
        {/* Dark gradient overlay for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/70 pointer-events-none" />
      </div>

      {/* Foreground Webpage Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Toast Notification */}
        {toastMessage && (
          <div className="fixed top-5 right-5 z-50 max-w-md bg-[#2e6343] text-white px-5 py-3.5 rounded-2xl shadow-2xl border border-emerald-400/30 flex items-center justify-between gap-4 animate-bounce">
            <span className="text-xs sm:text-sm font-medium">{toastMessage}</span>
            <button
              onClick={() => setToastMessage(null)}
              className="text-white/70 hover:text-white font-bold text-sm"
            >
              ✕
            </button>
          </div>
        )}

        {/* Top Header & Hero Area */}
        <div className="pb-4">
          <Navbar
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            onOpenPlanner={handleStartAdventure}
          />

          <HeroSection
            onStartAdventure={handleStartAdventure}
          />
        </div>

        {/* Main Content Sections */}
        <main className="flex-1 space-y-16">
          <PopularGetaways onSelectGetaway={handleSelectGetaway} />

          <InMotionSection onSelectDestination={handleSelectDestination} />

          <DreamDestinations onSelectDestination={handleSelectDestination} />

          <WhyTravelWithUs />
        </main>

        {/* Footer */}
        <Footer
          onNavigateTab={setActiveTab}
          onOpenPlanner={handleStartAdventure}
        />

        {/* Interactive Modals */}
        <BookingModal
          key={selectedGetaway?.id || 'none'}
          getaway={selectedGetaway}
          onClose={() => setSelectedGetaway(null)}
          onConfirmBooking={handleConfirmBooking}
        />

        <DestinationModal
          destination={selectedDestination}
          onClose={() => setSelectedDestination(null)}
          onOpenBookingForDestination={handleOpenBookingForDestination}
        />

        <TripPlannerModal
          isOpen={plannerOpen}
          onClose={() => setPlannerOpen(false)}
        />
      </div>
    </div>
  );
}
