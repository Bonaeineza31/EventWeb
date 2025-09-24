import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ArrowRight, Clock, Star } from "lucide-react";

interface ModernDestinationShowcaseProps {
  onDestinationClick: (index: number) => void;
  onBookNowClick: () => void;
}

export function ModernDestinationShowcase({ onDestinationClick, onBookNowClick }: ModernDestinationShowcaseProps) {
  const scrollToTours = () => {
    const element = document.getElementById('tours');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const destinations = [
    {
      name: "Gorilla Trekking & Community Immersion",
      location: "Volcanoes National Park",
      image: "https://images.unsplash.com/photo-1722293118543-c4aa084f3c91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxSd2FuZGElMjBtb3VudGFpbiUyMGdvcmlsbGFzfGVufDF8fHx8MTc1ODYxNDgxM3ww&ixlib=rb-4.1.0&q=80&w=1080",
      duration: "3 Day (2 nights)",
      rating: "4.9",
      category: "Wildlife",
      price: "$650"
    },
    {
      name: "Wild Encounters: Akagera Safari Escape",
      location: "Akagera National Park", 
      image: "https://images.unsplash.com/photo-1651860282296-47055c68580e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBa2FnZXJhJTIwTmF0aW9uYWwlMjBQYXJrJTIwUndhbmRhfGVufDF8fHx8MTc1ODYxNDgxN3ww&ixlib=rb-4.1.0&q=80&w=1080",
      duration: "3 Day (2 nights)",
      rating: "4.8",
      category: "Adventure",
      price: "$425"
    },
    {
      name: "Canopy Adventure & Forest Discovery",
      location: "Nyungwe Forest",
      image: "https://images.unsplash.com/photo-1489640818597-89b1edc97db5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHhOeXVuZ3dlJTIwRm9yZXN0JTIwUndhbmRhfGVufDF8fHx8MTc1ODYxNDgyMHww&ixlib=rb-4.1.0&q=80&w=1080",
      duration: "3 Day (2 nights)", 
      rating: "4.9",
      category: "Nature",
      price: "$385"
    },
    {
      name: "Lake Kivu Boat Ride & Fisherman Experience",
      location: "Lake Kivu",
      image: "https://images.unsplash.com/photo-1706977570024-fefa419c48c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxMYWtlJTIwS2l2dSUyMFJ3YW5kYXxlbnwxfHx8fDE3NTg2MTQ4MjR8MA&ixlib=rb-4.1.0&q=80&w=1080",
      duration: "4 Day (3 nights)",
      rating: "4.7", 
      category: "Relaxation",
      price: "$285"
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            Featured Places
          </Badge>
          <h2 className="text-3xl md:text-4xl text-gray-800 mb-6">
            Perfect for Your Extended Stay
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Whether you have 1 day or a full week, we have carefully crafted packages 
            that fit perfectly with your conference schedule.
          </p>
        </div>

        {/* Grid of 4 identical cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {destinations.map((destination, index) => (
            <Card 
              key={index}
              className="group overflow-hidden hover:shadow-2xl transition-all duration-500 cursor-pointer border-0 shadow-lg hover:-translate-y-2"
              onClick={() => onDestinationClick(index)}
            >
              <CardContent className="p-0">
                <div className="relative">
                  {/* Image with consistent aspect ratio */}
                  <div className="aspect-[4/5] relative overflow-hidden">
                    <ImageWithFallback
                      src={destination.image}
                      alt={destination.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                    
                    {/* Top badges */}
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-white/20 backdrop-blur-sm text-white border-white/30 text-xs">
                        {destination.category}
                      </Badge>
                    </div>

                    <div className="absolute top-4 right-4 flex items-center space-x-1 bg-white/20 backdrop-blur-sm rounded-full px-2 py-1">
                      <Star className="w-3 h-3 text-yellow-400 fill-current" />
                      <span className="text-white text-xs">{destination.rating}</span>
                    </div>
                    
                    {/* Bottom content */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="flex items-center space-x-2 text-white/80 text-xs mb-2">
                        <Clock className="w-3 h-3" />
                        <span>{destination.duration}</span>
                      </div>
                      <h3 className="text-white text-lg mb-1 leading-tight">{destination.name}</h3>
                      <p className="text-white/70 text-sm mb-3">{destination.location}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-green-400 text-xl">{destination.price}</span>
                        <span className="text-white/80 text-xs">per person</span>
                      </div>
                    </div>

                    {/* Action Buttons on Hover */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center gap-3">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={(e) => {
                          e.stopPropagation();
                          onDestinationClick(index);
                        }}
                        className="border-white text-white hover:bg-white hover:text-gray-800 backdrop-blur-sm"
                      >
                        Learn More
                      </Button>
                      <Button
                        size="sm"
                        onClick={(e) => {
                          e.stopPropagation();
                          onBookNowClick();
                        }}
                        className="bg-primary hover:bg-primary/90 text-white"
                      >
                        Book Now
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            onClick={scrollToTours}
            className="bg-primary hover:bg-primary/90 px-8 py-3 text-lg"
          >
            View All Packages
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}