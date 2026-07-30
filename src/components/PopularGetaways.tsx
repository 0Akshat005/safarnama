import React, { useState } from 'react';
import { Calendar, Bed, Utensils, Train, Car, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { Getaway } from '../types';
import { GETAWAYS_DATA } from '../data/mockData';

interface PopularGetawaysProps {
  onSelectGetaway: (getaway: Getaway) => void;
}

export const PopularGetaways: React.FC<PopularGetawaysProps> = ({ onSelectGetaway }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? GETAWAYS_DATA.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === GETAWAYS_DATA.length - 1 ? 0 : prev + 1));
  };

  const getStayIcon = (stayType: string) => {
    if (stayType.includes('Rail')) return <Train className="w-3.5 h-3.5" />;
    if (stayType.includes('City Tour')) return <Car className="w-3.5 h-3.5" />;
    return <Bed className="w-3.5 h-3.5" />;
  };

  return (
    <section id="popular-getaways" className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-6">
      {/* Adaptive Glassmorphic Container allowing video scroll animation to shine through */}
      <div className="bg-black/40 backdrop-blur-2xl rounded-[2.5rem] p-6 sm:p-10 md:p-12 border border-white/15 shadow-2xl relative text-white">
        
        {/* Header Section */}
        <div className="relative flex flex-col items-center justify-center text-center mb-8 sm:mb-10">
          
          {/* Nav buttons top right */}
          <div className="absolute right-0 top-0 hidden sm:flex items-center gap-2">
            <button
              onClick={handlePrev}
              className="w-10 h-10 rounded-full border border-white/20 bg-white/10 hover:bg-white/25 text-white flex items-center justify-center backdrop-blur-md transition-all active:scale-95 cursor-pointer shadow-lg"
              aria-label="Previous"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-full border border-white/20 bg-white/10 hover:bg-white/25 text-white flex items-center justify-center backdrop-blur-md transition-all active:scale-95 cursor-pointer shadow-lg"
              aria-label="Next"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Leaf Flourish Header Title */}
          <div className="flex items-center justify-center gap-3">
            <Sparkles className="w-6 h-6 text-emerald-400" />
            <h2 className="font-script text-4xl sm:text-5xl md:text-6xl text-white font-bold tracking-tight drop-shadow-md">
              Popular Getaways
            </h2>
            <Sparkles className="w-6 h-6 text-emerald-400" />
          </div>

          <p className="text-slate-200 text-sm sm:text-base font-normal mt-1 drop-shadow">
            Handpicked trips loved by travelers like you
          </p>
        </div>

        {/* Unified Responsive Layout: Horizontal scroll on mobile (<sm), 4-col grid on desktop (sm+) */}
        <div className="flex sm:grid overflow-x-auto sm:overflow-visible snap-x snap-mandatory scrollbar-none grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 -mx-2 px-2 sm:mx-0 sm:px-0 pb-2 sm:pb-0">
          {GETAWAYS_DATA.map((getaway) => (
            <div
              key={getaway.id}
              onClick={() => onSelectGetaway(getaway)}
              className="group relative rounded-2xl overflow-hidden h-[380px] sm:h-[400px] w-[280px] sm:w-auto shrink-0 sm:shrink snap-start cursor-pointer border border-white/20 shadow-xl hover:shadow-emerald-950/40 transition-all duration-500 transform hover:-translate-y-1.5"
            >
              {/* Background Cover Image */}
              <img
                src={getaway.image}
                alt={getaway.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

              {/* Overlay Content */}
              <div className="absolute inset-x-0 bottom-0 p-5 flex flex-col items-start space-y-2 text-white">
                
                {/* Title */}
                <h3 className="font-script text-3xl sm:text-4xl font-bold tracking-wide drop-shadow-md text-white">
                  {getaway.title}
                </h3>

                {/* Details List */}
                <div className="space-y-1 text-xs sm:text-sm font-medium text-slate-200 drop-shadow">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-3.5 h-3.5 text-emerald-300" />
                    <span>{getaway.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    {getStayIcon(getaway.stayType)}
                    <span>{getaway.stayType}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Utensils className="w-3.5 h-3.5 text-emerald-300" />
                    <span>{getaway.meals}</span>
                  </div>
                </div>

                {/* Price Pill Button */}
                <div className="pt-2 w-full">
                  <span className="inline-flex items-center justify-center w-full bg-[#2d5a3f] hover:bg-[#386d4d] text-white text-xs sm:text-sm font-semibold py-2.5 px-4 rounded-full shadow-lg border border-emerald-400/30 transition-all">
                    From ${getaway.price}
                  </span>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
