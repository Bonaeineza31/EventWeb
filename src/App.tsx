import { useState } from "react";
import { ScrollingHeader } from "./components/ScrollingHeader";
import { ImprovedHero } from "./components/ImprovedHero";
import { ModernDestinationShowcase } from "./components/ModernDestinationShowcase";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { Tours } from "./components/Tours";
import { NewContact } from "./components/NewContact";
import { NewFooter } from "./components/NewFooter";
import { DestinationPage } from "./components/DestinationPage";
import { BookingPackagesPage } from "./components/BookingPackagesPage";
import { BookingFormPage } from "./components/BookingFormPage";
import { destinationsData } from "./components/destinationData";
import { Toaster } from "./components/ui/sonner";

export default function App() {
  const [currentView, setCurrentView] = useState<'home' | 'destination' | 'booking-packages' | 'booking-form'>('home');
  const [selectedDestination, setSelectedDestination] = useState(null);
  const [selectedPackage, setSelectedPackage] = useState(null);

  const handleDestinationClick = (index: number) => {
    setSelectedDestination(destinationsData[index]);
    setCurrentView('destination');
  };

  const handleBookNowClick = () => {
    setCurrentView('booking-packages');
  };

  const handleBookPackage = (packageData: any) => {
    setSelectedPackage(packageData);
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

  const handleBookFromDestination = (destination: any) => {
    // Convert destination to package format for booking
    const packageData = {
      id: destination.id,
      name: destination.name,
      location: destination.location,
      image: destination.gallery[0],
      duration: destination.duration,
      price: parseInt(destination.price.replace('$', '')),
      category: destination.category,
      rating: destination.rating,
      description: destination.description,
      highlights: destination.highlights,
      groupSize: destination.groupSize
    };
    setSelectedPackage(packageData);
    setCurrentView('booking-form');
  };

  const handleBackToHome = () => {
    setCurrentView('home');
    setSelectedDestination(null);
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
        <BookingFormPage
          onBack={handleBackToPackages}
          packageData={selectedPackage}
        />
        <Toaster />
      </>
    );
  }

  return (
    <div className="min-h-screen">
      <ScrollingHeader onBookNowClick={handleBookNowClick} />
      <ImprovedHero onBookNowClick={handleBookNowClick} />
      <ModernDestinationShowcase onDestinationClick={handleDestinationClick} onBookNowClick={handleBookNowClick} />
      <WhyChooseUs />
      <Tours onBookNowClick={handleBookNowClick} onLearnMoreClick={handleTourLearnMore} />
      <NewContact />
      <NewFooter />
      <Toaster />
    </div>
  );
}