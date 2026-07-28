import React from 'react';
import { MapPin, Sparkles } from 'lucide-react';
import { Destination } from '../types';
import { DESTINATIONS_DATA } from '../data/mockData';

interface DreamDestinationsProps {
  onSelectDestination: (dest: Destination) => void;
}

export const DreamDestinations: React.FC<DreamDestinationsProps> = ({ onSelectDestination }) => {
  return (
    <section id="dream-destinations" className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-6">
      {/* Adaptive Glassmorphic Container */}
      <div className="bg-black/40 backdrop-blur-2xl rounded-[2.5rem] p-6 sm:p-10 md:p-12 border border-white/15 shadow-2xl text-white">
        
        {/* Header Title */}
        <div className="flex flex-col items-center justify-center text-center mb-8 sm:mb-10">
          <div className="flex items-center justify-center gap-3">
            <Sparkles className="w-6 h-6 text-emerald-400" />
            <h2 className="font-script text-4xl sm:text-5xl md:text-6xl text-white font-bold tracking-tight drop-shadow-md">
              Dream Destinations
            </h2>
            <Sparkles className="w-6 h-6 text-emerald-400" />
          </div>
          <p className="text-slate-200 text-sm sm:text-base font-normal mt-1 drop-shadow">
            Explore iconic places around the world
          </p>
        </div>

        {/* Bento Grid layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-5 auto-rows-[200px] md:auto-rows-[190px]">
          
          {/* 1. Cappadocia */}
          {(() => {
            const dest = DESTINATIONS_DATA.find((d) => d.id === 'cappadocia')!;
            return (
              <div
                key={dest.id}
                onClick={() => onSelectDestination(dest)}
                className="group relative rounded-2xl overflow-hidden cursor-pointer border border-white/20 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 md:row-span-2 md:col-span-1 h-[320px] md:h-auto"
              >
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                  <h3 className="font-script text-3xl sm:text-4xl font-bold drop-shadow">{dest.name}</h3>
                  <div className="flex items-center gap-1.5 text-xs sm:text-sm text-emerald-300 mt-0.5">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{dest.country}</span>
                  </div>
                </div>
              </div>
            );
          })()}

          {/* 2. Santorini */}
          {(() => {
            const dest = DESTINATIONS_DATA.find((d) => d.id === 'santorini')!;
            return (
              <div
                key={dest.id}
                onClick={() => onSelectDestination(dest)}
                className="group relative rounded-2xl overflow-hidden cursor-pointer border border-white/20 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 md:col-span-1 h-[200px] md:h-auto"
              >
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-4 text-white">
                  <h3 className="font-script text-2xl sm:text-3xl font-bold drop-shadow">{dest.name}</h3>
                  <div className="flex items-center gap-1 text-xs text-emerald-300">
                    <MapPin className="w-3 h-3" />
                    <span>{dest.country}</span>
                  </div>
                </div>
              </div>
            );
          })()}

          {/* 3. Kyoto */}
          {(() => {
            const dest = DESTINATIONS_DATA.find((d) => d.id === 'kyoto')!;
            return (
              <div
                key={dest.id}
                onClick={() => onSelectDestination(dest)}
                className="group relative rounded-2xl overflow-hidden cursor-pointer border border-white/20 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 md:col-span-1 h-[200px] md:h-auto"
              >
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-4 text-white">
                  <h3 className="font-script text-2xl sm:text-3xl font-bold drop-shadow">{dest.name}</h3>
                  <div className="flex items-center gap-1 text-xs text-emerald-300">
                    <MapPin className="w-3 h-3" />
                    <span>{dest.country}</span>
                  </div>
                </div>
              </div>
            );
          })()}

          {/* 6. Iceland */}
          {(() => {
            const dest = DESTINATIONS_DATA.find((d) => d.id === 'iceland')!;
            return (
              <div
                key={dest.id}
                onClick={() => onSelectDestination(dest)}
                className="group relative rounded-2xl overflow-hidden cursor-pointer border border-white/20 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 md:row-span-2 md:col-span-1 h-[320px] md:h-auto"
              >
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                  <h3 className="font-script text-3xl sm:text-4xl font-bold drop-shadow">{dest.name}</h3>
                  <div className="flex items-center gap-1.5 text-xs sm:text-sm text-emerald-300 mt-0.5">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{dest.country}</span>
                  </div>
                </div>
              </div>
            );
          })()}

          {/* 4. New York */}
          {(() => {
            const dest = DESTINATIONS_DATA.find((d) => d.id === 'new-york')!;
            return (
              <div
                key={dest.id}
                onClick={() => onSelectDestination(dest)}
                className="group relative rounded-2xl overflow-hidden cursor-pointer border border-white/20 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 md:col-span-1 h-[200px] md:h-auto"
              >
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-4 text-white">
                  <h3 className="font-script text-2xl sm:text-3xl font-bold drop-shadow">{dest.name}</h3>
                  <div className="flex items-center gap-1 text-xs text-emerald-300">
                    <MapPin className="w-3 h-3" />
                    <span>{dest.country}</span>
                  </div>
                </div>
              </div>
            );
          })()}

          {/* 5. Machu Picchu */}
          {(() => {
            const dest = DESTINATIONS_DATA.find((d) => d.id === 'machu-picchu')!;
            return (
              <div
                key={dest.id}
                onClick={() => onSelectDestination(dest)}
                className="group relative rounded-2xl overflow-hidden cursor-pointer border border-white/20 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 md:col-span-1 h-[200px] md:h-auto"
              >
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-4 text-white">
                  <h3 className="font-script text-2xl sm:text-3xl font-bold drop-shadow">{dest.name}</h3>
                  <div className="flex items-center gap-1 text-xs text-emerald-300">
                    <MapPin className="w-3 h-3" />
                    <span>{dest.country}</span>
                  </div>
                </div>
              </div>
            );
          })()}

        </div>

      </div>
    </section>
  );
};
