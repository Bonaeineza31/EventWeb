import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";
import { Clock, MapPin } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useLanguage } from "../contexts/LanguageContext";

interface TourCardProps {
  title: string;
  duration: string;
  location: string;
  description: string;
  highlights: string[];
  imageUrl?: string;
  images?: string[];
  price?: string;
  onLearnMore?: () => void;
  onBookNow?: () => void;
}

export function TourCard({ 
  title, 
  duration, 
  location, 
  description, 
  highlights, 
  imageUrl, 
  images,
  price,
  onLearnMore,
  onBookNow
}: TourCardProps) {
  const { t } = useLanguage();
  const imageGallery = images || (imageUrl ? [imageUrl] : []);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (imageGallery.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === imageGallery.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [imageGallery.length]);

  return (
    <Card className="overflow-hidden group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
        <CardHeader className="p-0">
          <div className="relative h-56 overflow-hidden">
            <ImageWithFallback
              src={imageGallery[currentImageIndex]}
              alt={title}
              className="w-full h-full object-cover transition-opacity duration-700"
            />
            <div className="absolute top-4 left-4">
              <Badge className="bg-primary text-white">
                {duration}
              </Badge>
            </div>
            {price && (
              <div className="absolute top-4 right-4">
                <Badge variant="secondary" className="bg-white text-primary">
                  {price}
                </Badge>
              </div>
            )}
            {imageGallery.length > 1 && (
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-1.5">
                {imageGallery.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentImageIndex 
                        ? 'bg-white w-6' 
                        : 'bg-white/50 hover:bg-white/75'
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
        </CardHeader>
        
        <CardContent className="p-6">
          <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
            <MapPin className="w-4 h-4" />
            <span>{location}</span>
            <Clock className="w-4 h-4 ml-2" />
            <span>{duration}</span>
          </div>
          
          <h3 className="text-xl mb-3 text-gray-800">{title}</h3>
          <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>
          
          <div className="space-y-2">
            <h4 className="text-sm text-gray-800">Highlights:</h4>
            <ul className="space-y-1">
              {highlights.slice(0, 3).map((highlight, index) => (
                <li key={index} className="text-sm text-gray-600 flex items-center">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
        </CardContent>
        
        <CardFooter className="p-6 pt-0">
          <div className="flex gap-3 w-full">
            <Button 
              variant="outline"
              className="flex-1 border-primary text-primary hover:bg-primary hover:text-white"
              onClick={onLearnMore}
            >
              {t('tours.learnMore')}
            </Button>
            <Button 
              className="flex-1 bg-primary hover:bg-primary/90"
              onClick={onBookNow}
            >
              {t('tours.bookNow')}
            </Button>
          </div>
        </CardFooter>
      </Card>
  );
}