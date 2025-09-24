import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ArrowLeft, Users, Clock, MapPin, ChevronDown } from "lucide-react";

interface BookingPackagesPageProps {
  onBack: () => void;
  onBookPackage: (packageData: any) => void;
  onLearnMore: (index: number) => void;
}

export function BookingPackagesPage({ onBack, onBookPackage, onLearnMore }: BookingPackagesPageProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const packages = [
    {
      id: 1,
      name: "Gorilla Trekking & Community Immersion",
      location: "Volcanoes National Park",
      image: "https://images.unsplash.com/photo-1722293118543-c4aa084f3c91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxSd2FuZGElMjBtb3VudGFpbiUyMGdvcmlsbGFzfGVufDF8fHx8MTc1ODYxNDgxM3ww&ixlib=rb-4.1.0&q=80&w=1080",
      duration: "3 Day (2 nights)",
      price: 650,
      category: "Wildlife",
      rating: "4.9",
      description: "Experience the magic of mountain gorillas in their natural habitat with guided community visits.",
      highlights: ["Gorilla trekking permits included", "Community cultural experience", "Professional guides"],
      groupSize: "1-8 people"
    },
    {
      id: 2,
      name: "Wild Encounters: Akagera Safari Escape",
      location: "Akagera National Park",
      image: "https://images.unsplash.com/photo-1651860282296-47055c68580e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBa2FnZXJhJTIwTmF0aW9uYWwlMjBQYXJrJTIwUndhbmRhfGVufDF8fHx8MTc1ODYxNDgxN3ww&ixlib=rb-4.1.0&q=80&w=1080",
      duration: "3 Day (2 nights)",
      price: 425,
      category: "Adventure",
      rating: "4.8",
      description: "Classic African safari experience with Big Five wildlife viewing opportunities.",
      highlights: ["Big Five wildlife viewing", "Boat safari included", "Game drives"],
      groupSize: "2-6 people"
    },
    {
      id: 3,
      name: "Canopy Adventure & Forest Discovery",
      location: "Nyungwe Forest",
      image: "https://images.unsplash.com/photo-1489640818597-89b1edc97db5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxOeXVuZ3dlJTIwRm9yZXN0JTIwUndhbmRhfGVufDF8fHx8MTc1ODYxNDgyMHww&ixlib=rb-4.1.0&q=80&w=1080",
      duration: "3 Day (2 nights)",
      price: 385,
      category: "Nature",
      rating: "4.9",
      description: "Walk among treetops and discover chimpanzees in ancient rainforest.",
      highlights: ["Canopy walk experience", "Chimpanzee tracking", "Forest hiking"],
      groupSize: "1-12 people"
    },
    {
      id: 4,
      name: "Lake Kivu Boat Ride & Fisherman Experience",
      location: "Lake Kivu",
      image: "https://images.unsplash.com/photo-1706977570024-fefa419c48c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxMYWtlJTIwS2l2dSUyMFJ3YW5kYXxlbnwxfHx8fDE3NTg2MTQ4MjR8MA&ixlib=rb-4.1.0&q=80&w=1080",
      duration: "4 Day (3 nights)",
      price: 285,
      category: "Relaxation",
      rating: "4.7",
      description: "Relax by pristine lake waters with boat cruises and local fishing experiences.",
      highlights: ["Boat cruises", "Fishing experience", "Coffee plantation tour"],
      groupSize: "1-8 people"
    },
    {
      id: 5,
      name: "Kigali Cultural Discovery",
      location: "Kigali City",
      image: "https://images.unsplash.com/photo-1706978116093-7b8cd429d6bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxLaWdhbGklMjBjaXR5JTIwUndhbmRhfGVufDF8fHx8MTc1ODYxNDgyN3ww&ixlib=rb-4.1.0&q=80&w=1080",
      duration: "2 Day (1 night)",
      price: 125,
      category: "Culture",
      rating: "4.8",
      description: "Discover Rwanda's vibrant capital with historical sites and cultural experiences.",
      highlights: ["City tour", "Museums and memorials", "Local markets"],
      groupSize: "1-10 people"
    },
    {
      id: 6,
      name: "Complete Rwanda Experience",
      location: "Multiple Locations",
      image: "https://images.unsplash.com/photo-1722293118543-c4aa084f3c91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxSd2FuZGElMjBtb3VudGFpbiUyMGdvcmlsbGFzfGVufDF8fHx8MTc1ODYxNDgxM3ww&ixlib=rb-4.1.0&q=80&w=1080",
      duration: "7 Day (6 nights)",
      price: 1250,
      category: "Adventure",
      rating: "5.0",
      description: "The ultimate Rwanda adventure combining all major attractions and experiences.",
      highlights: ["All major attractions", "Gorillas & safari", "Cultural immersion"],
      groupSize: "2-8 people"
    }
  ];

  const categories = ["all", "Wildlife", "Adventure", "Nature", "Relaxation", "Culture"];

  const filteredPackages = selectedCategory === "all" 
    ? packages 
    : packages.filter(pkg => pkg.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <button 
              onClick={onBack}
              className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Home</span>
            </button>
            <div>
              <h1 className="text-2xl text-gray-800">Choose Your Package</h1>
              <p className="text-sm text-gray-600">Perfect for conference extensions</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm transition-colors ${
                selectedCategory === category
                  ? 'bg-primary text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border'
              }`}
            >
              {category === "all" ? "All Packages" : category}
            </button>
          ))}
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPackages.map((pkg, index) => (
            <Card key={pkg.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <div className="relative">
                <div className="aspect-[4/3] relative">
                  <ImageWithFallback
                    src={pkg.image}
                    alt={pkg.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-white/20 backdrop-blur-sm text-white border-white/30">
                      {pkg.category}
                    </Badge>
                  </div>

                  <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
                    <span className="text-white text-sm">⭐ {pkg.rating}</span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="text-green-400 text-2xl mb-1">${pkg.price}</div>
                    <div className="text-white/80 text-sm">per person</div>
                  </div>
                </div>
              </div>

              <CardHeader className="pb-4">
                <CardTitle className="text-lg leading-tight mb-2">{pkg.name}</CardTitle>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{pkg.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>{pkg.groupSize}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    <span>{pkg.location}</span>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="pt-0">
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{pkg.description}</p>
                
                <div className="mb-4">
                  <div className="text-sm text-gray-700 mb-2">Highlights:</div>
                  <ul className="text-xs text-gray-600 space-y-1">
                    {pkg.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <div className="w-1 h-1 bg-primary rounded-full"></div>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => onLearnMore(index)}
                    className="flex-1 text-xs"
                  >
                    Learn More
                  </Button>
                  <Button
                    onClick={() => onBookPackage(pkg)}
                    className="flex-1 bg-primary hover:bg-primary/90 text-xs"
                  >
                    Book Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Help Section */}
        <Card className="mt-12 bg-gradient-to-r from-primary/5 to-green-600/5 border-0">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl text-gray-800 mb-4">Need Help Choosing?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Not sure which package is right for you? Our travel experts are here to help you 
              find the perfect Rwanda adventure that fits your schedule and interests.
            </p>
            <Button onClick={onBack} className="bg-primary hover:bg-primary/90">
              Contact Our Experts
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
