import { TourCard } from "./TourCard";

interface ToursProps {
  onBookNowClick: () => void;
  onLearnMoreClick: (tourIndex: number) => void;
}

export function Tours({ onBookNowClick, onLearnMoreClick }: ToursProps) {
  const tours = [
    {
      title: "Akagera Safari Adventure",
      duration: "2 Days",
      location: "Akagera National Park",
      description: "Experience the Big Five in Rwanda's premier wildlife sanctuary with guided game drives and boat safaris on Lake Ihema.",
      highlights: [
        "Big Five safari experience",
        "Sunset boat ride on Lake Ihema", 
        "Wildlife photography opportunities",
        "Professional guide included"
      ],
      imageUrl: "https://images.unsplash.com/photo-1623005804842-44950138a4ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBa2FnZXJhJTIwTmF0aW9uYWwlMjBQYXJrJTIwUndhbmRhJTIwc2FmYXJpJTIwd2lsZGxpZmV8ZW58MXx8fHwxNzU4NjEzMjQyfDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "Volcanoes Gorilla Trekking",
      duration: "2-3 Days", 
      location: "Volcanoes National Park",
      description: "Once-in-a-lifetime encounter with mountain gorillas in their natural habitat, plus golden monkey trekking and cultural experiences.",
      highlights: [
        "Mountain gorilla tracking",
        "Golden monkey trek",
        "Cultural village visits",
        "Conservation center tour"
      ],
      imageUrl: "https://images.unsplash.com/photo-1722293094576-424bd9b4aef9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxSd2FuZGElMjBtb3VudGFpbiUyMGdvcmlsbGElMjB0cmVra2luZ3xlbnwxfHx8fDE3NTg2MTMyNDV8MA&ixlib=rb-4.1.0&q=80&w=1080",

    },
    {
      title: "Lake Kivu Escape",
      duration: "2-3 Days",
      location: "Lake Kivu, Gisenyi",
      description: "Relax by Africa's most beautiful lake with boat cruises, coffee plantation tours, and scenic hiking trails.",
      highlights: [
        "Lakeside accommodation",
        "Island hopping boat cruises", 
        "Coffee plantation tours",
        "Scenic hiking with panoramic views"
      ],
      imageUrl: "https://images.unsplash.com/photo-1647849975193-bf78bd1cbf4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxMYWtlJTIwS2l2dSUyMFJ3YW5kYSUyMGJvYXRzfGVufDF8fHx8MTc1ODYxMzI0N3ww&ixlib=rb-4.1.0&q=80&w=1080",

    },
    {
      title: "Nyungwe Canopy Experience",
      duration: "2-3 Days",
      location: "Nyungwe National Park", 
      description: "Adventure through ancient rainforest with canopy walks, chimpanzee tracking, and waterfall hikes.",
      highlights: [
        "Canopy walkway adventure",
        "Chimpanzee tracking",
        "Waterfall hiking trails",
        "Tea plantation visits"
      ],
      imageUrl: "https://images.unsplash.com/photo-1753672036773-2f2861882113?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxOeXVuZ3dlJTIwZm9yZXN0JTIwY2Fub3B5JTIwd2Fsa3dheSUyMFJ3YW5kYXxlbnwxfHx8fDE3NTg2MTMyNTB8MA&ixlib=rb-4.1.0&q=80&w=1080",

    },
    {
      title: "Cultural Rwanda Experience",
      duration: "1 Day",
      location: "Kigali & Surroundings",
      description: "Immerse yourself in Rwandan culture with traditional dances, art centers, culinary experiences, and craft villages.",
      highlights: [
        "Traditional dance performances",
        "Inema Art Center visit",
        "Rwandan culinary tasting",
        "Local craft shopping"
      ],
      imageUrl: "https://images.unsplash.com/photo-1515921560173-3633830cb11a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxSd2FuZGElMjBjdWx0dXJhbCUyMGRhbmNlJTIwdHJhZGl0aW9uYWx8ZW58MXx8fHwxNzU4NjEzMjUzfDA&ixlib=rb-4.1.0&q=80&w=1080",

    },
    {
      title: "Kigali City Experience", 
      duration: "Half Day",
      location: "Kigali City",
      description: "Discover Rwanda's modern capital with memorial visits, local markets, coffee culture, and panoramic city views.",
      highlights: [
        "Genocide Memorial visit",
        "Kimironko Market tour",
        "Coffee tasting experience", 
        "City skyline views from Rebero Hills"
      ],
      imageUrl: "https://images.unsplash.com/photo-1708772565588-33785e13aa46?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxSd2FuZGElMjBLaWdhbGklMjBjaXR5c2NhcGUlMjBza3lsaW5lfGVufDF8fHx8MTc1ODYxMzIzOXww&ixlib=rb-4.1.0&q=80&w=1080",

    }
  ];

  return (
    <section id="tours" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl text-gray-800 mb-6">
            Choose Your Rwanda Adventure
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tailored packages for conference attendees with flexible durations. 
            From wildlife safaris to cultural immersion, discover Rwanda's treasures.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tours.map((tour, index) => (
            <TourCard 
              key={index} 
              {...tour} 
              onLearnMore={() => onLearnMoreClick(index)}
              onBookNow={onBookNowClick}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            All packages can be customized for groups, individuals, or corporate teams
          </p>
        </div>
      </div>
    </section>
  );
}
