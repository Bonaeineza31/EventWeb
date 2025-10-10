import { useState } from "react";
import { LanguageProvider } from "./contexts/LanguageContext";
import { UpdatedScrollingHeader } from "./components/UpdatedScrollingHeader";
import { ImprovedHero } from "./components/ImprovedHero";
import { TourTips } from "./components/TourTips";
import { Tours } from "./components/Tours";
import { NewContact } from "./components/NewContact";
import { NewFooter } from "./components/NewFooter";
import { DestinationPage } from "./components/DestinationPage";
import { BookingPackagesPage } from "./components/BookingPackagesPage";
import { UpdatedBookingFormPage } from "./components/UpdatedBookingFormPage";
import { QuickQuoteModal } from "./components/QuickQuoteModal";
import { destinationsData } from "./components/destinationData";
import { Toaster } from "./components/ui/sonner";
import { ArrowLeft } from "lucide-react";
import { Button } from "./components/ui/button";
import type { DestinationData, PackageData, ViewType, PreviousViewType } from "./types";

function AppContent() {
  const [currentView, setCurrentView] = useState<ViewType>('home');
  const [selectedDestination, setSelectedDestination] = useState<DestinationData | null>(null);
  const [selectedPackage, setSelectedPackage] = useState<PackageData | null>(null);
  const [isQuickQuoteOpen, setIsQuickQuoteOpen] = useState(false);
  const [previousView, setPreviousView] = useState<PreviousViewType>('home');

  const handleDestinationClick = (index: number) => {
    setSelectedDestination(destinationsData[index]);
    setCurrentView('destination');
  };

  const handleBookNowClick = () => {
    setCurrentView('booking-packages');
  };

  const handleQuickQuoteClick = () => {
    setIsQuickQuoteOpen(true);
  };

  const handleBookPackage = (packageData: PackageData) => {
    setSelectedPackage(packageData);
    setPreviousView('booking-packages');
    setCurrentView('booking-form');
  };

  const handleLearnMore = (index: number) => {
    setSelectedDestination(destinationsData[index]);
    setCurrentView('destination');
  };

  const handleTourLearnMore = (tourIndex: number) => {
    // Map tour index to destination index
    // Tours: Akagera(0), Volcanoes(1), Kivu(2), Nyungwe(3), Cultural(4), Kigali(5)
    // Destinations: Mountain Gorillas(0), Game Safari(1), Rainforest Canopy(2), Lake Kivu(3), City Tours(4)
    const tourToDestinationMap = [1, 0, 3, 2, 4, 4]; // Map tour indices to destination indices
    const destinationIndex = tourToDestinationMap[tourIndex];
    if (destinationIndex !== undefined && destinationsData[destinationIndex]) {
      setSelectedDestination(destinationsData[destinationIndex]);
      setCurrentView('destination');
    }
  };

  const handleBookFromDestination = (destination: DestinationData) => {
    // Convert destination to package format for booking
    const packageData: PackageData = {
      id: destination.id || 0,
      name: destination.name,
      location: destination.location,
      image: destination.gallery?.[0] || destination.image,
      duration: destination.duration,
      price: parseInt(destination.price.replace('$', '')),
      category: destination.category,
      rating: destination.rating,
      description: destination.description,
      highlights: destination.highlights,
      groupSize: destination.groupSize
    };
    setSelectedPackage(packageData);
    setPreviousView('destination');
    setCurrentView('booking-form');
  };

  const handleDirectBookFromTour = (tourData: PackageData) => {
    setSelectedPackage(tourData);
    setPreviousView('home');
    setCurrentView('booking-form');
  };

  const handleBackToHome = () => {
    setCurrentView('home');
    setSelectedDestination(null);
    setSelectedPackage(null);
  };

  const handleBackFromBookingForm = () => {
    if (previousView === 'destination' && selectedDestination) {
      setCurrentView('destination');
    } else if (previousView === 'booking-packages') {
      setCurrentView('booking-packages');
    } else {
      setCurrentView('home');
    }
    setSelectedPackage(null);
  };

  const handleBackToPackages = () => {
    setCurrentView('booking-packages');
    setSelectedPackage(null);
  };

  const handleContactExperts = () => {
    setCurrentView('contact');
  };

  const handleBackFromContact = () => {
    if (selectedDestination) {
      setCurrentView('destination');
    } else {
      setCurrentView('home');
    }
  };

  if (currentView === 'destination' && selectedDestination) {
    return (
      <>
        <DestinationPage 
          destination={selectedDestination} 
          onBack={handleBackToHome}
          onBookNow={handleBookFromDestination}
          onContactExperts={handleContactExperts}
        />
        <Toaster />
      </>
    );
  }

  if (currentView === 'contact') {
    return (
      <>
        <div className="min-h-screen bg-white">
          {/* Header */}
          <div className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
            <div className="container mx-auto px-6 py-4 flex items-center justify-between">
              <button 
                onClick={handleBackFromContact}
                className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                <span>Back</span>
              </button>
              <div className="flex items-center gap-3">
                <Button onClick={handleBookNowClick} className="bg-primary hover:bg-primary/90" size="sm">
                  Book Now
                </Button>
              </div>
            </div>
          </div>
          
          {/* Contact Content */}
          <div className="pt-8">
            <NewContact />
          </div>
          <NewFooter />
        </div>
        <Toaster />
      </>
    );
  }

  if (currentView === 'booking-packages') {
    return (
      <>
        <BookingPackagesPage
          onBack={handleBackToHome}
          onBookPackage={handleBookPackage}
          onLearnMore={handleLearnMore}
        />
        <Toaster />
      </>
    );
  }

  if (currentView === 'booking-form' && selectedPackage) {
    return (
      <>
        <UpdatedBookingFormPage
          onBack={handleBackFromBookingForm}
          packageData={selectedPackage}
        />
        <Toaster />
      </>
    );
  }

  return (
    <div className="min-h-screen">
      <UpdatedScrollingHeader onBookNowClick={handleBookNowClick} onQuickQuoteClick={handleQuickQuoteClick} />
      <ImprovedHero onBookNowClick={handleBookNowClick} />
      <Tours onBookNowClick={handleQuickQuoteClick} onDirectBookClick={handleDirectBookFromTour} onLearnMoreClick={handleTourLearnMore} />
      <TourTips />
      <NewContact />
      <NewFooter />
      <QuickQuoteModal isOpen={isQuickQuoteOpen} onClose={() => setIsQuickQuoteOpen(false)} />
      <Toaster />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}