import type { DestinationData } from "../types";

export const destinationsData: DestinationData[] = [
  {
    name: "Mountain Gorillas",
    location: "Volcanoes National Park",
    image: "https://images.unsplash.com/photo-1722293118543-c4aa084f3c91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxSd2FuZGElMjBtb3VudGFpbiUyMGdvcmlsbGFzfGVufDF8fHx8MTc1ODYxNDgxM3ww&ixlib=rb-4.1.0&q=80&w=1080",
    duration: "1-2 Days",
    rating: "4.9",
    category: "Wildlife",
    price: "$650",
    groupSize: "1-8 people",
    difficulty: "Moderate",
    bestTime: "Year-round",
    description: "Experience the magic of encountering mountain gorillas in their natural habitat. This once-in-a-lifetime adventure takes you through the misty forests of Volcanoes National Park, where you'll spend precious moments with these gentle giants. Our expert guides will lead you on an unforgettable trekking experience that combines conservation, education, and pure wonder.",
    highlights: [
      "Close encounters with endangered mountain gorillas",
      "Expert naturalist guides with deep local knowledge",
      "Small group sizes for intimate wildlife experiences",
      "Stunning volcanic landscape photography opportunities",
      "Support for gorilla conservation efforts",
      "Cultural interaction with local communities",
      "Professional wildlife photography tips",
      "Certificate of participation in gorilla conservation"
    ],
    includes: [
      "Gorilla trekking permits ($1,500 value)",
      "Professional guide and ranger fees",
      "Transportation from Kigali",
      "Park entrance fees",
      "Walking sticks and rain gear",
      "Bottled water and energy snacks",
      "Certificate of participation",
      "Emergency evacuation insurance"
    ],
    excludes: [
      "International flights",
      "Accommodation (can be arranged)",
      "Personal travel insurance",
      "Tips for guides and porters",
      "Personal expenses and souvenirs",
      "Alcoholic beverages",
      "Photography equipment rental"
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Journey to Volcanoes National Park",
        description: "Early morning departure from Kigali (5:30 AM). Scenic 2.5-hour drive through Rwanda's beautiful countryside. Arrival and briefing at park headquarters. Meet your guide and prepare for the next day's adventure."
      },
      {
        day: "Day 2", 
        title: "Gorilla Trekking Experience",
        description: "Early morning briefing (7:00 AM) followed by the trek into the forest. Duration varies (1-6 hours) depending on gorilla location. Spend one magical hour with the gorilla family. Return to base and departure to Kigali."
      }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1722293118543-c4aa084f3c91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxSd2FuZGElMjBtb3VudGFpbiUyMGdvcmlsbGFzfGVufDF8fHx8MTc1ODYxNDgxM3ww&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1620148878899-7c9b16ce9651?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGdvcmlsbGFzJTIwUndhbmRhJTIwdm9sY2Fub2VzJTIwcGFya3xlbnwxfHx8fDE3NTg2MTUxMTh8MA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1667504319000-8133f9021cf8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb3JpbGxhJTIwdHJla2tpbmclMjBSd2FuZGElMjBoaWtpbmd8ZW58MXx8fHwxNzU4NjE1MTIxfDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1598793070399-2f095c0a28a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxSd2FuZGElMjBmb3Jlc3QlMjBoaWtpbmclMjB0cmFpbHxlbnwxfHx8fDE3NTg2MTUxMjR8MA&ixlib=rb-4.1.0&q=80&w=1080"
    ],
    packingList: [
      "Sturdy hiking boots with good ankle support",
      "Long-sleeved shirts and trousers (earth tones)",
      "Rain jacket and waterproof pants",
      "Light fleece or warm layer",
      "Hat and sunglasses",
      "Insect repellent (DEET-based)",
      "Camera with extra batteries",
      "Small daypack",
      "Hand sanitizer and wet wipes",
      "Personal medications",
      "Thick gardening gloves for grabbing vegetation",
      "Gaiters to protect legs from stinging nettles"
    ],
    testimonial: {
      text: "The most incredible wildlife experience of my life! After my conference in Kigali, this gorilla trek was the perfect adventure. Our guide was amazing and the whole experience was seamlessly organized.",
      author: "Sarah Johnson",
      role: "Conference Attendee, Microsoft"
    }
  },
  {
    name: "Game Safari",
    location: "Akagera National Park",
    image: "https://images.unsplash.com/photo-1651860282296-47055c68580e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBa2FnZXJhJTIwTmF0aW9uYWwlMjBQYXJrJTIwUndhbmRhfGVufDF8fHx8MTc1ODYxNDgxN3ww&ixlib=rb-4.1.0&q=80&w=1080",
    duration: "2-3 Days",
    rating: "4.8",
    category: "Adventure",
    price: "$425",
    groupSize: "2-6 people",
    difficulty: "Easy",
    bestTime: "Dry season (Jun-Sep)",
    description: "Discover Rwanda's premier savanna park where the Big Five roam free. Akagera National Park offers classic African safari experiences with elephants, lions, leopards, rhinos, and buffalo. Enjoy game drives, boat safaris on Lake Ihema, and stunning landscapes that rival any East African park.",
    highlights: [
      "Big Five wildlife viewing opportunities",
      "Boat safari on Lake Ihema",
      "Over 480 bird species",
      "Classic African savanna landscapes",
      "Professional safari guide",
      "Conservation success story",
      "Photography workshops",
      "Sunset game drives"
    ],
    includes: [
      "Park entrance fees for all days",
      "Professional safari guide",
      "4WD safari vehicle with pop-up roof",
      "Boat safari on Lake Ihema",
      "All game drives",
      "Bottled water and snacks",
      "Transportation from Kigali",
      "Park map and wildlife checklist"
    ],
    excludes: [
      "Accommodation (can be arranged)",
      "Meals (unless specified)",
      "Personal travel insurance",
      "Tips for guide and boat captain",
      "Alcoholic beverages",
      "Personal expenses",
      "Professional photography equipment"
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival and Afternoon Game Drive",
        description: "Morning departure from Kigali to Akagera (2.5 hours). Check-in and lunch. Afternoon game drive focusing on elephants and antelopes. Sunset at a scenic viewpoint."
      },
      {
        day: "Day 2",
        title: "Full Day Safari Experience",
        description: "Early morning game drive for predators. Breakfast in the wild. Boat safari on Lake Ihema for hippos and crocodiles. Afternoon game drive searching for rhinos and lions."
      },
      {
        day: "Day 3",
        title: "Final Game Drive and Departure",
        description: "Final early morning game drive. Brunch and departure to Kigali. Optional stop at local craft markets."
      }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1651860282296-47055c68580e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBa2FnZXJhJTIwTmF0aW9uYWwlMjBQYXJrJTIwUndhbmRhfGVufDF8fHx8MTc1ODYxNDgxN3ww&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1556075798-4825dfaaf498?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVwaGFudCUyMEFmcmljYSUyMHNhZmFyaXxlbnwxfHx8fDE3NTg2MTUyNzB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1547036967-23d11aacaee0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaW9uJTIwQWZyaWNhJTIwc2FmYXJpfGVufDF8fHx8MTc1ODYxNTI3Mnww&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnaXJhZmZlJTIwQWZyaWNhJTIwc2FmYXJpfGVufDF8fHx8MTc1ODYxNTI3NHww&ixlib=rb-4.1.0&q=80&w=1080"
    ],
    packingList: [
      "Light, breathable clothing in neutral colors",
      "Wide-brimmed hat and sunglasses",
      "Comfortable walking shoes",
      "Binoculars for wildlife viewing",
      "Camera with telephoto lens",
      "Sunscreen (SPF 30+)",
      "Light jacket for early morning drives",
      "Insect repellent",
      "Personal water bottle",
      "Small backpack for day trips",
      "Power bank for electronic devices",
      "Quick-dry towel for boat safari"
    ],
    testimonial: {
      text: "Perfect safari experience after our tech conference! Saw all the Big Five and the organization was flawless. The boat safari was an unexpected highlight.",
      author: "Mike Chen",
      role: "Startup CEO, Singapore"
    }
  },
  {
    name: "Canopy Walk",
    location: "Nyungwe Forest",
    image: "https://images.unsplash.com/photo-1489640818597-89b1edc97db5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxOeXVuZ3dlJTIwRm9yZXN0JTIwUndhbmRhfGVufDF8fHx8MTc1ODYxNDgyMHww&ixlib=rb-4.1.0&q=80&w=1080",
    duration: "2-3 Days",
    rating: "4.9",
    category: "Nature",
    price: "$385",
    groupSize: "1-12 people",
    difficulty: "Moderate",
    bestTime: "Year-round",
    description: "Walk among the treetops in one of Africa's oldest rainforests. The Nyungwe Canopy Walk offers breathtaking views 50 meters above the forest floor, while primate tracking lets you encounter chimpanzees and 12 other primate species in their natural habitat.",
    highlights: [
      "Canopy walk 50m above forest floor",
      "Chimpanzee tracking experience",
      "13 primate species viewing",
      "Over 300 bird species",
      "Waterfall hikes and nature trails",
      "Ancient rainforest ecosystem",
      "Professional primate guides",
      "Forest conservation education"
    ],
    includes: [
      "Park entrance and activity fees",
      "Canopy walk permits",
      "Chimpanzee tracking permits",
      "Professional guides",
      "Transportation from Kigali",
      "Walking sticks and rain gear",
      "Bottled water and snacks",
      "Trail maps and species guides"
    ],
    excludes: [
      "Accommodation (can be arranged)",
      "Meals outside the park",
      "Personal travel insurance",
      "Tips for guides and trackers",
      "Personal hiking equipment",
      "Photography equipment",
      "Personal expenses"
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Forest Arrival and Canopy Walk",
        description: "Morning departure from Kigali to Nyungwe (4-5 hours). Check-in and lunch. Afternoon canopy walk experience with forest briefing and safety orientation."
      },
      {
        day: "Day 2",
        title: "Chimpanzee Tracking Adventure",
        description: "Early morning chimpanzee tracking (5:30 AM start). Search for habituated chimp communities. Afternoon nature walk to waterfalls and bird watching."
      },
      {
        day: "Day 3",
        title: "Primate Walk and Departure",
        description: "Morning primate walk for colobus monkeys and other species. Forest education center visit. Departure to Kigali with scenic stops."
      }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1489640818597-89b1edc97db5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxOeXVuZ3dlJTIwRm9yZXN0JTIwUndhbmRhfGVufDF8fHx8MTc1ODYxNDgyMHww&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1598793070399-2f095c0a28a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxSd2FuZGElMjBmb3Jlc3QlMjBoaWtpbmclMjB0cmFpbHxlbnwxfHx8fDE3NTg2MTUxMjR8MA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGltcGFuemVlJTIwZm9yZXN0fGVufDF8fHx8MTc1ODYxNTI5MXww&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1535262412227-85541e910204?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmVlJTIwY2Fub3B5JTIwd2Fsa3xlbnwxfHx8fDE3NTg2MTUyOTN8MA&ixlib=rb-4.1.0&q=80&w=1080"
    ],
    packingList: [
      "Waterproof hiking boots with good grip",
      "Rain gear (jacket and pants)",
      "Long-sleeved shirts and pants",
      "Warm fleece or light jacket",
      "Thick socks and spare pair",
      "Waterproof gloves",
      "Head lamp with extra batteries",
      "Small waterproof backpack",
      "Insect repellent",
      "Personal first aid kit",
      "Camera with waterproof cover",
      "Snacks and energy bars"
    ],
    testimonial: {
      text: "The canopy walk was absolutely magical! Perfect adventure after our environmental conference. The chimpanzee tracking was the highlight of my entire Rwanda trip.",
      author: "Dr. Emma Wilson",
      role: "Environmental Scientist, UK"
    }
  },
  {
    name: "Lake Relaxation",
    location: "Lake Kivu",
    image: "https://images.unsplash.com/photo-1706977570024-fefa419c48c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxMYWtlJTIwS2l2dSUyMFJ3YW5kYXxlbnwxfHx8fDE3NTg2MTQ4MjR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    duration: "1-3 Days",
    rating: "4.7",
    category: "Relaxation",
    price: "$285",
    groupSize: "1-8 people",
    difficulty: "Easy",
    bestTime: "Year-round",
    description: "Unwind by Africa's largest lake with crystal clear waters and stunning volcanic scenery. Lake Kivu offers the perfect balance of relaxation and gentle adventure with boat cruises, island visits, coffee plantation tours, and lakeside wellness activities.",
    highlights: [
      "Boat cruises on pristine lake waters",
      "Visit to Napoleon Island",
      "Coffee plantation tours and tastings",
      "Lakeside spa and wellness treatments",
      "Cycling along scenic lake shores",
      "Local fishing village interactions",
      "Stunning sunset photography",
      "Swimming in bilharzia-free waters"
    ],
    includes: [
      "Boat cruise and island visits",
      "Coffee plantation tour and tasting",
      "Professional guide services",
      "Transportation from Kigali",
      "All entrance fees",
      "Bottled water and refreshments",
      "Cycling equipment rental",
      "Welcome drink at lakeside resort"
    ],
    excludes: [
      "Accommodation (can be arranged)",
      "Meals (except coffee tasting)",
      "Personal travel insurance",
      "Spa treatments and massages",
      "Alcoholic beverages",
      "Water sports equipment",
      "Personal expenses and tips"
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Lake Arrival and Sunset Cruise",
        description: "Morning departure from Kigali to Lake Kivu (3 hours). Check-in and lunch at lakeside resort. Afternoon sunset boat cruise with drinks and appetizers."
      },
      {
        day: "Day 2",
        title: "Coffee and Culture Experience",
        description: "Morning coffee plantation tour with bean-to-cup experience. Visit local fishing village and market. Afternoon cycling along lake shores or optional spa treatments."
      },
      {
        day: "Day 3",
        title: "Island Adventure and Departure",
        description: "Morning boat trip to Napoleon Island for bird watching. Swimming and relaxation time. Late afternoon departure to Kigali with scenic photo stops."
      }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1706977570024-fefa419c48c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxMYWtlJTIwS2l2dSUyMFJ3YW5kYXxlbnwxfHx8fDE3NTg2MTQ4MjR8MA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1544376664-80b17f09d399?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYWtlJTIwYm9hdCUyMGNydWlzZXxlbnwxfHx8fDE3NTg2MTUzMDd8MA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1609081219090-a6d81d3085bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBwbGFudGF0aW9uJTIwQWZyaWNhfGVufDF8fHx8MTc1ODYxNTMwOXww&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYWtlJTIwc3Vuc2V0JTIwQWZyaWNhfGVufDF8fHx8MTc1ODYxNTMxMXww&ixlib=rb-4.1.0&q=80&w=1080"
    ],
    packingList: [
      "Light, casual clothing",
      "Swimwear and beach towel",
      "Comfortable walking shoes",
      "Sandals for lakeside activities",
      "Light sweater for cool evenings",
      "Sunscreen and after-sun lotion",
      "Hat and sunglasses",
      "Camera for scenic photos",
      "Personal water bottle",
      "Light day pack for cycling",
      "Casual evening wear for dinner",
      "Personal toiletries and medications"
    ],
    testimonial: {
      text: "The perfect way to unwind after a hectic conference week. The lake is absolutely beautiful and the coffee tour was fascinating. Highly recommend for anyone needing to recharge!",
      author: "James Rodriguez",
      role: "Marketing Director, Brazil"
    }
  },
  {
    name: "City Tours",
    location: "Kigali",
    image: "https://images.unsplash.com/photo-1706978116093-7b8cd429d6bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxLaWdhbGklMjBjaXR5JTIwUndhbmRhfGVufDF8fHx8MTc1ODYxNDgyN3ww&ixlib=rb-4.1.0&q=80&w=1080",
    duration: "1-2 Days",
    rating: "4.8",
    category: "Culture",
    price: "$125",
    groupSize: "1-10 people",
    difficulty: "Easy",
    bestTime: "Year-round",
    description: "Discover the heart of modern Africa in Rwanda's clean, safe, and vibrant capital. From genocide memorials that tell powerful stories of resilience to bustling markets, art galleries, and the famous Kigali Convention Centre, experience the city that embodies Rwanda's remarkable transformation.",
    highlights: [
      "Kigali Genocide Memorial visit",
      "Local market and craft shopping",
      "Modern city architecture tour",
      "Traditional and contemporary art galleries",
      "Local restaurant and cuisine experiences",
      "Kimironko Market cultural immersion",
      "City viewpoints and photo opportunities",
      "Meet local entrepreneurs and innovators"
    ],
    includes: [
      "Professional city guide",
      "Transportation within Kigali",
      "Entrance fees to all attractions",
      "Market tour with shopping guidance",
      "Local restaurant lunch experience",
      "Genocide memorial guided tour",
      "Art gallery visits",
      "Hotel pickup and drop-off"
    ],
    excludes: [
      "Personal shopping expenses",
      "Additional meals and drinks",
      "Tips for guide and drivers",
      "Personal travel insurance",
      "Hotel accommodation",
      "International phone calls",
      "Personal souvenirs"
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Historical and Cultural Kigali",
        description: "Morning visit to Kigali Genocide Memorial for historical context. Lunch at local restaurant. Afternoon exploration of craft markets and art galleries. Evening city viewpoints tour."
      },
      {
        day: "Day 2",
        title: "Modern Kigali Experience",
        description: "Morning business district and innovation hub tour. Visit to Kigali Convention Centre. Lunch with local entrepreneurs. Afternoon shopping at Kimironko Market and departure preparation."
      }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1706978116093-7b8cd429d6bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxLaWdhbGklMjBjaXR5JTIwUndhbmRhfGVufDF8fHx8MTc1ODYxNDgyN3ww&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2ElMjBjaXR5JTIwbW9kZXJufGVufDF8fHx8MTc1ODYxNTMyNnww&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1621881882780-3ad7a82e9f52?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2ElMjBtYXJrZXQlMjBjb2xvcmZ1bHxlbnwxfHx8fDE3NTg2MTUzMjl8MA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1590736969955-eaa8b2634ed8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2ElMjBhcnQlMjBnYWxsZXJ5fGVufDF8fHx8MTc1ODYxNTMzMXww&ixlib=rb-4.1.0&q=80&w=1080"
    ],
    packingList: [
      "Comfortable walking shoes",
      "Smart casual clothing",
      "Light jacket or cardigan",
      "Small daypack or shoulder bag",
      "Camera for city sights",
      "Sunscreen and hat",
      "Water bottle",
      "Notebook for cultural insights",
      "Cash for market purchases",
      "Business cards if networking",
      "Phone charger and power bank",
      "Respectful attire for memorial visits"
    ],
    testimonial: {
      text: "Incredible to see how much Kigali has transformed. The guide's knowledge of the city's history and development was amazing. Perfect for understanding Rwanda's journey.",
      author: "Dr. Patricia Adams",
      role: "Conference Speaker, Canada"
    }
  }
];
