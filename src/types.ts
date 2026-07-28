export interface Getaway {
  id: string;
  title: string;
  duration: string;
  stayType: string;
  meals: string;
  price: number;
  image: string;
  rating: number;
  reviewsCount: number;
  description: string;
  highlights: string[];
  itinerary: { day: number; title: string; description: string }[];
}

export interface Destination {
  id: string;
  name: string;
  country: string;
  image: string;
  galleryImages?: string[];
  tagline?: string;
  description: string;
  bestTimeToVisit: string;
  weatherTemp?: string;
  startingPrice?: number;
  rating?: number;
  reviewsCount?: number;
  topAttractions?: string[];
  highlights?: string[];
  sampleItinerary?: { day: number; title: string; description: string }[];
  gridSpan?: 'tall-left' | 'top-mid' | 'bottom-left' | 'bottom-mid' | 'top-right' | 'tall-right';
}

export interface Feature {
  id: string;
  iconName: 'shield' | 'headphones' | 'tag' | 'heart';
  title: string;
  description: string;
}

export interface BookingFormData {
  getawayId: string;
  getawayTitle: string;
  price: number;
  travelerName: string;
  email: string;
  phone: string;
  date: string;
  guests: number;
  specialRequests?: string;
}
