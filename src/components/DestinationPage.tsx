import { useState } from "react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";

import { 
  Star, 
  Clock, 
  Users, 
  MapPin, 
  Camera, 
  Heart, 
  Shield, 
  Award,
  ChevronLeft,
  ChevronRight,
  ArrowLeft
} from "lucide-react";
import { DestinationData } from "./DestinationDetailModal";

interface DestinationPageProps {
  destination: DestinationData;
  onBack: () => void;
  onBookNow: (destination: any) => void;
}

export function DestinationPage({ destination, onBack, onBookNow }: DestinationPageProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);


  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === destination.gallery.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? destination.gallery.length - 1 : prev - 1
    );
  };

  const handleBooking = () => {
    onBookNow(destination);
  };

  return (
    <>
      <div className="min-h-screen bg-white">
        {/* Header */}
        <div className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
          <div className="container mx-auto px-6 py-4 flex items-center justify-between">
            <button 
              onClick={onBack}
              className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Adventures</span>
            </button>
            <div className="flex items-center gap-3">
              <Button variant="outline" size="sm">
                Share
              </Button>
              <Button onClick={handleBooking} className="bg-primary hover:bg-primary/90" size="sm">
                Book Now
              </Button>
            </div>
          </div>
        </div>

        {/* Hero Image Gallery */}
        <div className="relative h-[60vh] bg-gray-100">
          <ImageWithFallback
            src={destination.gallery[currentImageIndex]}
            alt={`${destination.name} - Image ${currentImageIndex + 1}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          
          {/* Gallery Navigation */}
          {destination.gallery.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-6 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-6 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>
              
              {/* Image Indicators */}
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {destination.gallery.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </>
          )}
          
          {/* Gallery count */}
          <div className="absolute top-6 right-6 bg-black/50 backdrop-blur-sm rounded-full px-4 py-2 text-white flex items-center gap-2">
            <Camera className="w-4 h-4" />
            <span>{currentImageIndex + 1}/{destination.gallery.length}</span>
          </div>

          {/* Title Overlay */}
          <div className="absolute bottom-8 left-6 right-6">
            <div className="flex gap-3 mb-4">
              <Badge className="bg-white/20 backdrop-blur-sm text-white border-white/30">
                {destination.category}
              </Badge>
              <div className="flex items-center space-x-1 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <span className="text-white">{destination.rating}</span>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl text-white mb-2">{destination.name}</h1>
            <p className="text-xl text-white/90">{destination.location}</p>
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-6 py-16">
          {/* Quick Info */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            <div className="text-center p-6 bg-gray-50 rounded-2xl">
              <Clock className="w-8 h-8 text-primary mx-auto mb-3" />
              <div className="text-sm text-gray-600 mb-1">Duration</div>
              <div className="text-lg">{destination.duration}</div>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-2xl">
              <Users className="w-8 h-8 text-primary mx-auto mb-3" />
              <div className="text-sm text-gray-600 mb-1">Group Size</div>
              <div className="text-lg">{destination.groupSize}</div>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-2xl">
              <Award className="w-8 h-8 text-primary mx-auto mb-3" />
              <div className="text-sm text-gray-600 mb-1">Difficulty</div>
              <div className="text-lg">{destination.difficulty}</div>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-2xl">
              <MapPin className="w-8 h-8 text-primary mx-auto mb-3" />
              <div className="text-sm text-gray-600 mb-1">Best Time</div>
              <div className="text-lg">{destination.bestTime}</div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Column - Details */}
            <div className="lg:col-span-2 space-y-12">
              {/* Description */}
              <div>
                <h2 className="text-3xl text-gray-800 mb-6">About This Experience</h2>
                <p className="text-gray-600 text-lg leading-relaxed">{destination.description}</p>
              </div>

              {/* Highlights */}
              <div>
                <h2 className="text-3xl text-gray-800 mb-6">Experience Highlights</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {destination.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-start space-x-3 p-4 bg-gray-50 rounded-xl">
                      <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                      <span className="text-gray-700">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Itinerary */}
              <div>
                <h2 className="text-3xl text-gray-800 mb-6">Detailed Itinerary</h2>
                <div className="space-y-6">
                  {destination.itinerary.map((day, index) => (
                    <Card key={index} className="border-l-4 border-l-primary shadow-md">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-4 mb-3">
                          <Badge variant="outline" className="border-primary text-primary">
                            {day.day}
                          </Badge>
                          <h3 className="text-xl text-gray-800">{day.title}</h3>
                        </div>
                        <p className="text-gray-600 leading-relaxed">{day.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* What's Included / Excluded */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl text-gray-800 mb-4 flex items-center gap-3">
                    <Shield className="w-6 h-6 text-green-600" />
                    What's Included
                  </h3>
                  <ul className="space-y-3">
                    {destination.includes.map((item, index) => (
                      <li key={index} className="flex items-start space-x-3 text-gray-600">
                        <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl text-gray-800 mb-4 flex items-center gap-3">
                    <span className="text-red-500">✕</span>
                    Not Included
                  </h3>
                  <ul className="space-y-3">
                    {destination.excludes.map((item, index) => (
                      <li key={index} className="flex items-start space-x-3 text-gray-600">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Right Column - Booking */}
            <div className="lg:col-span-1">
              <div className="sticky top-32">
                {/* Pricing Card */}
                <Card className="shadow-xl border-0 bg-gradient-to-br from-primary/5 to-green-600/5 mb-8">
                  <CardContent className="p-8">
                    <div className="text-center mb-8">
                      <div className="text-4xl text-gray-800 mb-2">{destination.price}</div>
                      <div className="text-gray-600">per person</div>
                    </div>

                    <Button 
                      onClick={handleBooking}
                      className="w-full bg-primary hover:bg-primary/90 mb-6 py-4 text-lg"
                    >
                      Book This Adventure
                    </Button>

                    <div className="text-center mb-6">
                      <div className="text-sm text-gray-600">Free cancellation up to 24 hours</div>
                    </div>

                    <div className="flex items-center justify-center space-x-6 text-sm text-gray-600">
                      <button className="flex items-center gap-2 hover:text-primary transition-colors">
                        <Heart className="w-4 h-4" />
                        <span>Save</span>
                      </button>
                    </div>
                  </CardContent>
                </Card>

                {/* Testimonial */}
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-1 mb-4">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <blockquote className="text-gray-600 mb-4 italic leading-relaxed">
                      "{destination.testimonial.text}"
                    </blockquote>
                    <div>
                      <div className="text-gray-800">{destination.testimonial.author}</div>
                      <div className="text-sm text-gray-500">{destination.testimonial.role}</div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>


    </>
  );
}
