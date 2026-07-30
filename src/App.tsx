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

const FRAME_COUNT = 300;
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

const getFrameUrl = (index: number) => {
  const paddedIndex = String(index).padStart(4, '0');
  return `/frames/frame_${paddedIndex}.png`;
};

export default function App() {
  const isMobile = useIsMobile();

  // State for webpage UI
  const [activeTab, setActiveTab] = useState('home');
  const [selectedGetaway, setSelectedGetaway] = useState<Getaway | null>(null);
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);
  const [plannerOpen, setPlannerOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Canvas & Frame Animation Refs (desktop only)
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const imagesRef = useRef<(HTMLImageElement | null)[]>(new Array(FRAME_COUNT).fill(null));
  const targetFrameRef = useRef<number>(0);
  const currentFrameRef = useRef<number>(0);
  const animationFrameIdRef = useRef<number | null>(null);
  const lenisRef = useRef<Lenis | null>(null);

  const [loadedCount, setLoadedCount] = useState<number>(0);
  const [isInitialReady, setIsInitialReady] = useState<boolean>(false);

  // 1. Initialize Lenis Smooth Scroll Engine (desktop only — mobile uses native touch scroll)
  useEffect(() => {
    if (isMobile) return; // Native touch momentum is superior on mobile

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
        targetFrameRef.current = progress * (FRAME_COUNT - 1);
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
  }, [isMobile]);

  // Lock Lenis & body scroll when any modal is open so scrolling inside modal doesn't scroll background
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

  // 2. Preload & Pre-decode PNG Frames into GPU VRAM (desktop only)
  useEffect(() => {
    if (isMobile) {
      // On mobile: skip frame loading entirely, mark as ready immediately
      setIsInitialReady(true);
      setLoadedCount(FRAME_COUNT);
      return;
    }

    let isCancelled = false;

    const priorityIndices: number[] = [];
    for (let i = 0; i < Math.min(30, FRAME_COUNT); i++) {
      priorityIndices.push(i);
    }

    const loadAndDecodeImage = async (index: number): Promise<HTMLImageElement> => {
      if (imagesRef.current[index]) {
        return imagesRef.current[index]!;
      }

      return new Promise((resolve) => {
        const img = new Image();
        img.src = getFrameUrl(index);
        img.onload = async () => {
          if (!isCancelled) {
            try {
              if ('decode' in img) {
                await img.decode();
              }
            } catch {
              // Ignore decode errors
            }
            imagesRef.current[index] = img;
            setLoadedCount((prev) => prev + 1);
          }
          resolve(img);
        };
        img.onerror = () => {
          if (!isCancelled) {
            setLoadedCount((prev) => prev + 1);
          }
          resolve(img);
        };
      });
    };

    Promise.all(priorityIndices.map(loadAndDecodeImage)).then(() => {
      if (!isCancelled) {
        setIsInitialReady(true);
      }

      const remainingIndices: number[] = [];
      for (let i = 30; i < FRAME_COUNT; i++) {
        remainingIndices.push(i);
      }

      const BATCH_SIZE = 15;
      const loadNextBatch = async (startIndex: number) => {
        if (isCancelled || startIndex >= remainingIndices.length) return;
        const batch = remainingIndices.slice(startIndex, startIndex + BATCH_SIZE);
        await Promise.all(batch.map(loadAndDecodeImage));
        loadNextBatch(startIndex + BATCH_SIZE);
      };

      loadNextBatch(0);
    });

    return () => {
      isCancelled = true;
    };
  }, [isMobile]);

  // 3. Fallback Window Scroll Listener (desktop only)
  useEffect(() => {
    if (isMobile) return;

    const handleScroll = () => {
      if (lenisRef.current) return;
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;

      if (maxScroll > 0) {
        const progress = Math.max(0, Math.min(1, scrollTop / maxScroll));
        targetFrameRef.current = progress * (FRAME_COUNT - 1);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobile]);

  // 4. Render Loop with Refresh-Rate Independent Delta-Time Lerp (desktop only)
  useEffect(() => {
    if (isMobile) return; // Mobile uses static Ken Burns CSS background

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: false, desynchronized: true });
    if (!ctx) return;

    const handleResize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    const drawFrame = (frameIndex: number) => {
      const cw = window.innerWidth;
      const ch = window.innerHeight;
      const dpr = window.devicePixelRatio || 1;

      ctx.save();
      ctx.scale(dpr, dpr);
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = 'high';

      let img = imagesRef.current[frameIndex];

      if (!img || !img.complete || img.naturalWidth === 0) {
        for (let delta = 1; delta < FRAME_COUNT; delta++) {
          const prevIdx = frameIndex - delta;
          const nextIdx = frameIndex + delta;

          if (prevIdx >= 0 && imagesRef.current[prevIdx]?.complete) {
            img = imagesRef.current[prevIdx];
            break;
          }
          if (nextIdx < FRAME_COUNT && imagesRef.current[nextIdx]?.complete) {
            img = imagesRef.current[nextIdx];
            break;
          }
        }
      }

      ctx.fillStyle = '#0a0f0b';
      ctx.fillRect(0, 0, cw, ch);

      if (img && img.naturalWidth > 0) {
        const imgW = img.naturalWidth;
        const imgH = img.naturalHeight;

        const scale = Math.max(cw / imgW, ch / imgH);
        const drawW = imgW * scale;
        const drawH = imgH * scale;
        const x = (cw - drawW) / 2;
        const y = (ch - drawH) / 2;

        ctx.drawImage(img, x, y, drawW, drawH);
      }

      ctx.restore();
    };

    let lastTime = performance.now();

    const render = (now: number) => {
      const dt = Math.min(0.1, (now - lastTime) / 1000);
      lastTime = now;

      const lerpSpeed = 14;
      const lerpFactor = 1 - Math.exp(-lerpSpeed * dt);

      const diff = targetFrameRef.current - currentFrameRef.current;
      currentFrameRef.current += diff * lerpFactor;

      const idxToDraw = Math.round(currentFrameRef.current);
      drawFrame(idxToDraw);

      animationFrameIdRef.current = requestAnimationFrame(render);
    };

    animationFrameIdRef.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationFrameIdRef.current) {
        cancelAnimationFrame(animationFrameIdRef.current);
      }
    };
  }, [isInitialReady, isMobile]);

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

    // Close destination modal and open booking modal atomically
    setSelectedDestination(null);
    setSelectedGetaway(matched);
  };

  const handleConfirmBooking = (formData: BookingFormData) => {
    setToastMessage(`Reservation confirmed for ${formData.getawayTitle}! Confirmation sent to ${formData.email}.`);
    setTimeout(() => {
      setToastMessage(null);
    }, 6000);
  };

  const loadProgress = Math.min(100, Math.round((loadedCount / FRAME_COUNT) * 100));

  return (
    <div className="relative min-h-screen bg-[#0a0f0b] text-slate-800 font-sans-body selection:bg-[#2e6343] selection:text-white overflow-x-hidden">
      {/* 1. Preloading Progress Line (desktop only) */}
      {!isMobile && loadProgress < 100 && (
        <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-white/10">
          <div
            className="h-full bg-emerald-400 transition-all duration-150 ease-out shadow-[0_0_12px_#34d399]"
            style={{ width: `${loadProgress}%` }}
          />
        </div>
      )}

      {/* 2. Fullscreen Background — Canvas on desktop, Ken Burns static image on mobile */}
      {isMobile ? (
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
          <img
            src="/frames/frame_0001.png"
            alt=""
            className="mobile-hero-bg w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/70 pointer-events-none" />
        </div>
      ) : (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
          <canvas
            ref={canvasRef}
            className="block w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/70 pointer-events-none" />
        </div>
      )}

      {/* 3. Foreground Webpage Content */}
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
