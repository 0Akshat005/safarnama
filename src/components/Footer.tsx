import React, { useState } from 'react';
import { Send, CheckCircle2, Globe, Compass } from 'lucide-react';

interface FooterProps {
  onNavigateTab: (tab: string) => void;
  onOpenPlanner: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigateTab, onOpenPlanner }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 5000);
      setEmail('');
    }
  };

  return (
    <footer className="w-full bg-[#122417] text-white pt-12 border-t border-white/10 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Column 1: Brand Info (Lg: 4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3.5 select-none">
              {/* Custom Luxury Emblem Badge */}
              <div className="relative w-11 h-11 rounded-2xl border border-emerald-400/40 bg-gradient-to-br from-emerald-500/20 via-black/50 to-emerald-950/60 backdrop-blur-xl flex items-center justify-center text-white shadow-[0_0_20px_rgba(52,211,153,0.25)]">
                <Compass className="w-6 h-6 text-emerald-400" />
                <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]" />
              </div>

              <div className="flex flex-col">
                <div className="flex items-baseline leading-none">
                  <span className="font-serif-title text-2xl font-black uppercase tracking-wider text-white">
                    Safar
                  </span>
                  <span className="font-script text-3.5xl font-bold text-emerald-400 drop-shadow-[0_2px_10px_rgba(52,211,153,0.4)] -ml-0.5 transform -rotate-2">
                    Nama
                  </span>
                </div>
                <span className="text-[9px] font-bold tracking-[0.3em] text-emerald-300/90 uppercase mt-0.5">
                  EXPLORE · DREAM · DISCOVER
                </span>
              </div>
            </div>

            <p className="text-slate-300 text-sm max-w-sm leading-relaxed">
              We plan journeys that leave you with stories worth sharing.
            </p>

            {/* Social Icons (P, IG, F, X) */}
            <div className="flex items-center gap-2.5 pt-2">
              <a
                href="#pinterest"
                onClick={(e) => e.preventDefault()}
                aria-label="Pinterest"
                className="w-8 h-8 rounded-full border border-white/20 bg-white/5 hover:bg-white/20 text-white flex items-center justify-center transition-colors text-xs font-bold"
              >
                P
              </a>

              <a
                href="#instagram"
                onClick={(e) => e.preventDefault()}
                aria-label="Instagram"
                className="w-8 h-8 rounded-full border border-white/20 bg-white/5 hover:bg-white/20 text-white flex items-center justify-center transition-colors text-xs font-bold"
              >
                IG
              </a>

              <a
                href="#facebook"
                onClick={(e) => e.preventDefault()}
                aria-label="Facebook"
                className="w-8 h-8 rounded-full border border-white/20 bg-white/5 hover:bg-white/20 text-white flex items-center justify-center transition-colors text-xs font-bold"
              >
                F
              </a>

              <a
                href="#x"
                onClick={(e) => e.preventDefault()}
                aria-label="X"
                className="w-8 h-8 rounded-full border border-white/20 bg-white/5 hover:bg-white/20 text-white flex items-center justify-center transition-colors text-xs font-bold"
              >
                X
              </a>
            </div>
          </div>

          {/* Column 2: Explore Links (Lg: 2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-bold text-white text-base">Explore</h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
              <li>
                <button
                  onClick={() => onNavigateTab('tours')}
                  className="hover:text-emerald-300 transition-colors cursor-pointer text-left"
                >
                  Tours & Packages
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateTab('escapes')}
                  className="hover:text-emerald-300 transition-colors cursor-pointer text-left"
                >
                  Weekend Escapes
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateTab('family')}
                  className="hover:text-emerald-300 transition-colors cursor-pointer text-left"
                >
                  Family Trips
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenPlanner}
                  className="hover:text-emerald-300 transition-colors cursor-pointer text-left"
                >
                  Custom Trips
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Company Links (Lg: 2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-bold text-white text-base">Company</h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
              <li><a href="#about" className="hover:text-emerald-300 transition-colors">About Us</a></li>
              <li><a href="#blog" className="hover:text-emerald-300 transition-colors">Travel Blog</a></li>
              <li><a href="#terms" className="hover:text-emerald-300 transition-colors">Terms & Conditions</a></li>
              <li><a href="#privacy" className="hover:text-emerald-300 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Column 4: Stay Updated Newsletter (Lg: 4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-bold text-white text-base">Stay Updated</h4>
            <p className="text-slate-300 text-xs sm:text-sm">
              Subscribe to get travel tips, exclusive deals & more!
            </p>

            <form onSubmit={handleSubscribe} className="pt-1">
              <div className="flex items-center bg-white/10 rounded-xl border border-white/20 p-1 shadow-sm focus-within:ring-2 focus-within:ring-emerald-400">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-3 py-2 text-xs sm:text-sm text-white placeholder-slate-400 focus:outline-none bg-transparent"
                />
                <button
                  type="submit"
                  className="bg-[#2d5a3f] hover:bg-[#386d4d] text-white p-2.5 rounded-lg transition-colors cursor-pointer shrink-0"
                  aria-label="Submit Email"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
              {subscribed && (
                <div className="flex items-center gap-1.5 text-emerald-300 text-xs mt-2 font-medium">
                  <CheckCircle2 className="w-4 h-4" /> Thank you for subscribing!
                </div>
              )}
            </form>
          </div>

        </div>
      </div>

      {/* Copyright Bar */}
      <div className="bg-[#0b170e] text-slate-400 py-4 text-center text-xs sm:text-sm font-medium border-t border-white/5">
        © 2026 SafarNama. All rights reserved.
      </div>
    </footer>
  );
};
