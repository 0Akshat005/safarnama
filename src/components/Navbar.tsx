import React, { useState } from 'react';
import { Globe, Compass } from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenPlanner: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab, onOpenPlanner }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'tours', label: 'Tours & Packages' },
    { id: 'escapes', label: 'Weekend Escapes' },
    { id: 'family', label: 'Family Trips' },
  ];

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (id === 'tours' || id === 'escapes') {
      const el = document.getElementById('popular-getaways');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (id === 'family') {
      const el = document.getElementById('dream-destinations');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="w-full max-w-7xl mx-auto px-4 sm:px-6 pt-4 pb-2 relative z-30">
      <nav className="flex items-center justify-between py-3">
        {/* Logo */}
        <div 
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-3.5 cursor-pointer group select-none"
        >
          {/* Custom Luxury Emblem Badge */}
          <div className="relative w-11 h-11 rounded-2xl border border-emerald-400/40 bg-gradient-to-br from-emerald-500/20 via-black/50 to-emerald-950/60 backdrop-blur-xl flex items-center justify-center text-white shadow-[0_0_20px_rgba(52,211,153,0.25)] transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_0_25px_rgba(52,211,153,0.45)] group-hover:border-emerald-300/60">
            <Compass className="w-6 h-6 text-emerald-400 transition-transform duration-500 group-hover:rotate-45" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]" />
          </div>

          {/* Premium Brand Title & Subtitle */}
          <div className="flex flex-col">
            <div className="flex items-baseline leading-none">
              <span className="font-serif-title text-2xl font-black uppercase tracking-wider text-white drop-shadow-md group-hover:text-slate-100 transition-colors">
                Safar
              </span>
              <span className="font-script text-3.5xl font-bold text-emerald-400 drop-shadow-[0_2px_10px_rgba(52,211,153,0.4)] group-hover:text-emerald-300 transition-colors -ml-0.5 transform -rotate-2">
                Nama
              </span>
            </div>
            <span className="text-[9px] font-bold tracking-[0.3em] text-emerald-300/90 uppercase mt-0.5 drop-shadow">
              EXPLORE · DREAM · DISCOVER
            </span>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`relative py-1 text-sm font-medium transition-colors cursor-pointer ${
                  isActive
                    ? 'text-white font-semibold'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-emerald-400 rounded-full" />
                )}
              </button>
            );
          })}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-200 hover:text-white focus:outline-none"
            aria-label="Toggle Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 p-4 bg-[#142319]/95 backdrop-blur-lg rounded-2xl shadow-xl border border-white/10 flex flex-col space-y-3 z-50">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                handleNavClick(item.id);
                setMobileMenuOpen(false);
              }}
              className={`text-left py-2 px-3 rounded-lg text-sm font-medium ${
                activeTab === item.id
                  ? 'bg-[#2d5a3f] text-white'
                  : 'text-slate-200 hover:bg-white/10'
              }`}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenPlanner();
            }}
            className="w-full mt-2 py-2.5 px-4 bg-[#2d5a3f] hover:bg-[#386d4d] text-white rounded-xl text-sm font-medium flex items-center justify-center gap-2"
          >
            <Compass className="w-4 h-4" /> Start Your Adventure
          </button>
        </div>
      )}
    </header>
  );
};
