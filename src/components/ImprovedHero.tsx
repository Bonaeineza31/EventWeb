import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

interface ImprovedHeroProps {
  onBookNowClick: () => void;
}

export function ImprovedHero({ onBookNowClick }: ImprovedHeroProps) {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);

  const packages = [
    {
      id: 1,
      name: "Gorilla Trekking & Community Immersion",
      location: "Volcanoes National Park",
      image: "https://images.unsplash.com/photo-1722293118543-c4aa084f3c91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxSd2FuZGElMjBtb3VudGFpbiUyMGdvcmlsbGFzfGVufDF8fHx8MTc1ODYxNDgxM3ww&ixlib=rb-4.1.0&q=80&w=1080",
      duration: "3 Day (2 nights)",
      price: "$650",
      category: "Wildlife"
    },
    {
      id: 2,
      name: "Wild Encounters: Akagera Safari Escape",
      location: "Akagera National Park",
      image: "https://images.unsplash.com/photo-1651860282296-47055c68580e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBa2FnZXJhJTIwTmF0aW9uYWwlMjBQYXJrJTIwUndhbmRhfGVufDF8fHx8MTc1ODYxNDgxN3ww&ixlib=rb-4.1.0&q=80&w=1080",
      duration: "3 Day (2 nights)",
      price: "$425",
      category: "Adventure"
    },
    {
      id: 3,
      name: "Canopy Adventure & Forest Discovery",
      location: "Nyungwe Forest",
      image: "https://images.unsplash.com/photo-1489640818597-89b1edc97db5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxOeXVuZ3dlJTIwRm9yZXN0JTIwUndhbmRhfGVufDF8fHx8MTc1ODYxNDgyMHww&ixlib=rb-4.1.0&q=80&w=1080",
      duration: "3 Day (2 nights)",
      price: "$385",
      category: "Nature"
    },
    {
      id: 4,
      name: "Lake Kivu Boat Ride & Fisherman Experience",
      location: "Lake Kivu",
      image: "https://images.unsplash.com/photo-1706977570024-fefa419c48c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxMYWtlJTIwS2l2dSUyMFJ3YW5kYXxlbnwxfHx8fDE3NTg2MTQ4MjR8MA&ixlib=rb-4.1.0&q=80&w=1080",
      duration: "4 Day (3 nights)",
      price: "$285",
      category: "Relaxation"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % packages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [packages.length]);

  const scrollToTours = () => {
    const element = document.getElementById('tours');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src={packages[currentIndex].image}
          alt="Rwanda landscape"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/80"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 pt-32 pb-20">
        {/* Header Content */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl lg:text-7xl mb-12 max-w-5xl mx-auto leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600">
              {t('hero.tagline')}
            </span>
          </h1>
          
          <div className="text-2xl md:text-3xl lg:text-4xl text-white mb-8 max-w-4xl mx-auto leading-relaxed">
            {t('hero.title')}
          </div>
          
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed">
            {t('hero.subtitle')}
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button 
              size="xl"
              onClick={scrollToTours}
              className="bg-primary hover:bg-primary/90 text-white px-12 py-6 text-xl"
            >
              {t('hero.explorePackages')}
              <ArrowRight className="w-6 h-6 ml-3" />
            </Button>
            <Button 
              size="xl"
              variant="ghost"
              onClick={onBookNowClick}
              className="border-2 border-white/80 text-white hover:bg-white/10 px-12 py-6 text-xl backdrop-blur-sm"
            >
              {t('header.bookNow')}
            </Button>
          </div>
        </div>

        {/* Horizontal Rotating Packages */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {packages.map((pkg, index) => (
              <div
                key={pkg.id}
                className={`relative rounded-2xl overflow-hidden shadow-2xl transition-all duration-700 cursor-pointer ${
                  index === currentIndex ? 'ring-4 ring-white/50 scale-105' : 'scale-100'
                }`}
                onClick={() => setCurrentIndex(index)}
              >
                <div className="aspect-[3/4] relative">
                  <ImageWithFallback
                    src={pkg.image}
                    alt={pkg.name}
                    className={`w-full h-full object-cover transition-all duration-700 ${
                      index === currentIndex ? 'brightness-110' : 'brightness-75'
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="text-white/90 text-sm mb-1">{pkg.duration}</div>
                    <div className="text-white text-lg mb-2 leading-snug">{pkg.name}</div>
                    <div className="flex items-center justify-between">
                      <span className="text-green-400 text-xl">{pkg.price}</span>
                      <span className="text-white/80 text-sm">per person</span>
                    </div>
                  </div>

                  {index === currentIndex && (
                    <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm">
                      Featured
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-3">
            {packages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-4 h-4 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-green-500' : 'bg-white/40'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70 animate-bounce cursor-pointer" onClick={scrollToTours}>
        <div className="text-sm mb-2">Scroll to explore</div>
        <div className="w-6 h-10 border-2 border-white/30 rounded-full mx-auto relative">
          <div className="w-1 h-3 bg-white/50 rounded-full absolute top-2 left-1/2 transform -translate-x-1/2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
