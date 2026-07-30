import React from 'react';
import { Send, Sparkles, ChevronDown, Compass } from 'lucide-react';

interface HeroSectionProps {
  onStartAdventure: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onStartAdventure }) => {
  const scrollToContent = () => {
    const el = document.getElementById('popular-getaways');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative w-full max-w-7xl mx-auto px-6 pt-8 sm:pt-12 pb-12 sm:pb-16 min-h-[80vh] sm:min-h-[85vh] flex flex-col justify-between text-white">
      {/* Hero Typography & CTAs floating directly over full-bleed scroll video */}
      <div className="my-auto max-w-3xl space-y-5 sm:space-y-6">
        
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full border border-emerald-400/40 bg-black/40 text-emerald-300 text-xs sm:text-sm font-semibold uppercase tracking-widest backdrop-blur-md shadow-lg">
          <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400" />
          <span>A LIVING POSTCARD EXPERIENCE</span>
        </div>

        {/* Headlines — mobile: 34-42px per spec, desktop: 8xl */}
        <div className="space-y-1 sm:space-y-2">
          <h1 className="font-script text-[38px] sm:text-7xl md:text-8xl text-white font-bold tracking-tight leading-[1.1] sm:leading-none drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
            Collect Moments,
          </h1>
          <h2 className="font-serif-title text-[32px] sm:text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-wider uppercase leading-[1.1] sm:leading-none drop-shadow-[0_6px_20px_rgba(0,0,0,0.9)]">
            NOT THINGS
          </h2>
        </div>

        {/* Narrative Paragraph — mobile: 16px min per spec */}
        <p className="text-slate-100 text-base sm:text-xl max-w-2xl leading-relaxed sm:leading-relaxed font-normal drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
          New places, new stories — a lifetime of memories, playing right before you. Scroll down to trigger the frame-by-frame journey.
        </p>

        {/* CTA Buttons — mobile: 52px min height, 16px min font per spec */}
        <div className="pt-3 sm:pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
          <button
            onClick={onStartAdventure}
            className="group relative inline-flex items-center justify-center gap-3 bg-[#2d5a3f] hover:bg-[#386d4d] text-white text-base sm:text-lg font-semibold px-8 py-4 min-h-[52px] rounded-full shadow-2xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer active:scale-95 border border-emerald-400/30"
          >
            <Send className="w-5 h-5 -rotate-45 transition-transform duration-300 group-hover:translate-x-1" />
            <span>Start Your Adventure</span>
          </button>

          <button
            onClick={scrollToContent}
            className="inline-flex items-center justify-center gap-2 px-7 py-4 min-h-[52px] rounded-full border border-white/30 bg-black/40 hover:bg-black/60 text-white text-base font-medium transition-all cursor-pointer backdrop-blur-md shadow-lg active:scale-95"
          >
            <Compass className="w-5 h-5 text-emerald-400" />
            <span>Explore Packages</span>
          </button>
        </div>

      </div>

      {/* Centered Bottom Scroll Indicator */}
      <div className="flex flex-col items-center justify-center pt-6 sm:pt-8">
        <button
          onClick={scrollToContent}
          className="flex flex-col items-center justify-center gap-2 text-slate-200 hover:text-white transition-colors cursor-pointer group drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]"
        >
          <span className="text-xs font-bold tracking-[0.25em] uppercase text-emerald-300 bg-black/30 px-3 py-1 rounded-full border border-white/10 backdrop-blur-sm">
            SCROLL TO EXPLORE
          </span>
          <ChevronDown className="w-5 h-5 animate-bounce text-emerald-400" />
        </button>
      </div>
    </section>
  );
};
