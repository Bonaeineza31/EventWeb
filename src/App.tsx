import { useState } from "react";
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
import type { DestinationData, PackageData, ViewType, PreviousViewType } from "./types";

export default function App() {
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

  if (currentView === 'destination' && selectedDestination) {
    return (
      <>
        <DestinationPage 
          destination={selectedDestination} 
          onBack={handleBackToHome}
          onBookNow={handleBookFromDestination}
        />
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
