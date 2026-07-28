import React, { useState } from 'react';
import { X, Calendar, Check, Users, Sparkles } from 'lucide-react';
import { Getaway, BookingFormData } from '../types';

interface BookingModalProps {
  getaway: Getaway | null;
  onClose: () => void;
  onConfirmBooking: (data: BookingFormData) => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({ getaway, onClose, onConfirmBooking }) => {
  if (!getaway) return null;

  const [guests, setGuests] = useState(2);
  const [date, setDate] = useState('2026-09-15');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [specialRequests, setSpecialRequests] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const totalPrice = getaway.price * guests;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onConfirmBooking({
      getawayId: getaway.id,
      getawayTitle: getaway.title,
      price: totalPrice,
      travelerName: name,
      email,
      phone,
      date,
      guests,
      specialRequests
    });
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
      className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in overflow-y-auto overscroll-contain"
      onWheel={(e) => e.stopPropagation()}
    >
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col overscroll-contain">
        
        {/* Header Image Bar */}
        <div className="relative h-48 sm:h-56 shrink-0">
          <img
            src={getaway.image}
            alt={getaway.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 left-6 text-white">
            <h2 className="font-script text-4xl sm:text-5xl font-bold drop-shadow-md">
              {getaway.title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-200 font-medium">
              {getaway.duration} • {getaway.stayType} • {getaway.meals}
            </p>
          </div>
        </div>

        {/* Modal Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 overscroll-contain">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <Check className="w-8 h-8" />
              </div>
              <h3 className="font-script text-4xl text-[#1e3e2b] font-bold">
                Booking Confirmed!
              </h3>
              <p className="text-slate-600 text-sm max-w-md mx-auto">
                Thank you <strong>{name}</strong>! Your reservation for <strong>{getaway.title}</strong> on {date} for {guests} travelers has been received. Our travel concierge will reach out to <strong>{email}</strong> shortly.
              </p>
              <button
                onClick={onClose}
                className="mt-4 bg-[#1e3e2b] text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-[#2d5a3f] transition-colors"
              >
                Close Window
              </button>
            </div>
          ) : (
            <>
              {/* Highlights */}
              <div className="bg-[#f7f5f0] p-4 rounded-2xl border border-slate-200">
                <h4 className="text-xs uppercase font-bold text-[#1e3e2b] tracking-wider mb-2 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-amber-600" /> Package Highlights
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                  {getaway.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <span className="text-emerald-600 font-bold">•</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Booking Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Travel Date
                    </label>
                    <div className="relative">
                      <input
                        type="date"
                        required
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#1e3e2b]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Number of Guests
                    </label>
                    <div className="flex items-center border border-slate-300 rounded-xl overflow-hidden bg-slate-50">
                      <button
                        type="button"
                        onClick={() => setGuests(Math.max(1, guests - 1))}
                        className="px-3 py-2 text-slate-700 hover:bg-slate-200 font-bold"
                      >
                        -
                      </button>
                      <span className="flex-1 text-center text-sm font-semibold text-slate-800 flex items-center justify-center gap-1">
                        <Users className="w-3.5 h-3.5" /> {guests} {guests === 1 ? 'Guest' : 'Guests'}
                      </span>
                      <button
                        type="button"
                        onClick={() => setGuests(guests + 1)}
                        className="px-3 py-2 text-slate-700 hover:bg-slate-200 font-bold"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sarah Jenkins"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-3 py-2 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#1e3e2b]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="sarah@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3 py-2 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#1e3e2b]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+1 (555) 000-0000"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-3 py-2 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#1e3e2b]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Special Requests (Optional)
                    </label>
                    <input
                      type="text"
                      placeholder="Dietary preferences, room view..."
                      value={specialRequests}
                      onChange={(e) => setSpecialRequests(e.target.value)}
                      className="w-full px-3 py-2 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#1e3e2b]"
                    />
                  </div>
                </div>

                {/* Price Total Bar */}
                <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-slate-500 font-medium">Total Package Price</span>
                    <div className="text-2xl font-bold text-[#1e3e2b]">
                      ${totalPrice} <span className="text-xs font-normal text-slate-500">(${getaway.price} / person)</span>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="bg-[#1e3e2b] hover:bg-[#2d5a3f] text-white font-semibold px-7 py-3 rounded-full text-sm shadow-md transition-colors cursor-pointer"
                  >
                    Confirm Reservation
                  </button>
                </div>
              </form>
            </>
          )}
        </div>

      </div>
    </div>
  );
};
