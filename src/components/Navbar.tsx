import React, { useState, useEffect } from 'react';
import { Compass } from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenPlanner: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab, onOpenPlanner }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'tours', label: 'Tours & Packages' },
    { id: 'escapes', label: 'Weekend Escapes' },
    { id: 'family', label: 'Family Trips' },
  ];

  // Body scroll lock when drawer is open (spec requirement)
  useEffect(() => {
    if (drawerOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [drawerOpen]);

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
    <header className="w-full max-w-7xl mx-auto px-6 pt-4 pb-2 relative z-30">
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

        {/* Mobile Menu Button — min 44×44 per spec */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setDrawerOpen(!drawerOpen)}
            className="p-2.5 min-w-[44px] min-h-[44px] text-slate-200 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded-xl flex items-center justify-center active:scale-95 transition-transform"
            aria-label="Toggle Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {drawerOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      {drawerOpen && (
        <div
          className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm drawer-overlay ${drawerOpen ? 'open' : ''}`}
          onClick={() => setDrawerOpen(false)}
        />
      )}

      {/* Mobile Slide-in Drawer Panel */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-50 w-[280px] max-w-[85vw] bg-[#0e1b12]/98 backdrop-blur-xl border-l border-white/10 shadow-2xl flex flex-col drawer-panel ${drawerOpen ? 'open' : ''} md:hidden`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between p-5 border-b border-white/10">
          <span className="font-serif-title text-lg font-bold text-white">Menu</span>
          <button
            onClick={() => setDrawerOpen(false)}
            className="w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors active:scale-95"
            aria-label="Close Menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Drawer Nav Items */}
        <div className="flex-1 overflow-y-auto p-5 space-y-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                handleNavClick(item.id);
                setDrawerOpen(false);
              }}
              className={`w-full text-left py-3.5 px-4 rounded-xl text-base font-medium min-h-[52px] flex items-center transition-all active:scale-[0.98] ${
                activeTab === item.id
                  ? 'bg-[#2d5a3f] text-white shadow-lg'
                  : 'text-slate-200 hover:bg-white/10'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Drawer CTA */}
        <div className="p-5 border-t border-white/10">
          <button
            onClick={() => {
              setDrawerOpen(false);
              onOpenPlanner();
            }}
            className="w-full py-3.5 px-4 min-h-[52px] bg-[#2d5a3f] hover:bg-[#386d4d] text-white rounded-xl text-base font-semibold flex items-center justify-center gap-2 active:scale-[0.98] transition-all shadow-lg"
          >
            <Compass className="w-5 h-5" /> Start Your Adventure
          </button>
        </div>
      </div>
    </header>
  );
};
