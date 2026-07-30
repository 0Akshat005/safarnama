import React from 'react';
import { MapPin, Sparkles } from 'lucide-react';
import { Destination } from '../types';
import { DESTINATIONS_DATA } from '../data/mockData';

interface DreamDestinationsProps {
  onSelectDestination: (dest: Destination) => void;
}

export const DreamDestinations: React.FC<DreamDestinationsProps> = ({ onSelectDestination }) => {
  const getDest = (id: string) => DESTINATIONS_DATA.find((d) => d.id === id)!;

  const cappadocia = getDest('cappadocia');
  const santorini = getDest('santorini');
  const kyoto = getDest('kyoto');
  const iceland = getDest('iceland');
  const newYork = getDest('new-york');
  const machuPicchu = getDest('machu-picchu');

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

        {/* Unified Bento Grid layout: Flex scroll on mobile (<md), Bento Grid on desktop (md+) */}
        <div className="flex md:grid overflow-x-auto md:overflow-visible snap-x snap-mandatory scrollbar-none grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-5 auto-rows-[200px] md:auto-rows-[190px] -mx-2 px-2 md:mx-0 md:px-0 pb-2 md:pb-0">
          
          {/* 1. Cappadocia */}
          {cappadocia && (
            <div
              key={cappadocia.id}
              onClick={() => onSelectDestination(cappadocia)}
              className="group relative rounded-2xl overflow-hidden cursor-pointer border border-white/20 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 md:row-span-2 md:col-span-1 h-[320px] md:h-auto w-[260px] md:w-auto shrink-0 md:shrink snap-start"
            >
              <img
                src={cappadocia.image}
                alt={cappadocia.name}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                <h3 className="font-script text-3xl sm:text-4xl font-bold drop-shadow">{cappadocia.name}</h3>
                <div className="flex items-center gap-1.5 text-xs sm:text-sm text-emerald-300 mt-0.5">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{cappadocia.country}</span>
                </div>
              </div>
            </div>
          )}

          {/* 2. Santorini */}
          {santorini && (
            <div
              key={santorini.id}
              onClick={() => onSelectDestination(santorini)}
              className="group relative rounded-2xl overflow-hidden cursor-pointer border border-white/20 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 md:col-span-1 h-[200px] md:h-auto w-[240px] md:w-auto shrink-0 md:shrink snap-start"
            >
              <img
                src={santorini.image}
                alt={santorini.name}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-4 text-white">
                <h3 className="font-script text-2xl sm:text-3xl font-bold drop-shadow">{santorini.name}</h3>
                <div className="flex items-center gap-1 text-xs text-emerald-300">
                  <MapPin className="w-3 h-3" />
                  <span>{santorini.country}</span>
                </div>
              </div>
            </div>
          )}

          {/* 3. Kyoto */}
          {kyoto && (
            <div
              key={kyoto.id}
              onClick={() => onSelectDestination(kyoto)}
              className="group relative rounded-2xl overflow-hidden cursor-pointer border border-white/20 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 md:col-span-1 h-[200px] md:h-auto w-[240px] md:w-auto shrink-0 md:shrink snap-start"
            >
              <img
                src={kyoto.image}
                alt={kyoto.name}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-4 text-white">
                <h3 className="font-script text-2xl sm:text-3xl font-bold drop-shadow">{kyoto.name}</h3>
                <div className="flex items-center gap-1 text-xs text-emerald-300">
                  <MapPin className="w-3 h-3" />
                  <span>{kyoto.country}</span>
                </div>
              </div>
            </div>
          )}

          {/* 4. Iceland */}
          {iceland && (
            <div
              key={iceland.id}
              onClick={() => onSelectDestination(iceland)}
              className="group relative rounded-2xl overflow-hidden cursor-pointer border border-white/20 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 md:row-span-2 md:col-span-1 h-[320px] md:h-auto w-[260px] md:w-auto shrink-0 md:shrink snap-start"
            >
              <img
                src={iceland.image}
                alt={iceland.name}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                <h3 className="font-script text-3xl sm:text-4xl font-bold drop-shadow">{iceland.name}</h3>
                <div className="flex items-center gap-1.5 text-xs sm:text-sm text-emerald-300 mt-0.5">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{iceland.country}</span>
                </div>
              </div>
            </div>
          )}

          {/* 5. New York */}
          {newYork && (
            <div
              key={newYork.id}
              onClick={() => onSelectDestination(newYork)}
              className="group relative rounded-2xl overflow-hidden cursor-pointer border border-white/20 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 md:col-span-1 h-[200px] md:h-auto w-[240px] md:w-auto shrink-0 md:shrink snap-start"
            >
              <img
                src={newYork.image}
                alt={newYork.name}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-4 text-white">
                <h3 className="font-script text-2xl sm:text-3xl font-bold drop-shadow">{newYork.name}</h3>
                <div className="flex items-center gap-1 text-xs text-emerald-300">
                  <MapPin className="w-3 h-3" />
                  <span>{newYork.country}</span>
                </div>
              </div>
            </div>
          )}

          {/* 6. Machu Picchu */}
          {machuPicchu && (
            <div
              key={machuPicchu.id}
              onClick={() => onSelectDestination(machuPicchu)}
              className="group relative rounded-2xl overflow-hidden cursor-pointer border border-white/20 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 md:col-span-1 h-[200px] md:h-auto w-[240px] md:w-auto shrink-0 md:shrink snap-start"
            >
              <img
                src={machuPicchu.image}
                alt={machuPicchu.name}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-4 text-white">
                <h3 className="font-script text-2xl sm:text-3xl font-bold drop-shadow">{machuPicchu.name}</h3>
                <div className="flex items-center gap-1 text-xs text-emerald-300">
                  <MapPin className="w-3 h-3" />
                  <span>{machuPicchu.country}</span>
                </div>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
