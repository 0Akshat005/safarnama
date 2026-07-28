import React, { useState } from 'react';
import { X, Plane, Compass, CheckCircle2, Sparkles } from 'lucide-react';

interface TripPlannerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TripPlannerModal: React.FC<TripPlannerModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [destination, setDestination] = useState('Bali, Indonesia');
  const [style, setStyle] = useState('Relaxation & Beach');
  const [duration, setDuration] = useState('7 Days');
  const [budget, setBudget] = useState('$1,000 - $2,500');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  React.useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in overscroll-contain"
      onWheel={(e) => e.stopPropagation()}
    >
      <div className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col overscroll-contain">
        
        {/* Header */}
        <div className="bg-[#1e3e2b] p-6 text-white relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 text-emerald-300 text-xs font-bold uppercase tracking-widest mb-1">
            <Compass className="w-4 h-4" /> Tailor-Made Custom Journey
          </div>
          <h2 className="font-script text-4xl font-bold">Start Your Adventure</h2>
          <p className="text-xs text-slate-200 mt-1">
            Tell us your travel dream and our experts will design your perfect itinerary.
          </p>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-5 overscroll-contain">
          {submitted ? (
            <div className="text-center py-8 space-y-3">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-script text-3xl text-[#1e3e2b] font-bold">
                Custom Itinerary Requested!
              </h3>
              <p className="text-slate-600 text-sm max-w-md mx-auto">
                Thank you <strong>{name}</strong>! We are designing a customized <strong>{style}</strong> package for <strong>{destination}</strong> ({duration}) within your budget of <strong>{budget}</strong>. Check your inbox at <strong>{email}</strong> shortly.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="mt-4 bg-[#1e3e2b] text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-[#2d5a3f] transition-colors cursor-pointer"
              >
                Back to SafarNama
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Where would you like to go?
                </label>
                <input
                  type="text"
                  required
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  placeholder="e.g. Switzerland, Maldives, Japan, Italy..."
                  className="w-full px-3 py-2 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#1e3e2b]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Travel Style
                  </label>
                  <select
                    value={style}
                    onChange={(e) => setStyle(e.target.value)}
                    className="w-full px-3 py-2 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#1e3e2b] bg-white"
                  >
                    <option>Relaxation & Beach</option>
                    <option>Cultural & Historic</option>
                    <option>Mountain & Adventure</option>
                    <option>Luxury Resort Stay</option>
                    <option>Family Fun & Discovery</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Trip Duration
                  </label>
                  <select
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                    className="w-full px-3 py-2 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#1e3e2b] bg-white"
                  >
                    <option>3 - 5 Days</option>
                    <option>7 Days (1 Week)</option>
                    <option>10 - 14 Days (2 Weeks)</option>
                    <option>3+ Weeks</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Estimated Budget Per Person
                </label>
                <select
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  className="w-full px-3 py-2 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#1e3e2b] bg-white"
                >
                  <option>Under $1,000</option>
                  <option>$1,000 - $2,500</option>
                  <option>$2,500 - $5,000</option>
                  <option>$5,000+</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="John Doe"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3 py-2 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#1e3e2b]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Your Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="john@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-2 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#1e3e2b]"
                  />
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-[#1e3e2b] hover:bg-[#2d5a3f] text-white font-semibold py-3 rounded-full text-sm shadow flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <Sparkles className="w-4 h-4 text-amber-300" />
                  <span>Generate Free Custom Itinerary</span>
                </button>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};
