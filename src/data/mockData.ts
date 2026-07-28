import { Getaway, Destination, Feature } from '../types';

export const GETAWAYS_DATA: Getaway[] = [
  {
    id: 'kashmir-paradise',
    title: 'Kashmir Paradise',
    duration: '5 Days / 4 Nights',
    stayType: 'Luxury Houseboat & Resort',
    meals: 'Breakfast & Dinner Included',
    price: 399,
    image: 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=1000&q=80',
    rating: 4.9,
    reviewsCount: 312,
    description: 'Immerse yourself in Kashmir’s snow-capped peaks, pristine lakes, and hand-carved wooden houseboats. Experience Dal Lake Shikara rides, Gulmarg gondolas, and warm Kashmiri hospitality.',
    highlights: [
      'Private luxury carved wooden houseboat stay on Dal Lake',
      'World’s second highest cable car ride on Gulmarg Gondola',
      'Guided tour to Pahalgam, Betaab Valley & Aru Valley',
      'Authentic Kashmiri Wazwan dinner & Saffron Kahwa tea'
    ],
    itinerary: [
      { day: 1, title: 'Arrival Srinagar & Sunset Shikara', description: 'Private transfer to luxury houseboat on Dal Lake. Evening Shikara ride.' },
      { day: 2, title: 'Gulmarg Gondola Snow Excursion', description: 'Panoramic cable car ride to Apharwat Peak.' },
      { day: 3, title: 'Pahalgam Valley & Lidder River', description: 'Explore pine forests, Betaab Valley, and Aru Valley.' },
      { day: 4, title: 'Mughal Gardens & Shopping', description: 'Visit Shalimar Bagh, Nishat Bagh, and saffron souks.' },
      { day: 5, title: 'Farewell Kashmir', description: 'Breakfast and private airport transfer.' }
    ]
  },
  {
    id: 'ladakh-odyssey',
    title: 'Ladakh Odyssey',
    duration: '6 Days / 5 Nights',
    stayType: 'Luxury Camps & Monastic Stay',
    meals: 'All Meals Included',
    price: 599,
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1000&q=80',
    rating: 4.95,
    reviewsCount: 184,
    description: 'Journey across the Land of High Passes. Discover cold desert dunes, high-altitude turquoise lakes, ancient Buddhist monasteries, and starry Himalayan skies.',
    highlights: [
      'Camping next to the turquoise waters of Pangong Tso Lake',
      'Double-humped Bactrian camel safari in Nubra Valley sand dunes',
      'Drive across Khardung La - one of the world’s highest motorable passes',
      'Guided tour of ancient Thiksey and Hemis monasteries'
    ],
    itinerary: [
      { day: 1, title: 'Arrival Leh & Acclimatization', description: 'Restful day in Leh. Evening stroll to Shanti Stupa.' },
      { day: 2, title: 'Leh to Nubra Valley via Khardung La', description: 'Cross Khardung La pass to Diskit and Hunder sand dunes.' },
      { day: 3, title: 'Nubra to Pangong Tso Lake', description: 'Scenic drive along Shyok River to Pangong Lake camping.' },
      { day: 4, title: 'Pangong Sunrise to Leh', description: 'Sunrise photography at the lake and Thiksey monastery visit.' },
      { day: 5, title: 'Magnetic Hill & Hall of Fame', description: 'Visit Magnetic Hill, Sangam confluence, and local bazaar.' },
      { day: 6, title: 'Departure Leh', description: 'Breakfast and airport drop-off.' }
    ]
  },
  {
    id: 'kerala-backwaters',
    title: 'Kerala Backwaters',
    duration: '5 Days / 4 Nights',
    stayType: 'Luxury Houseboat & Resort',
    meals: 'All Meals Included',
    price: 449,
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1000&q=80',
    rating: 4.88,
    reviewsCount: 276,
    description: 'Unwind in God’s Own Country. Glide on private luxury houseboats through emerald palm backwaters, explore tea gardens in Munnar, and rejuvenate with Ayurvedic treatments.',
    highlights: [
      'Overnight stay on a luxury private Kettuvallam houseboat in Alleppey',
      'Munnar tea plantation tour & visit to Tea Museum',
      'Spice farm tour & bamboo rafting in Thekkady',
      'Authentic Ayurvedic massage session'
    ],
    itinerary: [
      { day: 1, title: 'Cochin to Munnar Tea Hills', description: 'Drive past Cheeyappara Waterfalls to Munnar tea estates.' },
      { day: 2, title: 'Munnar Tea Gardens & Eravikulam', description: 'Spot Nilgiri Tahr mountain goats and visit Mattupetty Dam.' },
      { day: 3, title: 'Thekkady Wildlife & Spice Farm', description: 'Cardamom plantation tour and evening Kathakali show.' },
      { day: 4, title: 'Alleppey Backwaters Houseboat', description: 'Board private luxury houseboat for backwater cruise & feast.' },
      { day: 5, title: 'Departure Cochin', description: 'Breakfast on the water and transfer to Cochin Airport.' }
    ]
  },
  {
    id: 'bali-bliss',
    title: 'Bali Bliss',
    duration: '5 Days / 4 Nights',
    stayType: 'Comfort Stay',
    meals: 'Breakfast Included',
    price: 499,
    image: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=1000&q=80',
    rating: 4.9,
    reviewsCount: 142,
    description: 'Immerse yourself in Bali’s lush jungle sanctuaries, pristine beaches, and vibrant culture. Experience tranquil ocean views, iconic jungle swings, and rich Balinese hospitality.',
    highlights: [
      'Private villa stay in Ubud with private pool',
      'Guided tour to Tegallalang Rice Terraces & Sacred Monkey Forest',
      'Sunset seafood dinner at Jimbaran Beach',
      'Traditional Balinese spa treatment'
    ],
    itinerary: [
      { day: 1, title: 'Arrival & Ubud Relaxation', description: 'Airport transfer to your jungle villa. Evening welcome drinks & relaxation.' },
      { day: 2, title: 'Ubud Cultural Highlights', description: 'Visit rice terraces, iconic swings, and local craft villages.' },
      { day: 3, title: 'Temples & Waterfalls', description: 'Explore Tirta Empul water temple and Tegenungan Waterfall.' },
      { day: 4, title: 'Coastal Paradise Jimbaran', description: 'Beachside relaxation and sunset seafood feast.' },
      { day: 5, title: 'Farewell Bali', description: 'Souvenir shopping and airport transfer.' }
    ]
  },
  {
    id: 'maldives-escape',
    title: 'Maldives Escape',
    duration: '4 Days / 3 Nights',
    stayType: 'Luxury Stay',
    meals: 'All Meals',
    price: 699,
    image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1000&q=80',
    rating: 5.0,
    reviewsCount: 198,
    description: 'Escape to ultimate turquoise luxury. Unwind in private overwater bungalows with direct lagoon access, crystal clear waters, and world-class dining.',
    highlights: [
      'Overwater bungalow with glass floor viewing panel',
      'Full-board gourmet dining across 3 resort restaurants',
      'Complimentary sunset dolphin watching cruise',
      'Snorkeling with manta rays and vibrant coral reefs'
    ],
    itinerary: [
      { day: 1, title: 'Speedboat Arrival to Resort', description: 'Welcome coconuts, check-in to overwater villa.' },
      { day: 2, title: 'Underwater Marine Safari', description: 'Guided reef snorkeling and lagoon kayaking.' },
      { day: 3, title: 'Sunset Dolphin Cruise', description: 'Catamaran cruise with champagne and appetizers.' },
      { day: 4, title: 'Island Farewell', description: 'Breakfast over the sea and luxury return transfer.' }
    ]
  },
  {
    id: 'switzerland-magic',
    title: 'Switzerland Magic',
    duration: '6 Days / 5 Nights',
    stayType: 'Scenic Rail & Stay',
    meals: 'Breakfast Included',
    price: 899,
    image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1000&q=80',
    rating: 4.85,
    reviewsCount: 115,
    description: 'Journey through majestic alpine valleys, snow-capped peaks, and crystal clear lakes on world-famous panoramic trains including the Glacier Express.',
    highlights: [
      'Swiss Travel Pass with panoramic rail journeys',
      'Excursion to Jungfraujoch - Top of Europe',
      'Charming alpine lodge stays in Zermatt & Interlaken',
      'Lake Lucerne steamboat cruise'
    ],
    itinerary: [
      { day: 1, title: 'Zurich to Lucerne', description: 'Scenic train arrival and Lake Lucerne promenade walk.' },
      { day: 2, title: 'Interlaken & Lauterbrunnen', description: 'Valley of 72 waterfalls and alpine meadows.' },
      { day: 3, title: 'Jungfraujoch Peak Excursion', description: 'Cogwheel train ride to Europe’s highest railway station.' },
      { day: 4, title: 'Zermatt & Matterhorn View', description: 'Panoramic Glacier Express ride to Zermatt.' },
      { day: 5, title: 'Gornergrat Railway', description: 'Breathtaking Matterhorn reflection views.' },
      { day: 6, title: 'Departure', description: 'Breakfast and scenic train transfer to Zurich Airport.' }
    ]
  },
  {
    id: 'dubai-delight',
    title: 'Dubai Delight',
    duration: '4 Days / 3 Nights',
    stayType: 'City Tour & Stay',
    meals: 'Breakfast Included',
    price: 499,
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1000&q=80',
    rating: 4.92,
    reviewsCount: 167,
    description: 'Discover the ultimate blend of futuristic luxury, desert thrill, and world-class architecture in the heart of the Arabian Gulf.',
    highlights: [
      'VIP At the Top ticket for Burj Khalifa',
      'Desert Safari with dune bashing, camel rides & BBQ dinner',
      'Dubai Marina luxury yacht cruise',
      'Guided old Dubai gold & spice souk exploration'
    ],
    itinerary: [
      { day: 1, title: 'Arrival & Marina Stroll', description: 'Private transfer to 5-star city hotel. Evening marina views.' },
      { day: 2, title: 'Burj Khalifa & Dubai Mall', description: 'Observation deck admission and Dubai Fountain show.' },
      { day: 3, title: '4x4 Desert Safari', description: 'Thrilling sand dunes, sunset photo stops, and bedouin camp feast.' },
      { day: 4, title: 'Old Dubai & Departure', description: 'Abra boat ride, spice shopping, and airport drop-off.' }
    ]
  }
];

export const DESTINATIONS_DATA: Destination[] = [
  {
    id: 'kashmir',
    name: 'Kashmir',
    country: 'India',
    tagline: 'Paradise on Earth',
    image: 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=1000&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1598091383021-15ddea10925d?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1000&q=80'
    ],
    description: 'Surrounded by snow-capped Himalayan peaks, emerald valleys, and peaceful cedar forests, Kashmir is truly Paradise on Earth. Cruise on wooden Shikaras across tranquil Dal Lake and glide on Gulmarg gondolas.',
    bestTimeToVisit: 'April to October (Spring/Summer) & December to March (Snowfall)',
    weatherTemp: '12°C - 22°C (Pleasant)',
    startingPrice: 399,
    rating: 4.9,
    reviewsCount: 312,
    topAttractions: [
      'Shikara Ride & Houseboat Stay on Dal Lake',
      'Gulmarg Gondola Ride to Apharwat Peak',
      'Pahalgam Valley & Betaab Valley Exploration',
      'Sonamarg Glacier Trek & Mughal Gardens'
    ],
    highlights: [
      'Stay in luxury carved wooden houseboats on Dal Lake',
      'World’s second highest cable car ride in Gulmarg',
      'Traditional Kashmiri Wazwan feast & Saffron tea Kahwa'
    ],
    sampleItinerary: [
      { day: 1, title: 'Arrival Srinagar & Dal Lake Shikara', description: 'Check in to a traditional wooden houseboat on Dal Lake. Enjoy a serene sunset Shikara ride.' },
      { day: 2, title: 'Srinagar to Gulmarg Excursion', description: 'Board the Gulmarg Gondola for breathtaking views of snow-covered peaks.' },
      { day: 3, title: 'Pahalgam - Valley of Shepherds', description: 'Explore Betaab Valley, Aru Valley, and pine forests along the Lidder River.' },
      { day: 4, title: 'Mughal Gardens & Departure', description: 'Visit Shalimar Bagh and Nishat Bagh before departure transfer.' }
    ]
  },
  {
    id: 'bali',
    name: 'Bali',
    country: 'Indonesia',
    tagline: 'Tropical Escape',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1000&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1555400038-63f5ba517a47?auto=format&fit=crop&w=1000&q=80'
    ],
    description: 'An island sanctuary of emerald rice terraces, sacred water temples, volcanic peaks, and world-class surf beaches. Bali offers a perfect harmony of cultural wellness and tropical luxury.',
    bestTimeToVisit: 'April to October (Dry Season)',
    weatherTemp: '26°C - 31°C (Warm)',
    startingPrice: 499,
    rating: 4.9,
    reviewsCount: 245,
    topAttractions: [
      'Tegallalang Rice Terraces & Jungle Swings in Ubud',
      'Tanah Lot & Uluwatu Cliffside Water Temples',
      'Nusa Penida Island & Kelingking T-Rex Beach',
      'Mount Batur Sunrise Volcano Trek'
    ],
    highlights: [
      'Private pool villa stay in the heart of Ubud rainforest',
      'Kecak Fire Dance performance at Uluwatu Sunset Temple',
      'Traditional Balinese herbal spa massage & floating breakfast'
    ],
    sampleItinerary: [
      { day: 1, title: 'Ubud Welcome & Jungle Villa', description: 'Arrival transfer to Ubud. Evening flower bath & relaxation.' },
      { day: 2, title: 'Ubud Rice Terraces & Temples', description: 'Explore Tegallalang rice terraces and Sacred Monkey Forest.' },
      { day: 3, title: 'Nusa Penida Day Trip', description: 'Speedboat cruise to Kelingking Beach & Broken Beach.' },
      { day: 4, title: 'Coastal Seminyak & Sunset', description: 'Relax at beach clubs and watch Tanah Lot sunset.' }
    ]
  },
  {
    id: 'ladakh',
    name: 'Ladakh',
    country: 'India',
    tagline: 'Adventure Awaits',
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1000&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?auto=format&fit=crop&w=1000&q=80'
    ],
    description: 'A high-altitude mountain desert of stark beauty, ancient Tibetan monasteries perched on craggy cliffs, crystal-clear high lakes, and dramatic Himalayan mountain passes.',
    bestTimeToVisit: 'May to September',
    weatherTemp: '10°C - 20°C (Crisp & Clear)',
    startingPrice: 599,
    rating: 4.95,
    reviewsCount: 184,
    topAttractions: [
      'Pangong Tso High Altitude Turquoise Lake',
      'Khardung La Pass (17,982 ft)',
      'Thiksey & Hemis Ancient Monasteries',
      'Nubra Valley Hunder Cold Desert Camel Safari'
    ],
    highlights: [
      'Glamping under starry Himalayan skies at Pangong Lake',
      'Ride Bactrian double-humped camels across white sand dunes',
      'Cross Khardung La — one of the highest motorable passes in the world'
    ],
    sampleItinerary: [
      { day: 1, title: 'Arrival Leh & Acclimatization', description: 'Rest and acclimatization in Leh. Evening walk to Shanti Stupa.' },
      { day: 2, title: 'Leh to Nubra Valley via Khardung La', description: 'Drive over Khardung La pass down to Nubra Valley sand dunes.' },
      { day: 3, title: 'Nubra to Pangong Tso Lake', description: 'Cross Shyok river route to the mesmerizing turquoise waters of Pangong.' },
      { day: 4, title: 'Pangong to Leh & Monastery Tour', description: 'Sunrise photography at the lake and visit Thiksey Monastery.' }
    ]
  },
  {
    id: 'kerala',
    name: 'Kerala',
    country: 'India',
    tagline: 'Backwaters & Bliss',
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1000&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1000&q=80'
    ],
    description: 'God’s Own Country boasts serene emerald backwaters, rolling tea plantations in Munnar, spice sanctuaries in Thekkady, and peaceful Arabian Sea palm beaches.',
    bestTimeToVisit: 'September to March',
    weatherTemp: '22°C - 30°C (Tropical Breeze)',
    startingPrice: 449,
    rating: 4.88,
    reviewsCount: 276,
    topAttractions: [
      'Alleppey Luxury Houseboat Cruise',
      'Munnar Tea Estates & Mattupetty Dam',
      'Thekkady Wildlife Sanctuary & Spice Plantation',
      'Varkala Cliff Beach & Sunset Views'
    ],
    highlights: [
      'Overnight stay on a traditional Kettuvallam houseboat',
      'Freshly prepared Keralan seafood served on banana leaves',
      'Authentic Ayurvedic massage and rejuvenation treatment'
    ],
    sampleItinerary: [
      { day: 1, title: 'Cochin Arrival to Munnar', description: 'Drive past Cheeyappara Waterfalls to tea plantation hills of Munnar.' },
      { day: 2, title: 'Munnar Tea Gardens & Eravikulam', description: 'Visit Tea Museum and spot endangered Nilgiri Tahr mountain goats.' },
      { day: 3, title: 'Thekkady Spice Tour', description: 'Guided cardamom & pepper farm tour and bamboo rafting.' },
      { day: 4, title: 'Alleppey Backwaters Houseboat', description: 'Board your private luxury houseboat for a backwater cruise.' }
    ]
  },
  {
    id: 'maldives',
    name: 'Maldives',
    country: 'Maldives Archipelago',
    tagline: 'Ocean Serenity',
    image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1000&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1000&q=80'
    ],
    description: 'Escape to private overwater bungalows with glass viewing floors, direct ocean access, coral reef snorkeling, and romantic sunset cruises across turquoise lagoons.',
    bestTimeToVisit: 'November to April (Dry Season)',
    weatherTemp: '27°C - 30°C (Tropical Sun)',
    startingPrice: 699,
    rating: 5.0,
    reviewsCount: 389,
    topAttractions: [
      'Private Overwater Villa with Infinity Pool',
      'Coral Reef Snorkeling with Sea Turtles & Manta Rays',
      'Sunset Dolphin Watching Catamaran Cruise',
      'Undersea Restaurant Fine Dining'
    ],
    highlights: [
      'Step directly from your bedroom villa into crystal lagoon waters',
      'Candlelight beach BBQ dinner under starry skies',
      'Unlimited water sports including kayaking & paddleboarding'
    ],
    sampleItinerary: [
      { day: 1, title: 'Speedboat Arrival & Villa Check-in', description: 'Welcome drinks and check-in to overwater villa.' },
      { day: 2, title: 'Marine Turtle & Reef Snorkeling', description: 'Guided coral reef safari with marine biologist.' },
      { day: 3, title: 'Sunset Dolphin Cruise & Spa', description: 'Overwater spa massage followed by sunset catamaran cruise.' },
      { day: 4, title: 'Lagoon Breakfast & Departure', description: 'Floating villa breakfast and seaplane/speedboat transfer.' }
    ]
  },
  {
    id: 'cappadocia',
    name: 'Cappadocia',
    country: 'Turkey',
    tagline: 'Fairy Tale Chimneys',
    image: 'https://images.unsplash.com/photo-1641128324972-af3212f0f6bd?auto=format&fit=crop&w=1000&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1641128324972-af3212f0f6bd?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1000&q=80'
    ],
    description: 'Famous for its magical fairy chimneys, underground cities carved in volcanic rock, and hundreds of colorful hot air balloons painting the sky every morning at sunrise.',
    bestTimeToVisit: 'April to June & September to November',
    weatherTemp: '15°C - 25°C',
    startingPrice: 599,
    rating: 4.92,
    reviewsCount: 260,
    topAttractions: [
      'Sunrise Hot Air Balloon Flight over Göreme Valley',
      'Kaymakli & Derinkuyu Underground Cities',
      'Uchisar Castle Panorama',
      'Göreme Open Air Museum Cave Churches'
    ],
    highlights: [
      'Stay in an authentic carved luxury cave hotel',
      'Watch 100+ balloons float above fairy chimney valleys',
      'Traditional Turkish pottery workshop in Avanos'
    ],
    gridSpan: 'tall-left'
  },
  {
    id: 'santorini',
    name: 'Santorini',
    country: 'Greece',
    tagline: 'Aegean Caldera Sunset',
    image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1000&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1000&q=80'
    ],
    description: 'Iconic whitewashed villages perched high above the deep blue Aegean Sea, renowned for blue-domed churches, cliffside infinity pools, and world-famous sunsets.',
    bestTimeToVisit: 'May to October',
    weatherTemp: '20°C - 28°C',
    startingPrice: 799,
    rating: 4.96,
    reviewsCount: 310,
    topAttractions: ['Oia Village Sunset Walk', 'Fira to Oia Cliffside Hike', 'Red Beach & Volcanic Hot Springs'],
    gridSpan: 'top-mid'
  },
  {
    id: 'kyoto',
    name: 'Kyoto',
    country: 'Japan',
    tagline: 'Ancient Temple Sanctuaries',
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1000&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1000&q=80'
    ],
    description: 'The cultural heart of Japan featuring serene bamboo groves, thousand-year-old Buddhist temples, Geisha district alleyways, and vibrant cherry blossoms.',
    bestTimeToVisit: 'March to May & October to November',
    weatherTemp: '14°C - 22°C',
    startingPrice: 699,
    rating: 4.9,
    reviewsCount: 215,
    topAttractions: ['Fushimi Inari Torii Gate Shrine', 'Arashiyama Bamboo Grove', 'Kinkaku-ji Golden Pavilion'],
    gridSpan: 'top-right'
  },
  {
    id: 'new-york',
    name: 'New York',
    country: 'USA',
    tagline: 'Empire Skyline',
    image: 'https://images.unsplash.com/photo-1534430480872-3498386e7856?auto=format&fit=crop&w=1000&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1534430480872-3498386e7856?auto=format&fit=crop&w=1000&q=80'
    ],
    description: 'The city that never sleeps, offering iconic sky-high observation decks, Broadway theater magic, Central Park tranquility, and world-class dining.',
    bestTimeToVisit: 'September to November & April to June',
    weatherTemp: '15°C - 24°C',
    startingPrice: 599,
    rating: 4.85,
    reviewsCount: 190,
    topAttractions: ['Summit One Vanderbilt & Empire State Deck', 'Central Park Bicycle Tour', 'Broadway Shows'],
    gridSpan: 'bottom-left'
  },
  {
    id: 'machu-picchu',
    name: 'Machu Picchu',
    country: 'Peru',
    tagline: 'Sacred Incan Citadel',
    image: 'https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&w=1000&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&w=1000&q=80'
    ],
    description: 'An ancient Incan citadel set high in the Andes mountains, surrounded by mist, dramatic peaks, and centuries of rich historical mystery.',
    bestTimeToVisit: 'May to October',
    weatherTemp: '12°C - 20°C',
    startingPrice: 749,
    rating: 4.94,
    reviewsCount: 220,
    topAttractions: ['Inca Trail Trekking', 'Sun Gate Sunrise View', 'Sacred Valley of the Incas'],
    gridSpan: 'bottom-mid'
  },
  {
    id: 'iceland',
    name: 'Iceland',
    country: 'Land of Fire & Ice',
    tagline: 'Northern Lights & Glaciers',
    image: 'https://images.unsplash.com/photo-1529963183134-61a90db47eaf?auto=format&fit=crop&w=1000&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1529963183134-61a90db47eaf?auto=format&fit=crop&w=1000&q=80'
    ],
    description: 'A land of dramatic contrasts with dancing Aurora Borealis, roaring waterfalls, black sand beaches, geothermal hot springs, and blue ice caves.',
    bestTimeToVisit: 'September to March (Aurora) & June to August (Midnight Sun)',
    weatherTemp: '2°C - 12°C',
    startingPrice: 849,
    rating: 4.97,
    reviewsCount: 280,
    topAttractions: ['Blue Lagoon Geothermal Spa', 'Golden Circle Geysirs & Gullfoss', 'Diamond Beach & Ice Caves'],
    gridSpan: 'tall-right'
  }
];

export const FEATURES_DATA: Feature[] = [
  {
    id: 'best-price',
    iconName: 'shield',
    title: 'Best Price Guarantee',
    description: 'We ensure the best prices for your trips.'
  },
  {
    id: 'support',
    iconName: 'headphones',
    title: '24/7 Customer Support',
    description: "We're here to help you anytime."
  },
  {
    id: 'deals',
    iconName: 'tag',
    title: 'Exclusive Deals',
    description: 'Get access to special offers & discounts.'
  },
  {
    id: 'memories',
    iconName: 'heart',
    title: 'Memories That Last',
    description: "We create journeys you'll never forget."
  }
];

export const HERO_FLOATING_IMAGES = [
  {
    title: 'Tropical Paradise',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80'
  },
  {
    title: 'Balinese Temple',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=600&q=80'
  },
  {
    title: 'Cappadocia Balloons',
    image: 'https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?auto=format&fit=crop&w=600&q=80'
  }
];
