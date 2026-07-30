import React, { useState } from 'react';
import { 
  X, 
  MapPin, 
  Calendar, 
  Compass, 
  ArrowRight, 
  Star, 
  Sun, 
  Sparkles, 
  CheckCircle2, 
  Tag, 
  ChevronRight,
  Send,
  PhoneCall
} from 'lucide-react';
import { Destination } from '../types';

interface DestinationModalProps {
  destination: Destination | null;
  onClose: () => void;
  onOpenBookingForDestination: (destName: string) => void;
}

export const DestinationModal: React.FC<DestinationModalProps> = ({
  destination,
  onClose,
  onOpenBookingForDestination
}) => {
  if (!destination) return null;

  // Gallery state
  const images = destination.galleryImages && destination.galleryImages.length > 0 
    ? destination.galleryImages 
    : [destination.image];

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<'overview' | 'itinerary' | 'attractions'>('overview');

  const activeImage = images[activeImageIndex] || destination.image;

  React.useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <div 
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/75 backdrop-blur-md animate-fade-in"
      onWheel={(e) => e.stopPropagation()}
    >
      <div className="relative w-full sm:max-w-3xl bg-[#0e1b12] text-white rounded-t-3xl sm:rounded-3xl shadow-2xl overflow-hidden sm:my-4 max-h-[95vh] sm:max-h-[92vh] flex flex-col border border-white/20 overscroll-contain">
        
        {/* Top Image Gallery Header */}
        <div className="relative h-64 sm:h-80 w-full shrink-0 group">
          <img
            src={activeImage}
            alt={destination.name}
            className="w-full h-full object-cover transition-all duration-500"
            referrerPolicy="no-referrer"
            onError={(e) => {
              (e.target as HTMLImageElement).src = destination.image;
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0e1b12] via-black/30 to-black/50" />
          
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center border border-white/20 transition-all cursor-pointer shadow-lg"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Destination Header Overlay */}
          <div className="absolute bottom-4 left-6 right-6 flex items-end justify-between z-10">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-emerald-500/20 backdrop-blur-md border border-emerald-400/40 text-[11px] font-bold uppercase tracking-wider text-emerald-300">
                  {destination.tagline || 'Curated Escape'}
                </span>
                {destination.rating && (
                  <span className="flex items-center gap-1 text-xs font-bold text-amber-300 bg-black/50 backdrop-blur-md px-2.5 py-1 rounded-full border border-amber-400/30">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    <span>{destination.rating} ({destination.reviewsCount || 120}+ reviews)</span>
                  </span>
                )}
              </div>

              <h2 className="font-serif-title text-3xl sm:text-5xl font-bold text-white tracking-tight leading-none drop-shadow-md">
                {destination.name}
              </h2>
              <div className="flex items-center gap-2 text-slate-300 text-sm font-medium pt-0.5">
                <MapPin className="w-4 h-4 text-emerald-400" />
                <span>{destination.country}</span>
              </div>
            </div>

            {/* Starting Price Pill */}
            {destination.startingPrice && (
              <div className="hidden sm:flex flex-col items-end p-3 rounded-2xl bg-black/60 backdrop-blur-md border border-white/20">
                <span className="text-[10px] text-slate-300 uppercase tracking-widest font-semibold">Starting From</span>
                <span className="text-2xl font-black text-emerald-400 font-serif-title">${destination.startingPrice} <span className="text-xs text-slate-300 font-normal">/ person</span></span>
              </div>
            )}
          </div>

          {/* Dynamic Gallery Thumbnail Switcher Bar — 44px+ touch targets */}
          {images.length > 1 && (
            <div className="absolute top-4 left-4 z-20 flex items-center gap-2 bg-black/50 backdrop-blur-md p-1.5 rounded-2xl border border-white/15">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`w-11 h-11 min-w-[44px] min-h-[44px] rounded-lg overflow-hidden border transition-all cursor-pointer ${
                    activeImageIndex === idx ? 'border-emerald-400 ring-2 ring-emerald-400/50 scale-105' : 'border-white/30 opacity-70 hover:opacity-100'
                  }`}
                >
                  <img 
                    src={img} 
                    alt={`${destination.name} photo ${idx + 1}`} 
                    loading="lazy"
                    className="w-full h-full object-cover" 
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = destination.image;
                    }}
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Navigation Tabs Bar — overflow-x-auto for mobile */}
        <div className="flex items-center gap-2 px-4 sm:px-6 py-3 bg-[#132519] border-b border-white/10 text-xs font-bold uppercase tracking-wider overflow-x-auto scrollbar-none">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-4 py-2 rounded-xl transition-all cursor-pointer ${
              activeTab === 'overview'
                ? 'bg-emerald-500 text-white shadow-md'
                : 'text-slate-300 hover:text-white hover:bg-white/5'
            }`}
          >
            Overview & Highlights
          </button>
          {destination.topAttractions && destination.topAttractions.length > 0 && (
            <button
              onClick={() => setActiveTab('attractions')}
              className={`px-4 py-2 rounded-xl transition-all cursor-pointer ${
                activeTab === 'attractions'
                  ? 'bg-emerald-500 text-white shadow-md'
                  : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              Key Attractions ({destination.topAttractions.length})
            </button>
          )}
          {destination.sampleItinerary && destination.sampleItinerary.length > 0 && (
            <button
              onClick={() => setActiveTab('itinerary')}
              className={`px-4 py-2 rounded-xl transition-all cursor-pointer ${
                activeTab === 'itinerary'
                  ? 'bg-emerald-500 text-white shadow-md'
                  : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              Sample Itinerary
            </button>
          )}
        </div>

        {/* Scrollable Content Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 overscroll-contain">
          
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* Description */}
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed font-normal">
                {destination.description}
              </p>

              {/* Best Time & Weather Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white/5 border border-white/10">
                  <Calendar className="w-5 h-5 text-emerald-400 shrink-0" />
                  <div>
                    <span className="text-[10px] font-bold uppercase text-emerald-400 block tracking-wider">Best Season To Visit</span>
                    <span className="text-xs font-semibold text-white">{destination.bestTimeToVisit}</span>
                  </div>
                </div>

                {destination.weatherTemp && (
                  <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white/5 border border-white/10">
                    <Sun className="w-5 h-5 text-amber-400 shrink-0" />
                    <div>
                      <span className="text-[10px] font-bold uppercase text-amber-400 block tracking-wider">Average Weather</span>
                      <span className="text-xs font-semibold text-white">{destination.weatherTemp}</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Unique Experience Highlights */}
              {destination.highlights && destination.highlights.length > 0 && (
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 uppercase tracking-wider">
                    <Sparkles className="w-4 h-4" />
                    <span>CURATED EXPERIENCE HIGHLIGHTS</span>
                  </div>
                  <div className="space-y-2">
                    {destination.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-slate-200 bg-white/5 p-2.5 rounded-xl border border-white/5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {activeTab === 'attractions' && destination.topAttractions && (
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-2">
                <Compass className="w-4 h-4" />
                <span>Must-Visit Places & Experiences in {destination.name}</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {destination.topAttractions.map((attraction, i) => (
                  <div key={i} className="p-3.5 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between text-xs font-semibold text-white">
                    <span>{attraction}</span>
                    <ChevronRight className="w-4 h-4 text-emerald-400" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'itinerary' && destination.sampleItinerary && (
            <div className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                Recommended Day-by-Day Experience
              </h4>
              <div className="space-y-3">
                {destination.sampleItinerary.map((day) => (
                  <div key={day.day} className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="px-2.5 py-0.5 rounded-md bg-emerald-500/20 text-emerald-300 text-[10px] font-bold uppercase tracking-wider border border-emerald-400/30">
                        Day {day.day}
                      </span>
                      <span className="text-xs font-bold text-white">{day.title}</span>
                    </div>
                    <p className="text-xs text-slate-300 font-light leading-relaxed pt-1">
                      {day.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Fixed Footer CTA Bar */}
        <div className="p-4 sm:p-5 bg-[#0a140d] border-t border-white/10 flex flex-wrap items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-3">
            {destination.startingPrice && (
              <div className="sm:hidden flex flex-col">
                <span className="text-[9px] text-slate-400 uppercase">From</span>
                <span className="text-lg font-bold text-emerald-400 font-serif-title">${destination.startingPrice}</span>
              </div>
            )}
            <button
              onClick={onClose}
              className="text-xs font-semibold text-slate-400 hover:text-white px-3 py-2 transition-colors cursor-pointer"
            >
              Back to Explorations
            </button>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => onOpenBookingForDestination(destination.name)}
              className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-6 py-3.5 min-h-[52px] rounded-full text-sm shadow-xl flex items-center gap-2 transition-all cursor-pointer transform hover:-translate-y-0.5 active:scale-95 w-full sm:w-auto justify-center"
            >
              <Send className="w-4 h-4 -rotate-45" />
              <span>Book {destination.name} Escape</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
