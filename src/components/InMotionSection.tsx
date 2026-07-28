import React from 'react';
import { 
  Send, 
  Play, 
  MapPin, 
  Award, 
  UserCheck, 
  ShieldCheck, 
  Calendar, 
  Headphones, 
  Users, 
  Briefcase, 
  Globe, 
  Star,
  Sparkles,
  Plane
} from 'lucide-react';
import { DESTINATIONS_DATA } from '../data/mockData';
import { Destination } from '../types';

interface InMotionSectionProps {
  onSelectDestination?: (dest: Destination | string) => void;
}

export const InMotionSection: React.FC<InMotionSectionProps> = ({ onSelectDestination }) => {
  const scrollToGetaways = () => {
    const el = document.getElementById('popular-getaways');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToDestinations = () => {
    const el = document.getElementById('dream-destinations');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleCardClick = (destId: string, destName: string) => {
    const matched = DESTINATIONS_DATA.find(
      (d) => d.id === destId || d.name.toLowerCase() === destName.toLowerCase()
    );
    if (onSelectDestination && matched) {
      onSelectDestination(matched);
    } else if (onSelectDestination) {
      onSelectDestination(destName);
    } else {
      scrollToDestinations();
    }
  };

  const trendingDestinations = [
    {
      id: 'kashmir',
      name: 'Kashmir',
      tagline: 'Paradise on Earth',
      image: 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'bali',
      name: 'Bali',
      tagline: 'Tropical Escape',
      image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'ladakh',
      name: 'Ladakh',
      tagline: 'Adventure Awaits',
      image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'kerala',
      name: 'Kerala',
      tagline: 'Backwaters & Bliss',
      image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'maldives',
      name: 'Maldives',
      tagline: 'Ocean Serenity',
      image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=600&q=80'
    }
  ];

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-12">
      {/* Container with dark glass backdrop and golden sunset houseboat background overlay */}
      <div className="relative rounded-[2.5rem] overflow-hidden p-6 sm:p-10 md:p-12 border border-white/15 bg-[#0b170e]/85 backdrop-blur-2xl text-white shadow-2xl">
        
        {/* Right side background image overlay matching screenshot */}
        <div 
          className="absolute inset-y-0 right-0 w-full lg:w-2/3 pointer-events-none opacity-40 bg-cover bg-right"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80')`,
            maskImage: 'linear-gradient(to right, transparent 0%, black 50%)',
            WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 50%)'
          }}
        />

        {/* Inner Content Grid */}
        <div className="relative z-10 space-y-8">
          
          {/* Top Section: Header & Action CTAs */}
          <div className="max-w-2xl space-y-5">
            
            {/* Eyebrow Pill */}
            <div className="inline-flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-widest">
              <Plane className="w-3.5 h-3.5 text-emerald-400" />
              <span>CURATED JOURNEYS, UNFORGETTABLE MEMORIES</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-1">
              <h2 className="font-serif-title text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
                Your Journey.
              </h2>
              <h3 className="font-serif-title text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
                Our <span className="font-serif-title italic font-normal text-[#10b981]">Expertise.</span>
              </h3>
            </div>

            {/* Paragraph Subtitle */}
            <p className="text-slate-300 text-sm sm:text-base max-w-lg leading-relaxed font-normal">
              From breathtaking destinations to seamless planning, we craft holidays that you'll cherish for a lifetime.
            </p>

            {/* Buttons Row */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={scrollToDestinations}
                className="inline-flex items-center gap-2 bg-[#10b981] hover:bg-[#059669] text-white text-sm font-semibold px-6 py-3 rounded-full shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer active:scale-95"
              >
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                  <Send className="w-3.5 h-3.5 text-white -rotate-45" />
                </div>
                <span>Explore Destinations</span>
                <span className="ml-1 text-base">→</span>
              </button>

              <button
                onClick={scrollToGetaways}
                className="inline-flex items-center gap-2 bg.black/40 hover:bg-white/10 text-white text-sm font-semibold px-6 py-3 rounded-full border border-white/30 backdrop-blur-md transition-all cursor-pointer"
              >
                <div className="w-6 h-6 rounded-full border border-white/40 flex items-center justify-center">
                  <Play className="w-3 h-3 text-white fill-white translate-x-0.5" />
                </div>
                <span>See How It Works</span>
              </button>
            </div>

          </div>

          {/* Middle Section: TRENDING DESTINATIONS 5 Cards Row */}
          <div className="space-y-3 pt-4">
            <div className="text-xs font-bold uppercase tracking-widest text-emerald-400">
              TRENDING DESTINATIONS
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3.5">
              {trendingDestinations.map((dest) => (
                <div
                  key={dest.id}
                  onClick={() => handleCardClick(dest.id, dest.name)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && handleCardClick(dest.name)}
                  className="group relative rounded-2xl overflow-hidden h-[180px] sm:h-[190px] border border-white/15 bg-black/40 shadow-lg cursor-pointer transition-all duration-300 transform hover:-translate-y-1 hover:border-emerald-400/40 z-20"
                >
                  {/* Card Background Image */}
                  <img
                    src={dest.image}
                    alt={dest.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 pointer-events-none"
                  />

                  {/* Dark Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none" />

                  {/* Card Overlay Content */}
                  <div className="absolute inset-x-0 bottom-0 p-3.5 flex flex-col items-start space-y-1 text-white pointer-events-none">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-white drop-shadow">
                      <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                      <span>{dest.name}</span>
                    </div>

                    <div className="flex items-center gap-1 text-[11px] text-emerald-200 font-medium drop-shadow">
                      <Sparkles className="w-3 h-3 text-emerald-400" />
                      <span>{dest.tagline}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Section 1: Features Bar (5 Pillars) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 p-4 sm:p-5 rounded-2xl border border-white/15 bg-white/5 backdrop-blur-xl">
            {/* Feature 1 */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-400/30 flex items-center justify-center shrink-0 text-emerald-400">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold text-white leading-tight">Handpicked Experiences</div>
                <div className="text-[11px] text-slate-300 mt-0.5">Carefully selected for you</div>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-400/30 flex items-center justify-center shrink-0 text-emerald-400">
                <UserCheck className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold text-white leading-tight">Expert Travel Planners</div>
                <div className="text-[11px] text-slate-300 mt-0.5">Personalised just for you</div>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-400/30 flex items-center justify-center shrink-0 text-emerald-400">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold text-white leading-tight">Best Price Guarantee</div>
                <div className="text-[11px] text-slate-300 mt-0.5">Get the best, always</div>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-400/30 flex items-center justify-center shrink-0 text-emerald-400">
                <Calendar className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold text-white leading-tight">Flexible Bookings</div>
                <div className="text-[11px] text-slate-300 mt-0.5">Plans that adapt to you</div>
              </div>
            </div>

            {/* Feature 5 */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-400/30 flex items-center justify-center shrink-0 text-emerald-400">
                <Headphones className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold text-white leading-tight">24/7 Travel Support</div>
                <div className="text-[11px] text-slate-300 mt-0.5">We're here, anytime</div>
              </div>
            </div>
          </div>

          {/* Bottom Section 2: Key Stats Bar (4 Pillars) */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 p-4 sm:p-5 rounded-2xl border border-white/15 bg-white/5 backdrop-blur-xl">
            {/* Stat 1 */}
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-xl bg-emerald-500/10 border border-emerald-400/30 flex items-center justify-center shrink-0 text-emerald-400">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <div className="font-serif-title text-2xl font-black text-white">10,000+</div>
                <div className="text-xs text-slate-300 font-medium">Happy Travellers</div>
              </div>
            </div>

            {/* Stat 2 */}
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-xl bg-emerald-500/10 border border-emerald-400/30 flex items-center justify-center shrink-0 text-emerald-400">
                <Briefcase className="w-6 h-6" />
              </div>
              <div>
                <div className="font-serif-title text-2xl font-black text-white">150+</div>
                <div className="text-xs text-slate-300 font-medium">Curated Experiences</div>
              </div>
            </div>

            {/* Stat 3 */}
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-xl bg-emerald-500/10 border border-emerald-400/30 flex items-center justify-center shrink-0 text-emerald-400">
                <Globe className="w-6 h-6" />
              </div>
              <div>
                <div className="font-serif-title text-2xl font-black text-white">50+</div>
                <div className="text-xs text-slate-300 font-medium">Destinations Worldwide</div>
              </div>
            </div>

            {/* Stat 4 */}
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-xl bg-emerald-500/10 border border-emerald-400/30 flex items-center justify-center shrink-0 text-emerald-400">
                <Star className="w-6 h-6 text-emerald-400" />
              </div>
              <div>
                <div className="font-serif-title text-2xl font-black text-white">4.9/5</div>
                <div className="text-xs text-slate-300 font-medium">Google Reviews</div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
