import React from 'react';
import { ShieldCheck, Headphones, Tag, Heart } from 'lucide-react';
import { FEATURES_DATA } from '../data/mockData';

export const WhyTravelWithUs: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'shield':
        return <ShieldCheck className="w-6 h-6 text-emerald-300" />;
      case 'headphones':
        return <Headphones className="w-6 h-6 text-emerald-300" />;
      case 'tag':
        return <Tag className="w-6 h-6 text-emerald-300" />;
      case 'heart':
        return <Heart className="w-6 h-6 text-emerald-300" />;
      default:
        return <ShieldCheck className="w-6 h-6 text-emerald-300" />;
    }
  };

  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-12 sm:py-6">
      {/* Adaptive Glassmorphic Container */}
      <div className="relative bg-black/40 backdrop-blur-2xl rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-10 border border-white/15 shadow-2xl overflow-hidden text-white">
        
        {/* Section Header — 26-32px on mobile */}
        <div className="text-center mb-8 sm:mb-10 relative z-10">
          <h2 className="font-script text-[28px] sm:text-5xl md:text-6xl text-white font-bold tracking-tight drop-shadow-md">
            — Why Travel With Us? —
          </h2>
        </div>

        {/* 4 Feature Items Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 relative z-10">
          {FEATURES_DATA.map((feature) => (
            <div
              key={feature.id}
              className="flex items-start gap-4 p-4 sm:p-4 rounded-2xl transition-all border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 hover:border-white/20"
            >
              {/* Circular Icon Badge — 44×44 min touch target */}
              <div className="w-12 h-12 min-w-[44px] min-h-[44px] rounded-full bg-[#2d5a3f] flex items-center justify-center shrink-0 shadow-lg border border-emerald-400/30">
                {getIcon(feature.iconName)}
              </div>

              {/* Text Description — 14px+ on mobile */}
              <div className="flex flex-col">
                <h3 className="font-bold text-white text-base leading-snug drop-shadow">
                  {feature.title}
                </h3>
                <p className="text-slate-200 text-sm mt-0.5 leading-relaxed font-normal">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
